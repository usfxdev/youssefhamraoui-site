import type { Dictionary } from "../types";
import solutions from "../solutions/fr";
import cases from "../cases/fr";
import demos from "../demos/fr";

// French typography: a non-breaking space ( ) goes before : ? ! and ;
const fr: Dictionary = {
  meta: {
    description:
      "Youssef Hamraoui construit les systèmes sur lesquels reposent les entreprises en croissance : captation de prospects, réservations, CRM, workflows IA et le site web qui porte le tout. Basé à Khouribga, au Maroc, clients partout dans le monde, en français et en anglais.",
    ogDescription:
      "Captation de prospects, réservations, CRM, workflows IA et le site web qui porte le tout. Construit pour vous, documenté et remis à votre nom.",
    ogLocale: "fr_FR",
  },
  nav: {
    sections: "Sections",
    language: "Langue",
    work: "Réalisations",
    whoIHelp: "Qui j'aide",
    services: "Services",
    process: "Méthode",
    contact: "Contact",
  },
  ui: {
    bookCall: "Réserver un appel gratuit",
    bookDiscovery: "Réserver un appel découverte",
    readCase: "Lire l'étude de cas",
    seeMoreWork: "Voir d'autres projets",
    seeSystem: "Voir le système",
    live: "En direct",
    home: "Accueil",
  },
  hero: {
    status: "Disponible pour de nouveaux projets",
    h1Before: "Je construis la mécanique discrète qui ",
    h1Em: "fait tourner",
    h1After: " les entreprises en croissance.",
    lede: "Captation de prospects, réservations, CRM, workflows IA et le site web qui porte le tout. Construit pour vous, testé avec vos vraies données, documenté et remis à votre nom.",
    cta: "Réserver un appel découverte gratuit",
    seeWork: "Voir les réalisations",
    facts: [
      { label: "Basé", value: "Khouribga, Maroc. Clients partout dans le monde" },
      { label: "Langues", value: "Français et anglais" },
      { label: "Fuseau horaire", value: "GMT+1, en phase avec l'Europe" },
      { label: "Méthode", value: "En direct avec les fondateurs, sans agence" },
    ],
  },
  work: {
    label: "Réalisations",
    sub: "Des systèmes en ligne, pour de vraies entreprises. Ouvrez-les et jugez par vous-même.",
    caseStudy: "Étude de cas",
    items: {
      "racha-food": {
        meta: ["Livraison de repas", "Marrakech", "Web, app, admin"],
        description:
          "Une cuisine maison à Marrakech qui prenait chaque commande par téléphone et WhatsApp. Je lui ai construit sa propre plateforme de commande : une boutique trilingue avec suivi des commandes en direct sur WhatsApp, et une application native et un back-office complet en cours de développement.",
        outcome: "Les clients commandent désormais en ligne et reçoivent leurs mises à jour WhatsApp, sans aucune commande prise à la main.",
        alt: "Page d'accueil de Racha Food avec le plat du jour et le bouton de commande",
      },
      "galaxy-pets": {
        meta: ["E-commerce", "Animalerie", "Boutique, back-office"],
        description:
          "Une animalerie en ligne construite de zéro : une boutique Next.js bilingue, un back-office sur mesure pour le stock et les commandes, les moyens de paiement marocains intégrés et une alerte WhatsApp dès qu'une commande arrive.",
        outcome: "Un seul endroit pour vendre, un seul pour gérer, et tout appartient au client.",
        alt: "Page d'accueil de la boutique Galaxy Pets avec un golden retriever et des produits mis en avant",
      },
    },
  },
  whoIHelp: {
    label: "Qui j'aide",
    sub: "Choisissez votre univers. Le système qu'il lui faut est déjà cartographié.",
    heading: "Des systèmes pensés pour votre secteur",
  },
  products: {
    label: "Produits maison",
    sub: "Atelier Pixory. Des apps que je conçois, développe et vends moi-même.",
    heading: "Cinq apps, chacune dans un seul fichier.",
    intro:
      "Sous le nom Atelier Pixory, je crée des applications privées qui fonctionnent hors ligne dans n'importe quel navigateur, à partir d'un seul fichier HTML. Sans compte, sans abonnement, sans app store. Concevoir et vendre mes propres produits m'oblige à savoir ce qu'est un système fini, qui s'utilise sans explication.",
    items: {
      prospera: {
        blurb: "Tableau de bord budget avec plan de remboursement des dettes, objectifs d'épargne et calendrier des factures.",
        alt: "Le tableau de bord budget Prospera sur un ordinateur portable et un téléphone",
      },
      momentum: {
        blurb: "Suivi d'habitudes et de routines avec séries, calendrier thermique et défis de 30 jours.",
        alt: "Le suivi d'habitudes Momentum sur un téléphone",
      },
      nestling: {
        blurb: "Suivi de grossesse et de la première année : mouvements, tétées, sommeil, croissance, journal.",
        alt: "Le suivi de grossesse et de bébé Nestling sur un téléphone",
      },
      pawprint: {
        blurb: "Carnet de santé animal : vaccins, traitements, visites chez le vétérinaire, fiche pour le pet-sitter.",
        alt: "Le carnet de santé animal Pawprint sur un ordinateur portable et un téléphone",
      },
      aisle: {
        blurb: "Organisateur de mariage : checklist datée, budget, invités, plan de table, prestataires.",
        alt: "L'organisateur de mariage Aisle sur un ordinateur portable et un téléphone",
      },
    },
  },
  services: {
    label: "Ce que je construis",
    sub: "Chaque système vise un seul chiffre : prospects, réservations ou heures gagnées.",
    items: [
      {
        title: "Moteur de prospects",
        text: "Une landing page, un formulaire et une relance instantanée par e-mail ou WhatsApp. Du premier clic au rendez-vous réservé, sans courir après personne.",
        tools: "Landing pages · Prêt pour Meta Ads · WhatsApp · Synchro CRM",
      },
      {
        title: "Réservations et CRM",
        text: "Prise de rendez-vous en ligne, rappels automatiques et un pipeline où aucun message ne se perd. Moins de rendez-vous manqués, moins de post-it.",
        tools: "Cal.com · CRM · Rappels",
      },
      {
        title: "Workflows IA",
        text: "Tri des demandes, brouillons de réponses, préparation de contenu. L'IA fait le travail répétitif, un humain valide avant tout envoi.",
        tools: "Claude · Make · n8n",
      },
      {
        title: "Site web et tableau de bord",
        text: "Un site rapide avec les bases du SEO et de l'analytics, et vos chiffres clés réunis dans une seule vue en direct. La base sur laquelle tout le reste repose.",
        tools: "Next.js · WooCommerce · Looker Studio · Sheets",
      },
    ],
    else: "Un besoin qui n'est pas dans cette liste ? Décrivez le problème. On le cadre ensemble, je le conçois, je le livre.",
  },
  process: {
    label: "Méthode",
    sub: "Du premier appel à un système qui tourne tout seul.",
    steps: [
      {
        title: "Appel découverte",
        tag: "30 min, gratuit",
        text: "On identifie où vous perdez des clients et du temps. Si je ne peux pas vous aider, je vous le dis pendant l'appel.",
      },
      {
        title: "Plan",
        tag: "devis fixe",
        text: "Un plan clair : les outils, les flux et un prix fixe. Pas de surprise ensuite.",
      },
      {
        title: "Construction et intégration",
        tag: "",
        text: "Je construis le système, je connecte vos outils existants et je le teste avec vos vraies données.",
      },
      {
        title: "Remise",
        tag: "30 jours de support",
        text: "Documentation, formation, et chaque compte et accès à votre nom. Le système vous appartient.",
      },
    ],
  },
  about: {
    label: "À propos",
    paragraphs: [
      "Je suis Youssef, je construis des systèmes pour les entreprises depuis Khouribga, au Maroc. Je travaille en direct avec les fondateurs, en français et en anglais, sur les parties peu glamour qui décident de la croissance : comment arrive un prospect, comment se confirme une réservation, comment on lit ses chiffres.",
      "Je conçois le système, je l'assemble et je vous le remets. Pas d'intermédiaire, pas de boîte noire, pas de faux témoignages. Jugez-moi sur les systèmes en ligne présentés plus haut.",
    ],
    principles: [
      { title: "Tout vous appartient", text: "Comptes, accès, code et documentation, tout à votre nom dès le premier jour." },
      { title: "Des outils que vous gardez", text: "Des outils standards que votre équipe peut reprendre. Rien que je serais le seul à savoir faire tourner." },
      { title: "Lié à un chiffre", text: "Si un système ne fait pas bouger les prospects, les réservations ou les heures gagnées, je ne le construis pas." },
    ],
  },
  contact: {
    label: "Contact",
    sub: "Réponse sous 24 heures.",
    heading: "Dites-moi ce qui bloque.",
    how: "Décrivez votre plus gros problème en deux phrases. Si je peux aider, on réserve un appel de 30 minutes. Sinon, je vous le dis et je vous oriente vers quelqu'un de mieux placé.",
    subject: "Appel découverte",
  },
  footer: {
    place: "Basé au Maroc · Clients dans le monde entier",
    note: "Fait à la main. Aucun pistage au-delà du strict nécessaire.",
    tagline: "Des systèmes qui attirent les clients — et qui font tourner la machine.",
    site: "Site",
    whoIHelp: "Qui j'aide",
    social: "Réseaux",
  },
  solutions,
  cases,
  demos,
};

export default fr;
