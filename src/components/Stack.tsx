import type { StackGroup } from "@/lib/types";
import styles from "./Stack.module.css";

export function Stack({ groups }: { groups: StackGroup[] }) {
  return (
    <div className={styles.grid}>
      {groups.map((g) => (
        <div key={g.label}>
          <h3 className={styles.label}>{g.label}</h3>
          <p>{g.items.join(" · ")}</p>
        </div>
      ))}
    </div>
  );
}
