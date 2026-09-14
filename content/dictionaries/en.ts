import type { Dictionary } from "../types";
import solutions from "../solutions/en";
import cases from "../cases/en";
import demos from "../demos/en";

const en: Dictionary = {
  meta: {
    description:
      "Youssef Hamraoui builds the systems growing businesses run on: lead capture, bookings, CRM, AI workflows and the website underneath. Based in Khouribga, Morocco, working worldwide in English and French.",
    ogDescription:
      "Lead capture, bookings, CRM, AI workflows and the website underneath them. Built for you, documented, and handed over in your name.",
    ogLocale: "en_US",
  },
  nav: {
    sections: "Sections",
    language: "Language",
    work: "Work",
    whoIHelp: "Who I help",
    services: "Services",
    process: "Process",
    contact: "Contact",
  },
  ui: {
    bookCall: "Book a free call",
    bookDiscovery: "Book a free discovery call",
    readCase: "Read the case study",
    seeMoreWork: "See more work",
    seeSystem: "See the system",
    live: "Live",
    home: "Home",
  },
  hero: {
    status: "Open for new projects",
    h1Before: "I build the quiet machinery that growing businesses ",
    h1Em: "run on.",
    h1After: "",
    lede: "Lead capture, bookings, CRM, AI workflows and the website underneath them. Built for you, tested with your real data, documented, and handed over in your name.",
    cta: "Book a free discovery call",
    seeWork: "See the work",
    facts: [
      { label: "Based", value: "Khouribga, Morocco. Working worldwide" },
      { label: "Languages", value: "English and French" },
      { label: "Time zone", value: "GMT+1, overlaps EU and US mornings" },
      { label: "How I work", value: "Directly with founders, no agency layers" },
    ],
  },
  work: {
    label: "Selected work",
    sub: "Live systems, real businesses. Open them and judge for yourself.",
    caseStudy: "Case study",
    items: {
      "racha-food": {
        meta: ["Food delivery", "Marrakech", "Web, app, admin"],
        description:
          "A home-cooked food business in Marrakech that took every order by phone and WhatsApp. I built their own ordering platform: a trilingual storefront with live WhatsApp order tracking, with a native app and a full back office now in development.",
        outcome: "Customers now order online and get WhatsApp updates, with no order taken by hand.",
        alt: "Racha Food home page with the daily special and order button",
      },
      "galaxy-pets": {
        meta: ["E-commerce", "Pet supplies", "Storefront, back office"],
        description:
          "A pet-supplies store built from scratch: a bilingual Next.js storefront, a custom admin back office for stock and orders, Moroccan payment methods wired in, and WhatsApp alerts the moment an order lands.",
        outcome: "One place to sell, one place to run it, owned by the client end to end.",
        alt: "Galaxy Pets storefront home page with a golden retriever and featured products",
      },
    },
  },
  whoIHelp: {
    label: "Who I help",
    sub: "Pick your world. The system it needs is already mapped.",
    heading: "Systems built for your industry",
  },
  products: {
    label: "Own products",
    sub: "Atelier Pixory. Apps I design, build and sell myself.",
    heading: "Five apps, each one a single file.",
    intro:
      "Under the Atelier Pixory name I make private, offline apps that run in any browser from one HTML file. No account, no subscription, no app store. Building and selling my own products keeps me honest about what a finished, self-explanatory system looks like.",
    items: {
      prospera: {
        blurb: "Budget dashboard with debt payoff planner, savings goals and bill calendar.",
        alt: "Prospera budget dashboard shown on a laptop and phone",
      },
      momentum: {
        blurb: "Habit and routine tracker with streaks, heatmaps and 30-day challenges.",
        alt: "Momentum habit tracker shown on a phone",
      },
      nestling: {
        blurb: "Pregnancy and first-year tracker: kicks, feeds, sleep, growth, journal.",
        alt: "Nestling pregnancy and baby tracker shown on a phone",
      },
      pawprint: {
        blurb: "Pet health record: vaccinations, medications, vet visits, sitter sheet.",
        alt: "Pawprint pet care journal shown on a laptop and phone",
      },
      aisle: {
        blurb: "Wedding planner: timed checklist, budget, guest list, seating, vendors.",
        alt: "Aisle wedding planner shown on a laptop and phone",
      },
    },
  },
  services: {
    label: "What I build",
    sub: "Every system targets one number: leads, bookings, or hours saved.",
    items: [
      {
        title: "Lead engine",
        text: "A landing page, a capture form, and an instant follow-up by email or WhatsApp. From first click to booked appointment, without anyone chasing.",
        tools: "Landing pages · Meta Ads ready · WhatsApp · CRM sync",
      },
      {
        title: "Bookings and CRM",
        text: "Online scheduling, automatic reminders, and a pipeline where no message gets lost. Fewer no-shows, fewer sticky notes.",
        tools: "Cal.com · CRM · Reminders",
      },
      {
        title: "AI workflows",
        text: "Intake triage, drafted replies, content prep. AI does the busywork, a human signs off before anything goes out.",
        tools: "Claude · Make · n8n",
      },
      {
        title: "Web platform and dashboard",
        text: "A fast site with SEO foundations and analytics, and your key numbers pulled into one live view. The base layer everything else stands on.",
        tools: "Next.js · WooCommerce · Looker Studio · Sheets",
      },
    ],
    else: "Something that isn't on this list? Describe the problem. We scope it together, I design it, I ship it.",
  },
  process: {
    label: "How it goes",
    sub: "From first call to a system that runs on its own.",
    steps: [
      {
        title: "Discovery call",
        tag: "30 min, free",
        text: "We find where you are losing clients and time. If I can't help, I say so on the call.",
      },
      {
        title: "Blueprint",
        tag: "fixed quote",
        text: "A clear plan: the tools, the flows, and a fixed price. No surprises later.",
      },
      {
        title: "Build and connect",
        tag: "",
        text: "I build the system, wire up your existing tools, and test it with your real data.",
      },
      {
        title: "Handover",
        tag: "30 days of support",
        text: "Documentation, training, and every account and access in your name. The system is yours.",
      },
    ],
  },
  about: {
    label: "About",
    paragraphs: [
      "I'm Youssef, a business systems builder based in Khouribga, Morocco. I work directly with founders, in English and French, on the unglamorous parts of a business that decide whether it grows: how a lead comes in, how a booking gets confirmed, how the numbers get seen.",
      "I design the system, wire it together, and hand it over. No agency layers, no proprietary black box, no invented testimonials. Judge me on the live systems above.",
    ],
    principles: [
      { title: "You own everything", text: "Accounts, access, code and documentation, all in your name from day one." },
      { title: "Built on tools you keep", text: "Standard tools your team can take over. Nothing that only I can operate." },
      { title: "Tied to a number", text: "If a system won't move leads, bookings or hours saved, I won't build it." },
    ],
  },
  contact: {
    label: "Contact",
    sub: "Reply within 24 hours.",
    heading: "Tell me what's stuck.",
    how: "Describe your biggest problem in two sentences. If I can help, we book a 30-minute call. If I can't, I'll say so and point you somewhere better.",
    subject: "Discovery call",
  },
  footer: {
    place: "Based in Morocco · Working worldwide",
    note: "Built by hand. No tracking beyond what you'd expect.",
    tagline: "Systems that bring clients in — and keep the machine running.",
    site: "Site",
    whoIHelp: "Who I help",
    social: "Social",
  },
  solutions,
  cases,
  demos,
};

export default en;
