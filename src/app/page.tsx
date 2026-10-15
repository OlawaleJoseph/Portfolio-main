import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { Team } from "@/components/Team";
import { approach, services, site, stack } from "@/content/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero site={site} />

      <section id="services" className="band">
        <div className="container section reveal">
          <div className={styles.servicesHead}>
            <div className={styles.servicesIntro}>
              <p className="eyebrow">01 — Services</p>
              <h2 className="display">Four things, done properly.</h2>
            </div>
            <p className={`muted ${styles.servicesNote}`}>
              We stay narrow on purpose: a small set of platforms we know deeply, so your project never pays for us
              to learn on the job.
            </p>
          </div>
          <Services services={services} />
        </div>
      </section>

      <section id="approach" className="container section reveal">
        <p className="eyebrow">02 — Approach</p>
        <h2 className={`display ${styles.approachTitle}`}>
          One accountable team, from the first ticket to the last deploy.
        </h2>
        <Approach steps={approach} />
      </section>

      <section id="stack" className="band">
        <div className={`container section reveal ${styles.stack}`}>
          <div className={styles.stackIntro}>
            <p className="eyebrow">03 — Stack</p>
            <h2 className={`display ${styles.stackTitle}`}>Tools we use every day.</h2>
            <p className="muted">
              Mainstream, well-supported technology — so whoever maintains your product next can pick it up easily.
            </p>
          </div>
          <div className={styles.stackGroups}>
            <Stack groups={stack} />
          </div>
        </div>
      </section>

      <section id="team" className="container section reveal">
        <p className="eyebrow">04 — Team</p>
        <Team founder={site.founder} />
      </section>

      <section id="contact" className={styles.contact}>
        <div className={`container ${styles.contactInner}`}>
          <Contact site={site} />
        </div>
      </section>
    </>
  );
}
