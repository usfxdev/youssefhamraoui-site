// Shared, language-independent data: names, links and images.
// All visible copy lives in content/dictionaries, content/solutions, content/cases and content/demos.
import type { StaticImageData } from "next/image";
import type { ProductKey, WorkSlug } from "./types";
import rachaDesktop from "@/public/work/rachafood-desktop.jpg";
import rachaMobile from "@/public/work/rachafood-mobile.jpg";
import galaxyDesktop from "@/public/work/galaxypets-desktop.jpg";
import galaxyMobile from "@/public/work/galaxypets-mobile.jpg";
import prospera from "@/public/img/prospera.jpg";
import momentum from "@/public/img/momentum.jpg";
import nestling from "@/public/img/nestling.jpg";
import pawprint from "@/public/img/pawprint.jpg";
import aisle from "@/public/img/aisle.jpg";

export const site = {
  name: "Youssef Hamraoui",
  url: "https://youssefhamraoui.com",
  email: "youssefhamraouiweb@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/youssefhamraoui" },
    { label: "GitHub", href: "https://github.com/usfxdev" },
    { label: "Instagram", href: "https://instagram.com/hamraouibuild" },
  ],
};

export const work: {
  slug: WorkSlug;
  title: string;
  live: { label: string; href: string };
  desktop: StaticImageData;
  mobile: StaticImageData;
}[] = [
  {
    slug: "racha-food",
    title: "Racha Food",
    live: { label: "rachafood.com", href: "https://rachafood.com/" },
    desktop: rachaDesktop,
    mobile: rachaMobile,
  },
  {
    slug: "galaxy-pets",
    title: "Galaxy Pets",
    live: { label: "galaxypetss.com", href: "https://galaxypetss.com/" },
    desktop: galaxyDesktop,
    mobile: galaxyMobile,
  },
];

export const products: { key: ProductKey; name: string; image: StaticImageData }[] = [
  { key: "prospera", name: "Prospera", image: prospera },
  { key: "momentum", name: "Momentum", image: momentum },
  { key: "nestling", name: "Nestling", image: nestling },
  { key: "pawprint", name: "Pawprint", image: pawprint },
  { key: "aisle", name: "Aisle", image: aisle },
];
