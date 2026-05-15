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
      de: "Spanien",
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
    // The reception — Jardines de la Cartuja
    reception: {
      time: "14:00",
      venueName: "Jardines de la Cartuja",
      venueAddress: "El Puig de Santa María · 46540 Valencia",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Jardines+de+la+Cartuja+El+Puig+Valencia",
    },
    dressCode: {
      pt: "Traje esporte fino",
      es: "Cóctel / Semi-formal",
      en: "Cocktail / Semi-formal",
      de: "Cocktail / Halbformell",
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

  // The little family — illustration of the pets shown on the home page.
  pets: {
    image: "/images/both.png",
    caption: "Grilo & Formiga",
  },

  // ─────────── TRANSPORT ───────────
  // Buses we organise for guests. Edit times/routes once confirmed.
  transport: {
    enabled: true,
    routes: [
      {
        time: "11:00",
        from: { pt: "Centro de Valência", es: "Centro de Valencia", en: "Valencia city centre", de: "Stadtzentrum Valencia" },
        to: { pt: "Iglesia San Juan del Hospital", es: "Iglesia San Juan del Hospital", en: "Iglesia San Juan del Hospital", de: "Iglesia San Juan del Hospital" },
      },
      {
        time: "13:30",
        from: { pt: "Iglesia San Juan del Hospital", es: "Iglesia San Juan del Hospital", en: "Iglesia San Juan del Hospital", de: "Iglesia San Juan del Hospital" },
        to: { pt: "Jardines de la Cartuja", es: "Jardines de la Cartuja", en: "Jardines de la Cartuja", de: "Jardines de la Cartuja" },
      },
      {
        time: "20:00",
        from: { pt: "Jardines de la Cartuja", es: "Jardines de la Cartuja", en: "Jardines de la Cartuja", de: "Jardines de la Cartuja" },
        to: { pt: "Centro de Valência", es: "Centro de Valencia", en: "Valencia city centre", de: "Stadtzentrum Valencia" },
      },
      {
        time: "23:00",
        from: { pt: "Jardines de la Cartuja", es: "Jardines de la Cartuja", en: "Jardines de la Cartuja", de: "Jardines de la Cartuja" },
        to: { pt: "Centro de Valência", es: "Centro de Valencia", en: "Valencia city centre", de: "Stadtzentrum Valencia" },
      },
      {
        time: "01:30",
        from: { pt: "Jardines de la Cartuja", es: "Jardines de la Cartuja", en: "Jardines de la Cartuja", de: "Jardines de la Cartuja" },
        to: { pt: "Centro de Valência", es: "Centro de Valencia", en: "Valencia city centre", de: "Stadtzentrum Valencia" },
      },
    ],
  },

  // ─────────── ACCOMMODATIONS ───────────
  // Hotel and apartment recommendations shown on the travel page.
  // Replace these placeholders with the ones you actually want to recommend.
  // Each one needs: a name, a 1-sentence brief in PT/ES/EN, indicative
  // starting price, and a Booking.com URL.
  accommodations: {
    hotels: [
      {
        name: "Hospes Palau de la Mar",
        brief: {
          pt: "Hotel boutique 5★ em um palácio do século XIX, no centro histórico.",
          es: "Hotel boutique 5★ en un palacio del siglo XIX, en el centro histórico.",
          en: "5★ boutique hotel in a 19th-century palace, in the historic centre.",
          de: "5★ Boutique-Hotel in einem Palast aus dem 19. Jahrhundert, in der Altstadt.",
        },
        priceFrom: "€220",
        bookingUrl:
          "https://www.booking.com/searchresults.html?ss=Hospes+Palau+de+la+Mar+Valencia",
      },
      {
        name: "Vincci Lys Valencia",
        brief: {
          pt: "Hotel 4★ a poucos passos do Mercado Central e da catedral.",
          es: "Hotel 4★ a pocos pasos del Mercado Central y la catedral.",
          en: "4★ hotel a few steps from the Mercado Central and the cathedral.",
          de: "4★ Hotel nur wenige Schritte vom Mercado Central und der Kathedrale entfernt.",
        },
        priceFrom: "€120",
        bookingUrl:
          "https://www.booking.com/searchresults.html?ss=Vincci+Lys+Valencia",
      },
      {
        name: "Hotel Venecia",
        brief: {
          pt: "Hotel 3★ central e econômico, em frente à Plaza del Ayuntamiento.",
          es: "Hotel 3★ céntrico y económico, frente a la Plaza del Ayuntamiento.",
          en: "Central, budget-friendly 3★ hotel facing Plaza del Ayuntamiento.",
          de: "Zentrales, günstiges 3★ Hotel direkt gegenüber der Plaza del Ayuntamiento.",
        },
        priceFrom: "€85",
        bookingUrl:
          "https://www.booking.com/searchresults.html?ss=Hotel+Venecia+Valencia",
      },
    ],
    apartments: [
      {
        name: "Apartamentos no Barrio del Carmen",
        brief: {
          pt: "Apartamentos com cara de Valência antiga, ótimos para grupos e estadias mais longas.",
          es: "Apartamentos con encanto del Valencia antiguo, ideales para grupos y estancias largas.",
          en: "Old-Valencia-feel apartments, great for groups and longer stays.",
          de: "Apartments im Stil der Altstadt Valencias, ideal für Gruppen und längere Aufenthalte.",
        },
        priceFrom: "€90",
        bookingUrl:
          "https://www.booking.com/searchresults.html?ss=Barrio+del+Carmen+Valencia&group_adults=2",
      },
      {
        name: "Apartamentos Ruzafa",
        brief: {
          pt: "Bairro descolado e moderno, com bons cafés e bares; bem conectado por metrô.",
          es: "Barrio moderno y con onda, con buenas cafeterías y bares; bien conectado por metro.",
          en: "Hip, modern neighbourhood with great cafés and bars; well connected by metro.",
          de: "Hippes, modernes Viertel mit tollen Cafés und Bars; gute Metro-Anbindung.",
        },
        priceFrom: "€75",
        bookingUrl:
          "https://www.booking.com/searchresults.html?ss=Ruzafa+Valencia",
      },
    ],
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
