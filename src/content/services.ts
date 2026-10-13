import type { Service, Testimonial } from "@/lib/types";

export const services: Service[] = [
  {
    title: "React & Next.js applications",
    body: "Dashboards, portals and SaaS products built on the App Router with Server Components, typed APIs and solid test coverage.",
  },
  {
    title: "Headless commerce",
    body: "High-performance storefronts with Hydrogen or Next.js on the Shopify Storefront API.",
  },
  {
    title: "Shopify themes, apps & Functions",
    body: "Online Store 2.0 themes, custom apps, checkout extensions and Functions for discounts, bundles and delivery logic.",
  },
  {
    title: "Technical leadership",
    body: "Architecture reviews, performance audits, and helping teams level up their React and Node.js practices.",
  },
];

// Add real client quotes here; the section is hidden while this is empty.
// { quote: "…", author: "Head of E-commerce", company: "OOIA" },
export const testimonials: Testimonial[] = [];
