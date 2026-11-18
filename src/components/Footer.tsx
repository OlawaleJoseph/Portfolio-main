import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

// Resolved at build time; the site is fully static.
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  return (
    <footer className={styles.band}>
      <div className="container">
        <div className={styles.footer}>
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span className={styles.links}>
            <span>{site.location} · Working with brands in the US, UK, Canada &amp; Australia</span>
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
