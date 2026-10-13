import { clients } from "@/content/clients";
import type { Profile } from "@/lib/types";

const shopifyCount = clients.filter((c) => c.type === "shopify").length;

export const profile: Profile = {
  name: "Olawale Adedeko",
  role: "Senior Software Engineer",
  tagline:
    "5+ years shipping production software — from high-converting Shopify storefronts to scalable React and Next.js platforms. I own projects end to end: architecture, delivery and the results that follow.",
  location: "Lagos, Nigeria · Remote",
  email: "adedekojoseph@gmail.com",
  available: true,
  socials: [
    { label: "GitHub", url: "https://github.com/OlawaleJoseph" },
    { label: "GitHub (work)", url: "https://github.com/olawale-adedeko-latori" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/olawale-adedeko" },
  ],
  stats: [
    { value: "5+", label: "Years engineering" },
    { value: `${clients.length}`, label: "Brands worked with" },
    { value: `${shopifyCount}`, label: "Shopify stores" },
    { value: `${clients.length - shopifyCount}`, label: "Custom web builds" },
  ],
};
