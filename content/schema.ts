// Structured data (JSON-LD). Every page gets one @graph: Person, WebSite and its WebPage,
// plus a BreadcrumbList on inner pages, ProfessionalService + Service on the industry and city
// pages, and a CreativeWork on each case study.
// Names, roles and descriptions come from the same copy as the page and its meta tags,
// so editing the copy updates the schema too. No ratings or reviews, on purpose.
import { getDictionary } from "./i18n";
import { fullTitle, ogImage, type PageSeo } from "./seo";
import { site, work } from "./site";
import type { Locale, WorkSlug } from "./types";

type Node = Record<string, unknown>;
export type Crumb = { name: string; path: string };

/** Absolute URL in the same form as the canonical link and sitemap.xml. */
export const absoluteUrl = (path: string) => (path === "/" ? site.url : `${site.url}${path}`);

/** Stable node ids, e.g. https://youssefhamraoui.com/#person. */
const nodeId = (path: string, name: string) => `${path === "/" ? `${site.url}/` : absoluteUrl(path)}#${name}`;

export const ids = {
  person: nodeId("/", "person"),
  website: nodeId("/", "website"),
  business: nodeId("/", "business"),
};

const ref = (id: string) => ({ "@id": id });

const country: Record<Locale, Node> = {
  en: { "@type": "Country", name: "Morocco" },
  fr: { "@type": "Country", name: "Maroc" },
};

// "Based: Khouribga, Morocco" on the home page.
const address = { "@type": "PostalAddress", addressLocality: "Khouribga", addressCountry: "MA" };

function person(lang: Locale): Node {
  return {
    "@type": "Person",
    "@id": ids.person,
    name: site.name,
    url: absoluteUrl("/"),
    jobTitle: getDictionary(lang).meta.jobTitle,
    email: site.email,
    address,
    knowsLanguage: ["en", "fr"],
    // Only the profiles the site links to in its header, footer and contact section.
    sameAs: site.socials.map((s) => s.href),
  };
}

function website(): Node {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: site.name,
    inLanguage: ["en", "fr"],
    publisher: ref(ids.person),
  };
}

function webPage(page: PageSeo, extra: Node): Node {
  const path = page.alternates[page.lang];
  return {
    "@type": "WebPage",
    "@id": nodeId(path, "webpage"),
    url: absoluteUrl(path),
    name: fullTitle(page),
    description: page.description,
    inLanguage: page.lang,
    isPartOf: ref(ids.website),
    ...extra,
  };
}

function breadcrumbs(path: string, crumbs: Crumb[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": nodeId(path, "breadcrumb"),
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** The first crumb of every inner page. */
export const homeCrumb = (lang: Locale): Crumb => ({
  name: getDictionary(lang).ui.home,
  path: lang === "en" ? "/" : "/fr",
});

/** Home page: who the site is about. */
export function homeGraph(page: PageSeo): Node[] {
  return [person(page.lang), website(), webPage(page, { about: ref(ids.person), mainEntity: ref(ids.person) })];
}

/** Any inner page without its own main entity (the demos). */
export function innerGraph(page: PageSeo, crumbs: Crumb[]): Node[] {
  const path = page.alternates[page.lang];
  return [
    person(page.lang),
    website(),
    webPage(page, { breadcrumb: ref(nodeId(path, "breadcrumb")), author: ref(ids.person) }),
    breadcrumbs(path, crumbs),
  ];
}

/** Industry and city pages: the practice (ProfessionalService) and the offer on this page (Service). */
export function serviceGraph(page: PageSeo, crumbs: Crumb[], city?: string): Node[] {
  const { lang } = page;
  const path = page.alternates[lang];
  const serviceId = nodeId(path, "service");
  const business: Node = {
    "@type": "ProfessionalService",
    "@id": ids.business,
    name: site.name,
    url: absoluteUrl("/"),
    description: getDictionary(lang).meta.description,
    image: absoluteUrl(ogImage(lang).url),
    email: site.email,
    address,
    areaServed: country[lang],
    knowsLanguage: ["en", "fr"],
    founder: ref(ids.person),
  };
  const service: Node = {
    "@type": "Service",
    "@id": serviceId,
    name: page.title,
    description: page.description,
    url: absoluteUrl(path),
    provider: ref(ids.business),
    areaServed: city ? { "@type": "City", name: city, containedInPlace: country[lang] } : country[lang],
  };
  return [
    person(lang),
    website(),
    webPage(page, {
      breadcrumb: ref(nodeId(path, "breadcrumb")),
      about: ref(serviceId),
      mainEntity: ref(serviceId),
    }),
    breadcrumbs(path, crumbs),
    business,
    service,
  ];
}

/** Case studies: the project as a CreativeWork by the Person, about the client's business. */
export function caseStudyGraph(page: PageSeo, crumbs: Crumb[], slug: WorkSlug): Node[] {
  const { lang } = page;
  const path = page.alternates[lang];
  const item = work.find((w) => w.slug === slug)!;
  const caseId = nodeId(path, "case-study");
  return [
    person(lang),
    website(),
    webPage(page, {
      breadcrumb: ref(nodeId(path, "breadcrumb")),
      about: ref(caseId),
      mainEntity: ref(caseId),
    }),
    breadcrumbs(path, crumbs),
    {
      "@type": "CreativeWork",
      "@id": caseId,
      name: item.title,
      headline: page.title,
      description: page.description,
      genre: getDictionary(lang).work.caseStudy,
      url: absoluteUrl(path),
      inLanguage: lang,
      image: {
        "@type": "ImageObject",
        url: absoluteUrl(item.desktop.src),
        width: item.desktop.width,
        height: item.desktop.height,
      },
      author: ref(ids.person),
      creator: ref(ids.person),
      about: { "@type": "Organization", name: item.title, url: item.live.href },
      isPartOf: ref(ids.website),
      mainEntityOfPage: ref(nodeId(path, "webpage")),
    },
  ];
}
