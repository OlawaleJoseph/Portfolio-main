import type { Client } from "@/lib/types";
import styles from "./Marquee.module.css";

export function Marquee({ clients }: { clients: Client[] }) {
  // Rendered twice so the -50% translate loops seamlessly.
  const items = [...clients, ...clients];
  return (
    <section className={styles.marquee} aria-label="Client list">
      <ul className={styles.track} style={{ animationDuration: `${clients.length * 4}s` }}>
        {items.map((c, i) => (
          <li key={`${c.slug}-${i}`} className={styles.item} aria-hidden={i >= clients.length}>
            {c.name}
            {c.type === "shopify" && <span className={styles.dot} title="Shopify client" />}
          </li>
        ))}
      </ul>
    </section>
  );
}
