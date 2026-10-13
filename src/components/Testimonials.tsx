import type { Testimonial } from "@/lib/types";
import styles from "./Testimonials.module.css";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className={styles.grid}>
      {items.map((t) => (
        <figure key={t.company} className={styles.quote}>
          <blockquote>“{t.quote}”</blockquote>
          <figcaption>
            <strong>{t.author}</strong>, {t.company}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
