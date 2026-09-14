import type { IndustryKey, SolutionCopy } from "../types";

const restaurants: SolutionCopy = {
  navLabel: "Restaurants",
  card: {
    eyebrow: "For restaurants & food businesses",
    title: "Restaurants & Food Delivery",
    text: "Your own ordering website, WhatsApp confirmations and a kitchen dashboard — commission-free orders.",
  },
  eyebrow: "For restaurants & food businesses",
  trustLine: "Built for real restaurants in Morocco · French, Arabic & English supported",
  hub: {
    metaTitle: "Online Ordering Systems for Restaurants in Morocco",
    metaDescription:
      "Your own ordering website, WhatsApp order tracking, kitchen dashboard and customer database — commission-free orders for restaurants across Morocco.",
    h1: "Your restaurant takes orders while you cook.",
    lede: "I build the complete ordering system — your own ordering website, WhatsApp confirmations, kitchen dashboard and customer database — so orders arrive clean, confirmed and commission-free.",
  },
  city: {
    metaTitle: (c) => `Online Ordering System for Restaurants in ${c}`,
    metaDescription: (c) =>
      `I build ordering and delivery systems for restaurants in ${c}: your own ordering website, WhatsApp confirmations, kitchen dashboard and customer database — commission-free.`,
    h1: (c) => `Your restaurant in ${c} takes orders while you cook.`,
    lede: (c) =>
      `I build ordering and delivery systems for restaurants in ${c} — your own ordering website, WhatsApp confirmations, kitchen dashboard and a customer database you own. No commissions on your direct orders.`,
    whyEyebrow: (c) => `Why this matters in ${c}`,
    whyHeading: (c) => `Restaurants in ${c}`,
    whyBody: (c) =>
      `If you run a restaurant, snack or food-delivery business in ${c}, every rush hour is a test of your organisation: phone ringing, WhatsApp messages piling up, riders waiting for addresses. The system I build turns that chaos into one clean flow — and every order adds a customer to a list you own.`,
    faq: (c) => ({
      q: `Do you work with restaurants in ${c}?`,
      a: `Yes. I build and run everything remotely — calls, WhatsApp and screen-shares — so working with a restaurant in ${c} is exactly as smooth as working with one next door. I am based in Khouribga and work with businesses across Morocco.`,
    }),
    alsoHeading: "Also building for restaurants in",
    allLink: "All restaurant systems",
  },
  heroSecondary: "Walk through the demo",
  pains: {
    eyebrow: "Does this sound familiar?",
    heading: "Where restaurants lose money every single day",
    items: [
      "Phone orders during the rush — wrong addresses, missed calls, mistakes that cost you the customer.",
      "Delivery apps taking 25–35% commission on every order — and keeping the customer data for themselves.",
      "No customer list — you have regulars, but no way to bring them back with an offer or a new menu.",
      "Delivery coordination by phone call — your best employee spends the evening dispatching riders.",
      "No real numbers — you close at midnight without knowing which dishes or zones actually made money.",
    ],
    note: "None of this is fixed by working harder. It is fixed by a system that takes the repetitive work off your hands.",
  },
  system: {
    eyebrow: "The system",
    heading: "What I build for your restaurant",
    features: [
      {
        title: "Your own ordering website",
        tagline: "Commission-free orders, 24/7",
        text: "A fast menu your customers open on their phone — no app to install. Cart, delivery zones, opening hours, in French, Arabic or English.",
        tags: ["Online menu", "Delivery zones", "Multilingual"],
      },
      {
        title: "WhatsApp order flow",
        tagline: "Every order confirmed & tracked",
        text: "Instant confirmation and real-time status updates on the channel your customers already use every day.",
        tags: ["WhatsApp", "Auto-confirmations"],
      },
      {
        title: "Kitchen & delivery dashboard",
        tagline: "One screen runs the whole service",
        text: "New orders, preparation status, rider assignment — your team sees everything live, nobody shouts across the kitchen.",
        tags: ["Dashboard", "Real time"],
      },
      {
        title: "Customer database & follow-up",
        tagline: "Turn one-time orders into regulars",
        text: "Every order builds a customer list you own. Send the new menu, a Ramadan offer, a \"we miss you\" — and watch regulars come back.",
        tags: ["Customer list", "Campaigns"],
      },
    ],
    flowLabel: "Order flow",
    flow: [
      { title: "New order received", detail: "2× Tajine · delivery, Quartier centre", status: "received" },
      { title: "WhatsApp confirmation sent", detail: "Customer notified automatically", status: "auto" },
      { title: "Kitchen dashboard updated", detail: "Preparation started", status: "live" },
      { title: "Rider assigned", detail: "Tracking link sent to customer", status: "done" },
    ],
  },
  changes: {
    eyebrow: "What changes",
    heading: "Life with the system",
    items: [
      { lead: "No more phone chaos", text: "orders arrive structured, with the right address and the right items, every time." },
      { lead: "Your direct channel grows", text: "regulars order from your site instead of paying app prices, and you keep the margin." },
      { lead: "You own your customers", text: "names, numbers and order history live in your database, not in a delivery app." },
      { lead: "You see your numbers", text: "orders, best-sellers and busiest zones, in one dashboard instead of a guess at midnight." },
    ],
  },
  proof: {
    eyebrow: "Racha Food · Built in the real world",
    heading: "This is the exact system behind Racha Food",
    text: "A trilingual ordering platform (French, Arabic, English) with WhatsApp order tracking, delivery zones on a live map and a custom admin dashboard — built end to end for a real Moroccan food business.",
    linkLabel: "Read the case study",
    demoLabel: "Walk through the demo",
  },
  faq: {
    eyebrow: "Questions",
    heading: "What restaurant owners ask me",
    items: [
      {
        q: "How much does a system like this cost?",
        a: "A full restaurant system — ordering website, WhatsApp flow, dashboard and customer database — typically lands between 10,000 and 20,000 MAD depending on scope. You get a fixed quote after a free call; no surprises mid-project.",
      },
      {
        q: "How long does it take to launch?",
        a: "Most restaurant systems go live in 3 to 6 weeks, including your menu, delivery zones and team training. You keep serving customers the whole time — nothing stops while we build.",
      },
      {
        q: "Do I need to be technical to run it?",
        a: "No. Your team manages everything from one simple dashboard, and I train them. If you prefer not to touch anything at all, I also offer a monthly plan where I run and improve the system for you.",
      },
      {
        q: "Should I leave Glovo and the delivery apps?",
        a: "Not necessarily — keep them if they bring you volume. The goal of your own system is the direct channel: your regulars order commission-free from you, and you finally own the customer relationship.",
      },
    ],
  },
  where: {
    eyebrow: "Where I work",
    heading: "Restaurant systems across Morocco",
    intro: "I build ordering and delivery systems for restaurants in every major Moroccan city:",
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Let us look at your restaurant together",
    text: "A free 20-minute call: you describe how orders work today, I tell you exactly what I would build and what it would change. No pressure, no jargon.",
    secondary: "See the demo first",
  },
};

