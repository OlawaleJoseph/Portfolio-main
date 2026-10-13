import { ClientGrid } from "@/components/ClientGrid";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { SectionHeading } from "@/components/SectionHeading";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { experience, skills } from "@/content/experience";
import { profile } from "@/content/profile";
import { services, testimonials } from "@/content/services";
import { getClients } from "@/lib/content";

export default function Home() {
  const clients = getClients();

  return (
    <>
      <Hero profile={profile} />
      <Marquee clients={clients} />

      <section id="work" className="container section reveal">
        <ClientGrid clients={clients} />
      </section>

      <section id="experience" className="container section reveal">
        <SectionHeading eyebrow="5+ years" title="Experience" />
        <Experience roles={experience} skills={skills} />
      </section>

      <section id="services" className="container section reveal">
        <SectionHeading eyebrow="What I do" title="Services" />
        <Services services={services} />
      </section>

      {testimonials.length > 0 && (
        <section id="testimonials" className="container section reveal">
          <SectionHeading eyebrow="Kind words" title="What clients say" />
          <Testimonials items={testimonials} />
        </section>
      )}

      <section id="contact" className="container section reveal">
        <Contact profile={profile} />
      </section>
    </>
  );
}
