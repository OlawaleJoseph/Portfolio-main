"use server";

import { headers } from "next/headers";
import { site } from "@/content/site";
import { allow, remember, seenWithin } from "@/lib/rate-limit";
import { isShopifyStore, normaliseStoreUrl } from "@/lib/shopify";

const HOUR = 60 * 60 * 1000;

export type LeadState = { status: "idle" | "success" | "error"; message: string };

const MAX = 2000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim().slice(0, MAX);
}

/**
 * Handles the checkup and contact forms. Submissions are POSTed as JSON to LEAD_WEBHOOK_URL,
 * which can be a Formspree form, an n8n / Zapier / Make webhook, or any endpoint that emails you.
 */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "company_website")) return { status: "success", message: "Thanks, we'll be in touch." };

  const lead = {
    form: field(formData, "form") === "checkup" ? "checkup" : "contact",
    name: field(formData, "name"),
    email: field(formData, "email"),
    store: field(formData, "store"),
    need: field(formData, "need"),
    timeline: field(formData, "timeline"),
    plus: field(formData, "plus"),
    apps: field(formData, "apps"),
    message: field(formData, "message"),
    submittedAt: new Date().toISOString(),
  };

  if (!lead.name || !EMAIL.test(lead.email) || !lead.store) {
    return { status: "error", message: "Please add your name, a valid email and your store URL." };
  }

  const store = normaliseStoreUrl(lead.store);
  if (!store) return { status: "error", message: "That doesn't look like a store URL. Try something like yourstore.com." };
  lead.store = store.hostname;

  // Per visitor: 3 submissions an hour across both forms.
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allow(`ip:${ip}`, 3, HOUR)) {
    return { status: "error", message: `You've sent a few requests already. If something's urgent, email ${site.email}.` };
  }

  // One checkup per store (or per email) a day; recorded only once a request is actually delivered.
  const dedupeKeys = [`store:${lead.store}`, `email:${lead.email.toLowerCase()}`];
  if (lead.form === "checkup") {
    if (dedupeKeys.some((k) => seenWithin(k, 24 * HOUR))) {
      return { status: "success", message: `We already have a checkup request for ${lead.store}. You'll hear from us ${site.replyTime}.` };
    }
    const shopify = await isShopifyStore(store);
    if (shopify === false) {
      return {
        status: "error",
        message: `${lead.store} doesn't look like a Shopify store. The checkup covers Shopify storefronts only. For anything else, use the contact form below or email ${site.email}.`,
      };
    }
    if (shopify === null) {
      return { status: "error", message: `We couldn't reach ${lead.store}. Check the URL, or email ${site.email}.` };
    }
  }

  const fallback = `Something went wrong sending the form. Please email ${site.email} instead.`;
  const endpoint = process.env.LEAD_WEBHOOK_URL;
  if (!endpoint) {
    console.error("LEAD_WEBHOOK_URL is not set; lead not delivered:", lead);
    return { status: "error", message: fallback };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...lead, _replyto: lead.email, _subject: `New ${lead.form} request: ${lead.store}` }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Lead webhook responded ${res.status}`);
    if (lead.form === "checkup") dedupeKeys.forEach(remember);
  } catch (err) {
    console.error(err);
    return { status: "error", message: fallback };
  }

  return {
    status: "success",
    message:
      lead.form === "checkup"
        ? `Thanks, ${lead.name}. We'll confirm ${site.replyTime} and send your checkup to ${lead.email}.`
        : `Thanks, ${lead.name}. You'll hear back ${site.replyTime} at ${lead.email}.`,
  };
}
