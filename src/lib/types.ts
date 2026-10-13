export type ClientType = "shopify" | "other";

export interface Metric {
  value: string;
  label: string;
}

export interface Client {
  slug: string;
  name: string;
  type: ClientType;
  /** Headless build (e.g. Hydrogen / Next.js on the Storefront API). */
  headless?: boolean;
  industry?: string;
  country?: string;
  year?: number;
  summary?: string;
  result?: string;
  tags?: string[];
  /** Live site; makes the card a link. */
  url?: string;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  stack: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Service {
  title: string;
  body: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  available: boolean;
  socials: { label: string; url: string }[];
  stats: Metric[];
}
