import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Icon } from "@/components/Icon";
import { NewsRail } from "@/components/NewsRail";
import { getPosts } from "@/lib/content";
import { postsEn } from "@/lib/en-content";
import { formatDate } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en" } },
  description:
    "The Cri de Cœur d’une Mère Foundation works in Bangui for maternal and child health, girls’ education and women’s economic empowerment.",
};

const heroPhotos = [
  {
    src: "/images/fondation/sensibilisation-communautaire.webp",
    alt: "Community awareness session in a Bangui neighbourhood",
  },
  {
    src: "/images/fondation/kits-enfants.webp",
    alt: "Children holding their school kits",
  },
  {
    src: "/images/fondation/drepacytose-2026.webp",
    alt: "World Sickle Cell Day ceremony",
  },
  {
    src: "/images/fondation/kits-ecole.webp",
    alt: "School desks and kits handed over at a school",
  },
];

const axes = [
  {
    icon: "heart" as const,
    tone: "t1",
    title: "Maternal health",
    text: "Family planning, maternal health and screening, with communities and health services.",
    href: "/en/actions#health",
  },
  {
    icon: "book" as const,
    tone: "t2",
    title: "Girls’ education",
    text: "Scholarships and school kits so that hardship never ends a girl’s education.",
    href: "/en/actions#education",
  },
  {
    icon: "sprout" as const,
    tone: "t3",
    title: "Women’s autonomy",
    text: "Savings groups, microcredit and support for women-led businesses.",
    href: "/en/actions#inclusion",
  },
  {
    icon: "shield" as const,
    tone: "t4",
    title: "Sickle cell disease",
    text: "Awareness, early screening and support for affected families.",
    href: "/en/actions#sickle-cell",
  },
];

const figures = [
  { value: "40", label: "scholarships awarded to young girls" },
  { value: "5", label: "municipalities reached by the family planning campaign" },
  { value: "4", label: "areas of action for mothers, children and women" },
];

export default async function HomeEn() {
  const posts = await getPosts();

  return (
    <>
      <section className="lt-hero">
        <div className="wrap lt-hero-in">
          <div className="lt-band">
            <h1>A heart for every mother.</h1>
          </div>
          <div className="lt-hero-below">
            <p>
              In Bangui, the Cri de Cœur d’une Mère Foundation supports mothers,
              children and young women through health, education and economic
              autonomy, close to the communities.
            </p>
            <div className="mb-actions">
              <Link href="/en/programmes" className="btn btn-brand">
                <Icon name="sprout" size={20} />
                Discover our programmes
              </Link>
              <Link href="/en/support" className="btn btn-soft">
                <Icon name="heart" size={20} />
                Support us
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
        <HeroCarousel photos={heroPhotos} lang="en" />
      </section>

      <section className="section wrap">
        <h2 className="lt-title">Latest news</h2>
        <NewsRail
          lang="en"
          posts={posts.slice(0, 5).map((post) => ({
            id: post.id,
            slug: post.slug,
            title: postsEn[post.slug]?.title ?? post.title,
            category: postsEn[post.slug]?.category ?? post.category,
            image: post.image,
            publishedAt: post.publishedAt,
            date: formatDate(post.publishedAt, "en"),
          }))}
        />
        <Link href="/en/news" className="line-more">
          All news
        </Link>
      </section>

      <section className="section wrap">
        <h2 className="lt-title">What we do</h2>
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
            <p className="kicker">Message from the president</p>
            <blockquote>
              « The health of a mother, the schooling of a girl, the income of a
              woman: that is development that protects. »
            </blockquote>
            <div className="mb-founder-text">
              <p>
                The Cri de Cœur d’une Mère Foundation was born from a simple
                conviction: no mother should face alone the difficulties affecting
                her health, her children and her family’s future.
              </p>
              <p>
                Our work is delivered on the ground with the Ministry of Health,
                communities and partners: family planning, sickle cell disease,
                girls’ schooling, scholarships and women’s financial inclusion.
              </p>
              <p>
                Every action is prepared with the people who live it. Thank you to
                the teams, families and partners who give this foundation its
                strength.
              </p>
            </div>
            <p className="mb-cite">
              <strong>Brigitte Touadéra</strong>
              <span>First Lady of the Central African Republic, president of the Foundation</span>
            </p>
            <Link href="/en/about" className="line-more">
              About the Foundation
            </Link>
          </div>
          <Image
            src="/images/fondation/presidente-sau.webp"
            alt="Brigitte Touadéra, president of the Foundation"
            width={346}
            height={382}
            sizes="(max-width: 980px) 80vw, 420px"
            className="mb-founder-photo"
          />
        </div>
      </section>

      <CtaBand
        eyebrow="Act with us"
        title="A protected mother, a girl in school, an independent woman."
        text="Partner, volunteer or donor: your contribution matters."
        primaryLabel="Support us"
        primaryHref="/en/support"
        secondaryLabel="Contact us"
        secondaryHref="/en/support#contact"
      />
    </>
  );
}
