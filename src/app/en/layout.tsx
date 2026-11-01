import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description:
    "The Cri de Cœur d’une Mère Foundation is a Central African non-profit based in Bangui, working for maternal and child health, girls’ education and women’s economic empowerment.",
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en" } },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: ["Foundation Cri de Coeur d’une Mere", "CCM Foundation"],
  slogan: "A heart for every mother, a future for every child.",
  url: `${site.url}/en`,
  logo: `${site.url}/images/logo.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangui",
    addressCountry: "CF",
  },
  founder: { "@type": "Person", name: "Brigitte Touadéra" },
  sameAs: [site.facebook],
  areaServed: "Central African Republic",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Skip to content
      </a>
      <SiteHeader lang="en" />
      <main id="contenu">{children}</main>
      <SiteFooter lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
