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
          <span>{site.location} · Working remotely worldwide</span>
        </div>
      </div>
    </footer>
  );
}
