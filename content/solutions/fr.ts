import type { IndustryKey, SolutionCopy } from "../types";

const restaurants: SolutionCopy = {
  navLabel: "Restaurants",
  card: {
    eyebrow: "Pour restaurants & métiers de bouche",
    title: "Restaurants & livraison",
    text: "Votre propre site de commande, confirmations WhatsApp et tableau de bord cuisine — sans commission.",
  },
  eyebrow: "Pour restaurants & métiers de bouche",
  trustLine: "Construit pour de vrais restaurants au Maroc · Français, arabe & anglais",
  hub: {
    metaTitle: "Système de commande en ligne pour restaurants au Maroc",
    metaDescription:
      "Votre propre site de commande, suivi WhatsApp, tableau de bord cuisine et base clients — des commandes sans commission pour les restaurants partout au Maroc.",
    h1: "Votre restaurant prend les commandes pendant que vous cuisinez.",
    lede: "Je construis le système complet — votre propre site de commande, confirmations WhatsApp, tableau de bord cuisine et base clients — pour que les commandes arrivent propres, confirmées et sans commission.",
  },
  city: {
    metaTitle: (c) => `Système de commande en ligne pour restaurants à ${c}`,
    metaDescription: (c) =>
      `Je construis des systèmes de commande et de livraison pour les restaurants à ${c} : site de commande, confirmations WhatsApp, tableau de bord cuisine et base clients — sans commission.`,
    h1: (c) => `Votre restaurant à ${c} prend les commandes pendant que vous cuisinez.`,
    lede: (c) =>
      `Je construis des systèmes de commande et de livraison pour les restaurants à ${c} — votre propre site de commande, confirmations WhatsApp, tableau de bord cuisine et une base clients qui vous appartient. Zéro commission sur vos commandes directes.`,
    whyEyebrow: (c) => `Pourquoi ça compte à ${c}`,
    whyHeading: (c) => `Restaurants à ${c}`,
    whyBody: (c) =>
      `Si vous tenez un restaurant, un snack ou un service de livraison à ${c}, chaque rush est un test d'organisation : le téléphone sonne, les messages WhatsApp s'empilent, les livreurs attendent les adresses. Le système que je construis transforme ce chaos en un flux propre — et chaque commande ajoute un client à une liste qui vous appartient.`,
    faq: (c) => ({
      q: `Vous travaillez avec des restaurants à ${c} ?`,
      a: `Oui. Je construis et je gère tout à distance — appels, WhatsApp et partages d'écran — donc travailler avec un restaurant à ${c} est aussi simple qu'avec un voisin. Je suis basé à Khouribga et je travaille avec des entreprises partout au Maroc.`,
    }),
    alsoHeading: "Je construis aussi pour les restaurants à",
    allLink: "Tous les systèmes restaurant",
  },
  heroSecondary: "Parcourir la démo",
  pains: {
    eyebrow: "Ça vous parle ?",
    heading: "Là où les restaurants perdent de l’argent chaque jour",
    items: [
      "Les commandes par téléphone pendant le rush — mauvaises adresses, appels manqués, erreurs qui vous coûtent le client.",
      "Les applis de livraison qui prennent 25 à 35 % de commission sur chaque commande — et gardent les données clients pour elles.",
      "Aucune liste clients — vous avez des habitués, mais aucun moyen de les faire revenir avec une offre ou un nouveau menu.",
      "La coordination des livraisons par appels — votre meilleur employé passe la soirée à dispatcher les livreurs.",
      "Aucun vrai chiffre — vous fermez à minuit sans savoir quels plats ou quelles zones ont vraiment rapporté.",
    ],
    note: "Rien de tout ça ne se règle en travaillant plus dur. Ça se règle avec un système qui vous enlève le travail répétitif des mains.",
  },
  system: {
    eyebrow: "Le système",
    heading: "Ce que je construis pour votre restaurant",
    features: [
      {
        title: "Votre propre site de commande",
        tagline: "Des commandes sans commission, 24h/24",
        text: "Un menu rapide que vos clients ouvrent sur leur téléphone — aucune appli à installer. Panier, zones de livraison, horaires, en français, arabe ou anglais.",
        tags: ["Menu en ligne", "Zones de livraison", "Multilingue"],
      },
      {
        title: "Flux de commande WhatsApp",
        tagline: "Chaque commande confirmée & suivie",
        text: "Confirmation instantanée et suivi en temps réel sur le canal que vos clients utilisent déjà tous les jours.",
        tags: ["WhatsApp", "Confirmations auto"],
      },
      {
        title: "Tableau de bord cuisine & livraison",
        tagline: "Un seul écran pilote tout le service",
        text: "Nouvelles commandes, statut de préparation, affectation des livreurs — votre équipe voit tout en direct, personne ne crie à travers la cuisine.",
        tags: ["Tableau de bord", "Temps réel"],
      },
      {
        title: "Base clients & relance",
        tagline: "Transformez les commandes uniques en habitués",
        text: "Chaque commande enrichit une liste clients qui vous appartient. Envoyez le nouveau menu, une offre Ramadan, un « vous nous manquez » — et regardez les habitués revenir.",
        tags: ["Base clients", "Campagnes"],
      },
    ],
    flowLabel: "Flux de commande",
    flow: [
      { title: "Nouvelle commande reçue", detail: "2× Tajine · livraison, quartier centre", status: "reçue" },
      { title: "Confirmation WhatsApp envoyée", detail: "Client notifié automatiquement", status: "auto" },
      { title: "Tableau cuisine mis à jour", detail: "Préparation lancée", status: "live" },
      { title: "Livreur affecté", detail: "Lien de suivi envoyé au client", status: "fait" },
    ],
  },
  changes: {
    eyebrow: "Ce qui change",
    heading: "La vie avec le système",
    items: [
      { lead: "Fini le chaos téléphonique", text: "les commandes arrivent structurées, avec la bonne adresse et les bons plats, à chaque fois." },
      { lead: "Votre canal direct grandit", text: "vos habitués commandent sur votre site au lieu de payer les prix des applis, et la marge reste chez vous." },
      { lead: "Vos clients vous appartiennent", text: "noms, numéros et historique vivent dans votre base, pas dans une appli de livraison." },
      { lead: "Vous voyez vos chiffres", text: "commandes, best-sellers et zones les plus actives, dans un tableau de bord au lieu d’une estimation à minuit." },
    ],
  },
  proof: {
    eyebrow: "Racha Food · Construit dans le monde réel",
    heading: "C’est exactement le système derrière Racha Food",
    text: "Une plateforme de commande trilingue (français, arabe, anglais) avec suivi WhatsApp, zones de livraison sur carte interactive et un tableau d'administration sur mesure — construite de A à Z pour un vrai business food marocain.",
    linkLabel: "Lire l’étude de cas",
    demoLabel: "Parcourir la démo",
  },
  faq: {
    eyebrow: "Questions",
    heading: "Ce que les restaurateurs me demandent",
    items: [
      {
        q: "Combien coûte un système comme ça ?",
        a: "Un système restaurant complet — site de commande, flux WhatsApp, tableau de bord et base clients — se situe généralement entre 10 000 et 20 000 MAD selon le périmètre. Vous recevez un devis fixe après un appel gratuit ; aucune surprise en cours de projet.",
      },
      {
        q: "Combien de temps pour le lancement ?",
        a: "La plupart des systèmes restaurant sont en ligne en 3 à 6 semaines, menu, zones de livraison et formation de l'équipe compris. Vous continuez à servir vos clients pendant tout le chantier — rien ne s'arrête.",
      },
      {
        q: "Faut-il être technique pour le gérer ?",
        a: "Non. Votre équipe gère tout depuis un tableau de bord simple, et je la forme. Si vous préférez ne toucher à rien du tout, je propose aussi une formule mensuelle où je gère et améliore le système pour vous.",
      },
      {
        q: "Faut-il quitter Glovo et les applis de livraison ?",
        a: "Pas forcément — gardez-les si elles vous apportent du volume. L'objectif de votre propre système, c'est le canal direct : vos habitués commandent chez vous sans commission, et la relation client vous appartient enfin.",
      },
    ],
  },
  where: {
    eyebrow: "Où je travaille",
    heading: "Des systèmes restaurant partout au Maroc",
    intro: "Je construis des systèmes de commande et de livraison pour les restaurants dans toutes les grandes villes marocaines :",
  },
  cta: {
    eyebrow: "Prêt quand vous l’êtes",
    heading: "Regardons votre restaurant ensemble",
    text: "Un appel gratuit de 20 minutes : vous décrivez comment les commandes fonctionnent aujourd'hui, je vous dis exactement ce que je construirais et ce que ça changerait. Sans pression, sans jargon.",
    secondary: "Voir la démo d’abord",
  },
};

