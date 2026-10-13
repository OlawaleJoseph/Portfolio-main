"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { accentFor, initials } from "@/lib/content";
import type { Client } from "@/lib/types";
import { TypeBadge } from "./TypeBadge";
import styles from "./ClientCard.module.css";

// Pointer position drives a CSS 3D tilt and glare; the CSS ignores it for touch and reduced motion.
function tilt(e: PointerEvent<HTMLLIElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.setProperty("--mx", `${x * 100}%`);
  el.style.setProperty("--my", `${y * 100}%`);
  el.style.setProperty("--ry", `${(x - 0.5) * 14}deg`);
  el.style.setProperty("--rx", `${(0.5 - y) * 14}deg`);
}

function resetTilt(e: PointerEvent<HTMLLIElement>) {
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
}

export function ClientCard({ client, index }: { client: Client; index: number }) {
  const meta = [client.industry, client.country, client.year].filter(Boolean).join(" · ");

  const body = (
    <>
      <div className={styles.top}>
        <span className={styles.logo}>{initials(client.name)}</span>
        {client.url && (
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        )}
      </div>
      <h3 className={styles.name}>{client.name}</h3>
      {meta && <p className={styles.meta}>{meta}</p>}
      {client.summary && <p className={styles.summary}>{client.summary}</p>}
      {client.result && <p className={styles.result}>{client.result}</p>}
      <div className={styles.badges}>
        <TypeBadge type={client.type} />
        {client.headless && <span className="tag">Headless</span>}
        {client.tags?.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </>
  );

  let inner: ReactNode;
  if (client.url) {
    inner = (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.inner} ${styles.linked}`}
        aria-label={`${client.name} — visit site (opens in new tab)`}
      >
        {body}
      </a>
    );
  } else {
    inner = <div className={styles.inner}>{body}</div>;
  }

  return (
    <li
      className={styles.card}
      onPointerMove={tilt}
      onPointerLeave={resetTilt}
      style={{ "--card-accent": accentFor(client.slug), animationDelay: `${Math.min(index, 12) * 30}ms` } as CSSProperties}
    >
      {inner}
    </li>
  );
}
