"use client";

import { track } from "@vercel/analytics";

/** Plain <a> that records a Vercel Analytics custom event on click (bookings, email clicks). */
export function TrackedLink({
  event,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { event: string }) {
  return <a {...props} onClick={() => track(event)} />;
}
