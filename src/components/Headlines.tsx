"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import styles from "./Hero.module.css";

const INTERVAL = 7000;
const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const reducedMotion = () => window.matchMedia(QUERY).matches;

/**
 * Rotating hero headline. All headlines share one grid cell so the height never shifts.
 * Autoplay stops for reduced-motion users, on hover/focus, and via the pause button (WCAG 2.2.2).
 */
export function Headlines({ headlines }: { headlines: string[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useSyncExternalStore(subscribe, reducedMotion, () => false);
  // null = user hasn't chosen; reduced-motion users start paused.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reduce;
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (paused || hovered || headlines.length < 2) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % headlines.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, hovered, headlines.length]);

  if (headlines.length < 2) return <h1 className={styles.title}>{headlines[0]}</h1>;

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <h1 className={`${styles.title} ${styles.slides}`}>
        {headlines.map((h, i) => (
          <span key={h} className={styles.slide} data-active={i === index} aria-hidden={i !== index}>
            {h}
          </span>
        ))}
      </h1>
      <div
        className={styles.slideControls}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {headlines.map((h, i) => (
          <button
            key={h}
            type="button"
            className={styles.slideDot}
            aria-label={`Show headline ${i + 1} of ${headlines.length}`}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
        <button type="button" className={styles.slidePause} onClick={() => setUserPaused(!paused)}>
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}
