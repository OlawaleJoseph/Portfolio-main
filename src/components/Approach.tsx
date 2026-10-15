import type { Step } from "@/lib/types";
import styles from "./Approach.module.css";

export function Approach({ steps }: { steps: Step[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((s, i) => (
        <li key={s.title} className={styles.step}>
          <span className={styles.num}>/{String(i + 1).padStart(2, "0")}</span>
          <h3 className={styles.title}>{s.title}</h3>
          <p className="muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
