import type { Service } from "@/lib/types";
import styles from "./Services.module.css";

export function Services({ services }: { services: Service[] }) {
  return (
    <ol className={styles.grid}>
      {services.map((s, i) => (
        <li key={s.title} className={styles.service}>
          <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className={styles.title}>{s.title}</h3>
          <p className={styles.body}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
