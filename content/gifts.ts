/**
 * GIFT LIST — edit this file to add, remove, or change gifts.
 * After editing on GitHub, save the change and Vercel redeploys automatically (~1 min).
 *
 * Each gift has:
 *   - id: a unique short identifier (lowercase letters, numbers, hyphens — no spaces)
 *   - title / description: text in Portuguese, Spanish, English
 *   - eurAmount: suggested amount in EUR (use 0 for "any amount")
 *   - brlAmount: suggested amount in BRL (use 0 for "any amount")
 *   - currencies: which currency lists the gift appears in. Use ["eur", "brl"]
 *       to show in both. Use ["eur"] to hide it from Brazilian guests, or
 *       ["brl"] to hide it from European guests.
 *   - image: optional URL to a photo (leave "" for the default heart icon)
 *   - stripePaymentLink: Stripe Payment Link URL (EUR only, "" to hide)
 *       See README §3b for how Bernardo creates these.
 *
 * Tip: copy an existing entry and modify it to add a new gift.
 */

export type Currency = "eur" | "brl";

export type Gift = {
  id: string;
  title: { pt: string; es: string; en: string; de: string };
  description: { pt: string; es: string; en: string; de: string };
  eurAmount: number;
  brlAmount: number;
  currencies: Currency[];
  image: string;
  stripePaymentLink: string;
};

