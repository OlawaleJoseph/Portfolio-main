import type { Service, Site, StackGroup, Step } from "@/lib/types";

export const site: Site = {
  name: "Grajol",
  tagline: "Commerce and product engineering, built to stay fast.",
  description:
    "Grajol designs and builds Shopify Plus storefronts, headless commerce and React / Next.js products — owning the work from architecture to launch, and staying on after it.",
  location: "Lagos, Nigeria",
  email: "olawaleadedeko@grajol.com",
  available: true,
  glance: [
    { key: "focus", value: "Shopify Plus, headless, React / Next.js" },
    { key: "base", value: "Lagos, Nigeria · remote" },
    { key: "timezone", value: "WAT (UTC+1) — same working day as Europe" },
    { key: "experience", value: "5+ years in production" },
    { key: "engagements", value: "Projects · retainers · team extension" },
  ],
  founder: {
    name: "Olawale Adedeko",
    role: "Founder & Principal Engineer",
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com/in/olawale-adedeko" },
      { label: "GitHub", url: "https://github.com/OlawaleJoseph" },
    ],
    intro:
      "Grajol is led by a senior engineer with over five years of production experience — from banking APIs to high-traffic Shopify Plus storefronts. Every project gets that experience directly, not through layers of account management.",
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
    brands: {
      title: "Brands worked on while contracted to Latori GmbH",
      disclaimer:
        "These are Latori GmbH's clients, not Grajol's. Olawale contributed to their projects as a contracted engineer for the agency; they are listed only to show the kind of work he has delivered.",
      groups: [
        {
          label: "Shopify & headless",
          brands: [
            "Shape Republic", "BoardsAndMore", "LFDY", "Atletica", "Lamy", "Snushus", "Oh April", "BOC",
            "Ava & May", "OOIA", "Neuland", "Bodyshake", "Spermidine", "Ivy & Oak", "Overkill", "Vogue",
            "Khujo", "Vitafy", "Markenkoffer", "Wurtec",
          ],
        },
        {
          label: "Custom web",
          brands: [
            "MDM", "Mister Spex", "Sportspar", "ISM", "Hauhinco", "Allmedica", "Hashtag You", "Cramer",
            "RIAB", "Sennheiser",
          ],
        },
      ],
    },
  },
};

export const services: Service[] = [
  {
    icon: "bag",
    title: "Shopify & Shopify Plus",
    body: "Custom themes and sections, checkout extensions, Shopify Functions for discount and delivery logic, and private apps.",
  },
  {
    icon: "layers",
    title: "Headless commerce",
    body: "Hydrogen or Next.js on the Storefront API — for brands that have outgrown a theme and need full control of speed and experience.",
  },
  {
    icon: "layout",
    title: "Web applications",
    body: "React and Next.js dashboards, customer portals and SaaS products, with Node.js or Rails behind them.",
  },
  {
    icon: "chart",
    title: "Technical leadership",
    body: "Architecture reviews, Core Web Vitals and performance audits, code review and mentoring for in-house teams.",
  },
];

export const approach: Step[] = [
  { title: "Scope", body: "We turn goals into scoped, estimated tickets, so you know what ships and when before work starts." },
  { title: "Build", body: "Typed, tested code in short cycles, with a preview link for every change and reviews on every merge." },
  { title: "Ship", body: "CI pipelines, performance budgets and end-to-end tests keep launches quiet and storefronts fast." },
  { title: "Support", body: "Retainers for ongoing features, monitoring and fixes, from engineers who already know your codebase." },
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