const ecommerce: SolutionCopy = {
  navLabel: "E-commerce",
  card: {
    eyebrow: "For online stores & brands",
    title: "E-commerce & Online Stores",
    text: "A store that sells while you sleep — automated email flows, recovered carts and your real numbers.",
  },
  eyebrow: "For online stores & brands",
  trustLine: "Built for real Moroccan online brands · WooCommerce & custom storefronts",
  hub: {
    metaTitle: "E-commerce Growth Systems in Morocco",
    metaDescription:
      "A store that sells while you sleep: high-converting storefront, automated email flows, recovered carts and one dashboard with your real numbers — for Moroccan online brands.",
    h1: "A store that sells while you sleep.",
    lede: "I build the growth system around your store — automated email flows, abandoned-cart recovery, customer segments and a dashboard with your real numbers — so revenue grows without growing your team.",
  },
  city: {
    metaTitle: (c) => `E-commerce Growth System in ${c}`,
    metaDescription: (c) =>
      `I build e-commerce growth systems for online brands in ${c}: storefront, automated email flows, abandoned-cart recovery and an analytics dashboard — revenue without extra staff.`,
    h1: (c) => `Your ${c} store sells while you sleep.`,
    lede: (c) =>
      `I build e-commerce growth systems for brands in ${c} — automated email flows, abandoned-cart recovery, customer segments and one dashboard with your real numbers. More revenue per visitor, without more staff.`,
    whyEyebrow: (c) => `Why this matters in ${c}`,
    whyHeading: (c) => `Online brands in ${c}`,
    whyBody: (c) =>
      `If you sell online from ${c}, you already know the hard part is not getting the store live — it is everything after: following up on carts, answering the same questions, knowing which products actually make money. That is exactly the layer I build.`,
    faq: (c) => ({
      q: `Do you work with brands in ${c}?`,
      a: `Yes. The whole build runs remotely — calls, WhatsApp and screen-shares — so working with a brand in ${c} is exactly as smooth as working locally. I am based in Khouribga and work with businesses across Morocco.`,
    }),
    alsoHeading: "Also building for brands in",
    allLink: "All e-commerce systems",
  },
  heroSecondary: "Walk through the demo",
  pains: {
    eyebrow: "Does this sound familiar?",
    heading: "Where online stores leave money on the table",
    items: [
      "Visitors add to cart and disappear — and nobody ever follows up with them.",
      "One-time buyers never come back, because nothing invites them back.",
      "Marketing means posting on Instagram and hoping — there is no machine behind it.",
      "Orders, stock and customer questions are handled by hand, one WhatsApp message at a time.",
      "You make decisions on instinct because your numbers live in five different places.",
    ],
    note: "Ads bring traffic. Systems turn traffic into revenue — automatically, every day.",
  },
  system: {
    eyebrow: "The system",
    heading: "What I build around your store",
    features: [
      {
        title: "A storefront built to convert",
        tagline: "More buyers from the same traffic",
        text: "A fast, clean store — new or rebuilt on what you have. Clear product pages, smooth checkout, mobile-first for the Moroccan market.",
        tags: ["Storefront", "Mobile-first"],
      },
      {
        title: "Automated email flows",
        tagline: "Selling 24/7 without you touching anything",
        text: "Welcome series, abandoned-cart recovery, post-purchase follow-up and win-back campaigns — written once, working every day.",
        tags: ["Email flows", "Cart recovery"],
      },
      {
        title: "Customer segments & campaigns",
        tagline: "The right offer to the right customer",
        text: "VIPs, first-time buyers, sleepers — your list gets organised so every campaign lands instead of spamming everyone.",
        tags: ["Segments", "Campaigns"],
      },
      {
        title: "One dashboard, your real numbers",
        tagline: "Decisions on data, not instinct",
        text: "Sales, best-sellers, repeat-purchase rate and what each channel brings — in one view you actually check.",
        tags: ["Analytics", "Dashboard"],
      },
    ],
    flowLabel: "Growth engine",
    flow: [
      { title: "Order placed", detail: "Confirmation + delivery email sent", status: "auto" },
      { title: "Cart abandoned", detail: "Recovery reminder scheduled", status: "auto" },
      { title: "Post-purchase flow", detail: "Review request + cross-sell sent", status: "live" },
      { title: "Dashboard updated", detail: "Revenue & best-sellers refreshed", status: "done" },
    ],
  },
  changes: {
    eyebrow: "What changes",
    heading: "Life with the system",
    items: [
      { lead: "Carts get recovered", text: "every abandoned cart gets a polite, automatic reminder instead of being lost forever." },
      { lead: "Customers come back", text: "welcome, follow-up and win-back flows keep your brand in their inbox at the right moments." },
      { lead: "Operations stop eating your day", text: "confirmations, tracking updates and FAQs are handled by the system, not by you at 11pm." },
      { lead: "You finally see clearly", text: "one dashboard tells you what sells, who buys again and which channel deserves your budget." },
    ],
  },
  proof: {
    eyebrow: "Galaxy Pets · Built in the real world",
    heading: "See it on a real store: Galaxy Pets",
    text: "A complete pet-supplies e-commerce build — storefront, catalogue and the systems around it — built end to end for a real brand. The case study shows exactly what was delivered.",
    linkLabel: "Read the case study",
    demoLabel: "Walk through the demo",
  },
  faq: {
    eyebrow: "Questions",
    heading: "What store owners ask me",
    items: [
      {
        q: "How much does an e-commerce growth system cost?",
        a: "A full growth system — store plus email flows, automations and analytics — typically lands between 15,000 and 30,000 MAD depending on scope. Fixed quote after a free call; no surprises mid-project.",
      },
      {
        q: "I already have a store. Do I have to rebuild it?",
        a: "Usually not. If your store converts decently, I build the growth layer around it — flows, automations, dashboard. If the store itself is the bottleneck, I tell you honestly before we start.",
      },
      {
        q: "How long until the flows are live?",
        a: "Email flows and cart recovery are usually live within 2 to 4 weeks. A full build with a new storefront takes 4 to 8 weeks depending on catalogue size.",
      },
      {
        q: "Will I be able to run it myself?",
        a: "Yes — everything is set up in tools you can own and I train you on them. If you prefer, a monthly plan is available where I keep optimising the flows and report the numbers to you.",
      },
    ],
  },
  where: {
    eyebrow: "Where I work",
    heading: "E-commerce systems across Morocco",
    intro: "I build growth systems for online brands in every major Moroccan city:",
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Let us look at your store together",
    text: "A free 20-minute call: you show me your store and how orders work today, I tell you exactly what I would build and what it would change. No pressure, no jargon.",
    secondary: "See the demo first",
  },
};

