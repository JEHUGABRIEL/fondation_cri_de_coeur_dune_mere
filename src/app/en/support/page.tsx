import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support us",
  alternates: { canonical: "/en/support", languages: { fr: "/soutenir", en: "/en/support" } },
  description:
    "Support the Cri de Cœur d’une Mère Foundation: maternal health, scholarships for girls, women’s financial inclusion, philanthropy and partnerships in Bangui.",
};

const impact = [
  {
    title: "A mother, her health",
    text: "Awareness, screening and support for mothers and newborns with health services.",
    icon: "heart" as const,
  },
  {
    title: "A girl, a scholarship",
    text: "Scholarships, school kits and desks so that hardship never ends an education.",
    icon: "book" as const,
  },
  {
    title: "A woman, an income",
    text: "Savings groups, microcredit and support for small businesses led by women.",
    icon: "sprout" as const,
  },
];

const contactLink = `https://wa.me/${site.phoneHref.replace("+", "")}?text=${encodeURIComponent(
  "Hello Cri de Cœur d’une Mère Foundation, I would like to support your work. Could you tell me how?",
)}`;

export default function SupportEn() {
  return (
    <>
      <PageHero
        lang="en"
        current="Support us"
        title={
          <>
            Your support changes <em>lives.</em>
          </>
        }
        intro="A consultation, a scholarship, a savings group: every contribution helps a mother protect her family or a girl stay in school."
        image="/images/fondation/kits-ambassadeur.webp"
        imageAlt="School bags handed over with the Chinese ambassador"
      >
        <div className="cta-actions">
          <Link href="#donate" className="btn btn-light">
            Donate
            <Icon name="heart" size={20} />
          </Link>
          <Link href="#partnership" className="btn btn-sky">
            Become a partner
            <Icon name="briefcase" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section wrap two align-start" id="donate">
        <div className="aside-box brand">
          <p className="f-kick">Donate</p>
          <h4>A simple gesture, a direct impact.</h4>
          <p>
            To make a donation, contact the team: we will explain how to give and
            keep you informed of how your contribution is used.
          </p>
          <a href={contactLink} target="_blank" rel="noopener noreferrer" className="btn">
            Donate
            <Icon name="whatsapp" size={20} />
          </a>
        </div>

        <div>
          <SectionHeading
            kicker="What your support makes possible"
            title={
              <>
                <span className="lt">Concrete results,</span>{" "}
                <span className="hd">close to real needs.</span>
              </>
            }
          />
          <ul className="list-plain">
            <li>
              <strong>Fund a campaign</strong> — health awareness, family planning,
              sickle cell screening.
            </li>
            <li>
              <strong>Offer a scholarship</strong> — tuition, school kits and
              follow-up for a girl from a vulnerable family.
            </li>
            <li>
              <strong>Support a savings group</strong> — savings, training and
              support for women entrepreneurs.
            </li>
            <li>
              <strong>Become a partner</strong> — philanthropy, expertise, equipment
              or co-design of a programme.
            </li>
          </ul>
          <a href={`mailto:${site.email}`} className="btn btn-brand">
            Write to the team
            <Icon name="mail" size={20} />
          </a>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHeading
            kicker="Your impact"
            title={
              <>
                <span className="lt">What we build</span>{" "}
                <span className="hd">together.</span>
              </>
            }
            intro="Our actions are monitored and evaluated. We keep you informed of what your support has made possible."
          />
          <div className="icon-row">
            {impact.map((item) => (
              <article key={item.title}>
                <div className="irow-head">
                  <span className="icircle">
                    <Icon name={item.icon} size={28} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap two align-start" id="partnership">
        <div>
          <SectionHeading
            kicker="Partnership & volunteering"
            title={
              <>
                <span className="lt">Let’s act</span>{" "}
                <span className="hd">together.</span>
              </>
            }
          />
          <p>
            Do you represent a company, an institution or an association, or would
            you like to give some of your time? We build partnerships suited to
            your means and to needs in the field.
          </p>
          <ul className="list-plain">
            <li>Financial or in-kind support (kits, medical and school equipment)</li>
            <li>Skills sharing and technical support</li>
            <li>Hosting workshops, campaigns and events</li>
            <li>Co-designing programmes with communities</li>
          </ul>
        </div>
        <div className="aside-box" id="contact">
          <h4>Would you like to build a project with us?</h4>
          <p>
            Write to <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>. We will be glad to
            answer.
          </p>
          <p>
            <Icon name="pin" size={16} /> {site.address}, Central African Republic
          </p>
          <a href={`mailto:${site.email}`} className="btn btn-brand">
            Contact us
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </section>

      <CtaBand
        eyebrow="Thank you"
        title="Every gesture matters, every meeting transforms."
        text="Thank you to the families, health services, schools and partners who believe in the strength of Central African mothers and girls."
        primaryLabel="Contact us"
        primaryHref="/en/support#contact"
        secondaryLabel="Discover our work"
        secondaryHref="/en/actions"
      />
    </>
  );
}
