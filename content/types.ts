export type Locale = "en" | "fr";
export type WorkSlug = "racha-food" | "galaxy-pets";
export type ProductKey = "prospera" | "momentum" | "nestling" | "pawprint" | "aisle";
export type IndustryKey = "restaurants" | "e-commerce" | "car-rental";
export type CityKey =
  | "casablanca"
  | "rabat"
  | "marrakech"
  | "fes"
  | "tanger"
  | "agadir"
  | "meknes"
  | "kenitra"
  | "khouribga";
export type DemoKey = "restaurant-system" | "ecommerce-system";

type Labelled = { label: string; sub: string };
type Head = { eyebrow: string; heading: string };
export type FlowStep = { title: string; detail: string; status: string };
export type QA = { q: string; a: string };
export type LeadItem = { lead: string; text: string };

/** Copy for one industry: its hub page and the template for its city pages. */
export type SolutionCopy = {
  navLabel: string;
  card: { eyebrow: string; title: string; text: string };
  eyebrow: string;
  trustLine: string;
  hub: { metaTitle: string; metaDescription: string; h1: string; lede: string };
  city: {
    metaTitle: (city: string) => string;
    metaDescription: (city: string) => string;
    h1: (city: string) => string;
    lede: (city: string) => string;
    whyEyebrow: (city: string) => string;
    whyHeading: (city: string) => string;
    whyBody: (city: string) => string;
    faq: (city: string) => QA;
    alsoHeading: string;
    allLink: string;
  };
  heroSecondary: string;
  pains: Head & { items: string[]; note: string };
  system: Head & {
    features: { title: string; tagline: string; text: string; tags: string[] }[];
    flowLabel: string;
    flow: FlowStep[];
  };
  changes: Head & { items: LeadItem[] };
  proof: Head & { text: string; linkLabel: string; demoLabel?: string };
  faq: Head & { items: QA[] };
  where: Head & { intro: string };
  cta: Head & { text: string; secondary: string };
};

export type CaseStudyCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lede: string;
  facts: { label: string; value: string }[];
  liveLabel: string;
  sections: (Head & { paragraphs?: string[]; list?: LeadItem[]; note?: string })[];
  cta: Head;
};

export type DemoCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  heroSecondary: string;
  note: string;
  steps: Head & { intro: string; items: { title: string; text: string }[] };
  behind: Head & { intro: string; label: string; flow: FlowStep[]; footer: string };
  difference: Head & { withoutTitle: string; without: string[]; withTitle: string; with: string[] };
  numbers: Head & { items: { figure: string; unit: string; text: string }[] };
  proof: { text: string; linkLabel: string };
  cta: Head & { text: string; secondary: string };
};

export type Dictionary = {
  meta: { description: string; ogDescription: string; ogLocale: string };
  nav: {
    sections: string;
    language: string;
    work: string;
    whoIHelp: string;
    services: string;
    process: string;
    contact: string;
  };
  ui: {
    bookCall: string;
    bookDiscovery: string;
    readCase: string;
    seeMoreWork: string;
    seeSystem: string;
    live: string;
    home: string;
  };
  hero: {
    status: string;
    h1Before: string;
    h1Em: string;
    h1After: string;
    lede: string;
    cta: string;
    seeWork: string;
    facts: { label: string; value: string }[];
  };
  work: Labelled & {
    caseStudy: string;
    items: Record<WorkSlug, { meta: string[]; description: string; outcome: string; alt: string }>;
  };
  whoIHelp: Labelled & { heading: string };
  products: Labelled & {
    heading: string;
    intro: string;
    items: Record<ProductKey, { blurb: string; alt: string }>;
  };
  services: Labelled & {
    items: { title: string; text: string; tools: string }[];
    else: string;
  };
  process: Labelled & {
    steps: { title: string; tag: string; text: string }[];
  };
  about: {
    label: string;
    paragraphs: string[];
    principles: { title: string; text: string }[];
  };
  contact: Labelled & { heading: string; how: string; subject: string };
  footer: { place: string; note: string; tagline: string; site: string; whoIHelp: string; social: string };
  solutions: Record<IndustryKey, SolutionCopy>;
  cases: Record<WorkSlug, CaseStudyCopy>;
  demos: Record<DemoKey, DemoCopy>;
};
