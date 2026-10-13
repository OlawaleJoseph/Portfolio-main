"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function Nav({ initials }: { initials: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header className={`${styles.nav} ${scrolled && !open ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.logo} aria-label="Home" onClick={close}>
          {initials}
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {links.slice(0, 3).map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/#contact" className="btn btn-small">
            Let&apos;s talk
          </Link>
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
      </header>

      {/* Sibling of <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <div id="mobile-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`} inert={!open}>
        <nav aria-label="Mobile">
          <ul>
            {links.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}>
                <Link href={l.href} onClick={close}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
