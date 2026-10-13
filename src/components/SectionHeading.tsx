import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Rendered on the right of the heading, e.g. filter controls. */
  aside?: ReactNode;
}

export function SectionHeading({ eyebrow, title, aside }: SectionHeadingProps) {
  return (
    <div className={styles.head}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="heading">{title}</h2>
      </div>
      {aside}
    </div>
  );
}
