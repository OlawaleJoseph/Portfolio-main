import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

/** Turns "mystore.com", "https://www.mystore.com/products/x" etc. into "https://host/", or null if unusable. */
export function normaliseStoreUrl(input: string): URL | null {
  const raw = /^https?:\/\//i.test(input.trim()) ? input.trim() : `https://${input.trim()}`;
  try {
    const u = new URL(raw);
    if (u.username || u.password || u.port) return null;
    const host = u.hostname.toLowerCase().replace(/\.$/, "");
    // Real domains only: no IP literals, "localhost" or single-label hosts.
    if (isIP(host.replace(/^\[|\]$/g, "")) || !host.includes(".") || host.endsWith(".local")) return null;
    return new URL(`https://${host}/`);
  } catch {
    return null;
  }
}

function isPrivateIp(ip: string) {
  if (isIP(ip) === 4) {
    const [a, b] = ip.split(".").map(Number);
    return (
      a === 0 || a === 10 || a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      a >= 224
    );
  }
  const v6 = ip.toLowerCase();
  if (v6.startsWith("::ffff:")) return isPrivateIp(v6.slice(7));
  return v6 === "::" || v6 === "::1" || v6.startsWith("fc") || v6.startsWith("fd") || v6.startsWith("fe8") ||
    v6.startsWith("fe9") || v6.startsWith("fea") || v6.startsWith("feb");
}

/** Refuses hosts that resolve to private/internal addresses, so visitors can't make our server probe them. */
async function isPublicHost(host: string) {
  try {
    const addrs = await lookup(host, { all: true });
    return addrs.length > 0 && addrs.every((a) => !isPrivateIp(a.address));
  } catch {
    return false;
  }
}

function looksLikeShopify(res: Response, body: string) {
  const h = res.headers;
  return (
    h.has("x-shopid") ||
    h.has("x-shopify-stage") ||
    /shopify/i.test(h.get("powered-by") ?? "") ||
    /cdn\.shopify\.com|Shopify\.shop\s*=|myshopify\.com/.test(body)
  );
}

/**
 * true = a Shopify storefront (password-protected stores included), false = reachable but not Shopify,
 * null = couldn't reach it. Follows up to 3 redirects, re-checking each host.
 */
export async function isShopifyStore(start: URL): Promise<boolean | null> {
  let url = start;
  for (let hop = 0; hop < 4; hop++) {
    if (url.protocol !== "https:" || !(await isPublicHost(url.hostname))) return null;
    let res: Response;
    try {
      res = await fetch(url, {
        redirect: "manual",
        headers: { "User-Agent": "GrajolCheckup/1.0 (+https://grajol.com/checkup)", Accept: "text/html" },
        signal: AbortSignal.timeout(6000),
        cache: "no-store",
      });
    } catch {
      return null;
    }
    if (res.status >= 300 && res.status < 400) {
      const next = res.headers.get("location");
      if (!next) return null;
      url = new URL(next, url);
      continue;
    }
    if (url.hostname.endsWith(".myshopify.com")) return true;
    // Only the first ~200 KB: enough for the <head>, where Shopify's markers live.
    const reader = res.body?.getReader();
    let body = "";
    const decoder = new TextDecoder();
    while (reader && body.length < 200_000) {
      const { done, value } = await reader.read();
      if (done) break;
      body += decoder.decode(value, { stream: true });
    }
    await reader?.cancel().catch(() => {});
    return looksLikeShopify(res, body);
  }
  return null;
}
