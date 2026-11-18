import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/checkup`, priority: 0.9 },
    { url: `${siteUrl}/privacy`, priority: 0.2 },
  ];
}
