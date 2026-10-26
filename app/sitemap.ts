import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { updated } from "@/content/updated";
import {
  alternatesFor,
  demoKeys,
  industries,
  industryCities,
  paths,
  workSlugs,
  type Alternates,
} from "@/content/routes";

const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // Each page with the date its group last changed (content/updated.ts), never the build time.
  const pages: { page: Alternates; lastModified: string }[] = [
    { page: alternatesFor(paths.home), lastModified: updated.home },
    ...workSlugs.map((slug) => ({ page: alternatesFor((l) => paths.work(l, slug)), lastModified: updated.work })),
    ...industries.map((i) => ({ page: alternatesFor((l) => paths.industry(l, i)), lastModified: updated.solutions })),
    ...industries.flatMap((i) =>
      industryCities[i].map((c) => ({ page: alternatesFor((l) => paths.city(l, i, c)), lastModified: updated.cities })),
    ),
    ...demoKeys.map((d) => ({ page: alternatesFor((l) => paths.demo(l, d)), lastModified: updated.demos })),
  ];

  // List both language versions, each pointing at the other.
  return pages.flatMap(({ page, lastModified }) => {
    const languages = { en: absolute(page.en), fr: absolute(page.fr) };
    return [
      { url: absolute(page.en), lastModified, alternates: { languages } },
      { url: absolute(page.fr), lastModified, alternates: { languages } },
    ];
  });
}
