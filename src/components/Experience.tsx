import type { Role, SkillGroup } from "@/lib/types";
import styles from "./Experience.module.css";

export function Experience({ roles, skills }: { roles: Role[]; skills: SkillGroup[] }) {
  return (
    <div className={styles.layout}>
      <ol className={styles.timeline}>
        {roles.map((r) => (
          <li key={`${r.company}-${r.period}`} className={styles.role}>
            <p className={styles.period}>
              {r.period}
              {r.location && <span> · {r.location}</span>}
            </p>
            <h3 className={styles.title}>
              {r.title} <span className={styles.company}>@ {r.company}</span>
            </h3>
            <ul className={styles.highlights}>
              {r.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <ul className={styles.stack}>
              {r.stack.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <aside className={styles.skills} aria-label="Tech stack">
        <h3 className={styles.skillsTitle}>Tech stack</h3>
        {skills.map((g) => (
          <div key={g.label} className={styles.group}>
            <p className={styles.groupLabel}>{g.label}</p>
            <ul className={styles.groupItems}>
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
}
