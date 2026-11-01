import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getFormations } from "@/lib/content";
import { programmesEn } from "@/lib/en-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programmes",
  alternates: {
    canonical: "/en/programmes",
    languages: { fr: "/programmes", en: "/en/programmes" },
  },
  description:
    "The Foundation’s programmes: maternal health and family planning, scholarships and girls’ education, women’s financial inclusion and entrepreneurship.",
};

const faqs = [
  {
    question: "How can I apply for a scholarship or a school kit?",
    answer:
      "Beneficiaries are identified with schools and families, based on their schooling and social situation. Write to us with the school and class details: the team reviews every request with our partners.",
  },
  {
    question: "Are the programmes free?",
    answer:
      "Yes. The Foundation’s activities are free for beneficiaries. Scholarships, school kits and support are funded by our partners.",
  },
  {
    question: "How can I join a savings group or a training session?",
    answer:
      "Groups are set up with communities and local partners. Contact us to find out about upcoming sessions in your neighbourhood or municipality.",
  },
  {
    question: "How can I become a partner or volunteer?",
    answer:
      "Send us a message using the contact details below, telling us how you would like to contribute. We will get back to you to discuss your involvement.",
  },
];

export default async function ProgrammesEn() {
  const formations = await getFormations();

  return (
    <>
      <PageHero
        lang="en"
        current="Programmes"
        title={
          <>
            Programmes that <em>protect and support.</em>
          </>
        }
        intro="Maternal health and family planning, girls’ education, women’s financial inclusion: three pathways to stronger families."
        image="/images/fondation/marche-3.webp"
        imageAlt="Community workers talking with market women"
      >
        <div className="cta-actions">
          <Link href="#programmes" className="btn btn-light">
            View programmes
            <Icon name="arrow-right" size={20} />
          </Link>
          <a href={`mailto:${site.email}`} className="btn btn-sky">
            Write to us
            <Icon name="mail" size={16} />
          </a>
        </div>
      </PageHero>

      <section className="section wrap two align-start">
        <div>
          <div className="st">
            <p className="kicker">Our approach</p>
            <h2>
              <span className="lt">Long-term</span>{" "}
              <span className="hd">support.</span>
            </h2>
          </div>
          <p>
            Our programmes do not stop at a single event. Beneficiaries are
            followed with health services, schools and partners so that each action
            produces lasting change.
          </p>
          <p>
            The Foundation involves families and communities at every stage:
            identifying needs, awareness, delivery and follow-up of results.
          </p>
          <Link href="#programmes" className="line-more">
            Discover the programmes
          </Link>
        </div>
        <div className="aside-box">
          <h4>Practical information</h4>
          <p>
            <strong>Who</strong>
            <br />
            Mothers, children, girls in school, women entrepreneurs.
          </p>
          <p>
            <strong>Cost</strong>
            <br />
            Free for beneficiaries.
          </p>
          <p>
            <strong>Where</strong>
            <br />
            Bangui, Bimbo and Bégoua.
          </p>
          <p>
            <strong>Contact</strong>
            <br />
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a> ·{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <a href={`mailto:${site.email}`} className="btn btn-brand">
            Send a request
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </section>

      <section className="section tint" id="programmes">
        <div className="wrap">
          <SectionHeading
            kicker="Our programmes"
            title={
              <>
                <span className="lt">{formations.length} programmes,</span>{" "}
                <span className="hd">one standard.</span>
              </>
            }
            intro="Each programme has its audience and its method. All aim at protection, dignity and family autonomy."
          />
          <div className="post-list">
            {formations.map((formation) => {
              const en = programmesEn[formation.slug];
              return (
                <article className="post-row" id={formation.slug} key={formation.id}>
                  <div className="post-media">
                    <Image
                      src={formation.image}
                      alt={en?.imageAlt ?? formation.imageAlt}
                      width={340}
                      height={340}
                      sizes="(max-width: 980px) 92vw, 46vw"
                    />
                  </div>
                  <div className="post-body">
                    <p className="kicker">{en?.kicker ?? formation.kicker}</p>
                    <h2>{en?.title ?? formation.title}</h2>
                    <p>{en?.description ?? formation.description}</p>
                    <ul className="check">
                      {(en?.program ?? formation.program).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {(en?.benefits ?? formation.benefits).length > 0 ? (
                      <p>
                        <strong>What the programme brings:</strong>{" "}
                        {(en?.benefits ?? formation.benefits).join(" · ")}.
                      </p>
                    ) : null}
                    {en?.note ?? formation.note ? (
                      <p className="note">{en?.note ?? formation.note}</p>
                    ) : null}
                    <div className="cta-actions">
                      <a href={`mailto:${site.email}`} className="btn btn-brand">
                        Write to us
                        <Icon name="arrow-right" size={16} />
                      </a>
                      <a
                        href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sky"
                      >
                        Ask a question
                        <Icon name="whatsapp" size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading
          kicker="Frequently asked questions"
          title={
            <>
              <span className="lt">You may be</span>{" "}
              <span className="hd">wondering…</span>
            </>
          }
        />
        {faqs.map((faq) => (
          <details className="faq" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <CtaBand
        eyebrow="Support a programme"
        title="A consultation, a scholarship, a women’s group."
        text="Every contribution funds a concrete action for a mother, a girl or a family. Contact us to choose what you would like to support."
        primaryLabel="Support us"
        primaryHref="/en/support"
        secondaryLabel="Our work"
        secondaryHref="/en/actions"
      />
    </>
  );
}
