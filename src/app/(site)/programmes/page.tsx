import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { SectionHeading } from "@/components/SectionHeading";
import { getFormations } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programmes",
  alternates: { canonical: "/programmes" },
  description:
    "Les programmes de la Fondation Cri de Cœur d’une Mère : santé des mères et planification familiale, bourses et scolarisation des filles, inclusion financière et entrepreneuriat des femmes.",
};

const faqs = [
  {
    question: "Comment bénéficier d’une bourse ou d’un kit scolaire ?",
    answer:
      "Les bénéficiaires sont identifiées avec les écoles et les familles, selon la situation scolaire et sociale. Écrivez-nous en précisant l’établissement et la classe : l’équipe étudie chaque demande avec les partenaires.",
  },
  {
    question: "Les programmes sont-ils payants ?",
    answer:
      "Non. Les actions de la Fondation sont gratuites pour les bénéficiaires. Les bourses, kits scolaires et accompagnements sont financés par nos partenaires.",
  },
  {
    question: "Comment rejoindre un groupement d’épargne ou une formation ?",
    answer:
      "Les groupements sont constitués avec les communautés et les partenaires locaux. Contactez-nous pour connaître les prochaines sessions et les conditions de participation dans votre quartier ou votre commune.",
  },
  {
    question: "Comment devenir partenaire ou bénévole ?",
    answer:
      "Envoyez une demande avec le formulaire ci-dessous en choisissant « Devenir partenaire », ou écrivez-nous directement. Nous vous recontactons pour échanger sur votre engagement.",
  },
];

const numberWords = ["Aucun", "Un", "Deux", "Trois", "Quatre", "Cinq", "Six"];

export default async function ProgrammesPage() {
  const formations = await getFormations();
  const count = numberWords[formations.length] ?? String(formations.length);

  return (
    <>
      <PageHero
        current="Programmes"
        title={
          <>
            Des programmes pour <em>protéger et accompagner.</em>
          </>
        }
        intro="Santé des mères et planification familiale, éducation des filles, inclusion financière des femmes : trois portes d’entrée vers des familles plus fortes."
        image="/images/fondation/marche-3.webp"
        imageAlt="Relais communautaires échangeant avec des commerçantes"
      >
        <div className="cta-actions">
          <Link href="#programmes" className="btn btn-light">
            Voir les programmes
            <Icon name="arrow-right" size={20} />
          </Link>
          <Link href="#candidature" className="btn btn-sky">
            Nous écrire
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section wrap two align-start">
        <div>
          <div className="st">
            <p className="kicker">Notre approche</p>
            <h2>
              <span className="lt">Accompagner</span>{" "}
              <span className="hd">dans la durée.</span>
            </h2>
          </div>
          <p>
            Nos programmes ne s’arrêtent pas à une activité ponctuelle. Les
            bénéficiaires sont suivies avec les services de santé, les écoles et les
            partenaires, afin que chaque action produise un changement durable.
          </p>
          <p>
            La Fondation associe les familles et les communautés à chaque étape :
            identification des besoins, sensibilisation, mise en œuvre et suivi des
            résultats.
          </p>
          <Link href="#programmes" className="line-more">
            Découvrir les programmes
          </Link>
        </div>
        <div className="aside-box">
          <h4>Informations pratiques</h4>
          <p>
            <strong>Public</strong>
            <br />
            Mères, enfants, jeunes filles scolarisées, femmes entrepreneures.
          </p>
          <p>
            <strong>Coût</strong>
            <br />
            Gratuit pour les bénéficiaires.
          </p>
          <p>
            <strong>Lieux</strong>
            <br />
            Bangui, Bimbo et Bégoua.
          </p>
          <p>
            <strong>Contact</strong>
            <br />
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a> ·{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <Link href="#candidature" className="btn btn-brand">
            Envoyer une demande
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

      <section className="section tint" id="programmes">
        <div className="wrap">
          <SectionHeading
            kicker="Nos programmes"
            title={
              <>
                <span className="lt">
                  {count} programme{formations.length > 1 ? "s" : ""},
                </span>{" "}
                <span className="hd">une même exigence.</span>
              </>
            }
            intro="Chaque programme a son public et sa méthode. Tous visent la protection, la dignité et l’autonomie des familles."
          />

          <div className="post-list">
            {formations.map((formation) => (
              <article className="post-row" id={formation.slug} key={formation.id}>
                <div className="post-media">
                  <Image
                    src={formation.image}
                    alt={formation.imageAlt}
                    width={340}
                    height={340}
                    sizes="(max-width: 980px) 92vw, 46vw"
                  />
                </div>
                <div className="post-body">
                  <p className="kicker">{formation.kicker}</p>
                  <h2>{formation.title}</h2>
                  {formation.price || formation.duration ? (
                    <p>
                      {formation.price ? <span className="tagpill">{formation.price}</span> : null}{" "}
                      {formation.duration ? (
                        <span className="tagpill">{formation.duration}</span>
                      ) : null}
                    </p>
                  ) : null}
                  <p>{formation.description}</p>
                  <ul className="check">
                    {formation.program.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {formation.benefits.length > 0 ? (
                    <p>
                      <strong>Ce que le programme apporte :</strong>{" "}
                      {formation.benefits.join(" · ")}.
                    </p>
                  ) : null}
                  {formation.note ? <p className="note">{formation.note}</p> : null}
                  <div className="cta-actions">
                    <Link href="#candidature" className="btn btn-brand">
                      Nous écrire
                      <Icon name="arrow-right" size={16} />
                    </Link>
                    <a
                      href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sky"
                    >
                      Poser une question
                      <Icon name="whatsapp" size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint" id="candidature">
        <div className="wrap two align-start">
          <div>
            <div className="st">
              <p className="kicker">Demandes</p>
              <h2>
                <span className="lt">Rejoindre</span>{" "}
                <span className="hd">un programme.</span>
              </h2>
            </div>
            <p>
              Remplissez le formulaire : vous recevez aussitôt un numéro de dossier et
              une page de suivi personnelle. L’équipe étudie chaque demande et vous
              recontacte pour la suite.
            </p>
            <p>
              Pour une demande de bourse ou de kit scolaire, indiquez l’établissement
              et la classe dans le message. Les familles sont associées à l’étude du
              dossier.
            </p>
            <p>
              <a href={`tel:${site.phoneHref}`}>
                <strong>{site.phone}</strong>
              </a>{" "}
              ·{" "}
              <a
                href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>{" "}
              · <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              {site.address}, {site.location}
            </p>
          </div>
          <RegistrationForm
            formations={formations.map((formation) => ({
              slug: formation.slug,
              label: formation.title,
            }))}
          />
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading
          kicker="Questions fréquentes"
          title={
            <>
              <span className="lt">Vous vous demandez</span>{" "}
              <span className="hd">peut-être…</span>
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
        eyebrow="Soutenir un programme"
        title="Une consultation, une bourse, un groupement de femmes."
        text="Chaque soutien finance une action concrète pour une mère, une fille ou une famille. Écrivez-nous pour choisir ce que vous voulez soutenir."
        primaryLabel="Nous soutenir"
        primaryHref="/soutenir"
        secondaryLabel="Découvrir nos actions"
        secondaryHref="/nos-actions"
      />
    </>
  );
}