const carRental: SolutionCopy = {
  navLabel: "Car rental",
  card: {
    eyebrow: "For car rental agencies",
    title: "Car Rental Agencies",
    text: "Online reservations, a live fleet calendar and WhatsApp confirmations — your fleet booked 24/7.",
  },
  eyebrow: "For car rental agencies",
  trustLine: "Built for the Moroccan market · French, Arabic & English supported",
  hub: {
    metaTitle: "Booking Systems for Car Rental Agencies in Morocco",
    metaDescription:
      "Online reservations, a live fleet calendar, WhatsApp confirmations and a customer database — booking systems for car rental agencies across Morocco.",
    h1: "Your fleet gets booked while you drive.",
    lede: "I build the complete booking system — online reservations, a live fleet calendar, WhatsApp confirmations and a customer database — so every car works for you around the clock.",
  },
  city: {
    metaTitle: (c) => `Booking System for Car Rental in ${c}`,
    metaDescription: (c) =>
      `I build booking systems for car rental agencies in ${c}: online reservations, live fleet calendar, WhatsApp confirmations and a customer database.`,
    h1: (c) => `Your ${c} fleet gets booked while you drive.`,
    lede: (c) =>
      `I build booking systems for car rental agencies in ${c} — online reservations, live fleet calendar, WhatsApp confirmations and a customer database you own.`,
    whyEyebrow: (c) => `Why this matters in ${c}`,
    whyHeading: (c) => `Car rental in ${c}`,
    whyBody: (c) =>
      `If you run a rental agency in ${c}, you know the routine: WhatsApp messages at midnight, double bookings, deposits chased by phone, contracts filled by hand. The system I build replaces that with one calendar, automatic confirmations and a record for every customer and every car.`,
    faq: (c) => ({
      q: `Do you work with agencies in ${c}?`,
      a: `Yes. I build and run everything remotely — calls, WhatsApp and screen-shares — so working with an agency in ${c} is exactly as smooth as working locally. I am based in Khouribga and work with businesses across Morocco.`,
    }),
    alsoHeading: "Also building for agencies in",
    allLink: "All car rental systems",
  },
  heroSecondary: "What I build for your agency",
  pains: {
    eyebrow: "Does this sound familiar?",
    heading: "Where rental agencies lose bookings every week",
    items: [
      "Reservation requests arriving on three channels at once — and some never get answered.",
      "Double bookings because availability lives in your head, not in a calendar.",
      "Tourists who want to book and pay online — and go to a competitor who lets them.",
      "Contracts, deposits and reminders handled by hand for every single rental.",
      "No customer history — no idea who rents twice a year and deserves a loyal-client rate.",
    ],
    note: "Every missed message is a parked car. A booking system keeps the fleet moving.",
  },
  system: {
    eyebrow: "The system",
    heading: "What I build for your agency",
    features: [
      {
        title: "Online booking website",
        tagline: "Reservations 24/7, even from abroad",
        text: "Your fleet with real photos, prices and availability — customers pick dates, book and get confirmed without a single phone call.",
        tags: ["Online booking", "Multilingual"],
      },
      {
        title: "Live fleet calendar",
        tagline: "Zero double bookings",
        text: "Every car, every reservation, every return — one calendar your whole team sees, updated in real time.",
        tags: ["Fleet calendar", "Real time"],
      },
      {
        title: "WhatsApp confirmations & reminders",
        tagline: "Customers informed automatically",
        text: "Booking confirmations, pickup reminders and return-day messages — sent automatically on the channel your customers already use.",
        tags: ["WhatsApp", "Reminders"],
      },
      {
        title: "Customer & contract database",
        tagline: "Every rental documented, every client known",
        text: "Customer history, documents and contracts in one place — and your repeat renters identified for loyalty rates.",
        tags: ["CRM", "Contracts"],
      },
    ],
    flowLabel: "Booking flow",
    flow: [
      { title: "New booking request", detail: "Dacia Duster · 5 days · airport pickup", status: "received" },
      { title: "Fleet calendar checked", detail: "Availability confirmed automatically", status: "auto" },
      { title: "WhatsApp confirmation sent", detail: "Pickup details delivered to customer", status: "auto" },
      { title: "Contract prepared", detail: "Customer record updated", status: "done" },
    ],
  },
  changes: {
    eyebrow: "What changes",
    heading: "Life with the system",
    items: [
      { lead: "No more missed bookings", text: "requests arrive in one place and get answered even while you are on the road." },
      { lead: "The calendar is the truth", text: "availability lives in the system, so double bookings simply stop happening." },
      { lead: "Tourists book you online", text: "visitors from Europe reserve and get confirmed before they even land." },
      { lead: "Repeat renters come back", text: "your customer base is documented, so loyal clients get recognised and rewarded." },
    ],
  },
  proof: {
    eyebrow: "Coming soon",
    heading: "A real car-rental build is on the way",
    text: "I am currently building this exact system for a Moroccan car rental agency. The case study and live demo will be published here as soon as it ships.",
    linkLabel: "See my other work",
  },
  faq: {
    eyebrow: "Questions",
    heading: "What agency owners ask me",
    items: [
      {
        q: "How much does a booking system cost?",
        a: "A full agency system — booking website, fleet calendar, WhatsApp flow and customer database — typically lands between 10,000 and 20,000 MAD depending on fleet size and scope. Fixed quote after a free call.",
      },
      {
        q: "How long does it take to launch?",
        a: "Most booking systems go live in 3 to 6 weeks, including your fleet, pricing rules and team training.",
      },
      {
        q: "Can customers pay online?",
        a: "Yes — deposits or full payment online if you want it, or booking-without-payment with confirmation by WhatsApp if you prefer to keep payment at pickup.",
      },
      {
        q: "Do I need to be technical to run it?",
        a: "No. You manage cars, prices and bookings from one simple dashboard, and I train you. A monthly plan is available if you want me to run it for you.",
      },
    ],
  },
  where: {
    eyebrow: "Where I work",
    heading: "Booking systems across Morocco",
    intro: "I build booking systems for rental agencies in every major Moroccan city:",
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Let us look at your agency together",
    text: "A free 20-minute call: you describe how bookings work today, I tell you exactly what I would build and what it would change. No pressure, no jargon.",
    secondary: "See my work",
  },
};

const solutions: Record<IndustryKey, SolutionCopy> = {
  restaurants,
  "e-commerce": ecommerce,
  "car-rental": carRental,
};

export default solutions;
