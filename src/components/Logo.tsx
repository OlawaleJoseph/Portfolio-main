import Image from "next/image";
import styles from "./Logo.module.css";

// Display size (30px tall, see Logo.module.css). Next serves 1x/2x variants of this, not the 1075px source.
const size = { width: 85, height: 30 };

/**
 * Both variants render; CSS keyed on <html data-theme> shows the right one, so the SSR markup
 * matches whichever theme the inline script picks. Lazy loading means only the visible one loads;
 * fetchPriority keeps that one quick (the pattern the next/image docs recommend for theme images).
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