const ecommerce: SolutionCopy = {
  navLabel: "E-commerce",
  card: {
    eyebrow: "Pour boutiques en ligne & marques",
    title: "E-commerce & boutiques en ligne",
    text: "Une boutique qui vend pendant que vous dormez — e-mails automatisés, paniers récupérés et vrais chiffres.",
  },
  eyebrow: "Pour boutiques en ligne & marques",
  trustLine: "Construit pour de vraies marques marocaines · WooCommerce & boutiques sur mesure",
  hub: {
    metaTitle: "Système de croissance e-commerce au Maroc",
    metaDescription:
      "Une boutique qui vend pendant que vous dormez : storefront qui convertit, e-mails automatisés, paniers récupérés et un tableau de bord avec vos vrais chiffres — pour les marques marocaines.",
    h1: "Une boutique qui vend pendant que vous dormez.",
    lede: "Je construis le système de croissance autour de votre boutique — e-mails automatisés, récupération de paniers abandonnés, segments clients et un tableau de bord avec vos vrais chiffres — pour que le chiffre d'affaires grandisse sans agrandir l'équipe.",
  },
  city: {
    metaTitle: (c) => `Système de croissance e-commerce à ${c}`,
    metaDescription: (c) =>
      `Je construis des systèmes de croissance e-commerce pour les marques à ${c} : boutique, e-mails automatisés, récupération de paniers et tableau de bord — plus de revenus sans plus de personnel.`,
    h1: (c) => `Votre boutique à ${c} vend pendant que vous dormez.`,
    lede: (c) =>
      `Je construis des systèmes de croissance e-commerce pour les marques à ${c} — e-mails automatisés, récupération de paniers, segments clients et un tableau de bord avec vos vrais chiffres. Plus de revenus par visiteur, sans plus de personnel.`,
    whyEyebrow: (c) => `Pourquoi ça compte à ${c}`,
    whyHeading: (c) => `Marques en ligne à ${c}`,
    whyBody: (c) =>
      `Si vous vendez en ligne depuis ${c}, vous savez déjà que le plus dur n'est pas de lancer la boutique — c'est tout ce qui vient après : relancer les paniers, répondre aux mêmes questions, savoir quels produits rapportent vraiment. C'est exactement la couche que je construis.`,
    faq: (c) => ({
      q: `Vous travaillez avec des marques à ${c} ?`,
      a: `Oui. Tout le chantier se fait à distance — appels, WhatsApp et partages d'écran — donc travailler avec une marque à ${c} est aussi simple qu'en local. Je suis basé à Khouribga et je travaille avec des entreprises partout au Maroc.`,
    }),
    alsoHeading: "Je construis aussi pour les marques à",
    allLink: "Tous les systèmes e-commerce",
  },
  heroSecondary: "Parcourir la démo",
  pains: {
    eyebrow: "Ça vous parle ?",
    heading: "Là où les boutiques laissent de l’argent sur la table",
    items: [
      "Des visiteurs ajoutent au panier puis disparaissent — et personne ne les relance jamais.",
      "Les acheteurs ne reviennent pas, parce que rien ne les invite à revenir.",
      "Le marketing se résume à poster sur Instagram en espérant — il n'y a aucune machine derrière.",
      "Commandes, stock et questions clients sont gérés à la main, un message WhatsApp à la fois.",
      "Vous décidez à l'instinct parce que vos chiffres vivent dans cinq endroits différents.",
    ],
    note: "La pub amène du trafic. Les systèmes transforment le trafic en revenus — automatiquement, chaque jour.",
  },
  system: {
    eyebrow: "Le système",
    heading: "Ce que je construis autour de votre boutique",
    features: [
      {
        title: "Une boutique faite pour convertir",
        tagline: "Plus d’acheteurs avec le même trafic",
        text: "Une boutique rapide et propre — nouvelle ou reconstruite sur l'existant. Pages produit claires, paiement fluide, mobile d'abord pour le marché marocain.",
        tags: ["Boutique", "Mobile-first"],
      },
      {
        title: "E-mails automatisés",
        tagline: "Des ventes 24h/24 sans toucher à rien",
        text: "Série de bienvenue, récupération de paniers, suivi post-achat et campagnes de réactivation — écrits une fois, au travail tous les jours.",
        tags: ["Flows e-mail", "Paniers récupérés"],
      },
      {
        title: "Segments clients & campagnes",
        tagline: "La bonne offre au bon client",
        text: "VIP, premiers acheteurs, clients endormis — votre liste est organisée pour que chaque campagne touche juste au lieu de spammer tout le monde.",
        tags: ["Segments", "Campagnes"],
      },
      {
        title: "Un tableau de bord, vos vrais chiffres",
        tagline: "Des décisions sur des données, pas à l’instinct",
        text: "Ventes, best-sellers, taux de réachat et apport de chaque canal — dans une seule vue que vous consultez vraiment.",
        tags: ["Analytics", "Tableau de bord"],
      },
    ],
    flowLabel: "Moteur de croissance",
    flow: [
      { title: "Commande passée", detail: "Confirmation + e-mail de livraison envoyés", status: "auto" },
      { title: "Panier abandonné", detail: "Relance programmée", status: "auto" },
      { title: "Flow post-achat", detail: "Demande d’avis + cross-sell envoyés", status: "live" },
      { title: "Tableau de bord à jour", detail: "Revenus & best-sellers actualisés", status: "fait" },
    ],
  },
  changes: {
    eyebrow: "Ce qui change",
    heading: "La vie avec le système",
    items: [
      { lead: "Les paniers sont récupérés", text: "chaque panier abandonné reçoit une relance polie et automatique au lieu d’être perdu pour toujours." },
      { lead: "Les clients reviennent", text: "bienvenue, suivi et réactivation gardent votre marque dans leur boîte mail aux bons moments." },
      { lead: "L’opérationnel ne mange plus vos journées", text: "confirmations, suivis et questions fréquentes sont gérés par le système, pas par vous à 23h." },
      { lead: "Vous voyez enfin clair", text: "un tableau de bord vous dit ce qui se vend, qui rachète et quel canal mérite votre budget." },
    ],
  },
  proof: {
    eyebrow: "Galaxy Pets · Construit dans le monde réel",
    heading: "Voyez-le sur une vraie boutique : Galaxy Pets",
    text: "Un e-commerce animalier complet — boutique, catalogue et les systèmes autour — construit de A à Z pour une vraie marque. L'étude de cas montre exactement ce qui a été livré.",
    linkLabel: "Lire l’étude de cas",
    demoLabel: "Parcourir la démo",
  },
  faq: {
    eyebrow: "Questions",
    heading: "Ce que les e-commerçants me demandent",
    items: [
      {
        q: "Combien coûte un système de croissance e-commerce ?",
        a: "Un système complet — boutique plus flows e-mail, automatisations et analytics — se situe généralement entre 15 000 et 30 000 MAD selon le périmètre. Devis fixe après un appel gratuit ; aucune surprise en cours de projet.",
      },
      {
        q: "J’ai déjà une boutique. Faut-il la refaire ?",
        a: "En général non. Si votre boutique convertit correctement, je construis la couche de croissance autour — flows, automatisations, tableau de bord. Si la boutique elle-même est le goulot, je vous le dis honnêtement avant de commencer.",
      },
      {
        q: "Quand les flows sont-ils en ligne ?",
        a: "Les flows e-mail et la récupération de paniers sont généralement actifs en 2 à 4 semaines. Une construction complète avec nouvelle boutique prend 4 à 8 semaines selon la taille du catalogue.",
      },
      {
        q: "Pourrai-je le gérer moi-même ?",
        a: "Oui — tout est monté dans des outils qui vous appartiennent et je vous forme dessus. Si vous préférez, une formule mensuelle existe où je continue d'optimiser les flows et je vous rapporte les chiffres.",
      },
    ],
  },
  where: {
    eyebrow: "Où je travaille",
    heading: "Des systèmes e-commerce partout au Maroc",
    intro: "Je construis des systèmes de croissance pour les marques en ligne dans toutes les grandes villes marocaines :",
  },
  cta: {
    eyebrow: "Prêt quand vous l’êtes",
    heading: "Regardons votre boutique ensemble",
    text: "Un appel gratuit de 20 minutes : vous me montrez votre boutique et comment les commandes fonctionnent aujourd'hui, je vous dis exactement ce que je construirais et ce que ça changerait. Sans pression, sans jargon.",
    secondary: "Voir la démo d’abord",
  },
};

