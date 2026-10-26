// When each group of pages last changed in a way search engines care about: the visible copy,
// the title and description, the links or the structured data. sitemap.xml sends these as <lastmod>.
// Bump a group's date when you change its pages. Don't use the build time instead:
// every deploy would then claim that all 58 pages changed, and Google learns to ignore lastmod.
//
// History: the copy of every group dates from the launch on 2026-09-14. On 2026-10-26 every page
// gained JSON-LD, an og:image and a direct language-switch link, and the home and long French
// titles were rewritten, so every group moved to that date.
export const updated = {
  home: "2026-10-26",
  work: "2026-10-26", // case studies, content/cases
  solutions: "2026-10-26", // industry pages, content/solutions
  cities: "2026-10-26", // city pages, content/solutions (city templates) and content/cities.ts
  demos: "2026-10-26", // content/demos
} as const;
