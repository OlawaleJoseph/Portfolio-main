import type { Profile } from "@/lib/types";
import styles from "./Contact.module.css";

export function Contact({ profile }: { profile: Profile }) {
  return (
    <div className={styles.contact}>
      <p className="eyebrow">Have a project or role in mind?</p>
      <h2 className={`heading ${styles.title}`}>
        Let&apos;s build something <em>great</em>.
      </h2>
      <a className={styles.email} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <ul className={styles.socials}>
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
