import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ro" | "en";

const translations = {
  ro: {
    categories: "Categorii",
    contact: "Contact",
    about: "Despre noi",
    heroTitle: "Bine ai venit la Store2Home",
    heroSubtitle: "Descoperă produse selectate cu grijă, recomandări utile și inspirație pentru viața ta și nevoile tale.",
    categoryToys: "Jucării",
    categoryTech: "Tehnologie",
    categoryHealth: "Sănătate",
    categorySport: "Sport",
    categoriesTitle: "Categorii de produse",
    categoriesSubtitle: "Explorează colecțiile noastre curatiate – produse noi vin în curând.",
    signatureText: "Store2Home – produse alese cu grijă, recomandări smart pentru casa ta.",
    footerRights: "Toate drepturile rezervate.",
    comingSoon: "În curând",
    contactEmail: "contact@store2home.ro",
    aboutText: "Suntem o echipă dedicată care selectează cele mai bune produse pentru tine.",
    discoverMore: "Descoperă categoriile",
    contactTitle: "Contactează-ne",
    contactSubtitle: "Ai întrebări sau vrei să colaborăm? Scrie-ne un mesaj.",
    contactName: "Numele tău",
    contactEmailLabel: "Email",
    contactMessage: "Mesajul tău",
    contactSend: "Trimite mesajul",
    contactSuccess: "Mesaj trimis cu succes!",
    followUs: "Urmărește-ne",
    statsYears: "Ani de experiență",
    statsClients: "Clienți mulțumiți",
    statsProducts: "Produse selectate",
    statsPartners: "Parteneri de încredere",
    whyUsTitle: "De ce Store2Home?",
    whyUsCurated: "Produse curatiate",
    whyUsCuratedDesc: "Fiecare produs este selectat manual de echipa noastră pentru calitate și valoare reală.",
    whyUsSupport: "Suport dedicat",
    whyUsSupportDesc: "Echipă disponibilă non-stop, gata să te ajute cu orice întrebare sau nevoie.",
    whyUsTrust: "Încredere dovedită",
    whyUsTrustDesc: "Mii de clienți fericiți și parteneriate solide construite pe transparență.",
    whyUsDelivery: "Livrare rapidă",
    whyUsDeliveryDesc: "Produse livrate rapid și în siguranță, direct la ușa ta.",
  },
  en: {
    categories: "Categories",
    contact: "Contact",
    about: "About us",
    heroTitle: "Welcome to Store2Home",
    heroSubtitle: "Discover carefully selected products, useful recommendations, and inspiration for your life and needs.",
    categoryToys: "Toys",
    categoryTech: "Technology",
    categoryHealth: "Health",
    categorySport: "Sports",
    categoriesTitle: "Product Categories",
    categoriesSubtitle: "Explore our curated collections – new products coming soon.",
    signatureText: "Store2Home – carefully chosen products, smart recommendations for your home.",
    footerRights: "All rights reserved.",
    comingSoon: "Coming soon",
    contactEmail: "contact@store2home.ro",
    aboutText: "We are a dedicated team selecting the best products for you.",
    discoverMore: "Discover categories",
    contactTitle: "Get in Touch",
    contactSubtitle: "Have questions or want to collaborate? Send us a message.",
    contactName: "Your name",
    contactEmailLabel: "Email",
    contactMessage: "Your message",
    contactSend: "Send message",
    contactSuccess: "Message sent successfully!",
    followUs: "Follow us",
    statsYears: "Years of experience",
    statsClients: "Happy clients",
    statsProducts: "Selected products",
    statsPartners: "Trusted partners",
    whyUsTitle: "Why Store2Home?",
    whyUsCurated: "Curated products",
    whyUsCuratedDesc: "Every product is hand-picked by our team for quality and real value.",
    whyUsSupport: "Dedicated support",
    whyUsSupportDesc: "Our team is available around the clock, ready to help with any question.",
    whyUsTrust: "Proven trust",
    whyUsTrustDesc: "Thousands of happy clients and solid partnerships built on transparency.",
    whyUsDelivery: "Fast delivery",
    whyUsDeliveryDesc: "Products delivered quickly and safely, right to your door.",
  },
} as const;

type TranslationKeys = keyof typeof translations.ro;
type Translations = Record<TranslationKeys, string>;

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ro");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be inside LangProvider");
  return ctx;
};
