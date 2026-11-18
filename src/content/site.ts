import type { Contrast, Service, Site, StackGroup, Step } from "@/lib/types";

export const site: Site = {
  name: "Grajol",
  headlines: [
    "Your Shopify theme is costing you more than it should. We'll show you where.",
    "Some of your Shopify apps may stop loading on March 1, 2027. Find out which.",
  ],
  description:
    "We read your store's code before we quote a thing, and the engineer who finds the problem is the one who fixes it. No account managers, no hand-offs.",
  cutoffNote:
    "Shopify stops loading storefront script tags on March 1, 2027. Apps that still rely on them will quietly stop working.",
  kicker: "Shopify engineering studio · For brands in the US, UK, Canada & Australia",
  // Add your Cal.com (or similar) link here to make "Book a call" open a calendar.
  bookingUrl: undefined,
  replyTime: "the same working day",
  location: "Lagos, Nigeria",
  email: "olawaleadedeko@grajol.com",
  available: true,
  glance: [
    { key: "focus", value: "Shopify themes, apps, CRO & Plus" },
    { key: "base", value: "Lagos, Nigeria · remote" },
    { key: "hours", value: "WAT (UTC+1) · overlaps US mornings and the full UK day" },
    { key: "experience", value: "5+ years in production" },
    { key: "replies", value: "Same working day" },
  ],
  founder: {
    name: "Olawale Adedeko",
    role: "Founder & Principal Engineer",
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com/in/olawale-adedeko" },
      { label: "GitHub", url: "https://github.com/OlawaleJoseph" },
    ],
    intro:
      "Grajol is led by a senior engineer with over five years of production experience, from banking APIs to high-traffic Shopify Plus storefronts. You work with that engineer directly, not through layers of account management.",
    roles: [
      {
        period: "2022 — present",
        title: "Fullstack Web Developer, Latori GmbH",
        note: "(contract)",
        body: "Shopify Plus storefronts, headless React / Next.js builds and storefront performance at a German commerce agency.",
      },
      {
        period: "2021 — 2022",
        title: "Software Developer, Ecomexperts",
        body: "Shopify performance optimisation, custom theme sections and landing pages.",
      },
      {
        period: "2020",
        title: "Mentor, Microverse",
        body: "Code reviews and coaching on Git, pair programming and TDD.",
      },
      {
        period: "2018 — 2020",
        title: "Software Developer, Calmerc Global ITech",
        body: "REST APIs and production support for a banking application.",
      },
    ],
  },
};

export const services: Service[] = [
  {
    icon: "layout",
    title: "Theme rebuilds",
    body: "Slow, patched-together themes rebuilt on Online Store 2.0: clean sections your team can edit, and pages that load fast on a phone.",
  },
  {
    icon: "layers",
    title: "App & script-tag cleanup",
    body: "We find the apps and leftover scripts weighing your store down, move what you keep onto app embeds before March 1, 2027, and remove the rest.",
  },
  {
    icon: "chart",
    title: "Conversion optimisation",
    body: "Product, collection and cart pages fixed where shoppers actually drop off, with speed and Core Web Vitals treated as part of conversion.",
  },
  {
    icon: "bag",
    title: "Shopify Plus upgrades",
    body: "Checkout extensibility, Shopify Functions for discount and delivery logic, and B2B or multi-market setup, whether you're moving to Plus or already on it.",
  },
];

/** Shown under the service cards. */
export const servicesSupporting =
  "Outgrown a theme? We also build headless storefronts on Hydrogen or Next.js, and React apps for what Shopify can't do.";

/** What the free script-tag checkup covers. */
export const checkupItems: string[] = [
  "Every script tag your storefront loads, and which app put it there",
  "Which of those apps already offer an app-embed replacement, and which don't",
  "Leftover code from apps you've already uninstalled",
  "What each script costs in load time on mobile",
  "Tracking that should move to web pixels before the cutoff",
];

export const contrast: Contrast[] = [
  { usual: "Your first call is with a salesperson", ours: "Your first call is with the engineer who'll do the work" },
  { usual: "A quote written before anyone opens your theme", ours: "We read your code before we quote" },
  { usual: "Your brief is handed to a developer you never meet", ours: "The person who finds the problem fixes it" },
  { usual: "Updates relayed through an account manager", ours: "Questions answered directly, the same working day" },
];

export const approach: Step[] = [
  { title: "Read", body: "We go through your theme, apps and scripts first, so the quote is based on your actual code." },
  { title: "Scope", body: "Findings become scoped, estimated tickets, so you know what ships and when before work starts." },
  { title: "Fix", body: "Changes ship in short cycles on a preview theme, checked for speed before anything goes live." },
  { title: "Support", body: "Retainers for ongoing features and fixes, from the engineer who already knows your store." },
];

export const stack: StackGroup[] = [
  {
    label: "Commerce",
    items: ["Shopify Plus", "Liquid", "Storefront API", "Hydrogen", "Shopify Functions", "Checkout extensions"],
  },
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js"] },
  { label: "Backend & data", items: ["Node.js", "Ruby on Rails", "GraphQL", "REST", "PostgreSQL", "Prisma"] },
  {
    label: "Quality & delivery",
    items: ["Jest", "RSpec", "Playwright", "GitHub Actions", "Docker", "Vercel", "AWS"],
  },
];
