import { clients } from "@/content/clients";
import type { Client } from "@/lib/types";

export function getClients(): Client[] {
  return clients;
}

const accents = ["#e8b4a0", "#7fb3a6", "#c79a6b", "#a7a2d6", "#6fa8ff", "#d4c27a", "#ef8a7a", "#8cc084"];

/** Stable accent colour per client, derived from the slug. */
export function accentFor(slug: string): string {
  let h = 0;
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return accents[h % accents.length];
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => /^[\p{L}\p{N}]/u.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
