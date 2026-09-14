import type { MetadataRoute } from "next";
import { site } from "@/content/site";
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
  const pages: Alternates[] = [
    alternatesFor(paths.home),
    ...workSlugs.map((slug) => alternatesFor((l) => paths.work(l, slug))),
    ...industries.map((i) => alternatesFor((l) => paths.industry(l, i))),
    ...industries.flatMap((i) => industryCities[i].map((c) => alternatesFor((l) => paths.city(l, i, c)))),
    ...demoKeys.map((d) => alternatesFor((l) => paths.demo(l, d))),
  ];

  const lastModified = new Date();
  // List both language versions, each pointing at the other.
  return pages.flatMap((page) => {
    const languages = { en: absolute(page.en), fr: absolute(page.fr) };
    return [
      { url: absolute(page.en), lastModified, alternates: { languages } },
      { url: absolute(page.fr), lastModified, alternates: { languages } },
    ];
  });
}
