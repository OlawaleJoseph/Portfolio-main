import type { Service, ServiceIcon } from "@/lib/types";
import styles from "./Services.module.css";

const icons: Record<ServiceIcon, React.ReactNode> = {
  bag: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  chart: (
    <>
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </>
  ),
};

export function Services({ services }: { services: Service[] }) {
  return (
    <div className={styles.grid}>
      {services.map((s) => (
        <article key={s.title} className={styles.card}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={styles.icon}
          >
            {icons[s.icon]}
          </svg>
          <h3 className={styles.title}>{s.title}</h3>
          <p className="muted">{s.body}</p>
        </article>
      ))}
    </div>
  );
}
