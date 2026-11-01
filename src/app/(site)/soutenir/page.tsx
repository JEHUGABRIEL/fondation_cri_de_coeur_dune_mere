import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nous soutenir",
  alternates: { canonical: "/soutenir", languages: { fr: "/soutenir", en: "/en/support" } },
  description:
    "Soutenez la Fondation Cri de Cœur d’une Mère : santé des mères, bourses scolaires, inclusion financière des femmes, mécénat et partenariats à Bangui.",
};

const impact = [
  {
    title: "Une mère, sa santé",
    text: "Sensibilisation, dépistage et accompagnement des mères et des nouveau-nés avec les services de santé.",
    icon: "heart" as const,
  },
  {
    title: "Une fille, une bourse",
    text: "Bourses d’études, kits scolaires et tables-bancs pour que la précarité n’interrompe pas un parcours.",
    icon: "book" as const,
  },
  {
    title: "Une femme, un revenu",
    text: "Groupements d’épargne, microcrédit et accompagnement des petites entreprises dirigées par des femmes.",
    icon: "sprout" as const,
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        current="Nous soutenir"
        title={
          <>
            Votre soutien change <em>des vies.</em>
          </>
        }
        intro="Une consultation, une bourse, un groupement d’épargne : chaque geste aide une mère à protéger sa famille ou une fille à poursuivre ses études."
        image="/images/fondation/kits-ambassadeur.webp"
        imageAlt="Remise de sacs scolaires avec l’ambassadeur de Chine en RCA"
      >
        <div className="cta-actions">
          <Link href="#don" className="btn btn-light">
            Faire un don
            <Icon name="heart" size={20} />
          </Link>
          <Link href="#partenariat" className="btn btn-sky">
            Devenir partenaire
            <Icon name="briefcase" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section wrap two align-start" id="don">
        <div className="aside-box brand">
          <p className="f-kick">Faire un don</p>
          <h4>Un geste simple, un impact direct.</h4>
          <p>
            Pour faire un don à la Fondation, contactez l’équipe : nous vous
            indiquons les modalités et vous informons de l’usage de votre
            contribution.
          </p>
          {site.orangeMoney ? (
            <div className="give-box">
              <span className="give-box-label">Numéro Orange Money</span>
              <strong className="give-box-value">{site.orangeMoney}</strong>
              <small>
                Après votre versement, contactez-nous pour nous indiquer l’objet
                de votre soutien.
              </small>
            </div>
          ) : null}
          <a
            href={`https://wa.me/${site.phoneHref.replace("+", "")}?text=${encodeURIComponent(
              "Bonjour la Fondation Cri de Cœur d’une Mère, je souhaite faire un don. Pouvez-vous m’indiquer les modalités ?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Faire un don
            <Icon name="whatsapp" size={20} />
          </a>
        </div>

        <div>
          <SectionHeading
            kicker="Ce que votre soutien permet"
            title={
              <>
                <span className="lt">Des résultats concrets,</span>{" "}
                <span className="hd">au plus près des besoins.</span>
              </>
            }
          />
          <ul className="list-plain">
            <li>
              <strong>Financer une campagne</strong> - sensibilisation à la santé,
              planification familiale, dépistage de la drépanocytose.
            </li>
            <li>
              <strong>Offrir une bourse</strong> - scolarité, kits scolaires et
              suivi d’une jeune fille de famille vulnérable.
            </li>
            <li>
              <strong>Soutenir un groupement</strong> - épargne, formation et
              accompagnement de femmes entrepreneures.
            </li>
            <li>
              <strong>Devenir partenaire</strong> - mécénat, expertise, matériel ou
              co-construction d’un programme.
            </li>
          </ul>
          <a href={`mailto:${site.email}`} className="btn btn-brand">
            Écrire à l’équipe
            <Icon name="mail" size={20} />
          </a>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHeading
            kicker="Votre impact"
            title={
              <>
                <span className="lt">Ce que nous construisons</span>{" "}
                <span className="hd">ensemble.</span>
              </>
            }
            intro="Nos actions sont suivies et évaluées. Nous vous tenons informé·e de ce que votre soutien a permis."
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

      <section className="section wrap two align-start" id="partenariat">
        <div>
          <SectionHeading
            kicker="Partenariat & bénévolat"
            title={
              <>
                <span className="lt">Agissons</span>{" "}
                <span className="hd">ensemble.</span>
              </>
            }
          />
          <p>
            Vous représentez une entreprise, une institution, une association ou
            vous souhaitez offrir un peu de votre temps ? Nous construisons des
            partenariats adaptés à vos moyens et aux besoins du terrain.
          </p>
          <ul className="list-plain">
            <li>Mécénat financier ou en nature (kits, matériel médical et scolaire)</li>
            <li>Partage de compétences et appui technique</li>
            <li>Accueil d’ateliers, de campagnes et d’événements</li>
            <li>Co-construction de programmes avec les communautés</li>
          </ul>
        </div>
        <div className="aside-box">
          <h4>Un projet de soutien à construire ?</h4>
          <p>
            Écrivez-nous à <a href={`mailto:${site.email}`}>{site.email}</a> ou
            appelez le <a href={`tel:${site.phoneHref}`}>{site.phone}</a>. Nous vous
            répondrons avec plaisir.
          </p>
          <p>
            <Icon name="pin" size={16} /> {site.address}, {site.location}
          </p>
          <Link href="/#contact" className="btn btn-brand">
            Nous contacter
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="Merci"
        title="Chaque geste compte, chaque rencontre transforme."
        text="Merci aux familles, aux services de santé, aux écoles et aux partenaires qui croient en la force des mères et des filles centrafricaines."
        primaryLabel="Nous contacter"
        primaryHref="/#contact"
        secondaryLabel="Découvrir nos actions"
        secondaryHref="/nos-actions"
      />
    </>
  );
}
