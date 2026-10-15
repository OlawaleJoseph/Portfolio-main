export type ServiceIcon = "bag" | "layers" | "layout" | "chart";

export interface Service {
  icon: ServiceIcon;
  title: string;
  body: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Role {
  period: string;
  title: string;
  /** Shown after the title, e.g. "(contract)". */
  note?: string;
  body: string;
}

export interface BrandGroup {
  label: string;
  brands: string[];
}

export interface Site {
  name: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  available: boolean;
  /** Key/value rows in the hero "studio.config" card. */
  glance: { key: string; value: string }[];
  founder: {
    name: string;
    role: string;
    /** Personal profiles; shown with the founder, not as company channels. */
    socials: { label: string; url: string }[];
    /** Path under /public; a placeholder renders while unset. */
    photo?: string;
    intro: string;
    roles: Role[];
    brands: { title: string; disclaimer: string; groups: BrandGroup[] };
  };
}
