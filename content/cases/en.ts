import type { CaseStudyCopy, WorkSlug } from "../types";

const cases: Record<WorkSlug, CaseStudyCopy> = {
  "racha-food": {
    metaTitle: "Case Study: Racha Food Ordering Platform",
    metaDescription:
      "A full food-ordering platform — trilingual Next.js storefront, Express + MongoDB backend, real-time WhatsApp tracking, web push, and a native Flutter app — built for a Marrakech food business.",
    eyebrow: "Case study · In progress",
    lede: "A full ordering platform — web, mobile, and back office — for a Marrakech home-cooked food business. Trilingual storefront, real-time WhatsApp tracking, and a native app, built from scratch.",
    facts: [
      { label: "Client", value: "Racha Food — Marrakech" },
      { label: "Category", value: "Food ordering platform" },
      { label: "Scope", value: "Web · Mobile · Admin" },
      { label: "Stack", value: "Next.js · Express · MongoDB · Flutter" },
    ],
    liveLabel: "Visit live site",
    sections: [
      {
        eyebrow: "The challenge",
        heading: "A growing food business run from a phone and a notebook.",
        paragraphs: [
          "Racha Food sells home-cooked Moroccan meals in Marrakech to customers who speak French, English, and Arabic. Orders came in over WhatsApp and phone calls — taken by hand, tracked on paper, and easy to lose at the busiest moments.",
          "There was no real storefront for customers to browse the menu and order themselves, no live order status, and nothing connecting the kitchen, the delivery, and the customer. More orders meant more chaos, not more revenue.",
          "What they needed wasn't a website. It was an operating system — one that takes the order, tracks it, keeps everyone informed, and works in three languages on every device.",
        ],
      },
      {
        eyebrow: "What I built",
        heading: "One system across web, mobile, and the back office.",
        list: [
          { lead: "A trilingual storefront", text: "a Next.js 16 / React 19 site in French, English, and Arabic (full RTL), with menu, cart, and checkout." },
          { lead: "Maps for address & delivery zones", text: "interactive Leaflet maps so customers pin their location and see if they're in range." },
          { lead: "Accounts & one-tap sign-in", text: "Google sign-in plus email accounts, with secure JWT sessions." },
          { lead: "Real-time WhatsApp order tracking", text: "every status change reaches the customer automatically." },
          { lead: "Web push notifications", text: "order alerts to customers and the kitchen, even with the tab or app closed." },
          { lead: "A custom admin back office", text: "the team manages menu, orders, and availability from one dashboard (Express + MongoDB)." },
          { lead: "A native mobile app", text: "a Flutter customer app for ordering and tracking on the go." },
        ],
      },
      {
        eyebrow: "The mobile app",
        heading: "The same system, in the customer's pocket.",
        paragraphs: [
          "A native Flutter app for customers — browse the trilingual menu, order, and track delivery, with the same live WhatsApp and push updates as the web.",
        ],
      },
      {
        eyebrow: "Where it's at",
        heading: "A live storefront today, with the app and back office rolling out.",
        paragraphs: [
          "The trilingual web storefront and ordering flow are live at rachafood.com — customers browse, order, sign in, and get WhatsApp updates with no order taken by hand. The Express + MongoDB backend, containerized with Docker, runs it all.",
          "The native Flutter app and the full admin dashboard are in active development — the same system extended to mobile and a complete back office. Built on standard, well-known tools, documented, and owned end-to-end by the client.",
        ],
        note: "Racha Food is an ongoing build. I don't publish invented metrics — I'm happy to walk through the live system and what's shipping next on a call.",
      },
    ],
    cta: {
      eyebrow: "Building something like this?",
      heading: "Let's scope the system your business actually needs.",
    },
  },
  "galaxy-pets": {
    metaTitle: "Case Study: Galaxy Pets E-commerce Platform",
    metaDescription:
      "A pet-supplies store built from scratch — a bilingual Next.js storefront, a custom admin back office, Moroccan payments (cash on delivery + CMI), WhatsApp order alerts and email — for a Moroccan pet brand.",
    eyebrow: "Case study",
    lede: "A complete pet-supplies store built from scratch — a bilingual storefront, a custom admin back office, Moroccan payments, WhatsApp order alerts and email, all owned by the brand.",
    facts: [
      { label: "Client", value: "Galaxy Pets" },
      { label: "Category", value: "E-commerce — pet supplies" },
      { label: "Scope", value: "Storefront · Admin · Payments" },
      { label: "Stack", value: "Next.js · Prisma · MySQL" },
    ],
    liveLabel: "Visit live store",
    sections: [
      {
        eyebrow: "The challenge",
        heading: "A growing pet brand with no store of its own to sell from.",
        paragraphs: [
          "Galaxy Pets had the products and the demand — a Moroccan audience that wanted pet supplies online. What it didn't have was a real store: somewhere customers could shop by animal, see live prices and stock, and order without a back-and-forth on WhatsApp.",
          "Off-the-shelf platforms didn't fit the Moroccan reality. The brand needed cash on delivery and local card payments, WhatsApp confirmations, a storefront in French and Arabic, and full control over a large catalogue — not a rigid template fighting all of that.",
          "What they needed wasn't a quick shop page. It was a complete e-commerce system — storefront, back office, payments and customer comms — built to run a real retail operation.",
        ],
      },
      {
        eyebrow: "What I built",
        heading: "A complete store and the back office that runs it.",
        list: [
          { lead: "A bilingual storefront", text: "a Next.js 16 / React 19 store in French and Arabic (RTL), with shop-by-animal browsing, brands, search, cart and checkout." },
          { lead: "Moroccan payments", text: "cash on delivery and CMI card payments, with shipping zones and rates set per region." },
          { lead: "A custom admin back office", text: "the team manages products, categories, brands, orders, coupons and content from one dashboard (Prisma + MySQL), with CSV bulk import." },
          { lead: "WhatsApp order notifications", text: "order confirmations and updates sent on the channel customers actually use." },
          { lead: "Email — newsletter & back-in-stock", text: "newsletter campaigns and automatic \"back in stock\" alerts so demand isn't lost when an item sells out." },
          { lead: "An analytics dashboard", text: "sales, orders and best-sellers in one back-office view, plus reviews, testimonials and a returns/complaints workflow." },
        ],
      },
      {
        eyebrow: "The outcome",
        heading: "A real store the brand owns end to end.",
        paragraphs: [
          "Galaxy Pets now sells from its own bilingual store at galaxypetss.com — customers browse by animal, pay by cash on delivery or card, and get confirmations on WhatsApp, while the team runs the whole catalogue and every order from one back office.",
          "Most importantly: the brand owns the whole system. It's built on standard, well-known tools, documented, and every account is in the client's name — nothing is locked inside a platform they rent.",
        ],
        note: "As a rule, I don't publish invented numbers or out-of-context metrics. The real sales figures belong to the client — I'm happy to walk through the live store and what's shipping next on a call.",
      },
    ],
    cta: {
      eyebrow: "Your store next?",
      heading: "Let's build the store your brand actually needs.",
    },
  },
};

export default cases;
