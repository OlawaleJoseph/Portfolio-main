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

/** One row of the "usual agency route vs. how we work" comparison. */
export interface Contrast {
  usual: string;
  ours: string;
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

export interface Site {
  name: string;
  /** Hero headlines; more than one rotates. */
  headlines: string[];
  description: string;
  /** One-line note under the hero buttons. */
  cutoffNote: string;
  /** Short line above the headline. */
  kicker: string;
  /** Calendar link (e.g. Cal.com). While unset, "Book a call" scrolls to the contact form. */
  bookingUrl?: string;
  /** Promise shown next to forms, e.g. "the same working day". */
  replyTime: string;
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
  };
}
