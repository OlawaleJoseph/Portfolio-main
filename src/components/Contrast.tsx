import type { Contrast as Row } from "@/lib/types";
import styles from "./Contrast.module.css";

/** Side-by-side "usual agency route" vs. "how Grajol works". */
export function Contrast({ rows }: { rows: Row[] }) {
  return (
    <div className={styles.grid}>
      <div className={styles.col}>
        <h3 className={styles.head}>The usual agency route</h3>
        <ul>
          {rows.map((r) => (
            <li key={r.usual} className={styles.usual}>
              {r.usual}
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.col} ${styles.oursCol}`}>
        <h3 className={styles.head}>How Grajol works</h3>
        <ul>
          {rows.map((r) => (
            <li key={r.ours} className={styles.ours}>
              {r.ours}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
