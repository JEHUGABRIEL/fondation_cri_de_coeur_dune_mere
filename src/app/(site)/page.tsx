import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { HeroCarousel } from "@/components/HeroCarousel";
import { NewsRail } from "@/components/NewsRail";
import { ReviewDialog } from "@/components/ReviewDialog";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { formatDate, getPartners, getPosts, getTestimonials } from "@/lib/content";
import { presidentMessage, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const heroPhotos = [
  {
    src: "/images/fondation/sensibilisation-communautaire.webp",
    alt: "Séance de sensibilisation avec les habitants d’un quartier",
  },
  {
    src: "/images/fondation/kits-enfants.webp",
    alt: "Enfants tenant leurs kits scolaires",
  },
  {
    src: "/images/fondation/drepacytose-2026.webp",
    alt: "Journée mondiale de lutte contre la drépanocytose",
  },
  {
    src: "/images/fondation/kits-ecole.webp",
    alt: "Remise de tables-bancs et de kits dans une école",
  },
];

/** Staggered photo tiles, three columns, in the programmes band. */
const mosaic = [
  [
    { label: "Planification familiale", href: "/programmes#sante-planification-familiale", image: "marche-3", h: 120 },
    { label: "Éducation des filles", href: "/programmes#education-bourses-filles", image: "kits-enfants", h: 210 },
    { label: "Bourses d’études", href: "/actualites/bourses-merck-foundation", image: "kits-ambassadeur", h: 150 },
  ],
  [
    { label: "Inclusion financière", href: "/programmes#inclusion-financiere-femmes", image: "marche-2", h: 210 },
    { label: "Drépanocytose", href: "/nos-actions#drepacytose", image: "drepacytose-2026", h: 170 },
    { label: "Résilience", href: "/actualites/building-resilience-dakar", image: "forum-premieres-dames", h: 150 },
  ],
  [
    { label: "Kits scolaires", href: "/actualites/kits-scolaires-bella-airport", image: "kits-ecole", h: 120 },
    { label: "Forum national", href: "/actualites/forum-planification-familiale", image: "forum-femmes-leaders", h: 210 },
    { label: "Communautés", href: "/nos-actions", image: "marche-1", h: 150 },
  ],
];

const axes = [
  {
    icon: "heart" as const,
    tone: "t1",
    title: "Santé des mères",
    text: "Planification familiale, santé maternelle et dépistage, avec les communautés et les services de santé.",
    href: "/nos-actions#sante-meres-enfants",
  },
  {
    icon: "book" as const,
    tone: "t2",
    title: "Éducation des filles",
    text: "Des bourses d’études et des kits scolaires pour que la précarité n’interrompe pas un parcours.",
    href: "/nos-actions#education-filles",
  },
  {
    icon: "sprout" as const,
    tone: "t3",
    title: "Autonomie des femmes",
    text: "Groupements d’épargne, microcrédit et accompagnement des entreprises dirigées par des femmes.",
    href: "/nos-actions#autonomisation-femmes",
  },
  {
    icon: "shield" as const,
    tone: "t4",
    title: "Drépanocytose",
    text: "Sensibilisation, dépistage précoce et appui aux familles touchées par la maladie.",
    href: "/nos-actions#drepacytose",
  },
];

const figures = [
  { value: "40", label: "bourses d’études remises à des jeunes filles" },
  { value: "5", label: "communes touchées par la campagne de planification familiale" },
  { value: "4", label: "axes d’action pour les mères, les enfants et les femmes" },
];

export default async function HomePage() {
  const [posts, partners, testimonials] = await Promise.all([
    getPosts(),
    getPartners(),
    getTestimonials(),
  ]);

  return (
    <>
      <section className="lt-hero">
        <div className="wrap lt-hero-in">
          <div className="lt-band">
            <h1>Un cœur pour chaque mère.</h1>
          </div>
          <div className="lt-hero-below">
            <p>
              À Bangui, la Fondation Cri de Cœur d’une Mère accompagne les mères,
              les enfants et les jeunes filles : santé, éducation et autonomie
              économique, au plus près des communautés.
            </p>
            <div className="mb-actions">
              <Link href="/programmes" className="btn btn-brand">
                <Icon name="sprout" size={20} />
                Découvrir nos programmes
              </Link>
              <Link href="/soutenir" className="btn btn-soft">
                <Icon name="heart" size={20} />
                Nous soutenir
              </Link>
            </div>
            <dl className="lt-figures">
              {figures.map((figure) => (
                <div key={figure.label}>
                  <dt>{figure.value}</dt>
                  <dd>{figure.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <HeroCarousel photos={heroPhotos} />
      </section>

      <section className="section wrap">
        <h2 className="lt-title">Les dernières actualités</h2>
        <NewsRail
          posts={posts.slice(0, 5).map((post) => ({
            id: post.id,
            slug: post.slug,
            title: post.title,
            category: post.category,
            image: post.image,
            publishedAt: post.publishedAt,
            date: formatDate(post.publishedAt),
          }))}
        />
        <Link href="/actualites" className="line-more">
          Toutes les actualités
        </Link>
      </section>

      <section className="wrap">
        <div className="lt-occasions">
          <div className="lt-mosaic" aria-label="Nos actions en images">
            {mosaic.map((column, index) => (
              <div className="lt-mosaic-col" key={index}>
                {column.map((tile) => (
                  <Link href={tile.href} className="lt-tile" key={tile.label} style={{ height: tile.h }}>
                    <Image
                      src={`/images/fondation/${tile.image}.webp`}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 30vw, 160px"
                      className="cover"
                    />
                    <span>{tile.label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="lt-occasions-copy">
            <p className="lt-kicker">Pour chaque mère, pour chaque enfant</p>
            <h2>Quatre engagements, une même exigence.</h2>
            <p>
              La santé des mères, l’école des filles, le revenu des femmes et la
              lutte contre la drépanocytose : nos actions se répondent, parce
              qu’une famille tient debout quand chaque membre est protégé.
            </p>
            <Link href="/programmes" className="btn btn-brand">
              Découvrir nos programmes
            </Link>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <h2 className="lt-title">Ce que nous faisons</h2>
        <div className="lt-axes">
          {axes.map((axis) => (
            <Link href={axis.href} className="lt-axis" key={axis.title}>
              <span className={`lt-axis-art ${axis.tone}`} aria-hidden="true">
                <Icon name={axis.icon} size={56} />
              </span>
              <strong>{axis.title}</strong>
              <span>{axis.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-founder">
        <div className="wrap mb-founder-in">
          <div>
            <p className="kicker">Le mot de la présidente</p>
            <blockquote>
              « La santé d’une mère, l’école d’une fille, le revenu d’une femme :
              c’est cela, un développement qui protège. »
            </blockquote>
            <div className="mb-founder-text">
              {presidentMessage.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mb-cite">
              <strong>{site.president}</strong>
              <span>{site.presidentRole}</span>
            </p>
            <Link href="/a-propos" className="line-more">
              Découvrir la Fondation
            </Link>
          </div>
          <Image
            src="/images/fondation/presidente-sau.webp"
            alt={`${site.president}, présidente de la Fondation`}
            width={346}
            height={382}
            sizes="(max-width: 980px) 80vw, 420px"
            className="mb-founder-photo"
          />
        </div>
      </section>

      <section className="section wrap" id="temoignages">
        <div className="mb-head">
          <h2>Ils et elles en parlent.</h2>
        </div>
        <TestimonialSlider items={testimonials} />
        <div className="mb-review">
          <p>
            Vous êtes bénéficiaire, parent, partenaire ou bénévole de la Fondation ?
            Racontez-nous ce que nos actions ont changé pour vous.
          </p>
          <ReviewDialog />
        </div>
      </section>

      {partners.length > 0 ? (
        <section className="section wrap">
          <div className="mb-head">
            <h2>Ils nous accompagnent.</h2>
          </div>
          <div className="mb-partners">
            {partners.map((partner) =>
              partner.logo ? (
                <span className="mb-partner" key={partner.id} title={partner.name}>
                  <Image src={partner.logo} alt={partner.name} width={160} height={80} />
                </span>
              ) : (
                <span className="mb-partner" key={partner.id}>
                  {partner.name}
                </span>
              ),
            )}
          </div>
        </section>
      ) : null}

      <section className="mb-contact-sec" id="contact">
        <div className="wrap">
          <div className="mb-contact-top">
            <div>
              <div className="mb-head">
                <h2>Nous écrire.</h2>
              </div>
              <p>
                Une question sur nos programmes, un projet de partenariat, une envie
                de vous engager ? Nous revenons vers vous sous 48 h.
              </p>
            </div>
            <ul className="mb-contact">
              <li>
                <Icon name="phone" size={20} />
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={20} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="whatsapp" size={20} />
                <a
                  href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Écrire sur WhatsApp
                </a>
              </li>
              <li>
                <Icon name="pin" size={20} />
                <span>
                  {site.address}, {site.location}
                </span>
              </li>
            </ul>
          </div>
          <div className="mb-contact-form">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="mb-cta">
          <div>
            <h2>Une mère protégée, une fille scolarisée, une femme autonome.</h2>
            <p>Partenaire, bénévole ou donateur : votre geste compte.</p>
          </div>
          <Link href="/soutenir" className="btn btn-light">
            Nous soutenir
          </Link>
        </div>
      </section>
    </>
  );
}
