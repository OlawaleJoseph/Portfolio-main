import type { Metadata } from "next";
import { CheckupList } from "@/components/Checkup";
import { LeadForm } from "@/components/LeadForm";
import { checkupItems, site } from "@/content/site";
import styles from "./page.module.css";

const description =
  "Shopify stops loading storefront script tags on March 1, 2027. Send us your store URL and get a free written report on what will break and how to fix it.";

export const metadata: Metadata = {
  title: "Free Shopify script-tag checkup",
  description,
  alternates: { canonical: "/checkup" },
  openGraph: { title: "Free Shopify script-tag checkup", description, url: "/checkup" },
};

export default function CheckupPage() {
  return (
    <section className={`container section ${styles.page}`}>
      <div className={styles.intro}>
        <p className="eyebrow">Free script-tag checkup</p>
        <h1 className={`display ${styles.title}`}>Find out which of your Shopify apps stop working on March 1, 2027.</h1>
        <p className={styles.lede}>
          On that date Shopify stops loading storefront script tags. Reviews, chat, upsells or tracking that still rely
          on them will quietly disappear from your store. Tell us where your store is and we&apos;ll send a short
          written report. It&apos;s free, and there&apos;s no call unless you want one.
        </p>
        <h2 className={styles.checksTitle}>What we check</h2>
        <CheckupList items={checkupItems} />
        <p className={`muted ${styles.small}`}>
          We only need your public store URL, not admin access. You&apos;ll hear from us {site.replyTime}.
        </p>
      </div>

      <div className={styles.formWrap}>
        <LeadForm form="checkup" />
      </div>
    </section>
  );
}
