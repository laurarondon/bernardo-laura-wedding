/**
 * SETTINGS — edit this file to change payment info, venue, and basic site config.
 * After editing on GitHub, save the change and Vercel will redeploy automatically (~1 min).
 *
 * If you ever want to TEMPORARILY disable a payment method, set its `enabled` to false.
 */

export const settings = {
  couple: {
    bride: "Laura",
    groom: "Bernardo",
    // Order on the home page: "bride-first" or "groom-first"
    order: "groom-first" as "bride-first" | "groom-first",
  },

  wedding: {
    // ISO date of the ceremony (year-month-day, 24h time)
    date: "2027-06-05T17:00:00",
    city: "Valencia",
    country: {
      pt: "Espanha",
      es: "España",
      en: "Spain",
    },
    venueName: "Iglesia San Juan del Hospital",
    venueAddress: "Calle del Trinquete de Caballeros, 5 · 46003 Valencia",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Iglesia+San+Juan+del+Hospital+Valencia",
    dressCode: {
      pt: "Traje esporte fino",
      es: "Cóctel / Semi-formal",
      en: "Cocktail / Semi-formal",
    },
  },

  // Contact email shown in the footer / for guest questions
  contactEmail: "",

  // Photos shown on the home page. Drop image files into public/images/
  // and reference them here. Leave as "" to hide a slot.
  photos: {
    hero: "/images/photo-hero.jpg", // vertical photo shown next to the names
    story: "/images/photo-story.jpg", // horizontal photo shown above the story
  },

  // ─────────── PAYMENT METHODS ───────────
  // These are shown to guests on the gift page. Fill in real values.
  // None of these connect to a payment processor — guests pay manually.

  pix: {
    enabled: true,
    // Your PIX key — can be CPF, email, phone, or random key
    key: "REPLACE_WITH_LAURA_PIX_KEY",
    // Type shown to the guest so they pick the right field in their banking app
    keyType: "CPF" as "CPF" | "Email" | "Telefone" | "Aleatória",
    // Name shown to confirm the recipient before paying
    recipientName: "Laura Rondon",
    // Bank name (optional, for clarity)
    bank: "",
  },

  bizum: {
    enabled: true,
    // Bernardo's Bizum phone number with country code, e.g. "+34 600 000 000"
    phone: "+34 REPLACE_WITH_BERNARDO_PHONE",
    recipientName: "Bernardo",
  },

  bankTransfer: {
    enabled: true,
    // International bank transfer for guests outside Brazil/Spain
    iban: "ES00 0000 0000 0000 0000 0000",
    bic: "",
    bankName: "",
    recipientName: "Bernardo",
  },

  // ─────────── ADMIN ───────────
  // Email shown to guests if they want to confirm a gift was received
  adminEmail: "",
};
