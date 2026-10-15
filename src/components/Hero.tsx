import type { Site } from "@/lib/types";
import { SectionLink } from "./SectionLink";
import styles from "./Hero.module.css";

export function Hero({ site }: { site: Site }) {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.copy}>
        <p className={styles.kicker}>
          <span className={styles.dot} aria-hidden="true" />
          Software engineering studio · Lagos, working worldwide
        </p>
        <h1 className={styles.title}>{site.tagline}</h1>
        <p className={styles.lede}>{site.description}</p>
        <div className={styles.actions}>
          <SectionLink href="#contact" className="btn">
            Book an intro call
          </SectionLink>
          <SectionLink href="#services" className="btn btn-ghost">
            See what we do
          </SectionLink>
        </div>
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
