import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { actions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos actions",
  alternates: { canonical: "/nos-actions", languages: { fr: "/nos-actions", en: "/en/actions" } },
  description:
    "Les actions de la Fondation Cri de Cœur d’une Mère : santé des mères et planification familiale, éducation des filles, inclusion financière des femmes et lutte contre la drépanocytose.",
};

const beneficiaries = [
  {
    title: "Les mères et les enfants",
    text: "Femmes enceintes, jeunes mères et nouveau-nés, accompagnés par la sensibilisation, le dépistage et les services de santé.",
  },
  {
    title: "Les jeunes filles",
    text: "Élèves de familles vulnérables qui reçoivent une bourse, des kits scolaires et un suivi de leur parcours.",
  },
  {
    title: "Les femmes entrepreneures",
    text: "Membres de groupements d’épargne, de PME et de coopératives qui développent une activité génératrice de revenus.",
  },
  {
    title: "Les communautés",
    text: "Quartiers, villages et leaders locaux mobilisés pour la promotion de la santé et la protection des familles.",
  },
];

export default function ActionsPage() {
  return (
    <>
      <PageHero
        current="Nos actions"
        title={
          <>
            Protéger, éduquer, <em>rendre autonome.</em>
          </>
        }
        intro="Quatre axes complémentaires, conduits à Bangui et dans les communes voisines avec les familles, les services de santé et nos partenaires."
        image="/images/fondation/sensibilisation-communautaire.webp"
        imageAlt="Séance de sensibilisation avec les habitants d’un quartier"
      >
        <div className="cta-actions">
          <Link href="/programmes" className="btn btn-light">
            Voir nos programmes
            <Icon name="arrow-right" size={20} />
          </Link>
          <Link href="/soutenir" className="btn btn-sky">
            Nous soutenir
            <Icon name="heart" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section wrap">
        <SectionHeading
          kicker="Nos programmes"
          title={
            <>
              <span className="lt">Quatre axes,</span>{" "}
              <span className="hd">une même ambition.</span>
            </>
          }
          intro="Une mère en bonne santé, une fille scolarisée, une femme qui gagne son revenu, un enfant protégé : chacune de nos actions renforce la famille et la communauté."
        />
        <div className="post-list">
          {actions.map((action) => (
            <article className="post-row" id={action.slug} key={action.slug}>
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
                <Link href="/soutenir" className="line-more">
                  Soutenir cette action
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHeading
            kicker="Pour qui nous agissons"
            title={
              <>
                <span className="lt">Des mères, des filles,</span>{" "}
                <span className="hd">des communautés.</span>
              </>
            }
            intro="Nos actions s’adressent d’abord aux familles qui ont le plus besoin d’un accompagnement pour avancer."
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
            <p className="kicker">Notre méthode</p>
            <h2>
              <span className="lt">Écouter, agir,</span>{" "}
              <span className="hd">suivre les résultats.</span>
            </h2>
          </div>
          <p>
            Chaque action est préparée avec les personnes concernées et avec les
            acteurs qui les accompagnent au quotidien : services de santé, écoles,
            autorités locales et associations. Nous suivons ensuite les résultats
            pour ajuster nos interventions.
          </p>
          <ul className="list-plain">
            <li>Dialogue avec les communautés et les partenaires</li>
            <li>Sensibilisation et formation des relais locaux</li>
            <li>Missions de suivi sur le terrain</li>
            <li>Évaluation des acquis et partage des recommandations</li>
          </ul>
          <Link href="/a-propos" className="btn btn-brand">
            Découvrir notre organisation
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <Image
          src="/images/fondation/marche-1.webp"
          alt="Échange avec des commerçantes sur un marché de Bangui"
          width={338}
          height={336}
          sizes="(max-width: 980px) 92vw, 46vw"
          className="rounded r-tl"
        />
      </section>

      <CtaBand
        eyebrow="Agir avec nous"
        title="Une campagne de santé, une bourse, un groupement de femmes."
        text="Institutions, entreprises, associations : soutenez une action précise et suivez ses résultats sur le terrain."
        primaryLabel="Nous soutenir"
        primaryHref="/soutenir"
        secondaryLabel="Nous écrire"
        secondaryHref="/#contact"
      />
    </>
  );
}
