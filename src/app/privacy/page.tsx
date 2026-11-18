import type { Metadata } from "next";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} handles the details you send through this website.`,
  alternates: { canonical: "/privacy" },
};

// Review before publishing: this reflects how the site is built today (Vercel hosting, Vercel Web
// Analytics, forms sent to a webhook). Update it if any of that changes.
const updated = "17 November 2026";

export default function PrivacyPage() {
  return (
    <article className={`container section ${styles.prose}`}>
      <p className="eyebrow">Legal</p>
      <h1 className="display">Privacy policy</h1>
      <p className="muted">Last updated {updated}</p>

      <h2>Who we are</h2>
      <p>
        {site.name} is a Shopify engineering studio based in {site.location}. We are responsible for the personal
        data described here. Contact us about privacy at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Details you send us.</strong> When you use the checkup or contact form, or email us, we receive your
          name, email address, store URL and anything else you choose to tell us.
        </li>
        <li>
          <strong>Your public storefront.</strong> For a checkup we look at the publicly visible code of the store URL
          you give us. We don&apos;t ask for admin access.
        </li>
        <li>
          <strong>Anonymous usage statistics.</strong> We use Vercel Web Analytics to count page views and a few
          actions, such as form submissions and clicks on our email link. It doesn&apos;t use cookies and doesn&apos;t
          identify you personally.
        </li>
      </ul>

      <h2>How we use it</h2>
      <p>
        Only to reply to you, prepare the checkup or quote you asked for, and work with you if you become a client.
        We rely on your request (and our legitimate interest in answering it) as the legal basis. We don&apos;t sell
        your data, add you to marketing lists without asking, or use it to train AI models.
      </p>

      <h2>Who else handles it</h2>
      <p>
        The site is hosted by Vercel, and form submissions pass through the service we use to deliver them to our
        inbox. These providers process data only on our behalf. Some may store it outside your country, including in
        the United States.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiries that don&apos;t become projects are deleted within 12 months. Client records are kept for as long
        as the law requires for contracts and accounting.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (for example under the UK GDPR, the EU GDPR, Nigeria&apos;s Data Protection Act or
        US state privacy laws), you can ask us to access, correct, delete or stop using your data. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll respond within 30 days. You can also complain
        to your local data protection authority.
      </p>
    </article>
  );
}
