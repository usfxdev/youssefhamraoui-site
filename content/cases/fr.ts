import type { CaseStudyCopy, WorkSlug } from "../types";

const cases: Record<WorkSlug, CaseStudyCopy> = {
  "racha-food": {
    metaTitle: "Étude de cas : plateforme de commande Racha Food",
    metaDescription:
      "Une plateforme de commande complète — vitrine Next.js trilingue, backend Express + MongoDB, suivi WhatsApp en temps réel, notifications push et application Flutter native — pour un traiteur marrakchi.",
    eyebrow: "Étude de cas · En cours",
    lede: "Une plateforme de commande complète — web, mobile et back-office — pour un traiteur de cuisine maison à Marrakech. Vitrine trilingue, suivi WhatsApp en temps réel et application native, construits de zéro.",
    facts: [
      { label: "Client", value: "Racha Food — Marrakech" },
      { label: "Catégorie", value: "Plateforme de commande" },
      { label: "Périmètre", value: "Web · Mobile · Admin" },
      { label: "Stack", value: "Next.js · Express · MongoDB · Flutter" },
    ],
    liveLabel: "Voir le site en ligne",
    sections: [
      {
        eyebrow: "Le défi",
        heading: "Une activité de restauration qui grandit, gérée depuis un téléphone et un cahier.",
        paragraphs: [
          "Racha Food vend des plats marocains faits maison à Marrakech, à des clients qui parlent français, anglais et arabe. Les commandes arrivaient par WhatsApp et par téléphone — prises à la main, suivies sur papier, et faciles à perdre aux pires moments.",
          "Aucune vraie vitrine pour que les clients parcourent le menu et commandent eux-mêmes, aucun statut de commande en direct, et rien qui relie la cuisine, la livraison et le client. Plus de commandes, c'était plus de chaos — pas plus de chiffre d'affaires.",
          "Ce qu'il leur fallait, ce n'était pas un site. C'était un système d'exploitation — qui prend la commande, la suit, tient tout le monde informé, et fonctionne en trois langues sur chaque appareil.",
        ],
      },
      {
        eyebrow: "Ce que j'ai construit",
        heading: "Un seul système sur le web, le mobile et le back-office.",
        list: [
          { lead: "Une vitrine trilingue", text: "un site Next.js 16 / React 19 en français, anglais et arabe (RTL complet), avec menu, panier et paiement." },
          { lead: "Cartes pour l'adresse & les zones de livraison", text: "des cartes Leaflet interactives pour que le client pointe sa position et voie s'il est dans la zone." },
          { lead: "Comptes & connexion en un clic", text: "connexion Google et comptes e-mail, avec des sessions JWT sécurisées." },
          { lead: "Suivi de commande WhatsApp en temps réel", text: "chaque changement de statut atteint le client automatiquement." },
          { lead: "Notifications push web", text: "alertes de commande au client et à la cuisine, même l'onglet ou l'app fermés." },
          { lead: "Un back-office sur mesure", text: "l'équipe gère le menu, les commandes et la disponibilité depuis un seul tableau de bord (Express + MongoDB)." },
          { lead: "Une application mobile native", text: "une app Flutter pour commander et suivre en déplacement." },
        ],
      },
      {
        eyebrow: "L'application mobile",
        heading: "Le même système, dans la poche du client.",
        paragraphs: [
          "Une app Flutter native pour les clients — parcourir le menu trilingue, commander et suivre la livraison, avec les mêmes mises à jour WhatsApp et push en direct que le web.",
        ],
      },
      {
        eyebrow: "Où ça en est",
        heading: "Une vitrine en ligne aujourd'hui, l'app et le back-office en déploiement.",
        paragraphs: [
          "La vitrine web trilingue et le parcours de commande sont en ligne sur rachafood.com — les clients parcourent, commandent, se connectent et reçoivent des mises à jour WhatsApp, sans aucune commande prise à la main. Le backend Express + MongoDB, conteneurisé avec Docker, fait tourner l'ensemble.",
          "L'application Flutter native et le tableau de bord admin complet sont en développement actif — le même système étendu au mobile et à un back-office complet. Construit sur des outils standards et connus, documenté, et possédé de bout en bout par le client.",
        ],
        note: "Racha Food est un projet en cours. Je ne publie pas de chiffres inventés — je vous fais volontiers découvrir le système en ligne et la suite lors d'un appel.",
      },
    ],
    cta: {
      eyebrow: "Vous construisez ce genre de chose ?",
      heading: "Cadrons le système dont votre business a vraiment besoin.",
    },
  },
  "galaxy-pets": {
    metaTitle: "Étude de cas : plateforme e-commerce Galaxy Pets",
    metaDescription:
      "Une boutique d'accessoires pour animaux construite de zéro — vitrine bilingue Next.js, back-office d'administration sur mesure, paiements marocains (paiement à la livraison + CMI), notifications WhatsApp et e-mail — pour une marque marocaine.",
    eyebrow: "Étude de cas",
    lede: "Une boutique d'accessoires pour animaux complète, construite de zéro — vitrine bilingue, back-office sur mesure, paiements marocains, notifications WhatsApp et e-mail, le tout possédé par la marque.",
    facts: [
      { label: "Client", value: "Galaxy Pets" },
      { label: "Catégorie", value: "E-commerce — animalerie" },
      { label: "Périmètre", value: "Boutique · Admin · Paiements" },
      { label: "Stack", value: "Next.js · Prisma · MySQL" },
    ],
    liveLabel: "Voir la boutique en ligne",
    sections: [
      {
        eyebrow: "Le défi",
        heading: "Une marque animalière qui grandit, sans boutique pour vendre.",
        paragraphs: [
          "Galaxy Pets avait les produits et la demande — un public marocain qui voulait acheter des accessoires pour animaux en ligne. Ce qui manquait, c'était une vraie boutique : un endroit où les clients pouvaient acheter par animal, voir prix et stock en direct, et commander sans allers-retours sur WhatsApp.",
          "Les plateformes toutes faites ne collaient pas à la réalité marocaine. La marque avait besoin du paiement à la livraison et de la carte bancaire locale, de confirmations WhatsApp, d'une vitrine en français et en arabe, et d'un contrôle total sur un large catalogue — pas d'un template rigide qui combat tout ça.",
          "Ce qu'il leur fallait, ce n'était pas une simple page boutique. C'était un système e-commerce complet — vitrine, back-office, paiements et communication client — fait pour piloter une vraie activité de vente.",
        ],
      },
      {
        eyebrow: "Ce que j'ai construit",
        heading: "Une boutique complète et le back-office qui la pilote.",
        list: [
          { lead: "Une vitrine bilingue", text: "une boutique Next.js 16 / React 19 en français et arabe (RTL), avec navigation par animal, marques, recherche, panier et commande." },
          { lead: "Paiements marocains", text: "paiement à la livraison et carte bancaire CMI, avec zones et tarifs de livraison réglés par région." },
          { lead: "Un back-office d'administration sur mesure", text: "l'équipe gère produits, catégories, marques, commandes, coupons et contenus depuis un tableau de bord (Prisma + MySQL), avec import CSV en masse." },
          { lead: "Notifications de commande WhatsApp", text: "confirmations et mises à jour envoyées sur le canal que les clients utilisent vraiment." },
          { lead: "E-mail — newsletter & retour en stock", text: "campagnes newsletter et alertes automatiques « de nouveau en stock » pour ne pas perdre la demande quand un article est épuisé." },
          { lead: "Un tableau de bord analytics", text: "ventes, commandes et best-sellers dans une vue du back-office, plus avis, témoignages et un flux de retours/réclamations." },
        ],
      },
      {
        eyebrow: "Le résultat",
        heading: "Une vraie boutique que la marque possède de bout en bout.",
        paragraphs: [
          "Galaxy Pets vend désormais depuis sa propre boutique bilingue sur galaxypetss.com — les clients parcourent par animal, paient à la livraison ou par carte, et reçoivent leurs confirmations sur WhatsApp, pendant que l'équipe pilote tout le catalogue et chaque commande depuis un seul back-office.",
          "Surtout : la marque possède l'ensemble du système. Il est construit sur des outils standards et connus, documenté, et chaque compte est au nom du client — rien n'est enfermé dans une plateforme qu'ils louent.",
        ],
        note: "Par principe, je ne publie pas de chiffres inventés ni de métriques sorties de leur contexte. Les vrais chiffres de vente appartiennent au client — je présente volontiers la boutique en direct et la suite lors d'un appel.",
      },
    ],
    cta: {
      eyebrow: "Votre boutique, ensuite ?",
      heading: "Construisons la boutique dont votre marque a vraiment besoin.",
    },
  },
};

export default cases;
