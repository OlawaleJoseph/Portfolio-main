import Link from "next/link";
import type { Site } from "@/lib/types";
import { Headlines } from "./Headlines";
import { SectionLink } from "./SectionLink";
import { TrackedLink } from "./TrackedLink";
import styles from "./Hero.module.css";

export function Hero({ site }: { site: Site }) {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.copy}>
        <p className={styles.kicker}>
          <span className={styles.dot} aria-hidden="true" />
          {site.kicker}
        </p>
        <Headlines headlines={site.headlines} />
        <p className={styles.lede}>{site.description}</p>
        <div className={styles.actions}>
          <Link href="/checkup" className="btn">
            Get my free script-tag checkup
          </Link>
          {site.bookingUrl ? (
            <TrackedLink
              event="booking_clicked"
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Book a call
            </TrackedLink>
          ) : (
            <SectionLink href="#contact" className="btn btn-ghost">
              Book a call
            </SectionLink>
          )}
        </div>
        <p className={styles.note}>{site.cutoffNote}</p>
      </div>

      <aside className={styles.card} aria-label="Studio at a glance">
        <div className={styles.cardHead}>
          <span>studio.config</span>
          {site.available && <span className={styles.status}>● available</span>}
        </div>
        <dl className={styles.glance}>
          {site.glance.map((row) => (
            <div key={row.key} className={styles.row}>
              <dt>{row.key}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
