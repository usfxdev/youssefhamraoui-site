import type { DemoCopy, DemoKey } from "../types";

const demos: Record<DemoKey, DemoCopy> = {
  "restaurant-system": {
    metaTitle: "Dans les coulisses d’un système de commande restaurant — Démo",
    metaDescription:
      "Parcourez un système de commande et de livraison pour restaurant, étape par étape — ce que voit votre client, ce qui se passe en coulisses, et le travail que ça vous enlève. Sans jargon.",
    eyebrow: "Démo du système · sans jargon",
    h1: "Dans les coulisses d’un système de commande restaurant",
    lede: "Voici le système que je construis pour les restaurants, expliqué comme je l'expliquerais autour d'une table — ce que vit votre client, ce qui se passe automatiquement en coulisses, et le travail que ça vous enlève des mains.",
    heroSecondary: "Ce que vit votre client",
    note: "Tout ce qui suit tourne sans que personne au restaurant ne touche à rien.",
    steps: {
      eyebrow: "Étape par étape",
      heading: "Ce que vit votre client",
      intro: "De l’envie à la livraison — avec votre restaurant dans sa poche.",
      items: [
        { title: "Il ouvre votre menu", text: "Un lien depuis Instagram, Google ou un QR code sur la table. Votre menu complet se charge en quelques secondes sur son téléphone — aucune appli à télécharger, aucun compte à créer." },
        { title: "Il commande et choisit la livraison", text: "Il choisit ses plats, voit les frais de livraison pour son quartier, et passe commande en quelques gestes." },
        { title: "Il reçoit une confirmation WhatsApp instantanée", text: "« Commande reçue — en préparation. » En quelques secondes. Pas besoin d’appeler pour vérifier. Il se sent pris en charge." },
        { title: "Il suit sa commande en direct", text: "En préparation, en route, arrive. Le même suivi que sur les grandes applis — mais sur votre propre canal, sans commission." },
        { title: "Il entend à nouveau parler de vous", text: "Après le repas, le système peut remercier, demander un avis Google ou envoyer votre prochaine offre. Les clients de passage deviennent des habitués." },
      ],
    },
    behind: {
      eyebrow: "En coulisses",
      heading: "Ce qui se passe de votre côté — automatiquement",
      intro: "Pendant que le client tape sur son écran, voici ce que le système fait pour votre équipe :",
      label: "Service en cours",
      flow: [
        { title: "La commande s’affiche en cuisine", detail: "Plats, adresse et notes — structurés, pas criés", status: "instantané" },
        { title: "Client confirmé sur WhatsApp", detail: "Personne ne décroche un téléphone", status: "auto" },
        { title: "Le livreur reçoit les détails", detail: "Adresse et commande, zéro erreur de recopie", status: "auto" },
        { title: "Client enregistré dans votre base", detail: "Nom, zone et historique — à vous pour toujours", status: "auto" },
      ],
      footer: "Commandes traitées sans appels",
    },
    difference: {
      eyebrow: "La différence",
      heading: "Le même rush, deux soirées très différentes",
      withoutTitle: "Sans le système",
      without: [
        "Le téléphone sonne sans arrêt ; les commandes se griffonnent sur papier.",
        "Mauvaises adresses, plats oubliés, rappels de clients fâchés.",
        "Les applis de livraison prennent 25 à 35 % de chaque commande.",
        "Le client appartient à l’appli, pas à vous.",
        "À la fermeture, vous devinez comment la journée s’est passée.",
      ],
      withTitle: "Avec le système",
      with: [
        "Les commandes arrivent structurées sur un seul écran.",
        "Bonne adresse, bons plats, à chaque fois.",
        "Les commandes directes sont 100 % sans commission.",
        "Chaque client rejoint une liste qui vous appartient.",
        "À la fermeture, le tableau de bord montre les vrais chiffres.",
      ],
    },
    numbers: {
      eyebrow: "Ce que vous récupérez",
      heading: "Le système en quatre chiffres",
      items: [
        { figure: "0", unit: "commission", text: "sur chaque commande passée par votre propre site — la marge reste dans votre cuisine." },
        { figure: "24h/24", unit: "commandes", text: "vos clients commandent à minuit ou en plein rush — le système n’a jamais la ligne occupée." },
        { figure: "1", unit: "seul écran", text: "commandes, préparation, livraison et historique — tout votre service dans un tableau de bord." },
        { figure: "100 %", unit: "des clients enregistrés", text: "chaque commande enrichit une liste clients qui vous appartient, pas à une appli." },
      ],
    },
    proof: {
      text: "Ce n'est pas un concept — c'est le système que j'ai construit de A à Z pour Racha Food, un vrai business food marocain : site de commande trilingue, suivi WhatsApp, zones de livraison sur carte et admin sur mesure.",
      linkLabel: "Lire l’étude de cas Racha Food",
    },
    cta: {
      eyebrow: "Vous le voulez pour votre restaurant ?",
      heading: "Parcourons votre service ensemble",
      text: "Un appel gratuit de 20 minutes : vous décrivez comment les commandes fonctionnent aujourd'hui, je vous montre exactement où ce système se branche. Sans pression, sans jargon.",
      secondary: "Voir les solutions restaurant",
    },
  },
  "ecommerce-system": {
    metaTitle: "Dans les coulisses d’un système de croissance e-commerce — Démo",
    metaDescription:
      "Parcourez un système de croissance e-commerce étape par étape — ce que vit votre client, quels e-mails partent automatiquement, et comment le tableau de bord montre vos vrais chiffres. Sans jargon.",
    eyebrow: "Démo du système · sans jargon",
    h1: "Dans les coulisses d’un système de croissance e-commerce",
    lede: "Voici le système que je construis autour des boutiques en ligne, expliqué simplement — ce que vit votre client, quels messages partent automatiquement, et comment vous voyez enfin vos vrais chiffres.",
    heroSecondary: "Un client, suivi par le système",
    note: "Chaque message ci-dessous est écrit une fois — puis le système l’envoie au bon moment, pour toujours.",
    steps: {
      eyebrow: "Étape par étape",
      heading: "Un client, suivi par le système",
      intro: "De la première visite au deuxième achat — sans envoyer un seul e-mail à la main.",
      items: [
        { title: "Un visiteur arrive sur votre boutique", text: "Pages rapides, produits clairs, paiement mobile fluide. La boutique fait son seul vrai travail : transformer l’intérêt en commande." },
        { title: "Il hésite et laisse un panier plein", text: "Ça arrive à la majorité des visiteurs. La différence : votre système l’a remarqué, et une relance polie est déjà programmée." },
        { title: "Le panier revient", text: "Un e-mail automatique et sympathique — « votre panier vous attend » — ramène une partie de ces commandes perdues. À lui seul, il rentabilise souvent le système." },
        { title: "Après l’achat, la relation commence", text: "Confirmation de commande, suivi de livraison, puis un merci et une demande d’avis — tout est automatique, tout est à votre image." },
        { title: "Il revient et rachète", text: "Des semaines plus tard, un e-mail de réactivation ou une campagne nouvelle collection arrive au bon moment. Les clients qui rachètent, c’est là que vit la marge en e-commerce." },
      ],
    },
    behind: {
      eyebrow: "En coulisses",
      heading: "Ce que le système fait pendant que vous gérez le business",
      intro: "Vous ne voyez rien de tout ça se produire — seulement les résultats dans le tableau de bord :",
      label: "Moteur de croissance",
      flow: [
        { title: "La série de bienvenue accueille les inscrits", detail: "Votre histoire, vos best-sellers, première offre", status: "auto" },
        { title: "Les paniers abandonnés sont relancés", detail: "Poliment, automatiquement, à la bonne heure", status: "auto" },
        { title: "Les acheteurs sont invités à laisser un avis", detail: "La preuve sociale s’accumule toute seule", status: "auto" },
        { title: "Tableau de bord actualisé", detail: "Ventes, taux de réachat, meilleurs canaux — en direct", status: "live" },
      ],
      footer: "E-mails envoyés pendant votre sommeil",
    },
    difference: {
      eyebrow: "La différence",
      heading: "La même boutique, deux mois très différents",
      withoutTitle: "Sans le système",
      without: [
        "Les paniers abandonnés disparaissent en silence.",
        "Les acheteurs commandent une fois et ne sont jamais recontactés.",
        "Les campagnes partent à tout le monde, ne touchent personne.",
        "Chaque commande exige des messages manuels.",
        "Les chiffres vivent dans cinq outils ; les décisions à l’instinct.",
      ],
      withTitle: "Avec le système",
      with: [
        "Chaque panier reçoit une relance automatique et polie.",
        "Les acheteurs entrent dans des flows qui les font revenir.",
        "Les segments rendent chaque campagne personnelle.",
        "Confirmations et suivis s’envoient tout seuls.",
        "Un tableau de bord montre ce qui rapporte vraiment.",
      ],
    },
    numbers: {
      eyebrow: "Ce que vous récupérez",
      heading: "Le système en quatre chiffres",
      items: [
        { figure: "3+", unit: "flows", text: "bienvenue, récupération de paniers et post-achat — au travail 24h/24 dès leur mise en ligne." },
        { figure: "0", unit: "relance manuelle", text: "confirmations, rappels et demandes d’avis s’envoient tout seuls, à chaque commande." },
        { figure: "1", unit: "tableau de bord", text: "ventes, taux de réachat et performance par canal dans une seule vue." },
        { figure: "100 %", unit: "des acheteurs dans votre liste", text: "chaque client est capturé, segmenté et joignable — un actif qui vous appartient." },
      ],
    },
    proof: {
      text: "C'est la couche que je construis sur de vraies boutiques — comme Galaxy Pets, un e-commerce animalier complet livré de A à Z. L'étude de cas montre exactement ce qui a été livré.",
      linkLabel: "Lire l’étude de cas Galaxy Pets",
    },
    cta: {
      eyebrow: "Vous le voulez pour votre boutique ?",
      heading: "Parcourons votre boutique ensemble",
      text: "Un appel gratuit de 20 minutes : vous me montrez votre boutique, je vous montre exactement quels flows partiraient en premier et pourquoi. Sans pression, sans jargon.",
      secondary: "Voir les solutions e-commerce",
    },
  },
};

export default demos;
