import type { Site } from "@/lib/types";
import styles from "./Contact.module.css";

export function Contact({ site }: { site: Site }) {
  return (
    <>
      <p className={`eyebrow ${styles.eyebrow}`}>05 — Contact</p>
      <h2 className={styles.title}>Have a storefront or product to build?</h2>
      <p className={styles.lede}>
        Tell us what you&apos;re planning. You&apos;ll get a reply within two working days with next steps and a
        rough estimate.
      </p>
      <div className={styles.actions}>
        <a href={`mailto:${site.email}`} className={`btn ${styles.primary}`}>
          Email us
        </a>
      </div>
    </>
  );
}
