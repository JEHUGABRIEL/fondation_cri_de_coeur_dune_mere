import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  alternates: { canonical: "/en/terms", languages: { fr: "/conditions", en: "/en/terms" } },
  description: "Terms of use for the Cri de Cœur d’une Mère Foundation website.",
};

export default function TermsEn() {
  return (
    <>
      <PageHero
        lang="en"
        current="Terms of use"
        title={
          <>
            Terms <em>of use.</em>
          </>
        }
        intro="These terms set out the rules for using this site and its forms."
      />

      <section className="section wrap legal">
        <h2>Purpose of the site</h2>
        <p>
          This site presents {site.name}, its programmes and its news, and allows
          visitors to contact the Foundation, apply to a programme or submit a
          testimonial.
        </p>

        <h2>Use of the site</h2>
        <p>
          The site is accessible free of charge. You agree to use it lawfully and
          not to attempt to disrupt its operation or access areas reserved for the
          Foundation’s team.
        </p>

        <h2>Submitting a request</h2>
        <p>
          Information provided in forms must be accurate. Sending a request does not
          guarantee acceptance: applications are reviewed by the Foundation&apos;s
          team, and only applicants contacted individually are admitted.
        </p>

        <h2>Testimonials</h2>
        <p>
          Testimonials are reviewed before publication. The Foundation may edit them
          for clarity or length, or decline to publish content that is defamatory,
          discriminatory or unrelated to its work.
        </p>

        <h2>External links</h2>
        <p>
          The site may link to third-party sites. The Foundation does not control
          their content and accepts no liability for it.
        </p>

        <h2>Changes</h2>
        <p>
          The Foundation may change these terms at any time. The version published
          on this page is the one that applies.
        </p>

        <p className="legal-updated">
          Last updated: 1 November 2026. Questions?{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> —{" "}
          <Link href="/en/legal">legal notice</Link>.
        </p>
      </section>
    </>
  );
}
