export const locales = ["fr", "en"] as const;
export type Lang = (typeof locales)[number];

export function isLang(value: string): value is Lang {
  return value === "fr" || value === "en";
}

export const nav = {
  fr: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Nos actions", href: "/nos-actions" },
    { label: "Programmes", href: "/programmes" },
    { label: "Actualités", href: "/actualites" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "About us", href: "/en/about" },
    { label: "Our work", href: "/en/actions" },
    { label: "Programmes", href: "/en/programmes" },
    { label: "News", href: "/en/news" },
  ],
} as const;

export const ui = {
  fr: {
    home: "Accueil",
    support: "Nous soutenir",
    readMore: "Lire la suite",
    discover: "Découvrir",
    allNews: "Toutes les actualités",
    contact: "Nous contacter",
    language: "English",
    languageShort: "EN",
    otherLang: "en" as Lang,
    skip: "Aller au contenu",
    news: "Actualités",
    breadcrumb: "Fil d'Ariane",
    photoOf: "Photo",
    of: "sur",
    pause: "Mettre en pause le défilement",
    play: "Reprendre le défilement",
    showPhoto: "Afficher la photo",
  },
  en: {
    home: "Home",
    support: "Support us",
    readMore: "Read more",
    discover: "Discover",
    allNews: "All news",
    contact: "Contact us",
    language: "Français",
    languageShort: "FR",
    otherLang: "fr" as Lang,
    skip: "Skip to content",
    news: "News",
    breadcrumb: "Breadcrumb",
    photoOf: "Photo",
    of: "of",
    pause: "Pause slideshow",
    play: "Resume slideshow",
    showPhoto: "Show photo",
  },
} as const;

const frToEn: Record<string, string> = {
  "/": "/en",
  "/a-propos": "/en/about",
  "/nos-actions": "/en/actions",
  "/programmes": "/en/programmes",
  "/actualites": "/en/news",
  "/soutenir": "/en/support",
  "/mentions-legales": "/en/legal",
  "/conditions": "/en/terms",
  "/credits": "/en/credits",
};

const enToFr: Record<string, string> = {
  "/en": "/",
  "/en/about": "/a-propos",
  "/en/actions": "/nos-actions",
  "/en/programmes": "/programmes",
  "/en/news": "/actualites",
  "/en/support": "/soutenir",
  "/en/legal": "/mentions-legales",
  "/en/terms": "/conditions",
  "/en/credits": "/credits",
};

/** Counterpart URL for the language switcher, including news articles. */
export function switchPath(pathname: string, from: Lang): string {
  if (from === "fr") {
    if (pathname.startsWith("/actualites/")) {
      return `/en/news/${pathname.slice("/actualites/".length)}`;
    }
    return frToEn[pathname] ?? "/en";
  }
  if (pathname.startsWith("/en/news/")) {
    return `/actualites/${pathname.slice("/en/news/".length)}`;
  }
  return enToFr[pathname] ?? "/";
}

export function formatDate(isoDate: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
