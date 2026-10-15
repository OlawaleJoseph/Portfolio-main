import Image from "next/image";
import styles from "./Logo.module.css";

const size = { width: 1075, height: 380 };

/**
 * Both variants render; CSS keyed on <html data-theme> shows the right one, so the SSR markup
 * matches whichever theme the inline script picks. Lazy loading means only the visible one loads.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`${styles.logo} ${className}`}>
      <Image
        src="/brand/grajol-logo-colour.png"
        alt="Grajol"
        {...size}
        fetchPriority="high"
        className={styles.light}
      />
      <Image
        src="/brand/grajol-logo-reversed.png"
        alt="Grajol"
        {...size}
        fetchPriority="high"
        className={styles.dark}
      />
    </span>
  );
}
