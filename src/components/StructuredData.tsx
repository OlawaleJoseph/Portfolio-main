import { services, site } from "@/content/site";
import { siteUrl } from "@/lib/content";

const orgId = `${siteUrl}/#organization`;
const founderId = `${siteUrl}/#founder`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: site.name,
      url: siteUrl,
      logo: `${siteUrl}/brand/grajol-logo-colour.png`,
      image: `${siteUrl}/opengraph-image`,
      description: site.description,
      email: site.email,
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
      areaServed: ["US", "GB", "CA", "AU"].map((c) => ({ "@type": "Country", name: c })),
      founder: { "@id": founderId },
      knowsAbout: services.map((s) => s.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.body },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: site.founder.name,
      jobTitle: site.founder.role,
      worksFor: { "@id": orgId },
      sameAs: site.founder.socials.map((s) => s.url),
      ...(site.founder.photo && { image: `${siteUrl}${site.founder.photo}` }),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      publisher: { "@id": orgId },
    },
  ],
};

/** Schema.org description of the studio and founder for search engines. */
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
