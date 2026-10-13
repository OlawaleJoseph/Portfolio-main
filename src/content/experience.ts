import type { Role, SkillGroup } from "@/lib/types";

// Roles and dates from CV. Expanded bullets are worded from the CV and the client list — review before publishing.
export const experience: Role[] = [
  {
    title: "Fullstack Web Developer",
    company: "Latori",
    period: "Jul 2022 — Present",
    location: "Remote",
    highlights: [
      "Build and maintain Shopify and Shopify Plus storefronts for European DTC and enterprise brands, from custom Online Store 2.0 themes to app and ERP integrations.",
      "Develop headless commerce experiences with React and Next.js on the Shopify Storefront API, including Ava & May and Ivy & Oak.",
      "Own storefront performance work — Core Web Vitals, script budgets and image strategy — on high-traffic catalogues.",
      "Translate designs and client requirements into scoped tickets, estimate delivery, and review teammates' pull requests.",
    ],
    stack: ["Shopify Plus", "Liquid", "Next.js", "React", "TypeScript", "Node.js", "GraphQL"],
  },
  {
    title: "Software Developer",
    company: "Ecomexperts",
    period: "Mar 2021 — Jul 2022",
    location: "Remote",
    highlights: [
      "Optimised the performance of several Shopify stores, directly increasing client revenue.",
      "Built custom theme sections, landing pages and conversion features in Liquid and JavaScript to client deadlines.",
      "Worked with product managers to turn feature sets into well-scoped user stories and delivery plans.",
      "Built responsive web services within client-specified time frames.",
    ],
    stack: ["Shopify", "Liquid", "JavaScript", "React", "CSS"],
  },
  {
    title: "Mentor",
    company: "Microverse",
    period: "Jun 2020 — Oct 2020",
    location: "Remote",
    highlights: [
      "Guided students through onboarding, cutting their integration period by 50%.",
      "Raised code quality across student teams through rigorous code reviews.",
      "Coached junior developers on Git flow, pair programming and test-driven development.",
    ],
    stack: ["Code review", "Mentoring", "Git", "TDD"],
  },
  {
    title: "Software Developer",
    company: "Calmerc Global ITech Ltd",
    period: "Feb 2018 — Jun 2020",
    location: "Lagos, Nigeria",
    highlights: [
      "Designed and implemented a REST API for a banking application, delivering in half the allotted time.",
      "Improved software architecture to scale performance for a growing user base.",
      "Took part in planning and designing multiple applications within a five-person team, defining specs with clients.",
      "Ran project iterations with milestone tickets and kept the team on schedule.",
      "Diagnosed production issues, shipped fixes and led source code reviews to raise quality and customer satisfaction.",
    ],
    stack: ["Ruby on Rails", "JavaScript", "REST APIs", "SQL"],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES2023)", "HTML & CSS", "Tailwind", "Bootstrap", "Three.js"],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "Ruby on Rails", "Ruby", "REST", "GraphQL", "PostgreSQL", "Prisma"],
  },
  {
    label: "Commerce",
    items: ["Shopify Plus", "Liquid", "Storefront API", "Hydrogen", "Shopify Functions", "Checkout extensions"],
  },
  {
    label: "Quality & delivery",
    items: ["Jest", "RSpec", "Playwright", "TDD", "GitHub Actions", "Docker", "Vercel", "AWS"],
  },
  {
    label: "Engineering practice",
    items: ["System design", "Web performance", "Accessibility", "Data structures", "OOP", "Code review", "Mentoring", "Agile"],
  },
];
