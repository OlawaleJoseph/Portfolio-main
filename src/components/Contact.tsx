import type { Site } from "@/lib/types";
import { LeadForm } from "./LeadForm";
import { TrackedLink } from "./TrackedLink";
import styles from "./Contact.module.css";

export function Contact({ site }: { site: Site }) {
  return (
    <>
      <p className={`eyebrow ${styles.eyebrow}`}>05 — Contact</p>
      <h2 className={styles.title}>Tell us about your store.</h2>
      <p className={styles.lede}>
        A few details is enough. You&apos;ll hear back {site.replyTime} from the engineer who&apos;d do the work, with
        next steps and a rough estimate.
      </p>

      <LeadForm form="contact" tone="panel" />

      <div className={styles.actions}>
        {site.bookingUrl && (
          <TrackedLink
            event="booking_clicked"
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.ghost}`}
          >
            Or book a call
          </TrackedLink>
        )}
        <p className={styles.emailLine}>
          Prefer email? Write to{" "}
          <TrackedLink event="email_clicked" href={`mailto:${site.email}`} className={styles.email}>
            {site.email}
          </TrackedLink>
        </p>
      </div>
    </>
  );
}
