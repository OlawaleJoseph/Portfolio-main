import { Approach } from "@/components/Approach";
import { CheckupTeaser } from "@/components/Checkup";
import { Contact } from "@/components/Contact";
import { Contrast } from "@/components/Contrast";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { StructuredData } from "@/components/StructuredData";
import { Team } from "@/components/Team";
import { approach, checkupItems, contrast, services, servicesSupporting, site, stack } from "@/content/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero site={site} />

      <section id="checkup" className="band">
        <div className="container section reveal">
          <CheckupTeaser items={checkupItems} />
        </div>
      </section>

      <section id="services" className="container section reveal">
        <div className={styles.servicesHead}>
          <div className={styles.servicesIntro}>
            <p className="eyebrow">01 — Services</p>
            <h2 className="display">Four Shopify problems, fixed properly.</h2>
          </div>
          <p className={`muted ${styles.servicesNote}`}>
            We stay narrow on purpose: Shopify is all we do, so your project never pays for us to learn on the job.
          </p>
        </div>
        <Services services={services} />
        <p className={`muted ${styles.servicesSupporting}`}>{servicesSupporting}</p>
      </section>

      <section id="approach" className="band">
        <div className="container section reveal">
          <p className="eyebrow">02 — Approach</p>
          <h2 className={`display ${styles.approachTitle}`}>You talk to the engineer who&apos;s in your code.</h2>
          <Contrast rows={contrast} />
          <Approach steps={approach} />
        </div>
      </section>

      <section id="stack" className={`container section reveal ${styles.stack}`}>
        <div className={styles.stackIntro}>
          <p className="eyebrow">03 — Stack</p>
          <h2 className={`display ${styles.stackTitle}`}>Tools we use every day.</h2>
          <p className="muted">
            Mainstream, well-supported technology, so whoever maintains your store next can pick it up easily.
          </p>
        </div>
        <div className={styles.stackGroups}>
          <Stack groups={stack} />
        </div>
      </section>

      <section id="team" className="band">
        <div className="container section reveal">
          <p className="eyebrow">04 — Who you&apos;ll work with</p>
          <Team founder={site.founder} />
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={`container ${styles.contactInner}`}>
          <Contact site={site} />
        </div>
      </section>
    </>
  );
}
