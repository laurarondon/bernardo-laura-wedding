/**
 * GIFT LIST — edit this file to add, remove, or change gifts.
 * After editing on GitHub, save the change and Vercel redeploys automatically (~1 min).
 *
 * Each gift has:
 *   - id: a unique short identifier (lowercase letters, numbers, hyphens — no spaces)
 *   - title / description: text in both Portuguese and Spanish
 *   - amount: target value in EUR (just a suggestion shown to guests)
 *   - image: optional URL to a photo (leave "" to use a placeholder)
 *   - allowMultiple: true = many guests can chip in; false = single gift, first to claim wins
 *   - stripePaymentLink: optional URL from a Stripe Payment Link.
 *       When set, an "Apple Pay / Card" button appears on the gift page.
 *       Leave as "" to hide that option for this gift.
 *       See README section 3b for how Bernardo creates these links.
 *
 * Tip: copy an existing entry and modify it to add a new gift.
 */

export type Gift = {
  id: string;
  title: { pt: string; es: string; en: string };
  description: { pt: string; es: string; en: string };
  amount: number; // EUR
  image: string;
  allowMultiple: boolean;
  stripePaymentLink: string;
};

export const gifts: Gift[] = [
  {
    id: "lua-de-mel",
    title: {
      pt: "Lua de mel",
      es: "Luna de miel",
      en: "Honeymoon",
    },
    description: {
      pt: "Ajude-nos a viver dias inesquecíveis depois do casamento. Qualquer valor é bem-vindo.",
      es: "Ayúdanos a vivir días inolvidables después de la boda. Cualquier cantidad es bienvenida.",
      en: "Help us enjoy unforgettable days after the wedding. Any amount is welcome.",
    },
    amount: 100,
    image: "",
    allowMultiple: true,
    stripePaymentLink: "",
  },
  {
    id: "jantar-romantico",
    title: {
      pt: "Jantar romântico para os noivos",
      es: "Cena romántica para los novios",
      en: "Romantic dinner for the newlyweds",
    },
    description: {
      pt: "Um jantar especial para celebrarmos juntos depois do grande dia.",
      es: "Una cena especial para celebrar juntos después del gran día.",
      en: "A special dinner for us to celebrate together after the big day.",
    },
    amount: 80,
    image: "",
    allowMultiple: true,
    stripePaymentLink: "",
  },
  {
    id: "despedida-da-noiva",
    title: {
      pt: "Despedida de solteira da noiva",
      es: "Despedida de soltera de la novia",
      en: "Bride's bachelorette party",
    },
    description: {
      pt: "Ajude a Laura a celebrar com as amigas antes do grande dia.",
      es: "Ayuda a Laura a celebrar con sus amigas antes del gran día.",
      en: "Help Laura celebrate with her friends before the big day.",
    },
    amount: 50,
    image: "",
    allowMultiple: true,
    stripePaymentLink: "",
  },
  {
    id: "despedida-do-noivo",
    title: {
      pt: "Despedida de solteiro do noivo",
      es: "Despedida de soltero del novio",
      en: "Groom's bachelor party",
    },
    description: {
      pt: "Ajude o Bernardo a celebrar com os amigos antes do grande dia.",
      es: "Ayuda a Bernardo a celebrar con sus amigos antes del gran día.",
      en: "Help Bernardo celebrate with his friends before the big day.",
    },
    amount: 50,
    image: "",
    allowMultiple: true,
    stripePaymentLink: "",
  },
  {
    id: "presente-livre",
    title: {
      pt: "Presente com o coração",
      es: "Regalo con el corazón",
      en: "A gift from the heart",
    },
    description: {
      pt: "Não encontrou o que procurava? Contribua com o valor que quiser e nós usaremos com carinho.",
      es: "¿No encontraste lo que buscabas? Contribuye con la cantidad que quieras y la usaremos con cariño.",
      en: "Didn't find what you were looking for? Contribute any amount you'd like — we'll put it to lovely use.",
    },
    amount: 0,
    image: "",
    allowMultiple: true,
    stripePaymentLink: "",
  },
];
