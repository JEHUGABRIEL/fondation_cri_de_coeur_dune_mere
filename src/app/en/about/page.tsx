import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  alternates: { canonical: "/en/about", languages: { fr: "/a-propos", en: "/en/about" } },
  description:
    "Learn about the Cri de Cœur d’une Mère Foundation, its president, values and headquarters in Bangui, Central African Republic.",
};

const values = [
  {
    title: "Solidarity",
    text: "We move forward with families, communities and partners: no action is built alone, away from the field.",
  },
  {
    title: "Dignity",
    text: "Every mother, girl and child deserves to be heard and respected, whatever their background or situation.",
  },
  {
    title: "Protection",
    text: "We pay particular attention to the most vulnerable, working with health services and institutions.",
  },
  {
    title: "Autonomy",
    text: "We pass on skills and tools so that every woman can act for herself and build her own future.",
  },
];

export default function AboutEn() {
  return (
    <>
      <PageHero
        lang="en"
        current="About us"
        title={
          <>
            A heart that beats <em>for mothers and children.</em>
          </>
        }
        intro="The Cri de Cœur d’une Mère Foundation works in Bangui for maternal and child health, girls’ education and women’s economic autonomy. Protection, education, empowerment."
        image="/images/fondation/forum-femmes-leaders.webp"
        imageAlt="Forum of women leaders for peace and development"
      >
        <div className="cta-actions">
          <Link href="/en/actions" className="btn btn-light">
            Our work
            <Icon name="arrow-right" size={20} />
          </Link>
          <a href={`mailto:${site.email}`} className="btn btn-sky">
            Meet us
            <Icon name="mail" size={16} />
          </a>
        </div>
      </PageHero>

      <section className="section wrap two">
        <div>
          <div className="st">
            <p className="kicker">Who we are</p>
            <h2>
              <span className="lt">A foundation</span>{" "}
              <span className="hd">serving families.</span>
            </h2>
          </div>
          <p>
            The <strong>Cri de Cœur d’une Mère Foundation</strong> is a Central
            African non-profit based in Bangui. It works for the health of mothers
            and children, the education and schooling of girls, women’s economic
            empowerment and the fight against sickle cell disease.
          </p>
          <p>
            Its name states its commitment: listening to a mother’s cry means
            hearing the needs of an entire family. The Foundation works with
            communities, health services, schools and institutions to provide
            concrete, lasting responses.
          </p>
          <p className="lead">“A heart for every mother, a future for every child.”</p>
          <p>
            Led by <strong>Brigitte Touadéra</strong>, First Lady of the Central
            African Republic, the Foundation works with the Ministry of Health and
            Population, the WHO, the Merck Foundation, OPDAD and many field
            partners.
          </p>
        </div>
        <Image
          src="/images/fondation/kits-remise.webp"
          alt="The Foundation handing out kits to children"
          width={336}
          height={222}
          sizes="(max-width: 980px) 92vw, 46vw"
          className="rounded r-br"
        />
      </section>

      <section className="section tint" id="president">
        <div className="wrap president">
          <figure className="president-photo">
            <Image
              src="/images/fondation/presidente-sau.webp"
              alt="Brigitte Touadéra, president of the Foundation"
              width={335}
              height={336}
              sizes="(max-width: 980px) 70vw, 360px"
            />
          </figure>
          <div>
            <SectionHeading
              kicker="Message from the president"
              title={
                <>
                  <span className="lt">A conviction</span>{" "}
                  <span className="hd">that brings us together.</span>
                </>
              }
            />
            <blockquote className="president-text">
              <p>
                The Cri de Cœur d’une Mère Foundation was born from a conviction:
                no mother should face alone the difficulties affecting her health,
                her children and her family’s future.
              </p>
              <p>
                Our work is delivered on the ground with the Ministry of Health,
                communities and partners: family planning, sickle cell disease,
                girls’ schooling, scholarships and women’s financial inclusion.
              </p>
              <p>
                Every action is prepared with the people who live it. Thank you to
                the teams, families and partners who give this foundation its
                strength and credibility.
              </p>
            </blockquote>
            <p className="president-sign">
              <strong>Brigitte Touadéra</strong>
              <span>First Lady of the Central African Republic, president of the Foundation</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading
          kicker="Our values"
          title={
            <>
              <span className="lt">What drives</span>{" "}
              <span className="hd">us forward.</span>
            </>
          }
          intro="Our values shape the way we listen, support and act, in Bangui and in the municipalities where we work."
        />
        <div className="values">
          {values.map((value) => (
            <div key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHeading
            kicker="Our organisation"
            title={
              <>
                <span className="lt">A team</span>{" "}
                <span className="hd">close to the field.</span>
              </>
            }
            intro="The Foundation relies on a presidency, a coordination team and staff mobilised around each programme."
          />
          <div className="values">
            <div>
              <h3>Presidency</h3>
              <p>
                Brigitte Touadéra, First Lady of the Central African Republic,
                chairs the Foundation and carries its commitments with institutions.
              </p>
            </div>
            <div>
              <h3>Coordination</h3>
              <p>
                Programmes are run day to day by a coordination team working with
                technical services and partners.
              </p>
            </div>
            <div>
              <h3>Partners</h3>
              <p>
                Ministries, international organisations, associations and
                communities each bring expertise and local knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="find-us">
        <div className="two align-start">
          <div>
            <SectionHeading
              kicker="Find us"
              title={
                <>
                  <span className="lt">Our headquarters</span>{" "}
                  <span className="hd">in Bangui.</span>
                </>
              }
            />
            <ul className="visit-list">
              <li>
                <Icon name="pin" size={20} />
                <span>
                  Bangui
                  <br />
                  Central African Republic
                </span>
              </li>
              <li>
                <Icon name="phone" size={20} />
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={20} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="calendar" size={20} />
                <span>Visits by appointment.</span>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bangui%2C%20Central%20African%20Republic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand"
            >
              Open in Google Maps
              <Icon name="external" size={16} />
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Map of Bangui"
              src="https://www.google.com/maps?q=Bangui%2C%20Central%20African%20Republic&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Let’s write the next chapter together"
        title="An idea, a project, a wish to get involved?"
        text="Partners, institutions, associations and volunteers: the Foundation moves forward with those who believe in the strength of mothers and girls."
        primaryLabel="Support us"
        primaryHref="/en/support"
        secondaryLabel="Contact us"
        secondaryHref="/en/support#contact"
      />
    </>
  );
}
