import type { DemoCopy, DemoKey } from "../types";

const demos: Record<DemoKey, DemoCopy> = {
  "restaurant-system": {
    metaTitle: "Inside a Restaurant Ordering System — Plain-Language Demo",
    metaDescription:
      "Walk through a restaurant ordering and delivery system step by step — what your customer sees, what happens behind the scenes, and the work it takes off your hands. No jargon.",
    eyebrow: "System demo · no jargon",
    h1: "Inside a restaurant ordering system",
    lede: "This is the system I build for restaurants, explained the way I would explain it across a table — what your customer experiences, what happens automatically behind the scenes, and the work it takes off your hands.",
    heroSecondary: "What your customer experiences",
    note: "Everything below runs without anyone at the restaurant touching a thing.",
    steps: {
      eyebrow: "Step by step",
      heading: "What your customer experiences",
      intro: "From craving to delivered — with your restaurant in their pocket.",
      items: [
        { title: "They open your menu", text: "A link from Instagram, Google or a QR code on the table. Your full menu loads in seconds on their phone — no app to download, no account to create." },
        { title: "They order and choose delivery", text: "They pick their dishes, see the delivery fee for their neighbourhood, and place the order in a few taps." },
        { title: "They get an instant WhatsApp confirmation", text: "Within seconds: \"Order received — being prepared.\" No calling to ask if you got the order. They feel taken care of." },
        { title: "They follow their order live", text: "Preparing, out for delivery, arriving. The same updates they expect from the big apps — but on your own channel, commission-free." },
        { title: "They hear from you again", text: "After the meal, the system can say thank you, ask for a Google review, or send your next offer. One-time customers become regulars." },
      ],
    },
    behind: {
      eyebrow: "Behind the scenes",
      heading: "What happens on your side — automatically",
      intro: "While the customer taps, this is what the system does for your team:",
      label: "Service in progress",
      flow: [
        { title: "Order lands on the kitchen screen", detail: "Items, address and notes — structured, not shouted", status: "instant" },
        { title: "Customer confirmed on WhatsApp", detail: "Nobody picks up a phone", status: "auto" },
        { title: "Rider gets the delivery details", detail: "Address and order, no transcription errors", status: "auto" },
        { title: "Customer saved to your database", detail: "Name, zone and order history — yours to keep", status: "auto" },
      ],
      footer: "Orders handled without phone calls",
    },
    difference: {
      eyebrow: "The difference",
      heading: "Same rush hour, two very different evenings",
      withoutTitle: "Without the system",
      without: [
        "Phone rings non-stop; orders get scribbled on paper.",
        "Wrong addresses, forgotten items, angry callbacks.",
        "Delivery apps take 25–35% of every order.",
        "The customer belongs to the app, not to you.",
        "At closing, you guess how the day went.",
      ],
      withTitle: "With the system",
      with: [
        "Orders arrive structured on one screen.",
        "Right address, right items, every time.",
        "Direct orders are 100% commission-free.",
        "Every customer joins a list you own.",
        "At closing, the dashboard shows the real numbers.",
      ],
    },
    numbers: {
      eyebrow: "What you get back",
      heading: "The system in four numbers",
      items: [
        { figure: "0", unit: "commissions", text: "on every order that comes through your own site — the margin stays in your kitchen." },
        { figure: "24/7", unit: "ordering", text: "customers order at midnight or during the rush — the system never has a busy line." },
        { figure: "1", unit: "screen", text: "orders, preparation, delivery and history — your whole service in one dashboard." },
        { figure: "100%", unit: "of customers saved", text: "every order adds to a customer list that belongs to you, not to a delivery app." },
      ],
    },
    proof: {
      text: "This is not a concept — it is the system I built end to end for Racha Food, a real Moroccan food business: trilingual ordering site, WhatsApp tracking, delivery zones on a live map and a custom admin.",
      linkLabel: "Read the Racha Food case study",
    },
    cta: {
      eyebrow: "Want this for your restaurant?",
      heading: "Let us walk through your service together",
      text: "A free 20-minute call: you describe how orders work today, I show you exactly where this system would plug in. No pressure, no jargon.",
      secondary: "See restaurant solutions",
    },
  },
  "ecommerce-system": {
    metaTitle: "Inside an E-commerce Growth System — Plain-Language Demo",
    metaDescription:
      "Walk through an e-commerce growth system step by step — what your customer experiences, which emails go out automatically, and how the dashboard shows your real numbers. No jargon.",
    eyebrow: "System demo · no jargon",
    h1: "Inside an e-commerce growth system",
    lede: "This is the system I build around online stores, explained in plain language — what your customer experiences, which messages go out automatically, and how you finally see your real numbers.",
    heroSecondary: "One customer, followed by the system",
    note: "Every message below is written once — then the system sends it at the right moment, forever.",
    steps: {
      eyebrow: "Step by step",
      heading: "One customer, followed by the system",
      intro: "From first visit to second purchase — without you sending a single email by hand.",
      items: [
        { title: "A visitor lands on your store", text: "Fast pages, clear products, smooth mobile checkout. The store does its one job: turning interest into an order." },
        { title: "They hesitate and leave a full cart", text: "It happens to most visitors. The difference: your system noticed, and a polite reminder is already scheduled." },
        { title: "The cart comes back", text: "A friendly automatic email — \"your cart is waiting\" — brings a share of those lost orders home. This alone often pays for the system." },
        { title: "After the purchase, the relationship starts", text: "Order confirmation, delivery updates, then a thank-you and a review request — all automatic, all on brand." },
        { title: "They come back and buy again", text: "Weeks later, a win-back email or a new-collection campaign lands at the right moment. Repeat buyers are where e-commerce margins live." },
      ],
    },
    behind: {
      eyebrow: "Behind the scenes",
      heading: "What the system does while you run the business",
      intro: "You see none of this happening — only the results in the dashboard:",
      label: "Growth engine",
      flow: [
        { title: "Welcome series greets new subscribers", detail: "Your brand story, best-sellers, first offer", status: "auto" },
        { title: "Abandoned carts get reminded", detail: "Politely, automatically, at the right hour", status: "auto" },
        { title: "Buyers asked for reviews", detail: "Social proof accumulates on its own", status: "auto" },
        { title: "Dashboard refreshed", detail: "Sales, repeat rate, best channels — live", status: "live" },
      ],
      footer: "Emails sent while you slept",
    },
    difference: {
      eyebrow: "The difference",
      heading: "Same store, two very different months",
      withoutTitle: "Without the system",
      without: [
        "Abandoned carts disappear silently.",
        "Buyers purchase once and are never contacted again.",
        "Campaigns go to everyone, land with no one.",
        "Every order means manual messages and updates.",
        "Numbers live in five tools; decisions run on instinct.",
      ],
      withTitle: "With the system",
      with: [
        "Every cart gets an automatic, polite reminder.",
        "Buyers enter flows that bring them back.",
        "Segments make every campaign feel personal.",
        "Confirmations and follow-ups send themselves.",
        "One dashboard shows what actually makes money.",
      ],
    },
    numbers: {
      eyebrow: "What you get back",
      heading: "The system in four numbers",
      items: [
        { figure: "3+", unit: "flows", text: "welcome, cart recovery and post-purchase — working 24/7 from the day they go live." },
        { figure: "0", unit: "manual follow-ups", text: "confirmations, reminders and review requests send themselves, every order." },
        { figure: "1", unit: "dashboard", text: "sales, repeat-purchase rate and channel performance in a single view." },
        { figure: "100%", unit: "of buyers on your list", text: "every customer is captured, segmented and reachable — an asset you own." },
      ],
    },
    proof: {
      text: "This is the layer I build on real stores — like Galaxy Pets, a complete pet-supplies e-commerce build delivered end to end. The case study shows exactly what shipped.",
      linkLabel: "Read the Galaxy Pets case study",
    },
    cta: {
      eyebrow: "Want this for your store?",
      heading: "Let us walk through your store together",
      text: "A free 20-minute call: you show me your store, I show you exactly which flows would go live first and why. No pressure, no jargon.",
      secondary: "See e-commerce solutions",
    },
  },
};

export default demos;
