"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { SectionLink } from "./SectionLink";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

// "/" prefix keeps these working from other pages (e.g. 404).
const links = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#stack", label: "Stack" },
  { href: "/#team", label: "Team" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  // Lock page scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <Link href="/" className={styles.home} aria-label="Grajol home" onClick={close}>
            <Logo />
          </Link>

          <nav className={styles.links} aria-label="Main">
            {links.map((l) => (
              <SectionLink key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </SectionLink>
            ))}
            <SectionLink href="/#contact" className={styles.cta} onClick={close}>
              Start a project
            </SectionLink>
            <ThemeToggle />
            <button
              type="button"
              className={styles.burger}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
              <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
            </button>
          </nav>
        </div>
      </header>

      <div id="mobile-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`} inert={!open}>
        <nav aria-label="Mobile">
          <ul>
            {[...links, { href: "/#contact", label: "Contact" }].map((l, i) => (
              <li key={l.href} style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}>
                <SectionLink href={l.href} onClick={close}>
                  {l.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
