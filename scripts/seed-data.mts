// Données de départ, insérées une seule fois par `npm run db:seed`.
// Ensuite, le contenu se gère dans le back-office (/admin).
// Sources : publications de la page Facebook de la Fondation Cri de Cœur d’une Mère.

export const formations = [
  {
    slug: "sante-planification-familiale",
    title: "Santé des mères et planification familiale",
    kicker: "Bangui, Bimbo, Bégoua",
    price: "",
    description:
      "Un programme de sensibilisation et d’accompagnement pour la santé des mères et des nouveau-nés, la planification familiale et l’accès aux services de santé de proximité.",
    image: "/images/fondation/marche-3.webp",
    alt: "Relais communautaires échangeant avec des commerçantes",
    program: [
      "Sensibilisation dans les quartiers et les marchés",
      "Mobilisation des Champions et des agents de santé communautaires",
      "Plaidoyer auprès des autorités sanitaires",
      "Suivi des recommandations du Forum national",
    ],
    benefits: [
      "Des familles mieux informées",
      "Un accompagnement de proximité",
      "Des naissances mieux préparées",
    ],
    note: "Les activités sont conduites avec le ministère de la Santé et de la Population et l’OMS.",
    badge: "Santé",
  },
  {
    slug: "education-bourses-filles",
    title: "Éducation et bourses pour les filles",
    kicker: "Bourses & kits scolaires",
    price: "",
    description:
      "Des bourses d’études et des kits scolaires pour les jeunes filles de familles vulnérables, afin que la précarité n’interrompe pas leur scolarité.",
    image: "/images/fondation/kits-ecole.webp",
    alt: "Remise de tables-bancs et de kits dans une école",
    program: [
      "Bourses d’études pour les jeunes filles identifiées",
      "Remise de kits scolaires et de tables-bancs",
      "Suivi du parcours scolaire avec les familles",
      "Partenariats avec les établissements et les fondations",
    ],
    benefits: [
      "Poursuivre sa scolarité",
      "Retrouver confiance",
      "Préparer son avenir professionnel",
    ],
    note: "40 bourses ont été remises avec la Merck Foundation à des jeunes filles de familles vulnérables.",
    badge: "Bourses",
  },
  {
    slug: "inclusion-financiere-femmes",
    title: "Inclusion financière et entrepreneuriat des femmes",
    kicker: "AVEC, PME & microcrédit",
    price: "",
    description:
      "Un accompagnement des groupements de femmes, des associations villageoises d’épargne et de crédit et des petites entreprises pour renforcer leur autonomie économique.",
    image: "/images/fondation/marche-2.webp",
    alt: "Une mère et son enfant dans un marché de Bangui",
    program: [
      "Structuration des associations villageoises d’épargne et de crédit",
      "Accès aux services financiers et au microcrédit",
      "Appui aux petites et moyennes entreprises dirigées par des femmes",
      "Dialogue avec les institutions et les partenaires du secteur",
    ],
    benefits: [
      "Un revenu plus stable",
      "Une activité mieux gérée",
      "Une place renforcée dans la communauté",
    ],
    note: "L’Initiative Brigitte Touadera pour l’inclusion financière des femmes centrafricaines porte ce chantier.",
    badge: "Autonomisation",
  },
] as const;

export type Post = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  excerpt: string;
  image: string;
  alt: string;
  quote?: string;
  body: string[];
  meta?: { label: string; value: string }[];
};

