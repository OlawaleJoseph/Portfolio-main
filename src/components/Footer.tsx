import { profile } from "@/content/profile";
import styles from "./Footer.module.css";

// Resolved at build time; the site is fully static.
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  return (
    <footer className={`container ${styles.footer}`}>
      <span>
        © {year} {profile.name}
      </span>
      <span>Built with Next.js · {profile.location}</span>
    </footer>
  );
}
