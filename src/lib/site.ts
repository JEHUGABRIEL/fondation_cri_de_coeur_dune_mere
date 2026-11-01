export const site = {
  name: "Fondation Cri de Cœur d’une Mère",
  shortName: "Cri de Cœur",
  fullName: "Fondation Cri de Cœur d’une Mère",
  /** Motto under the logo. */
  tagline: "Protection • Éducation • Autonomisation",
  slogan: "Un cœur pour chaque mère, un avenir pour chaque enfant.",
  description:
    "La Fondation Cri de Cœur d’une Mère est une organisation centrafricaine à but non lucratif basée à Bangui. Elle agit pour la santé des mères et des enfants, l’éducation des filles et l’autonomisation économique des femmes.",
  phone: "+236 74 11 78 53",
  phoneHref: "+23674117853",
  /** Second line, if any. Empty strings are not displayed. */
  phone2: "",
  phone2Href: "",
  email: "fondationccm@gmail.com",
  address: "Bangui",
  location: "République centrafricaine",
  facebook: "https://www.facebook.com/profile.php?id=100088814556578",
  /** Orange Money number for donations. Empty: the site asks donors to contact the team. */
  orangeMoney: "",
  founded: "2026",
  president: "Brigitte Touadéra",
  presidentRole:
    "Première Dame de la République centrafricaine, présidente de la Fondation",
  /** Search used by the Google Maps embed on the "À propos" page. */
  mapQuery: "Bangui, République centrafricaine",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fondation-cri-de-coeur.vercel.app",
  hosting: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    url: "https://vercel.com",
  },
} as const;

/**
 * « Mot de la présidente » on the À propos page.
 * Draft written from the Foundation's public commitments: to be read and validated
 * by the president before publication.
 */
export const presidentMessage = [
  "La Fondation Cri de Cœur d’une Mère est née d’une conviction : aucune mère ne devrait traverser seule les difficultés qui touchent sa santé, celle de ses enfants et l’avenir de sa famille.",
  "Notre engagement se déploie sur le terrain, aux côtés du ministère de la Santé, des communautés et de nos partenaires : planification familiale, lutte contre la drépanocytose, scolarisation des filles, bourses d’études et inclusion financière des femmes.",
  "Chaque action est préparée avec celles et ceux qui la vivent. Merci aux équipes, aux familles et aux partenaires qui donnent à cette fondation sa force et sa crédibilité.",
];

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos actions", href: "/nos-actions" },
  { label: "Programmes", href: "/programmes" },
  { label: "Actualités", href: "/actualites" },
] as const;

export const actions = [
  {
    slug: "sante-meres-enfants",
    title: "Santé des mères, des enfants et planification familiale",
    kicker: "Santé & prévention",
    description:
      "La Fondation mobilise les communautés et les acteurs de santé autour de la santé maternelle, de la planification familiale et du dépistage, à Bangui et dans les communes voisines.",
    details: [
      "Forum national sur la planification familiale, à Bangui",
      "Sensibilisation à Bangui 1, 2 et 3, à Bimbo et à Bégoua avec les Champions et les ASC",
      "Plaidoyer et suivi des recommandations avec le ministère de la Santé et l’OMS",
    ],
    image: "/images/fondation/marche-1.webp",
    alt: "Échange avec des commerçantes sur un marché de Bangui",
  },
  {
    slug: "education-filles",
    title: "Éducation et scolarisation des filles",
    kicker: "Bourses & kits scolaires",
    description:
      "Des bourses d’études et des kits scolaires sont remis à des jeunes filles de familles vulnérables, pour que la précarité n’interrompe pas leur parcours.",
    details: [
      "40 bourses d’études avec la Merck Foundation",
      "Kits scolaires et tables-bancs pour les écoles partenaires",
      "Accompagnement des familles et suivi des bénéficiaires",
    ],
    image: "/images/fondation/kits-enfants.webp",
    alt: "Enfants tenant leurs kits scolaires",
  },
  {
    slug: "autonomisation-femmes",
    title: "Autonomisation et inclusion financière des femmes",
    kicker: "Revenus & entrepreneuriat",
    description:
      "La Fondation soutient les groupements de femmes, les associations villageoises d’épargne et de crédit et les petites entreprises dirigées par des femmes.",
    details: [
      "Promotion des associations villageoises d’épargne et de crédit (AVEC)",
      "Accès au microcrédit et accompagnement des PME féminines",
      "Initiative Brigitte Touadera pour l’inclusion financière des femmes centrafricaines",
    ],
    image: "/images/fondation/marche-2.webp",
    alt: "Une mère et son enfant dans un marché de Bangui",
  },
  {
    slug: "drepacytose",
    title: "Lutte contre la drépanocytose",
    kicker: "Santé publique",
    description:
      "Aux côtés du Centre de recherche et de traitement de la drépanocytose, la Fondation sensibilise au dépistage et à la prise en charge précoce de la maladie.",
    details: [
      "Journée mondiale de lutte contre la drépanocytose, édition 2026",
      "Plaidoyer pour le dépistage systématique du nouveau-né",
      "Appui aux familles et aux associations de patients",
    ],
    image: "/images/fondation/drepacytose-2026.webp",
    alt: "Cérémonie de la Journée mondiale de lutte contre la drépanocytose",
  },
] as const;

export const values = [
  {
    title: "Solidarité",
    text: "Nous avançons avec les familles, les communautés et les partenaires : aucune action ne se construit seule, loin du terrain.",
    icon: "users" as const,
  },
  {
    title: "Dignité",
    text: "Chaque mère, chaque fille et chaque enfant mérite écoute, respect et considération, quels que soient son origine et sa situation.",
    icon: "heart" as const,
  },
  {
    title: "Protection",
    text: "Nous portons une attention particulière aux personnes les plus vulnérables, en lien avec les services de santé et les institutions.",
    icon: "shield" as const,
  },
  {
    title: "Autonomie",
    text: "Nous transmettons des compétences et des outils pour que chaque femme puisse agir par elle-même et construire son avenir.",
    icon: "sprout" as const,
  },
] as const;
