import type { CityKey, Locale } from "./types";

// City names and the one paragraph about each local market.
// The same paragraph appears on every industry page for that city.
export const cities: Record<CityKey, Record<Locale, { name: string; blurb: string }>> = {
  casablanca: {
    en: {
      name: "Casablanca",
      blurb:
        "Casablanca is Morocco's biggest and most competitive market. Customers here compare you to the best-run businesses in the country — and the ones with smooth digital systems win the repeat business.",
    },
    fr: {
      name: "Casablanca",
      blurb:
        "Casablanca est le marché le plus grand et le plus concurrentiel du Maroc. Vos clients vous comparent aux entreprises les mieux organisées du pays — et ce sont celles qui ont des systèmes digitaux fluides qui gagnent les clients fidèles.",
    },
  },
  rabat: {
    en: {
      name: "Rabat",
      blurb:
        "Rabat customers expect a professional, organised experience — the capital is full of administrations, institutions and service businesses that set the bar. A clean digital system is how you meet it.",
    },
    fr: {
      name: "Rabat",
      blurb:
        "À Rabat, la clientèle attend une expérience professionnelle et organisée — la capitale regorge d'institutions et d'entreprises de services qui placent la barre haut. Un système digital propre est le moyen d'être à la hauteur.",
    },
  },
  marrakech: {
    en: {
      name: "Marrakech",
      blurb:
        "Marrakech serves an international clientele that books, orders and pays online by default. A multilingual, automated system is not a luxury here — it is what tourists and locals alike expect.",
    },
    fr: {
      name: "Marrakech",
      blurb:
        "Marrakech sert une clientèle internationale qui réserve, commande et paie en ligne par défaut. Un système multilingue et automatisé n'y est pas un luxe — c'est ce que touristes et locaux attendent.",
    },
  },
  fes: {
    en: {
      name: "Fez",
      blurb:
        "Fez has a large, loyal local market where most businesses still run on phone calls and notebooks. The first ones to move to a real digital system stand out fast.",
    },
    fr: {
      name: "Fès",
      blurb:
        "Fès a un grand marché local fidèle où la plupart des commerces tournent encore au téléphone et au cahier. Les premiers à passer à un vrai système digital se démarquent vite.",
    },
  },
  tanger: {
    en: {
      name: "Tangier",
      blurb:
        "Tangier is one of Morocco's fastest-growing economies — new businesses open every month and a young, connected population orders online. Growth here rewards whoever is organised enough to absorb it.",
    },
    fr: {
      name: "Tanger",
      blurb:
        "Tanger est l'une des économies qui croissent le plus vite au Maroc — de nouvelles entreprises ouvrent chaque mois et une population jeune et connectée commande en ligne. Ici, la croissance récompense ceux qui sont assez organisés pour l'absorber.",
    },
  },
  agadir: {
    en: {
      name: "Agadir",
      blurb:
        "Agadir lives on tourism and seasonal peaks. The right system absorbs high season without hiring extra staff — and keeps working for you in the low season.",
    },
    fr: {
      name: "Agadir",
      blurb:
        "Agadir vit du tourisme et des pics saisonniers. Le bon système absorbe la haute saison sans embaucher davantage — et continue de travailler pour vous en basse saison.",
    },
  },
  meknes: {
    en: {
      name: "Meknes",
      blurb:
        "Meknes is a solid regional market with little real competition online. Becoming the best-organised business in your category here is very achievable — and very visible.",
    },
    fr: {
      name: "Meknès",
      blurb:
        "Meknès est un marché régional solide avec peu de vraie concurrence en ligne. Devenir l'entreprise la mieux organisée de votre catégorie y est très atteignable — et très visible.",
    },
  },
  kenitra: {
    en: {
      name: "Kenitra",
      blurb:
        "Kenitra is growing fast — industry, new neighbourhoods, a young connected population. Businesses that set up real systems now grow with the city instead of running after it.",
    },
    fr: {
      name: "Kénitra",
      blurb:
        "Kénitra grandit vite — industrie, nouveaux quartiers, population jeune et connectée. Les entreprises qui installent de vrais systèmes maintenant grandissent avec la ville au lieu de courir derrière.",
    },
  },
  khouribga: {
    en: {
      name: "Khouribga",
      blurb:
        "Khouribga is my home base — the one city where we can sit down together in person. Local businesses here get the same systems I build for Casablanca or Marrakech, with a handshake on top.",
    },
    fr: {
      name: "Khouribga",
      blurb:
        "Khouribga est ma ville — la seule où l'on peut s'asseoir ensemble en personne. Les entreprises locales y reçoivent les mêmes systèmes que je construis pour Casablanca ou Marrakech, avec une poignée de main en plus.",
    },
  },
};