export const gifts: Gift[] = [
  {
    id: "lua-de-mel",
    title: {
      pt: "Lua de mel",
      es: "Luna de miel",
      en: "Honeymoon",
      de: "Flitterwochen",
    },
    description: {
      pt: "Ajude-nos a viver dias inesquecíveis depois do casamento. Qualquer valor é bem-vindo.",
      es: "Ayúdanos a vivir días inolvidables después de la boda. Cualquier cantidad es bienvenida.",
      en: "Help us enjoy unforgettable days after the wedding. Any amount is welcome.",
      de: "Helft uns, nach der Hochzeit unvergessliche Tage zu erleben. Jeder Betrag ist willkommen.",
    },
    eurAmount: 100,
    brlAmount: 550,
    currencies: ["eur", "brl"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=75&auto=format&fit=crop",
    stripePaymentLink: "",
  },
  {
    id: "jantar-romantico",
    title: {
      pt: "Jantar romântico para os noivos",
      es: "Cena romántica para los novios",
      en: "Romantic dinner for the newlyweds",
      de: "Romantisches Abendessen für das Brautpaar",
    },
    description: {
      pt: "Um jantar especial para celebrarmos juntos depois do grande dia.",
      es: "Una cena especial para celebrar juntos después del gran día.",
      en: "A special dinner for us to celebrate together after the big day.",
      de: "Ein besonderes Abendessen, um nach dem großen Tag gemeinsam zu feiern.",
    },
    eurAmount: 80,
    brlAmount: 440,
    currencies: ["eur", "brl"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=75&auto=format&fit=crop",
    stripePaymentLink: "",
  },
  {
    id: "despedida-da-noiva",
    title: {
      pt: "Despedida de solteira da noiva",
      es: "Despedida de soltera de la novia",
      en: "Bride's bachelorette party",
      de: "Junggesellinnenabschied der Braut",
    },
    description: {
      pt: "Ajude a Laura a celebrar com as amigas antes do grande dia.",
      es: "Ayuda a Laura a celebrar con sus amigas antes del gran día.",
      en: "Help Laura celebrate with her friends before the big day.",
      de: "Hilf Laura, mit ihren Freundinnen vor dem großen Tag zu feiern.",
    },
    eurAmount: 50,
    brlAmount: 280,
    currencies: ["eur", "brl"],
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=75&auto=format&fit=crop",
    stripePaymentLink: "",
  },
  {
    id: "despedida-do-noivo",
    title: {
      pt: "Despedida de solteiro do noivo",
      es: "Despedida de soltero del novio",
      en: "Groom's bachelor party",
      de: "Junggesellenabschied des Bräutigams",
    },
    description: {
      pt: "Ajude o Bernardo a celebrar com os amigos antes do grande dia.",
      es: "Ayuda a Bernardo a celebrar con sus amigos antes del gran día.",
      en: "Help Bernardo celebrate with his friends before the big day.",
      de: "Hilf Bernardo, mit seinen Freunden vor dem großen Tag zu feiern.",
    },
    eurAmount: 50,
    brlAmount: 280,
    currencies: ["eur", "brl"],
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=75&auto=format&fit=crop",
    stripePaymentLink: "",
  },
  {
    id: "cuidados-pets",
    title: {
      pt: "Cuidados para Grilo e Formiga",
      es: "Cuidados para Grilo y Formiga",
      en: "Pet care for Grilo and Formiga",
      de: "Tierbetreuung für Grilo und Formiga",
    },
    description: {
      pt: "Enquanto estivermos em lua de mel, alguém precisa cuidar do nosso cãozinho e da nossa calopsita. Ajude com a guarderia!",
      es: "Mientras estemos de luna de miel, alguien tiene que cuidar de nuestro perrito y de nuestra ninfa. ¡Ayuda con la guardería!",
      en: "While we're on our honeymoon, someone needs to look after our little dog and our cockatiel. Help with the pet sitting!",
      de: "Während unserer Flitterwochen muss jemand auf unseren kleinen Hund und unsere Nymphensittich-Dame aufpassen. Hilf bei der Tierbetreuung!",
    },
    eurAmount: 60,
    brlAmount: 330,
    currencies: ["eur", "brl"],
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=75&auto=format&fit=crop",
    stripePaymentLink: "",
  },
  {
    id: "spa-dos-noivos",
    title: {
      pt: "Spa para os noivos",
      es: "Spa para los novios",
      en: "Spa day for the newlyweds",
      de: "Spa-Tag für das Brautpaar",
    },
    description: {
      pt: "Um dia de spa antes ou depois do grande dia, para relaxarmos juntos.",
      es: "Un día de spa antes o después del gran día, para relajarnos juntos.",
      en: "A spa day before or after the big day, to relax together.",
      de: "Ein Spa-Tag vor oder nach dem großen Tag, um gemeinsam zu entspannen.",
    },
    eurAmount: 100,
    brlAmount: 550,
    currencies: ["eur", "brl"],
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=75&auto=format&fit=crop",
    stripePaymentLink: "",
  },
  {
    id: "aula-de-danca",
    title: {
      pt: "Aula para a nossa primeira dança",
      es: "Clase para nuestro primer baile",
      en: "Class for our first dance",
      de: "Stunde für unseren ersten Tanz",
    },
    description: {
      pt: "Para que a nossa primeira dança seja inesquecível, ajude-nos com uma aula para os dois.",
      es: "Para que nuestro primer baile sea inolvidable, ayúdanos con una clase para los dos.",
      en: "So our first dance is unforgettable, help us with a couples' class.",
      de: "Damit unser erster Tanz unvergesslich wird, helft uns mit einer Stunde für uns beide.",
    },
    eurAmount: 40,
    brlAmount: 220,
    currencies: ["eur", "brl"],
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=75&auto=format&fit=crop",
    stripePaymentLink: "",
  },
  {
    id: "presente-livre",
    title: {
      pt: "Presente com o coração",
      es: "Regalo con el corazón",
      en: "A gift from the heart",
      de: "Ein Geschenk vom Herzen",
    },
    description: {
      pt: "Não encontrou o que procurava? Contribua com o valor que quiser e nós usaremos com carinho.",
      es: "¿No encontraste lo que buscabas? Contribuye con la cantidad que quieras y la usaremos con cariño.",
      en: "Didn't find what you were looking for? Contribute any amount you'd like — we'll put it to lovely use.",
      de: "Hast du nicht das Richtige gefunden? Trag einen beliebigen Betrag bei — wir werden ihn mit viel Liebe einsetzen.",
    },
    eurAmount: 0,
    brlAmount: 0,
    currencies: ["eur", "brl"],
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=75&auto=format&fit=crop",
    stripePaymentLink: "",
  },
];

export function formatAmount(currency: Currency, amount: number): string {
  if (amount === 0) return "";
  if (currency === "eur") return `€${amount}`;
  return `R$ ${amount}`;
}

export function defaultCurrencyForLang(lang: string): Currency {
  return lang === "pt" ? "brl" : "eur";
}
