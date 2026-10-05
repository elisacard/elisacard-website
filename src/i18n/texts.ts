// All website texts live here, English and French side by side.
// Rule: every change is made in BOTH languages.
// Lines marked "TODO" are placeholders waiting for Elisa's own words.

export type Lang = 'en' | 'fr';
export type T = { en: string; fr: string };

export const site = {
  name: 'Elisa Card',
  tagline: { en: 'Wellbeing coach, author and speaker', fr: 'Coach en bien-être, autrice et conférencière' },
  motto: { en: 'Life is meant to be taken lightly.', fr: 'La vie est faite pour être prise avec légèreté.' },
  menu: { en: 'Menu', fr: 'Menu' },
  switchLabel: { en: 'Version française', fr: 'English version' },
  switchShort: { en: 'FR', fr: 'EN' },
};

// Menu: label in each language + page address (same address in both languages)
export const nav: { path: string; label: T }[] = [
  { path: '', label: { en: 'Home', fr: 'Accueil' } },
  { path: 'about', label: { en: 'About', fr: 'À propos' } },
  { path: 'coaching', label: { en: 'Coaching', fr: 'Coaching' } },
  { path: 'retreats', label: { en: 'Retreats', fr: 'Retraites' } },
  { path: 'speaking', label: { en: 'Speaking & Webinars', fr: 'Conférences & Webinaires' } },
  { path: 'blog', label: { en: 'Blog', fr: 'Blog' } },
  { path: 'contact', label: { en: 'Contact', fr: 'Contact' } },
];

const contactCta = {
  title: { en: 'Shall we talk?', fr: 'On en parle ?' },
  text: {
    en: 'Tell me where you are today. We will find the way that suits you.',
    fr: 'Dites-moi où vous en êtes aujourd’hui. Nous trouverons ensemble la voie qui vous convient.',
  },
  button: { en: 'Contact me', fr: 'Me contacter' },
};

