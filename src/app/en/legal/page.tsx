import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal notice",
  alternates: { canonical: "/en/legal", languages: { fr: "/mentions-legales", en: "/en/legal" } },
  description: "Legal notice for the Cri de Cœur d’une Mère Foundation website.",
};

export default function LegalEn() {
  return (
    <>
      <PageHero
        lang="en"
        current="Legal notice"
        title={
          <>
            Legal <em>notice.</em>
          </>
        }
        intro="This page identifies the publisher of the site, its host, and the conditions under which the content may be used."
      />

      <section className="section wrap legal">
        <h2>Publisher</h2>
        <p>
          The site is published by <strong>{site.name}</strong>, a Central African
          non-profit based in {site.address}, Central African Republic.
        </p>
        <ul>
          <li>
            E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            Phone: <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </li>
          <li>Founding year: {site.founded}</li>
        </ul>

        <h2>Hosting</h2>
        <p>
          The site is hosted by <strong>{site.hosting.name}</strong>,{" "}
          {site.hosting.address}.{" "}
          <a href={site.hosting.url} target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
        </p>

        <h2>Content and copyright</h2>
        <p>
          The texts, photographs, illustrations and the logo on this site belong to
          the Foundation, unless otherwise stated. Photographs taken at the
          Foundation’s activities come from its official page. Any reproduction
          requires prior written permission.
        </p>
        <p>
          Photos of the Foundation&apos;s activities may not be reused without
          permission. Credits for illustrative photographs are listed on the{" "}
          <Link href="/en/credits">photo credits</Link> page.
        </p>

        <h2>Liability</h2>
        <p>
          The information published is provided for information purposes and may
          change. The Foundation cannot be held liable for any error or omission, or
          for the content of external sites linked from this site.
        </p>

        <h2>Personal data</h2>
        <p>
          Information sent through the contact form is used only to answer your
          request and is never sold. To access, correct or delete your data, write
          to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <p className="legal-updated">Last updated: 1 November 2026.</p>
      </section>
    </>
  );
}
