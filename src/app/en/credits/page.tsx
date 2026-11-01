import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { photoCredits } from "@/lib/credits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photo credits",
  alternates: { canonical: "/en/credits", languages: { fr: "/credits", en: "/en/credits" } },
  description:
    "Credits and licences for the photographs used on the Cri de Cœur d’une Mère Foundation website.",
};

export default function CreditsEn() {
  return (
    <>
      <PageHero
        lang="en"
        current="Photo credits"
        title={
          <>
            Photo credits <em>& thanks.</em>
          </>
        }
        intro="Photographs of the Foundation’s activities come from its official Facebook page and may not be reused without permission."
      />

      <section className="section wrap">
        <div className="st">
          <p className="kicker">Transparency</p>
          <h2>
            <span className="lt">Images</span>{" "}
            <span className="hd">and their authors.</span>
          </h2>
        </div>
        <p>
          Photos of programmes, workshops and events were taken during the
          Foundation’s activities and published on its official page. The logo and
          content belong to the Foundation.
        </p>

        <div className="gallery" style={{ marginTop: "2rem" }}>
          {photoCredits.map((photo) => (
            <figure key={photo.slug}>
              <Image
                src={photo.file}
                alt={photo.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 92vw, 30vw"
              />
              <figcaption>
                <span>{photo.license}</span>
                {photo.title}
                <br />
                Photo: {photo.artist} —{" "}
                <a href={photo.source} target="_blank" rel="noopener noreferrer">
                  official page
                </a>
              </figcaption>
            </figure>
          ))}
        </div>

        <p style={{ marginTop: "2rem" }}>
          Spotted a wrong attribution or want to report content?{" "}
          <a href={`mailto:${site.email}`}>Contact us</a> and we will correct it
          promptly.
        </p>
        <p>
          Icons on the site are original SVG drawings inspired by simple, freely
          usable shapes.
        </p>
      </section>
    </>
  );
}
