// Canonical origin for metadata, robots.txt, sitemap and schema. Defaults to the live domain so a
// missing env var can never ship localhost or *.vercel.app URLs; only `next dev` uses localhost.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://grajol.com");
