import Image from "next/image";
import type { Site } from "@/lib/types";
import styles from "./Team.module.css";

export function Team({ founder }: { founder: Site["founder"] }) {
  const { brands } = founder;

  return (
    <div className={styles.team}>
      <div className={styles.profile}>
        <div className={styles.photo}>
          {founder.photo ? (
            <Image src={founder.photo} alt={founder.name} fill sizes="(max-width: 720px) 100vw, 360px" />
          ) : (
            <span aria-hidden="true">
              {founder.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
          )}
        </div>
        <div>
          <h2 className={styles.name}>{founder.name}</h2>
          <p className="muted">{founder.role}</p>
          <ul className={styles.socials}>
            {founder.socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.intro}>{founder.intro}</p>

        <h3 className={styles.label}>Founder&apos;s background</h3>
        <ul>
          {founder.roles.map((r) => (
            <li key={r.title} className={styles.role}>
              <span className={styles.period}>{r.period}</span>
              <span className={styles.detail}>
                <strong>{r.title}</strong>
                {r.note && ` ${r.note}`}
                <br />
                <span className="muted">{r.body}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.brands}>
          <h3 className={styles.brandsTitle}>{brands.title}</h3>
          <p className={`muted ${styles.disclaimer}`}>{brands.disclaimer}</p>
          {brands.groups.map((g) => (
            <div key={g.label} className={styles.group}>
              <p className={styles.groupLabel}>{g.label}</p>
              <p className={styles.list}>{g.brands.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
