import Link from "next/link";
import { Icon } from "@/components/Icon";
import { type Lang, ui } from "@/lib/i18n";
import { site } from "@/lib/site";

const links = {
  fr: {
    actions: [
      { label: "Santé des mères et planification familiale", href: "/nos-actions#sante-meres-enfants" },
      { label: "Éducation et scolarisation des filles", href: "/nos-actions#education-filles" },
      { label: "Inclusion financière des femmes", href: "/nos-actions#autonomisation-femmes" },
      { label: "Lutte contre la drépanocytose", href: "/nos-actions#drepacytose" },
      { label: "Nos programmes", href: "/programmes" },
    ],
    site: [
      { label: "Qui sommes-nous", href: "/a-propos" },
      { label: "Nos actions", href: "/nos-actions" },
      { label: "Actualités", href: "/actualites" },
      { label: "Nous soutenir", href: "/soutenir" },
    ],
    actionsTitle: "Nos actions",
    siteTitle: "La Fondation",
    contactTitle: "Nous joindre",
    about:
      "Organisation centrafricaine à but non lucratif pour la santé des mères et des enfants, l’éducation des filles et l’autonomisation des femmes.",
    rights: "Tous droits réservés.",
    legal: "Mentions légales",
    terms: "Conditions d’utilisation",
    credits: "Crédits photo",
  },
  en: {
    actions: [
      { label: "Maternal health & family planning", href: "/en/actions#health" },
      { label: "Girls’ education & scholarships", href: "/en/actions#education" },
      { label: "Women’s financial inclusion", href: "/en/actions#inclusion" },
      { label: "Sickle cell disease", href: "/en/actions#sickle-cell" },
      { label: "Our programmes", href: "/en/programmes" },
    ],
    site: [
      { label: "About us", href: "/en/about" },
      { label: "Our work", href: "/en/actions" },
      { label: "News", href: "/en/news" },
      { label: "Support us", href: "/en/support" },
    ],
    actionsTitle: "Our work",
    siteTitle: "The Foundation",
    contactTitle: "Contact",
    about:
      "A Central African non-profit working for the health of mothers and children, girls’ education and women’s empowerment.",
    rights: "All rights reserved.",
    legal: "Legal notice",
    terms: "Terms of use",
    credits: "Photo credits",
  },
} as const;

export function SiteFooter({ lang = "fr" }: { lang?: Lang }) {
  const copy = links[lang];
  return (
    <footer className="lt-foot">
      <div className="wrap lt-foot-top">
        <div className="lt-foot-brand">
          <strong>Fondation Cri de Cœur d’une Mère</strong>
          <p>
            {lang === "en"
              ? "A heart for every mother, a future for every child."
              : site.slogan}
          </p>
        </div>
        <nav className="lt-foot-col" aria-label={copy.actionsTitle}>
          <h4>{copy.actionsTitle}</h4>
          <ul>
            {copy.actions.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="lt-foot-col" aria-label={copy.siteTitle}>
          <h4>{copy.siteTitle}</h4>
          <ul>
            {copy.site.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lt-foot-col">
          <h4>{copy.contactTitle}</h4>
          <ul>
            <li>
              {site.address}, {lang === "en" ? "Central African Republic" : site.location}
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap lt-foot-mid">
        <p>{copy.about}</p>
        <div className="lt-foot-social">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Facebook — ${site.name}`}
          >
            <Icon name="facebook" size={20} />
          </a>
          <a
            href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp — ${site.name}`}
          >
            <Icon name="whatsapp" size={20} />
          </a>
          <a href={`mailto:${site.email}`} aria-label={`Email — ${site.name}`}>
            <Icon name="mail" size={20} />
          </a>
        </div>
      </div>

      <div className="wrap lt-foot-bottom">
        <p>
          © {site.founded} {site.name}. {copy.rights}
        </p>
        <ul>
          <li>
            <Link href={lang === "en" ? "/en/legal" : "/mentions-legales"}>{copy.legal}</Link>
          </li>
          <li>
            <Link href={lang === "en" ? "/en/terms" : "/conditions"}>{copy.terms}</Link>
          </li>
          <li>
            <Link href={lang === "en" ? "/en/credits" : "/credits"}>{copy.credits}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
