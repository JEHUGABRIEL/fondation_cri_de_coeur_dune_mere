import Link from "next/link";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

const actionLinks = [
  { label: "Santé des mères et planification familiale", href: "/nos-actions#sante-meres-enfants" },
  { label: "Éducation et scolarisation des filles", href: "/nos-actions#education-filles" },
  { label: "Inclusion financière des femmes", href: "/nos-actions#autonomisation-femmes" },
  { label: "Lutte contre la drépanocytose", href: "/nos-actions#drepacytose" },
  { label: "Nos programmes", href: "/programmes" },
];

const siteLinks = [
  { label: "Qui sommes-nous", href: "/a-propos" },
  { label: "Nos actions", href: "/nos-actions" },
  { label: "Actualités", href: "/actualites" },
  { label: "Nous soutenir", href: "/soutenir" },
];

export function SiteFooter() {
  return (
    <>
      <footer className="lt-foot">
        <div className="wrap lt-foot-top">
          <div className="lt-foot-brand">
            <strong>Fondation Cri de Cœur d’une Mère</strong>
            <p>{site.slogan}</p>
          </div>
          <nav className="lt-foot-col" aria-label="Nos actions">
            <h4>Nos actions</h4>
            <ul>
              {actionLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="lt-foot-col" aria-label="Le site">
            <h4>La Fondation</h4>
            <ul>
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lt-foot-col">
            <h4>Nous joindre</h4>
            <ul>
              <li>
                {site.address}, {site.location}
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              {site.phone2 ? (
                <li>
                  <a href={`tel:${site.phone2Href}`}>{site.phone2}</a>
                </li>
              ) : null}
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.orangeMoney ? <li>Orange Money : {site.orangeMoney}</li> : null}
            </ul>
          </div>
        </div>

        <div className="wrap lt-foot-mid">
          <p>
            Organisation centrafricaine à but non lucratif pour la santé des mères
            et des enfants, l’éducation des filles et l’autonomisation des femmes.
          </p>
          <div className="lt-foot-social">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook - Fondation Cri de Cœur d’une Mère"
            >
              <Icon name="facebook" size={20} />
            </a>
            <a
              href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp - Fondation Cri de Cœur d’une Mère"
            >
              <Icon name="whatsapp" size={20} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Envoyer un e-mail à la Fondation">
              <Icon name="mail" size={20} />
            </a>
          </div>
        </div>

        <div className="wrap lt-foot-bottom">
          <p>
            © {site.founded} {site.name}. Tous droits réservés.
          </p>
          <ul>
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/conditions">Conditions d’utilisation</Link>
            </li>
            <li>
              <Link href="/credits">Crédits photo</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