const carRental: SolutionCopy = {
  navLabel: "Location de voitures",
  card: {
    eyebrow: "Pour agences de location de voitures",
    title: "Agences de location de voitures",
    text: "Réservations en ligne, calendrier de flotte en direct et confirmations WhatsApp — votre flotte réservée 24h/24.",
  },
  eyebrow: "Pour agences de location de voitures",
  trustLine: "Construit pour le marché marocain · Français, arabe & anglais",
  hub: {
    metaTitle: "Système de réservation pour location de voitures au Maroc",
    metaDescription:
      "Réservations en ligne, calendrier de flotte en direct, confirmations WhatsApp et base clients — des systèmes de réservation pour les agences de location partout au Maroc.",
    h1: "Votre flotte se réserve pendant que vous roulez.",
    lede: "Je construis le système de réservation complet — réservations en ligne, calendrier de flotte en direct, confirmations WhatsApp et base clients — pour que chaque voiture travaille pour vous 24h/24.",
  },
  city: {
    metaTitle: (c) => `Système de réservation location de voiture à ${c}`,
    metaDescription: (c) =>
      `Je construis des systèmes de réservation pour les agences de location de voitures à ${c} : réservations en ligne, calendrier de flotte, confirmations WhatsApp et base clients.`,
    h1: (c) => `Votre flotte à ${c} se réserve pendant que vous roulez.`,
    lede: (c) =>
      `Je construis des systèmes de réservation pour les agences de location à ${c} — réservations en ligne, calendrier de flotte en direct, confirmations WhatsApp et une base clients qui vous appartient.`,
    whyEyebrow: (c) => `Pourquoi ça compte à ${c}`,
    whyHeading: (c) => `Location de voitures à ${c}`,
    whyBody: (c) =>
      `Si vous gérez une agence de location à ${c}, vous connaissez la routine : messages WhatsApp à minuit, doubles réservations, cautions réclamées par téléphone, contrats remplis à la main. Le système que je construis remplace tout ça par un calendrier, des confirmations automatiques et une fiche pour chaque client et chaque voiture.`,
    faq: (c) => ({
      q: `Vous travaillez avec des agences à ${c} ?`,
      a: `Oui. Je construis et je gère tout à distance — appels, WhatsApp et partages d'écran — donc travailler avec une agence à ${c} est aussi simple qu'en local. Je suis basé à Khouribga et je travaille avec des entreprises partout au Maroc.`,
    }),
    alsoHeading: "Je construis aussi pour les agences à",
    allLink: "Tous les systèmes location de voitures",
  },
  heroSecondary: "Ce que je construis pour votre agence",
  pains: {
    eyebrow: "Ça vous parle ?",
    heading: "Là où les agences perdent des réservations chaque semaine",
    items: [
      "Des demandes de réservation qui arrivent sur trois canaux à la fois — et certaines restent sans réponse.",
      "Des doubles réservations parce que la disponibilité vit dans votre tête, pas dans un calendrier.",
      "Des touristes qui veulent réserver et payer en ligne — et partent chez le concurrent qui le permet.",
      "Contrats, cautions et rappels gérés à la main pour chaque location.",
      "Aucun historique client — impossible de savoir qui loue deux fois par an et mérite un tarif fidélité.",
    ],
    note: "Chaque message manqué est une voiture au parking. Un système de réservation garde la flotte en mouvement.",
  },
  system: {
    eyebrow: "Le système",
    heading: "Ce que je construis pour votre agence",
    features: [
      {
        title: "Site de réservation en ligne",
        tagline: "Des réservations 24h/24, même depuis l’étranger",
        text: "Votre flotte avec vraies photos, prix et disponibilités — les clients choisissent leurs dates, réservent et sont confirmés sans un seul appel.",
        tags: ["Réservation en ligne", "Multilingue"],
      },
      {
        title: "Calendrier de flotte en direct",
        tagline: "Zéro double réservation",
        text: "Chaque voiture, chaque réservation, chaque retour — un calendrier que toute votre équipe voit, à jour en temps réel.",
        tags: ["Calendrier flotte", "Temps réel"],
      },
      {
        title: "Confirmations & rappels WhatsApp",
        tagline: "Des clients informés automatiquement",
        text: "Confirmations de réservation, rappels de prise en charge et messages du jour de retour — envoyés automatiquement sur le canal que vos clients utilisent déjà.",
        tags: ["WhatsApp", "Rappels"],
      },
      {
        title: "Base clients & contrats",
        tagline: "Chaque location documentée, chaque client connu",
        text: "Historique client, documents et contrats au même endroit — et vos loueurs réguliers identifiés pour des tarifs fidélité.",
        tags: ["CRM", "Contrats"],
      },
    ],
    flowLabel: "Flux de réservation",
    flow: [
      { title: "Nouvelle demande de réservation", detail: "Dacia Duster · 5 jours · prise à l’aéroport", status: "reçue" },
      { title: "Calendrier de flotte vérifié", detail: "Disponibilité confirmée automatiquement", status: "auto" },
      { title: "Confirmation WhatsApp envoyée", detail: "Détails de prise en charge transmis", status: "auto" },
      { title: "Contrat préparé", detail: "Fiche client mise à jour", status: "fait" },
    ],
  },
  changes: {
    eyebrow: "Ce qui change",
    heading: "La vie avec le système",
    items: [
      { lead: "Plus de réservations manquées", text: "les demandes arrivent au même endroit et reçoivent une réponse même quand vous êtes sur la route." },
      { lead: "Le calendrier dit la vérité", text: "la disponibilité vit dans le système, les doubles réservations disparaissent." },
      { lead: "Les touristes vous réservent en ligne", text: "les visiteurs réservent et sont confirmés avant même d’atterrir." },
      { lead: "Les loueurs réguliers reviennent", text: "votre base clients est documentée, vos fidèles sont reconnus et récompensés." },
    ],
  },
  proof: {
    eyebrow: "Bientôt disponible",
    heading: "Un vrai projet location de voitures arrive",
    text: "Je construis en ce moment ce système exact pour une agence de location marocaine. L'étude de cas et la démo seront publiées ici dès la mise en ligne.",
    linkLabel: "Voir mes autres projets",
  },
  faq: {
    eyebrow: "Questions",
    heading: "Ce que les gérants d’agence me demandent",
    items: [
      {
        q: "Combien coûte un système de réservation ?",
        a: "Un système complet — site de réservation, calendrier de flotte, flux WhatsApp et base clients — se situe généralement entre 10 000 et 20 000 MAD selon la taille de la flotte et le périmètre. Devis fixe après un appel gratuit.",
      },
      {
        q: "Combien de temps pour le lancement ?",
        a: "La plupart des systèmes de réservation sont en ligne en 3 à 6 semaines, flotte, règles de prix et formation comprises.",
      },
      {
        q: "Les clients peuvent-ils payer en ligne ?",
        a: "Oui — acompte ou paiement complet en ligne si vous le souhaitez, ou réservation sans paiement avec confirmation WhatsApp si vous préférez encaisser à la prise en charge.",
      },
      {
        q: "Faut-il être technique pour le gérer ?",
        a: "Non. Vous gérez voitures, prix et réservations depuis un tableau de bord simple, et je vous forme. Une formule mensuelle existe si vous préférez que je le gère pour vous.",
      },
    ],
  },
  where: {
    eyebrow: "Où je travaille",
    heading: "Des systèmes de réservation partout au Maroc",
    intro: "Je construis des systèmes de réservation pour les agences de location dans toutes les grandes villes marocaines :",
  },
  cta: {
    eyebrow: "Prêt quand vous l’êtes",
    heading: "Regardons votre agence ensemble",
    text: "Un appel gratuit de 20 minutes : vous décrivez comment les réservations fonctionnent aujourd'hui, je vous dis exactement ce que je construirais et ce que ça changerait. Sans pression, sans jargon.",
    secondary: "Voir mes projets",
  },
};

const solutions: Record<IndustryKey, SolutionCopy> = {
  restaurants,
  "e-commerce": ecommerce,
  "car-rental": carRental,
};

export default solutions;
