import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our work",
  alternates: { canonical: "/en/actions", languages: { fr: "/nos-actions", en: "/en/actions" } },
  description:
    "The Foundation’s four areas of action: maternal health and family planning, girls’ education, women’s financial inclusion and sickle cell disease.",
};

const actions = [
  {
    id: "health",
    kicker: "Health & prevention",
    title: "Maternal and child health, family planning",
    description:
      "The Foundation mobilises communities and health workers around maternal health, family planning and screening, in Bangui and neighbouring municipalities.",
    details: [
      "National Family Planning Forum in Bangui",
      "Outreach in Bangui 1, 2, 3, Bimbo and Bégoua with Champions and community health workers",
      "Advocacy and follow-up with the Ministry of Health and the WHO",
    ],
    image: "/images/fondation/marche-1.webp",
    alt: "Community health workers talking with market women",
  },
  {
    id: "education",
    kicker: "Scholarships & school kits",
    title: "Girls’ education and schooling",
    description:
      "Scholarships and school kits are given to girls from vulnerable families, so that hardship does not interrupt their education.",
    details: [
      "40 scholarships with the Merck Foundation",
      "School kits and classroom desks for partner schools",
      "Support for families and follow-up of beneficiaries",
    ],
    image: "/images/fondation/kits-enfants.webp",
    alt: "Children holding their school kits",
  },
  {
    id: "inclusion",
    kicker: "Income & entrepreneurship",
    title: "Women’s empowerment and financial inclusion",
    description:
      "The Foundation supports women’s groups, village savings and loan associations and small businesses led by women.",
    details: [
      "Promoting village savings and loan associations (VSLAs)",
      "Access to microcredit and support for women-led SMEs",
      "Brigitte Touadera Initiative for the Financial Inclusion of Central African Women",
    ],
    image: "/images/fondation/marche-2.webp",
    alt: "A mother and her child at a Bangui market",
  },
  {
    id: "sickle-cell",
    kicker: "Public health",
    title: "Fighting sickle cell disease",
    description:
      "With the Sickle Cell Research and Treatment Centre, the Foundation promotes screening and early care.",
    details: [
      "World Sickle Cell Day 2026",
      "Advocacy for systematic screening of newborns",
      "Support for families and patient associations",
    ],
    image: "/images/fondation/drepacytose-2026.webp",
    alt: "World Sickle Cell Day ceremony",
  },
];

const beneficiaries = [
  {
    title: "Mothers and children",
    text: "Pregnant women, young mothers and newborns reached through awareness, screening and health services.",
  },
  {
    title: "Young girls",
    text: "Pupils from vulnerable families receiving a scholarship, school kits and follow-up.",
  },
  {
    title: "Women entrepreneurs",
    text: "Members of savings groups, SMEs and cooperatives developing income-generating activities.",
  },
  {
    title: "Communities",
    text: "Neighbourhoods, villages and local leaders mobilised for health and family protection.",
  },
];

export default function ActionsEn() {
  return (
    <>
      <PageHero
        lang="en"
        current="Our work"
        title={
          <>
            Protect, educate, <em>empower.</em>
          </>
        }
        intro="Four complementary areas of action in Bangui and neighbouring municipalities, with families, health services and partners."
        image="/images/fondation/sensibilisation-communautaire.webp"
        imageAlt="Community awareness session in a Bangui neighbourhood"
      >
        <div className="cta-actions">
          <Link href="/en/programmes" className="btn btn-light">
            See our programmes
            <Icon name="arrow-right" size={20} />
          </Link>
          <Link href="/en/support" className="btn btn-sky">
            Support us
            <Icon name="heart" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section wrap">
        <SectionHeading
          kicker="Our programmes"
          title={
            <>
              <span className="lt">Four areas,</span>{" "}
              <span className="hd">one ambition.</span>
            </>
          }
          intro="A healthy mother, a girl in school, a woman earning an income, a protected child: each action strengthens the family and the community."
        />
        <div className="post-list">
          {actions.map((action) => (
            <article className="post-row" id={action.id} key={action.id}>
              <div className="post-media">
                <Image
                  src={action.image}
                  alt={action.alt}
                  width={340}
                  height={255}
                  sizes="(max-width: 980px) 92vw, 46vw"
                />
              </div>
              <div className="post-body">
                <p className="kicker">{action.kicker}</p>
                <h2>{action.title}</h2>
                <p>{action.description}</p>
                <ul className="list-plain">
                  {action.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <Link href="/en/support" className="line-more">
                  Support this work
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHeading
            kicker="Who we work for"
            title={
              <>
                <span className="lt">Mothers, girls,</span>{" "}
                <span className="hd">communities.</span>
              </>
            }
            intro="Our actions primarily target families most in need of support to move forward."
          />
          <div className="values">
            {beneficiaries.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap two">
        <div>
          <div className="st">
            <p className="kicker">Our method</p>
            <h2>
              <span className="lt">Listen, act,</span>{" "}
              <span className="hd">follow the results.</span>
            </h2>
          </div>
          <p>
            Every action is prepared with the people concerned and with the actors
            who support them daily: health services, schools, local authorities and
            associations. We then track results to adjust our work.
          </p>
          <ul className="list-plain">
            <li>Dialogue with communities and partners</li>
            <li>Awareness and training of local relays</li>
            <li>Follow-up visits in the field</li>
            <li>Evaluation and sharing of recommendations</li>
          </ul>
          <Link href="/en/about" className="btn btn-brand">
            About our organisation
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <Image
          src="/images/fondation/marche-3.webp"
          alt="Community workers meeting market women"
          width={338}
          height={336}
          sizes="(max-width: 980px) 92vw, 46vw"
          className="rounded r-tl"
        />
      </section>

      <CtaBand
        eyebrow="Act with us"
        title="A health campaign, a scholarship, a women’s group."
        text="Institutions, companies and associations: support a specific action and follow its results in the field."
        primaryLabel="Support us"
        primaryHref="/en/support"
        secondaryLabel="Write to us"
        secondaryHref="/en/support#contact"
      />
    </>
  );
}
