"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { useActionState, useEffect, useSyncExternalStore } from "react";
import { submitLead, type LeadState } from "@/app/actions";
import { site } from "@/content/site";
import styles from "./LeadForm.module.css";

const needs = [
  "Free script-tag checkup",
  "Theme rebuild",
  "App & script-tag cleanup",
  "Conversion optimisation",
  "Shopify Plus upgrade",
  "Headless or custom build",
  "Something else",
];
const timelines = ["As soon as possible", "Within a month", "In 1–3 months", "Just exploring"];
const appCounts = ["Under 10", "10–20", "20–40", "40+", "Not sure"];

const initial: LeadState = { status: "idle", message: "" };
const COOLDOWN = 24 * 60 * 60 * 1000;
const storageKey = (form: string) => `grajol-lead-${form}`;

/** Whether this browser submitted `form` successfully in the last 24h. Storage can throw (private mode). */
function sentRecently(form: string) {
  try {
    return Date.now() - (Number(localStorage.getItem(storageKey(form))) || 0) < COOLDOWN;
  } catch {
    return false;
  }
}
const noSubscribe = () => () => {};

/** Checkup or contact form. `tone="panel"` styles it for the dark contact band. */
export function LeadForm({ form, tone = "light" }: { form: "checkup" | "contact"; tone?: "light" | "panel" }) {
  const [state, action, pending] = useActionState(submitLead, initial);
  // Server snapshot is false, so SSR always renders the form; the client swaps in the notice if needed.
  const recent = useSyncExternalStore(noSubscribe, () => sentRecently(form), () => false);

  useEffect(() => {
    if (state.status !== "success") return;
    track(form === "checkup" ? "checkup_submitted" : "contact_submitted");
    try {
      localStorage.setItem(storageKey(form), String(Date.now()));
    } catch {}
  }, [state, form]);

  if (state.status === "idle" && recent) {
    return (
      <p className={`${styles.done} ${styles[tone]}`} role="status">
        We&apos;ve received your {form === "checkup" ? "checkup request" : "message"} and will reply soon. Need to add
        something? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    );
  }

  if (state.status === "success") {
    return (
      <p className={`${styles.done} ${styles[tone]}`} role="status">
        {state.message}
      </p>
    );
  }

  const id = (name: string) => `${form}-${name}`;

  return (
    <form action={action} className={`${styles.form} ${styles[tone]}`}>
      <input type="hidden" name="form" value={form} />
      <div className={styles.trap} aria-hidden="true">
        <label htmlFor={id("company_website")}>Leave this empty</label>
        <input id={id("company_website")} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.row}>
        <label htmlFor={id("name")}>Name</label>
        <input id={id("name")} name="name" required autoComplete="name" />
      </div>
      <div className={styles.row}>
        <label htmlFor={id("email")}>Email</label>
        <input id={id("email")} name="email" type="email" required autoComplete="email" />
      </div>
      <div className={`${styles.row} ${styles.wide}`}>
        <label htmlFor={id("store")}>Store URL</label>
        <input id={id("store")} name="store" required placeholder="yourstore.com" inputMode="url" />
      </div>

      {form === "contact" ? (
        <>
          <div className={styles.row}>
            <label htmlFor={id("need")}>What do you need?</label>
            <select id={id("need")} name="need" required defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {needs.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className={styles.row}>
            <label htmlFor={id("timeline")}>Timeline</label>
            <select id={id("timeline")} name="timeline" required defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {timelines.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <>
          <div className={styles.row}>
            <label htmlFor={id("plus")}>On Shopify Plus?</label>
            <select id={id("plus")} name="plus" required defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>Yes</option>
              <option>No</option>
              <option>Not sure</option>
            </select>
          </div>
          <div className={styles.row}>
            <label htmlFor={id("apps")}>Apps installed</label>
            <select id={id("apps")} name="apps" required defaultValue="">
              <option value="" disabled>
                Roughly how many?
              </option>
              {appCounts.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className={`${styles.row} ${styles.wide}`}>
        <label htmlFor={id("message")}>
          {form === "checkup" ? "Anything we should know?" : "Tell us a bit more"} <span>(optional)</span>
        </label>
        <textarea id={id("message")} name="message" rows={3} maxLength={2000} />
      </div>

      <div className={`${styles.wide} ${styles.submit}`}>
        <button type="submit" className="btn" disabled={pending}>
          {pending ? "Sending…" : form === "checkup" ? "Get my free checkup" : "Send"}
        </button>
        <p className={styles.small}>
          We only use these details to reply to you. See our <Link href="/privacy">privacy policy</Link>.
        </p>
      </div>

      {state.status === "error" && (
        <p className={`${styles.wide} ${styles.error}`} role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
