"use client";

import type { ComponentProps, MouseEvent } from "react";

/**
 * Anchor for in-page section links ("#contact", "/#work").
 * The App Router ignores navigations to the URL you're already on, so a second click on the
 * same hash wouldn't scroll. This scrolls explicitly when the target is on the current page,
 * and otherwise falls back to normal navigation (e.g. from the 404 page).
 */
export function SectionLink({ href, onClick, ...props }: ComponentProps<"a"> & { href: string }) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const [path, id] = href.split("#");
    if (!id || (path && path !== window.location.pathname)) return;
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    if (window.location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