export const pages = {
  home: {
    metaTitle: { en: 'Elisa Card · Wellbeing coach', fr: 'Elisa Card · Coach en bien-être' },
    metaDescription: {
      en: 'Elisa Card raised five boys alone. She teaches methods to avoid overwhelm and take life lightly.',
      fr: 'Elisa Card a élevé seule ses cinq garçons. Elle transmet des méthodes pour éviter le débordement et prendre la vie avec légèreté.',
    },
    eyebrow: { en: 'Wellbeing coach', fr: 'Coach en bien-être' },
    title: { en: 'Life is meant to be taken lightly.', fr: 'La vie est faite pour être prise avec légèreté.' },
    intro: {
      en: 'I raised five boys alone. Today I share the methods and techniques that help you avoid overwhelm when life brings the unexpected.',
      fr: 'J’ai élevé seule mes cinq garçons. Aujourd’hui, je partage les méthodes et les techniques qui vous aident à éviter le débordement quand la vie vous surprend.',
    },
    primary: { en: 'Read my story', fr: 'Découvrir mon histoire' },
    secondary: { en: 'Ways to work with me', fr: 'Travailler avec moi' },
    storyTitle: { en: 'My journey', fr: 'Mon parcours' },
    // TODO: a short version of Elisa's story, in her words
    storyText: {
      en: '[Short version of Elisa’s story — to write together]',
      fr: '[Version courte de l’histoire d’Elisa — à écrire ensemble]',
    },
    storyLink: { en: 'Read the full story', fr: 'Lire toute l’histoire' },
    waysTitle: { en: 'Ways to work with me', fr: 'Travailler avec moi' },
    ways: [
      {
        path: 'coaching',
        title: { en: 'Coaching', fr: 'Coaching' },
        // TODO: one sentence on coaching
        text: { en: '[One sentence about coaching]', fr: '[Une phrase sur le coaching]' },
      },
      {
        path: 'retreats',
        title: { en: 'Retreats', fr: 'Retraites' },
        // TODO: one sentence on retreats
        text: { en: '[One sentence about retreats]', fr: '[Une phrase sur les retraites]' },
      },
      {
        path: 'speaking',
        title: { en: 'Speaking & Webinars', fr: 'Conférences & Webinaires' },
        // TODO: one sentence on speaking and webinars
        text: { en: '[One sentence about talks and webinars]', fr: '[Une phrase sur les conférences et webinaires]' },
      },
    ],
    more: { en: 'Discover', fr: 'Découvrir' },
    cta: contactCta,
  },

  about: {
    metaTitle: { en: 'About · Elisa Card', fr: 'À propos · Elisa Card' },
    eyebrow: { en: 'About', fr: 'À propos' },
    title: { en: 'Five boys, one mother, and a lighter way to live', fr: 'Cinq garçons, une mère, et une façon plus légère de vivre' },
    // TODO: Elisa's opening sentence
    intro: { en: '[Opening sentence of Elisa’s story]', fr: '[Première phrase de l’histoire d’Elisa]' },
    sections: [
      // TODO: the three parts of Elisa's story
      { title: { en: 'My journey', fr: 'Mon parcours' }, text: { en: '[The years raising five boys alone]', fr: '[Les années à élever seule cinq garçons]' } },
      { title: { en: 'What life taught me', fr: 'Ce que la vie m’a appris' }, text: { en: '[What these years taught Elisa]', fr: '[Ce que ces années ont appris à Elisa]' } },
      { title: { en: 'Why I coach', fr: 'Pourquoi j’accompagne' }, text: { en: '[Why Elisa became a coach]', fr: '[Pourquoi Elisa est devenue coach]' } },
    ],
    cta: contactCta,
  },

  coaching: {
    metaTitle: { en: 'Coaching · Elisa Card', fr: 'Coaching · Elisa Card' },
    eyebrow: { en: 'Coaching', fr: 'Coaching' },
    title: { en: 'Find calm when life gets heavy', fr: 'Retrouver le calme quand la vie pèse' },
    // TODO: who coaching is for and what changes
    intro: { en: '[Who coaching is for and what it changes]', fr: '[À qui s’adresse le coaching et ce qu’il change]' },
    sections: [
      // TODO: format, length, price
      { title: { en: 'How it works', fr: 'Comment ça se passe' }, text: { en: '[Format, length and price]', fr: '[Format, durée et tarif]' } },
      { title: { en: 'Is it for you?', fr: 'Est-ce pour vous ?' }, text: { en: '[Signs this coaching is right for someone]', fr: '[Les signes que ce coaching est fait pour vous]' } },
    ],
    cta: contactCta,
  },

  retreats: {
    metaTitle: { en: 'Retreats · Elisa Card', fr: 'Retraites · Elisa Card' },
    eyebrow: { en: 'Retreats', fr: 'Retraites' },
    title: { en: 'A few days to breathe again', fr: 'Quelques jours pour respirer à nouveau' },
    // TODO: what a retreat feels like
    intro: { en: '[What a retreat with Elisa feels like]', fr: '[Ce que l’on vit pendant une retraite avec Elisa]' },
    sections: [
      // TODO: dates, place, price, booking
      { title: { en: 'Upcoming retreats', fr: 'Prochaines retraites' }, text: { en: '[Dates, place, price and how to book]', fr: '[Dates, lieu, tarif et réservation]' } },
    ],
    cta: contactCta,
  },

  speaking: {
    metaTitle: { en: 'Speaking & Webinars · Elisa Card', fr: 'Conférences & Webinaires · Elisa Card' },
    eyebrow: { en: 'Speaking & Webinars', fr: 'Conférences & Webinaires' },
    title: { en: 'Talks that lighten the load', fr: 'Des conférences qui allègent le quotidien' },
    // TODO: who Elisa speaks for
    intro: { en: '[Who Elisa speaks for: companies, schools, associations…]', fr: '[Pour qui Elisa intervient : entreprises, écoles, associations…]' },
    sections: [
      // TODO: talk topics and next webinar
      { title: { en: 'Talk topics', fr: 'Thèmes de conférence' }, text: { en: '[Main talk topics]', fr: '[Principaux thèmes de conférence]' } },
      { title: { en: 'Next webinar', fr: 'Prochain webinaire' }, text: { en: '[Date, topic and how to join]', fr: '[Date, thème et inscription]' } },
    ],
    cta: contactCta,
  },

  blog: {
    metaTitle: { en: 'Blog · Elisa Card', fr: 'Blog · Elisa Card' },
    eyebrow: { en: 'Blog', fr: 'Blog' },
    title: { en: 'Ideas to take life lightly', fr: 'Des idées pour prendre la vie avec légèreté' },
    intro: { en: 'Simple methods and stories for the days when everything comes at once.', fr: 'Des méthodes simples et des histoires pour les jours où tout arrive en même temps.' },
    empty: { en: 'The first articles are on their way.', fr: 'Les premiers articles arrivent bientôt.' },
  },

  contact: {
    metaTitle: { en: 'Contact · Elisa Card', fr: 'Contact · Elisa Card' },
    eyebrow: { en: 'Contact', fr: 'Contact' },
    title: { en: 'Let’s talk', fr: 'Parlons-en' },
    intro: { en: 'Write to me about coaching, a retreat or a talk. I reply personally.', fr: 'Écrivez-moi pour un coaching, une retraite ou une conférence. Je réponds personnellement.' },
    // TODO: contact form, email and social links (step 11 of the plan)
    soon: { en: '[Contact form, email and social links]', fr: '[Formulaire, e-mail et réseaux sociaux]' },
  },
};

export const pick = (text: T, lang: Lang) => text[lang];

export const href = (lang: Lang, path: string) =>
  lang === 'en' ? `/${path}` : `/fr/${path}`;
