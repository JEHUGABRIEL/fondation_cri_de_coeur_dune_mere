/** English copy for the seeded programmes and news. Falls back to French for new entries. */

export const programmesEn: Record<
  string,
  {
    title: string;
    kicker: string;
    description: string;
    program: string[];
    benefits: string[];
    note: string;
    badge: string;
    imageAlt: string;
  }
> = {
  "sante-planification-familiale": {
    title: "Maternal health and family planning",
    kicker: "Bangui, Bimbo, Bégoua",
    description:
      "A community programme on maternal and newborn health, family planning and access to local health services.",
    program: [
      "Outreach in neighbourhoods and markets",
      "Community health workers and Champions",
      "Advocacy with the health authorities",
      "Follow-up of the national forum recommendations",
    ],
    benefits: ["Better-informed families", "Local, continuous support", "Safer pregnancies"],
    note: "Delivered with the Ministry of Health and Population and the WHO.",
    badge: "Health",
    imageAlt: "Community health outreach with market women",
  },
  "education-bourses-filles": {
    title: "Education and scholarships for girls",
    kicker: "Scholarships & school kits",
    description:
      "Scholarships and school kits for girls from vulnerable families, so that hardship does not interrupt their schooling.",
    program: [
      "Scholarships for identified young girls",
      "School kits and classroom desks",
      "Follow-up with families and schools",
      "Partnerships with schools and foundations",
    ],
    benefits: ["Stay in school", "Renewed confidence", "Prepare for working life"],
    note: "40 scholarships were awarded with the Merck Foundation to girls from vulnerable families.",
    badge: "Scholarships",
    imageAlt: "School desks and kits handed over at a school",
  },
  "inclusion-financiere-femmes": {
    title: "Women’s financial inclusion and entrepreneurship",
    kicker: "VSLAs, SMEs & microcredit",
    description:
      "Support for women’s groups, village savings and loan associations and small businesses, to strengthen their economic autonomy.",
    program: [
      "Structuring village savings and loan associations",
      "Access to financial services and microcredit",
      "Support for women-led small and medium businesses",
      "Dialogue with institutions and financial partners",
    ],
    benefits: ["More stable income", "Better-run businesses", "A stronger voice in the community"],
    note: "The Brigitte Touadera Initiative for the Financial Inclusion of Central African Women leads this work.",
    badge: "Empowerment",
    imageAlt: "A mother and her child at a Bangui market",
  },
};

export type PostEn = {
  title: string;
  category: string;
  excerpt: string;
  quote?: string;
  body: string[];
  meta?: { label: string; value: string }[];
  imageAlt: string;
};

