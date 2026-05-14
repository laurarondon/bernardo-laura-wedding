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
    // ISO datetime of the CEREMONY (year-month-dayThh:mm:ss). Used for countdown.
    date: "2027-06-05T12:00:00",
    city: "Valencia",
    country: {
      pt: "Espanha",
      es: "España",
      en: "Spain",
    },
    // The ceremony — church
    ceremony: {
      time: "12:00",
      venueName: "Iglesia San Juan del Hospital",
      venueAddress:
        "Calle del Trinquete de Caballeros, 5 · 46003 Valencia",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Iglesia+San+Juan+del+Hospital+Valencia",
    },
    // The reception — Cartuja Ara Christi
    reception: {
      time: "14:00",
      venueName: "Cartuja Ara Christi",
      venueAddress: "El Puig de Santa María · 46540 Valencia",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Cartuja+Ara+Christi+El+Puig",
    },
    dressCode: {
      pt: "Traje esporte fino",
      es: "Cóctel / Semi-formal",
      en: "Cocktail / Semi-formal",
    },
  },

  // Contact email shown in the footer / for guest questions
  contactEmail: "",

  // Photos shown across the site. Drop image files into public/images/
  // and reference them here. Leave as "" to hide a slot.
  photos: {
    banner: "/images/photo-banner.jpg", // horizontal photo used as the full-width banner at the top
    portrait: "/images/photo-portrait.jpg", // vertical photo shown alongside the "our story" section
    olives: "/images/olives.png", // olive trees — visual brand mark of the wedding
    church: "/images/church.png", // illustration of the ceremony church
    tower: "/images/tower.png", // illustration shown in the wedding details page
  },

  // ─────────── GIFT LIST ───────────
  gifts: {
    // When true, the /gifts page shows a "Coming soon" placeholder instead of
    // the gift list. Switch to false when you're ready to share the gift list.
    comingSoon: true,
  },

  // ─────────── PAYMENT METHODS ───────────
  // These are shown to guests on the gift page. Fill in real values.
  // None of these connect to a payment processor — guests pay manually.

  pix: {
    enabled: true,
    // Your PIX key — can be CPF, email, phone, or random key
    key: "laurarondonb@hotmail.com",
    // Type shown to the guest so they pick the right field in their banking app
    keyType: "Email" as "CPF" | "Email" | "Telefone" | "Aleatória",
    // Name shown to confirm the recipient before paying — uppercase ASCII works best
    recipientName: "LAURA RONDON",
    // City of the recipient (used in the QR code metadata; max 15 chars, no accents)
    recipientCity: "VALENCIA",
    // Bank name (optional, for clarity — e.g. "Nubank")
    bank: "Nubank",
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

  // ─────────── RSVP ───────────
  // After getting your Formsubmit hash URL (see https://formsubmit.co),
  // paste it here. Until set, the RSVP page shows a "Coming soon" placeholder.
  // Each submission becomes an email in the inbox you registered with Formsubmit.
  rsvp: {
    endpoint: "", // e.g. "https://formsubmit.co/abc123def456..."
    // ISO date — guests see "please RSVP by …". Leave empty to hide the deadline.
    deadline: "2027-04-15",
  },
};