export const posts: Post[] = [
  {
    slug: "inclusion-financiere-avec",
    title: "L’inclusion financière des femmes, levier de développement",
    date: "30 octobre 2026",
    isoDate: "2026-10-30",
    category: "Autonomisation",
    excerpt:
      "Au siège de la Fondation, une réunion de travail avec les clubs AVEC, les partenaires du développement et le ministère des Finances.",
    image: "/images/fondation/marche-1.webp",
    alt: "Échange avec des commerçantes sur un marché",
    quote:
      "Donner aux femmes l’accès aux services financiers, c’est renforcer leur autonomie et celle de toute leur famille.",
    body: [
      "Dans le cadre de la mise en œuvre de son plan d’action, la Fondation Cri de Cœur d’une Mère a réuni les responsables des clubs AVEC, les partenaires du développement, les structures agréées de microfinance et les représentants du ministère des Finances et du Budget.",
      "Les échanges ont porté sur les stratégies à mettre en œuvre pour renforcer les mécanismes d’inclusion financière, soutenir l’entrepreneuriat féminin et faire des associations villageoises d’épargne et de crédit un véritable levier de développement économique et social.",
      "Cette démarche s’inscrit dans le lancement de l’Initiative Brigitte Touadera pour l’inclusion financière des femmes centrafricaines, qui vise à faciliter l’accès des femmes aux services financiers, à encourager leur autonomisation économique et à renforcer leur contribution au développement durable.",
    ],
    meta: [{ label: "Lieu", value: "Siège de la Fondation, Bangui" }],
  },
  {
    slug: "building-resilience-dakar",
    title: "Campagne « Building Resilience » : clôture des activités à Dakar",
    date: "17 octobre 2026",
    isoDate: "2026-10-17",
    category: "Résilience",
    excerpt:
      "Aux côtés des Premières Dames d’Afrique, la Fondation a pris part à la clôture de la campagne de l’OPDAD consacrée à la résilience des femmes et des filles.",
    image: "/images/fondation/presidente-marine.webp",
    alt: "La présidente de la Fondation à Dakar",
    body: [
      "Les Premières Dames d’Afrique réunies à Dakar, au Sénégal, dans le cadre du lancement de la campagne « Building Resilience », consacrée au renforcement de la résilience des femmes et des filles face aux changements climatiques et aux conflits, ont achevé leurs activités le jeudi 15 octobre 2026.",
      "À cette occasion, Son Excellence Madame Brigitte Touadéra, Première Dame de la République centrafricaine, a pris part, aux côtés de ses consœurs du Sénégal, de la Sierra Leone, de la Gambie, du Gabon, du Burundi et du Cap-Vert, à la découverte de l’île de Gorée, haut lieu de mémoire de la traite négrière.",
      "Ces visites ont constitué un temps fort de ce séjour, mettant en lumière l’importance de la mémoire historique et de la valorisation du patrimoine culturel pour l’avenir des peuples africains.",
      "Portée par l’Organisation des Premières Dames d’Afrique pour le Développement (OPDAD), la campagne réaffirme l’engagement des Premières Dames à renforcer la protection et l’autonomisation des femmes et des filles face aux défis du changement climatique et des conflits.",
    ],
    meta: [
      { label: "Lieu", value: "Dakar, Sénégal" },
      { label: "Campagne", value: "Building Resilience — OPDAD" },
    ],
  },
  {
    slug: "kits-scolaires-bella-airport",
    title: "Kits scolaires et tables-bancs pour l’école Bella Airport",
    date: "2 octobre 2026",
    isoDate: "2026-10-02",
    category: "Éducation",
    excerpt:
      "À l’occasion de la visite d’adieu de l’ambassadeur de Chine, la Fondation a remis du matériel scolaire aux élèves de l’école Bella Airport.",
    image: "/images/fondation/kits-ecole.webp",
    alt: "Remise de tables-bancs dans une école",
    body: [
      "En fin de mission en République centrafricaine, Son Excellence Monsieur Li Qi Feng, ambassadeur de la République populaire de Chine en RCA, a effectué une visite d’adieu auprès de Son Excellence Madame Brigitte Touadéra, Première Dame de la République centrafricaine et présidente de la Fondation Cri de Cœur d’une Mère, au siège de la Fondation à Bangui.",
      "Au cours de cette rencontre empreinte de cordialité, le diplomate chinois a exprimé sa profonde gratitude à la Première Dame pour l’appui et l’accompagnement qu’elle lui a accordés tout au long de sa mission, contribuant ainsi au renforcement des relations d’amitié et de coopération entre les deux pays.",
      "Profitant de cette visite, l’ambassadeur a fait don à la Fondation de kits scolaires et de tables-bancs, destinés notamment à soutenir les actions sociales et éducatives en faveur des populations vulnérables.",
      "La remise a été saluée par les responsables de l’école, qui ont exprimé leur reconnaissance pour cette contribution venue améliorer les conditions d’apprentissage des élèves.",
    ],
    meta: [{ label: "Bénéficiaires", value: "Élèves de l’école Bella Airport, Bangui" }],
  },
  {
    slug: "bourses-merck-foundation",
    title: "40 jeunes filles bénéficient de bourses d’études",
    date: "10 juillet 2026",
    isoDate: "2026-07-10",
    category: "Éducation",
    excerpt:
      "Grâce au partenariat avec la Merck Foundation, 40 élèves de familles vulnérables reçoivent une bourse pour poursuivre leurs études.",
    image: "/images/fondation/kits-ambassadeur.webp",
    alt: "Remise de sacs scolaires avec l’ambassadeur de Chine",
    quote: "Scolariser une fille, c’est préparer l’avenir de toute une communauté.",
    body: [
      "La Première Dame de la République centrafricaine, Madame Brigitte Touadéra, présidente de la Fondation Cri de Cœur d’une Mère, a pris part à la cérémonie de remise des bourses d’études de la Fondation Merck au profit de 40 élèves filles démunies.",
      "Cette initiative vise à soutenir la scolarisation des jeunes filles issues de familles vulnérables, en leur offrant davantage de chances de poursuivre leurs études et de construire un avenir meilleur.",
      "La cérémonie a également été marquée par la remise des médailles et distinctions aux lauréats des différents prix Merck Awards, qui récompensent l’engagement dans la sensibilisation du public sur des questions sociales et sanitaires.",
      "À travers cette double cérémonie, la Fondation Merck et la Fondation Cri de Cœur d’une Mère réaffirment leur engagement commun en faveur de l’éducation, de la promotion des talents et du développement humain en République centrafricaine.",
    ],
    meta: [
      { label: "Partenaire", value: "Merck Foundation" },
      { label: "Bénéficiaires", value: "40 jeunes filles" },
    ],
  },
  {
    slug: "drepacytose-2026",
    title: "Journée mondiale de lutte contre la drépanocytose",
    date: "19 juin 2026",
    isoDate: "2026-06-19",
    category: "Santé",
    excerpt:
      "Dépistage, prise en charge et sensibilisation : la Fondation s’engage aux côtés du Centre de recherche et de traitement de la drépanocytose.",
    image: "/images/fondation/drepacytose-2026.webp",
    alt: "Cérémonie de la Journée mondiale de lutte contre la drépanocytose",
    body: [
      "Le 19 juin de chaque année, le monde entier célèbre la Journée mondiale de lutte contre la drépanocytose. En République centrafricaine, l’édition 2026 a été marquée par une cérémonie organisée au Centre de recherche et de traitement de la drépanocytose, en présence des autorités sanitaires et des partenaires.",
      "Marraine du Centre de recherche et de traitement de la drépanocytose, Madame Brigitte Touadéra, présidente de la Fondation Cri de Cœur d’une Mère, était représentée par sa directrice de cabinet, Madame Claire Gounindji. Ce dernier a porté le message de circonstance de la Première Dame, appelant les familles à s’engager davantage dans la prévention, le dépistage précoce et la prise en charge des personnes vivant avec la drépanocytose.",
      "Placée sous le thème « Pour une génération sans drépanocytose : unissons nos cœurs pour le dépistage systématique de la mère et du nouveau-né en RCA », cette commémoration a permis de renforcer la sensibilisation du public et de réaffirmer l’engagement des autorités et des partenaires.",
    ],
    meta: [{ label: "Thème 2026", value: "Dépistage systématique de la mère et du nouveau-né" }],
  },
  {
    slug: "champions-planification-familiale",
    title: "Les Champions de la Première Dame mobilisés pour la planification familiale",
    date: "18 septembre 2026",
    isoDate: "2026-09-18",
    category: "Santé",
    excerpt:
      "De quartier en quartier, à Bangui, Bimbo et Bégoua, la campagne de sensibilisation à la planification familiale a mobilisé les communautés.",
    image: "/images/fondation/marche-3.webp",
    alt: "Relais communautaires échangeant avec des commerçantes",
    body: [
      "La campagne de sensibilisation sur la planification familiale, conduite par les Champions de Son Excellence Madame Brigitte Touadéra, présidente de la Fondation Cri de Cœur d’une Mère, arrive à son terme.",
      "Durant cette campagne, les Champions, accompagnés de leurs superviseurs et des équipes de la Fondation, se sont fortement mobilisés sur le terrain dans les districts sanitaires de Bangui 1, Bangui 2, Bangui 3, Bimbo et Bégoua.",
      "De quartier en quartier, dans les marchés et autres espaces communautaires, les relais ont rencontré les populations pour partager des informations essentielles sur la planification familiale, l’espacement des naissances, ainsi que la santé et les droits sexuels et reproductifs.",
      "Cette mobilisation a permis d’échanger avec différentes catégories de la population, notamment les femmes, les hommes, les conducteurs de taxis-motos et les mécaniciens, afin de favoriser une meilleure compréhension des enjeux.",
      "Les activités de supervision, les séances de travail avec les agents de santé communautaire et les réunions de coordination ont permis de renforcer le suivi des actions menées.",
    ],
    meta: [
      { label: "Zones", value: "Bangui 1, 2, 3, Bimbo et Bégoua" },
      { label: "Partenaires", value: "Ministère de la Santé, OMS, ASC" },
    ],
  },
  {
    slug: "forum-planification-familiale",
    title: "Forum national sur la planification familiale à Bangui",
    date: "23 avril 2026",
    isoDate: "2026-04-23",
    category: "Santé",
    excerpt:
      "Sous le haut patronage du président de la République, le Forum national a réuni les acteurs de la santé autour d’une responsabilité partagée.",
    image: "/images/fondation/forum-femmes-leaders.webp",
    alt: "Forum des femmes leaders pour la paix et le développement",
    body: [
      "Le Forum national sur la planification familiale s’est tenu les 22 et 23 avril 2026 à l’hôtel Ledger Plaza de Bangui, sous le haut patronage de Son Excellence le président de la République, chef de l’État, Faustin-Archange Touadéra.",
      "Placé sous le thème « Planification familiale, une responsabilité partagée pour le développement durable de la République centrafricaine », le forum a réuni les autorités sanitaires, les partenaires techniques et financiers, les organisations de la société civile et les représentants des communautés.",
      "La Première Dame, Madame Brigitte Touadéra, présidente de la Fondation Cri de Cœur d’une Mère, a pris part aux travaux aux côtés des acteurs engagés pour la santé des mères et des enfants.",
      "Les échanges ont permis de formuler des recommandations et de poser les bases d’un suivi national des engagements pris en faveur de la planification familiale.",
    ],
    meta: [
      { label: "Dates", value: "22 et 23 avril 2026" },
      { label: "Lieu", value: "Hôtel Ledger Plaza, Bangui" },
    ],
  },
];

/** Partners named in the Foundation's posts. Without a logo they stay hidden on the site. */
export const featuredPartners = [
  { short: "Merck Foundation", name: "Merck Foundation", type: "Éducation et santé", logo: "" },
  { short: "OPDAD", name: "Organisation des Premières Dames d’Afrique pour le Développement", type: "Résilience", logo: "" },
  { short: "Ministère de la Santé", name: "Ministère de la Santé et de la Population", type: "Santé", logo: "" },
  { short: "OMS RCA", name: "Organisation mondiale de la Santé — République centrafricaine", type: "Santé", logo: "" },
  { short: "Ambassade de Chine", name: "Ambassade de la République populaire de Chine en RCA", type: "Éducation", logo: "" },
  { short: "Ministère des Finances", name: "Ministère des Finances et du Budget", type: "Inclusion financière", logo: "" },
] as const;

export const otherPartners: readonly string[] = [];
