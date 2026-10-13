import Link from "next/link";
import type { Profile } from "@/lib/types";
import { Hero3D } from "./three/Hero3D";
import styles from "./Hero.module.css";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className={`container ${styles.hero}`}>
      <Hero3D />
      <p className={`${styles.status} ${profile.available ? "" : styles.busy}`}>
        {profile.available ? "Available for new projects" : "Currently booked"}
      </p>
      <h1 className={styles.title}>
        {profile.name}
        <br />
        <em>{profile.role}</em>
      </h1>
      <p className={styles.tagline}>{profile.tagline}</p>
      <div className={styles.cta}>
        <Link href="#work" className="btn">
          View clients
        </Link>
        <Link href="#contact" className="btn btn-ghost">
          Get in touch
        </Link>
      </div>
      <dl className={styles.stats}>
        {profile.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
