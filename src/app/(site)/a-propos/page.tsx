import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { presidentMessage, site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  alternates: { canonical: "/a-propos" },
  description:
    "Découvrez la Fondation Cri de Cœur d’une Mère, sa présidente, ses valeurs et son siège à Bangui, en République centrafricaine.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="À propos"
        title={
          <>
            Un cœur qui bat <em>pour les mères et les enfants.</em>
          </>
        }
        intro="La Fondation Cri de Cœur d’une Mère agit à Bangui pour la santé maternelle et infantile, l’éducation des filles et l’autonomie économique des femmes. Protection, éducation, autonomisation."
        image="/images/fondation/forum-femmes-leaders.webp"
        imageAlt="Forum des femmes leaders pour la paix et le développement"
      >
        <div className="cta-actions">
          <Link href="/nos-actions" className="btn btn-light">
            Nos actions
            <Icon name="arrow-right" size={20} />
          </Link>
          <a href={`mailto:${site.email}`} className="btn btn-sky">
            Nous rencontrer
            <Icon name="mail" size={16} />
          </a>
        </div>
      </PageHero>

      <section className="section wrap two">
        <div>
          <div className="st">
            <p className="kicker">Qui sommes-nous</p>
            <h2>
              <span className="lt">Une fondation</span>{" "}
              <span className="hd">au service des familles.</span>
            </h2>
          </div>
          <p>
            La <strong>Fondation Cri de Cœur d’une Mère</strong> est une
            organisation centrafricaine à but non lucratif, installée à Bangui.
            Elle agit pour la santé des mères et des enfants, l’éducation et la
            scolarisation des filles, l’autonomisation économique des femmes et la
            lutte contre la drépanocytose.
          </p>
          <p>
            Son nom dit l’engagement qui la guide : écouter le cri d’une mère,
            c’est entendre les besoins d’une famille entière. La Fondation travaille
            avec les communautés, les services de santé, les écoles et les
            institutions pour apporter des réponses concrètes et durables.
          </p>
          <p className="lead">« Un cœur pour chaque mère, un avenir pour chaque enfant. »</p>
          <p>
            Présidée par <strong>{site.president}</strong>, Première Dame de la
            République centrafricaine, la Fondation conduit ses actions avec le
            ministère de la Santé et de la Population, l’OMS, la Merck Foundation,
            l’OPDAD et de nombreux partenaires de terrain.
          </p>
        </div>
        <Image
          src="/images/fondation/kits-remise.webp"
          alt="Remise de kits à des enfants par la Fondation"
          width={336}
          height={222}
          sizes="(max-width: 980px) 92vw, 46vw"
          className="rounded r-br"
        />
      </section>

      <section className="section tint" id="presidente">
        <div className="wrap president">
          <figure className="president-photo">
            <Image
              src="/images/fondation/presidente-sau.webp"
              alt={`${site.president}, présidente de la Fondation`}
              width={335}
              height={336}
              sizes="(max-width: 980px) 70vw, 360px"
            />
          </figure>
          <div>
            <SectionHeading
              kicker="Mot de la présidente"
              title={
                <>
                  <span className="lt">Une conviction</span>{" "}
                  <span className="hd">qui nous rassemble.</span>
                </>
              }
            />
            <blockquote className="president-text">
              {presidentMessage.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </blockquote>
            <p className="president-sign">
              <strong>{site.president}</strong>
              <span>{site.presidentRole}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading
          kicker="Nos valeurs"
          title={
            <>
              <span className="lt">Ce qui nous</span>{" "}
              <span className="hd">fait avancer.</span>
            </>
          }
          intro="Nos valeurs se lisent dans notre façon d’écouter, d’accompagner et d’agir, à Bangui comme dans les communes où nous intervenons."
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
            kicker="Notre organisation"
            title={
              <>
                <span className="lt">Une équipe</span>{" "}
                <span className="hd">proche du terrain.</span>
              </>
            }
            intro="La Fondation s’appuie sur une présidence, une coordination et des équipes mobilisées autour de chaque programme."
          />
          <div className="values">
            <div>
              <h3>Présidence</h3>
              <p>
                {site.president}, Première Dame de la République centrafricaine,
                préside la Fondation et porte ses engagements auprès des
                institutions.
              </p>
            </div>
            <div>
              <h3>Coordination</h3>
              <p>
                Les programmes sont pilotés au quotidien par une équipe de
                coordination qui travaille avec les services techniques et les
                partenaires.
              </p>
            </div>
            <div>
              <h3>Partenaires</h3>
              <p>
                Ministères, organisations internationales, associations et
                communautés : chacun apporte son expertise et sa proximité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="nous-trouver">
        <div className="two align-start">
          <div>
            <SectionHeading
              kicker="Nous trouver"
              title={
                <>
                  <span className="lt">Notre siège</span>{" "}
                  <span className="hd">à Bangui.</span>
                </>
              }
            />
            <ul className="visit-list">
              <li>
                <Icon name="pin" size={20} />
                <span>
                  {site.address}
                  <br />
                  {site.location}
                </span>
              </li>
              <li>
                <Icon name="phone" size={20} />
                <span>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  {site.phone2 ? (
                    <>
                      {" · "}
                      <a href={`tel:${site.phone2Href}`}>{site.phone2}</a>
                    </>
                  ) : null}
                </span>
              </li>
              <li>
                <Icon name="mail" size={20} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="calendar" size={20} />
                <span>Visites sur rendez-vous.</span>
              </li>
            </ul>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand"
            >
              Ouvrir dans Google Maps
              <Icon name="external" size={16} />
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title={`Carte : ${site.mapQuery}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=13&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Écrivons la suite ensemble"
        title="Une idée, un projet, une envie de vous engager ?"
        text="Partenaires, institutions, associations, bénévoles : la Fondation avance avec celles et ceux qui croient en la force des mères et des filles."
        primaryLabel="Nous soutenir"
        primaryHref="/soutenir"
        secondaryLabel="Nous contacter"
        secondaryHref="/#contact"
      />
    </>
  );
}
