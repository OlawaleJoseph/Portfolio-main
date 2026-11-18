/**
 * Sliding-window limiter kept in memory. Best effort: each serverless instance has its own copy and
 * it resets on cold starts, so it stops casual repeat submissions, not a determined attacker.
 * For a hard limit, back this with a shared store (e.g. Upstash Redis) or a Vercel Firewall rule.
 */
const hits = new Map<string, number[]>();

export function allow(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  // Keep memory bounded.
  if (hits.size > 5000) for (const k of hits.keys()) { hits.delete(k); if (hits.size <= 4000) break; }
  return true;
}

/** Whether `key` was remembered within `windowMs`, without recording anything. */
export function seenWithin(key: string, windowMs: number) {
  const last = hits.get(key)?.at(-1);
  return last !== undefined && Date.now() - last < windowMs;
}

export function remember(key: string) {
  hits.set(key, [...(hits.get(key) ?? []), Date.now()]);
}