export const postsEn: Record<string, PostEn> = {
  "inclusion-financiere-avec": {
    title: "Women’s financial inclusion, a driver of development",
    category: "Empowerment",
    excerpt:
      "At the Foundation’s headquarters, a working session with VSLA clubs, development partners and the Ministry of Finance.",
    quote:
      "Giving women access to financial services strengthens their autonomy and that of their whole family.",
    body: [
      "As part of its action plan, the Cri de Cœur d’une Mère Foundation brought together the leaders of VSLA clubs, development partners, licensed microfinance institutions and representatives of the Ministry of Finance and Budget.",
      "Discussions focused on strengthening financial inclusion mechanisms, supporting women’s entrepreneurship and making village savings and loan associations a real driver of economic and social development.",
      "The work is part of the Brigitte Touadera Initiative for the Financial Inclusion of Central African Women, which aims to widen access to financial services and strengthen women’s contribution to sustainable development.",
    ],
    meta: [{ label: "Location", value: "Foundation headquarters, Bangui" }],
    imageAlt: "Working session on women’s financial inclusion",
  },
  "building-resilience-dakar": {
    title: "“Building Resilience” campaign closes in Dakar",
    category: "Resilience",
    excerpt:
      "Alongside Africa’s First Ladies, the Foundation took part in the closing events of the OPDAD campaign on the resilience of women and girls.",
    body: [
      "Africa’s First Ladies, gathered in Dakar for the “Building Resilience” campaign on the resilience of women and girls to climate change and conflict, completed their activities on Thursday 15 October 2026.",
      "Madame Brigitte Touadéra, First Lady of the Central African Republic, joined her counterparts from Senegal, Sierra Leone, The Gambia, Gabon, Burundi and Cape Verde to visit Gorée Island, a major site of memory for the transatlantic slave trade.",
      "Led by the Organisation of African First Ladies for Development (OPDAD), the campaign reaffirms the commitment of First Ladies to protecting and empowering women and girls in the face of climate change and conflict.",
    ],
    meta: [
      { label: "Location", value: "Dakar, Senegal" },
      { label: "Campaign", value: "Building Resilience — OPDAD" },
    ],
    imageAlt: "The Foundation’s president during the Dakar visit",
  },
  "kits-scolaires-bella-airport": {
    title: "School kits and desks for Bella Airport school",
    category: "Education",
    excerpt:
      "During the Chinese ambassador’s farewell visit, the Foundation handed school materials to pupils of Bella Airport school.",
    body: [
      "At the end of his mission in the Central African Republic, His Excellency Li Qi Feng, Ambassador of the People’s Republic of China, paid a farewell visit to Madame Brigitte Touadéra, First Lady of the Central African Republic and president of the Cri de Cœur d’une Mère Foundation, at the Foundation’s headquarters in Bangui.",
      "The ambassador expressed his gratitude to the First Lady for the support she gave him throughout his mission, strengthening friendship and cooperation between the two countries.",
      "He donated school kits and classroom desks to the Foundation, intended in particular for social and educational work with vulnerable communities. School officials welcomed the contribution, which improves pupils’ learning conditions.",
    ],
    meta: [{ label: "Beneficiaries", value: "Pupils of Bella Airport school, Bangui" }],
    imageAlt: "School desks handed over at a Bangui school",
  },
  "bourses-merck-foundation": {
    title: "40 young girls receive scholarships",
    category: "Education",
    excerpt:
      "Thanks to the partnership with the Merck Foundation, 40 pupils from vulnerable families receive a scholarship to continue their studies.",
    quote: "Educating a girl is preparing the future of an entire community.",
    body: [
      "Madame Brigitte Touadéra, First Lady of the Central African Republic and president of the Cri de Cœur d’une Mère Foundation, took part in the Merck Foundation scholarship ceremony for 40 girls from disadvantaged families.",
      "The initiative supports the schooling of girls from vulnerable backgrounds, giving them more chances to continue their studies and build a better future.",
      "The ceremony also honoured the winners of the Merck Awards, which recognise public engagement on social and health issues. Both foundations reaffirmed their shared commitment to education, talent and human development in the Central African Republic.",
    ],
    meta: [
      { label: "Partner", value: "Merck Foundation" },
      { label: "Beneficiaries", value: "40 young girls" },
    ],
    imageAlt: "School bags handed over with the Chinese ambassador",
  },
  "drepacytose-2026": {
    title: "World Sickle Cell Day 2026",
    category: "Health",
    excerpt:
      "Screening, care and awareness: the Foundation stands with the Sickle Cell Research and Treatment Centre.",
    body: [
      "Every 19 June, the world marks World Sickle Cell Day. In the Central African Republic, the 2026 edition was held at the Sickle Cell Research and Treatment Centre, in the presence of health authorities and partners.",
      "As patron of the Centre, Madame Brigitte Touadéra, president of the Foundation, was represented by her chief of staff, Madame Claire Gounindji. She called on families to commit to prevention, early screening and the care of people living with sickle cell disease.",
      "The theme, “For a generation without sickle cell disease: join our hearts for systematic screening of mothers and newborns in the CAR”, renewed the commitment of authorities and partners to awareness and early diagnosis.",
    ],
    meta: [{ label: "2026 theme", value: "Systematic screening of mothers and newborns" }],
    imageAlt: "World Sickle Cell Day ceremony in Bangui",
  },
  "champions-planification-familiale": {
    title: "Champions mobilise for family planning",
    category: "Health",
    excerpt:
      "From neighbourhood to neighbourhood, in Bangui, Bimbo and Bégoua, the family planning campaign reached communities across the city.",
    body: [
      "The family planning awareness campaign led by the Champions of Madame Brigitte Touadéra, president of the Foundation, has come to an end.",
      "Throughout the campaign, the Champions, their supervisors and Foundation teams worked in the health districts of Bangui 1, Bangui 2, Bangui 3, Bimbo and Bégoua.",
      "In markets and community spaces, they shared essential information on family planning, birth spacing and sexual and reproductive health and rights, speaking with women, men, moto-taxi drivers and mechanics.",
      "Supervision sessions with community health workers and coordination meetings strengthened the follow-up of the activities.",
    ],
    meta: [
      { label: "Areas", value: "Bangui 1, 2, 3, Bimbo and Bégoua" },
      { label: "Partners", value: "Ministry of Health, WHO, community health workers" },
    ],
    imageAlt: "Community health workers talking with market women",
  },
  "forum-planification-familiale": {
    title: "National Family Planning Forum in Bangui",
    category: "Health",
    excerpt:
      "Under the high patronage of the President of the Republic, the national forum brought health stakeholders together around a shared responsibility.",
    body: [
      "The National Family Planning Forum was held on 22 and 23 April 2026 at the Ledger Plaza hotel in Bangui, under the high patronage of His Excellency President Faustin-Archange Touadéra.",
      "Under the theme “Family planning, a shared responsibility for the sustainable development of the Central African Republic”, it gathered health authorities, technical and financial partners, civil society and community representatives.",
      "Madame Brigitte Touadéra, First Lady and president of the Foundation, took part alongside stakeholders working for the health of mothers and children. The discussions produced recommendations and set the basis for national follow-up of family planning commitments.",
    ],
    meta: [
      { label: "Dates", value: "22 and 23 April 2026" },
      { label: "Location", value: "Ledger Plaza hotel, Bangui" },
    ],
    imageAlt: "Forum of women leaders for peace and development",
  },
};
