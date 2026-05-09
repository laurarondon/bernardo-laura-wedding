export type Lang = "pt" | "es" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      wedding: "O casamento",
      gifts: "Lista de presentes",
      rsvp: "Confirmar presença",
    },
    home: {
      saveTheDate: "Save the Date",
      tagline: "Vamos casar!",
      countdown: {
        days: "dias",
        hours: "horas",
        minutes: "min",
        seconds: "seg",
      },
      ourStory: "A nossa história",
      ourStoryBody:
        "Aqui contamos um pouquinho de como tudo começou. (Edite este texto em content/translations.ts)",
      seeDetails: "Ver detalhes do casamento",
      seeGifts: "Ver lista de presentes",
    },
    wedding: {
      title: "O casamento",
      subtitle: "Tudo o que você precisa saber",
      whenLabel: "Quando",
      whereLabel: "Onde",
      dressCodeLabel: "Traje",
      mapButton: "Ver no mapa",
      weatherLabel: "Junho à beira do Mediterrâneo",
      weatherBody:
        "Em junho, Valência se entrega ao Mediterrâneo: dias longos e ensolarados, brisas mornas vindas do mar, e um céu quase sempre azul. As temperaturas passeiam entre 20°C ao amanhecer e 28°C à tarde, e o sol se demora no horizonte até umas 21h30. Tragam tecidos leves — algodão, linho — e sapatos confortáveis para celebrar conosco até a noite cair.",
      faqTitle: "Perguntas frequentes",
      faq: [
        {
          q: "Posso levar acompanhante?",
          a: "Por favor confirme connosco; o convite indica quantos lugares estão reservados.",
        },
        {
          q: "As crianças são bem-vindas?",
          a: "Sim, mas avise-nos para podermos preparar tudo.",
        },
        {
          q: "Vai haver transporte?",
          a: "Estamos a organizar e atualizaremos esta página em breve.",
        },
      ],
    },
    gifts: {
      title: "Lista de presentes",
      subtitle:
        "A vossa presença já é o melhor presente. Mas se quiserem contribuir com algo a mais, deixamos algumas ideias abaixo.",
      contributeButton: "Contribuir",
      suggestedAmount: "Valor sugerido",
      anyAmount: "Qualquer valor",
      currencyToggleLabel: "Em qual moeda você quer contribuir?",
      eurFull: "Euros (Espanha · Europa)",
      brlFull: "Reais (Brasil)",
      paymentTitle: "Como contribuir",
      paymentSubtitle:
        "Escolha uma das opções abaixo. Tudo é processado de forma segura — nunca pedimos os seus dados de cartão diretamente.",
      stripe: {
        title: "Apple Pay · Google Pay · Cartão",
        instructions:
          "Pagamento rápido e seguro processado pela Stripe. Funciona em qualquer país.",
        button: "Pagar com Apple Pay ou cartão",
        recommended: "Mais rápido",
      },
      pix: {
        title: "PIX (Brasil)",
        instructions:
          "Abra o app do seu banco, escaneie o QR code abaixo, ou copie e cole o código PIX. O valor e a descrição do presente já vêm preenchidos.",
        qrTitle: "Escaneie com seu banco",
        copyPasteTitle: "Ou copie e cole o código PIX",
        copyPasteCopy: "Copiar código",
        copyPasteCopied: "Copiado!",
        manualTitle: "Ou pague manualmente com a chave PIX",
        keyLabel: "Chave PIX",
        keyTypeLabel: "Tipo",
        recipientLabel: "Recebedor",
        bankLabel: "Banco",
        copyButton: "Copiar chave",
        copiedButton: "Copiado!",
        unconfigured:
          "A chave PIX ainda não foi configurada. Por favor, contate os noivos.",
      },
      bizum: {
        title: "Bizum (España)",
        instructions:
          "Abra o app do seu banco, escolha Bizum, e envie ao número abaixo. No conceito/mensagem, escreva o nome do presente.",
        phoneLabel: "Telefone",
        recipientLabel: "Destinatário",
        copyButton: "Copiar telefone",
        copiedButton: "Copiado!",
      },
      bankTransfer: {
        title: "Transferência bancária",
        instructions:
          "Para outros países: faça uma transferência internacional para o IBAN abaixo. Inclua o nome do presente na referência.",
        ibanLabel: "IBAN",
        bicLabel: "BIC/SWIFT",
        bankLabel: "Banco",
        recipientLabel: "Destinatário",
        copyButton: "Copiar IBAN",
        copiedButton: "Copiado!",
      },
      thanksTitle: "Obrigada!",
      thanksBody:
        "Após enviar, mande-nos uma mensagem para confirmarmos o recebimento. Cada contribuição será celebrada com muito carinho.",
      back: "← Voltar à lista",
    },
    rsvp: {
      title: "Confirmar presença",
      subtitle: "Mal podemos esperar para celebrar com você.",
      deadlinePrefix: "Por favor, confirme até",
      nameLabel: "Nome completo",
      namePlaceholder: "Como deseja que apareça na lista",
      emailLabel: "E-mail",
      emailPlaceholder: "Para enviarmos novidades (opcional)",
      attendingLabel: "Você poderá vir?",
      attendingYes: "Sim, mal posso esperar 💕",
      attendingNo: "Infelizmente não poderei",
      partySizeLabel: "Quantas pessoas no total (incluindo você)?",
      dietaryLabel: "Alguma restrição alimentar ou alergia?",
      dietaryPlaceholder: "Vegetariano, sem glúten, alergia a frutos do mar...",
      messageLabel: "Mensagem para os noivos",
      messagePlaceholder: "Algumas palavras com carinho (opcional)",
      submitButton: "Enviar confirmação",
      submitting: "Enviando…",
      successTitle: "Confirmação recebida 💕",
      successBody:
        "Obrigada! Recebemos a sua resposta. Se precisar mudar algo depois, é só nos avisar.",
      errorTitle: "Algo deu errado",
      errorBody:
        "Não conseguimos enviar a sua confirmação. Por favor tente novamente em instantes ou nos avise diretamente.",
      requiredHint: "*Campos obrigatórios",
      notConfiguredTitle: "Em breve",
      notConfiguredBody:
        "O formulário de confirmação ainda não está pronto. Volte em breve!",
    },
    footer: {
      madeWith: "Com amor,",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      wedding: "La boda",
      gifts: "Lista de regalos",
      rsvp: "Confirmar asistencia",
    },
    home: {
      saveTheDate: "Save the Date",
      tagline: "¡Nos casamos!",
      countdown: {
        days: "días",
        hours: "horas",
        minutes: "min",
        seconds: "seg",
      },
      ourStory: "Nuestra historia",
      ourStoryBody:
        "Aquí contamos un poquito de cómo empezó todo. (Edita este texto en content/translations.ts)",
      seeDetails: "Ver detalles de la boda",
      seeGifts: "Ver lista de regalos",
    },
    wedding: {
      title: "La boda",
      subtitle: "Todo lo que necesitas saber",
      whenLabel: "Cuándo",
      whereLabel: "Dónde",
      dressCodeLabel: "Vestimenta",
      mapButton: "Ver en el mapa",
      weatherLabel: "Junio a la orilla del Mediterráneo",
      weatherBody:
        "En junio, Valencia se entrega al Mediterráneo: días largos y soleados, brisas templadas que llegan del mar, y un cielo casi siempre azul. Las temperaturas pasean entre los 20°C del amanecer y los 28°C de la tarde, y el sol se queda en el horizonte hasta las 21:30. Traed tejidos ligeros — algodón, lino — y zapatos cómodos para celebrar con nosotros hasta que caiga la noche.",
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          q: "¿Puedo llevar acompañante?",
          a: "Por favor confírmalo con nosotros; la invitación indica cuántos sitios están reservados.",
        },
        {
          q: "¿Los niños son bienvenidos?",
          a: "Sí, pero avísanos para poder organizarlo todo.",
        },
        {
          q: "¿Habrá transporte?",
          a: "Lo estamos organizando y actualizaremos esta página pronto.",
        },
      ],
    },
    gifts: {
      title: "Lista de regalos",
      subtitle:
        "Vuestra presencia ya es el mejor regalo. Pero si queréis contribuir con algo más, aquí dejamos algunas ideas.",
      contributeButton: "Contribuir",
      suggestedAmount: "Importe sugerido",
      anyAmount: "Cualquier importe",
      currencyToggleLabel: "¿En qué moneda quieres contribuir?",
      eurFull: "Euros (España · Europa)",
      brlFull: "Reales (Brasil)",
      paymentTitle: "Cómo contribuir",
      paymentSubtitle:
        "Elige una de las opciones de abajo. Todo se procesa de forma segura — nunca pedimos tus datos de tarjeta directamente.",
      stripe: {
        title: "Apple Pay · Google Pay · Tarjeta",
        instructions:
          "Pago rápido y seguro procesado por Stripe. Funciona desde cualquier país.",
        button: "Pagar con Apple Pay o tarjeta",
        recommended: "Más rápido",
      },
      pix: {
        title: "PIX (Brasil)",
        instructions:
          "Abre la app de tu banco brasileño, escanea el QR de abajo, o copia y pega el código PIX. El importe y la descripción del regalo ya vienen rellenados.",
        qrTitle: "Escanea con tu banco",
        copyPasteTitle: "O copia y pega el código PIX",
        copyPasteCopy: "Copiar código",
        copyPasteCopied: "¡Copiado!",
        manualTitle: "O paga manualmente con la clave PIX",
        keyLabel: "Clave PIX",
        keyTypeLabel: "Tipo",
        recipientLabel: "Destinatario",
        bankLabel: "Banco",
        copyButton: "Copiar clave",
        copiedButton: "¡Copiado!",
        unconfigured:
          "La clave PIX aún no está configurada. Por favor, contacta a los novios.",
      },
      bizum: {
        title: "Bizum (España)",
        instructions:
          "Abre la app de tu banco, elige Bizum, y envía al número de abajo. En el concepto, escribe el nombre del regalo.",
        phoneLabel: "Teléfono",
        recipientLabel: "Destinatario",
        copyButton: "Copiar teléfono",
        copiedButton: "¡Copiado!",
      },
      bankTransfer: {
        title: "Transferencia bancaria",
        instructions:
          "Para otros países: haz una transferencia internacional al IBAN de abajo. Incluye el nombre del regalo en el concepto.",
        ibanLabel: "IBAN",
        bicLabel: "BIC/SWIFT",
        bankLabel: "Banco",
        recipientLabel: "Destinatario",
        copyButton: "Copiar IBAN",
        copiedButton: "¡Copiado!",
      },
      thanksTitle: "¡Gracias!",
      thanksBody:
        "Después de enviar, escríbenos para confirmar la recepción. Cada contribución la celebraremos con mucho cariño.",
      back: "← Volver a la lista",
    },
    rsvp: {
      title: "Confirmar asistencia",
      subtitle: "No vemos la hora de celebrar contigo.",
      deadlinePrefix: "Por favor, confirma antes del",
      nameLabel: "Nombre completo",
      namePlaceholder: "Cómo quieres aparecer en la lista",
      emailLabel: "Email",
      emailPlaceholder: "Para enviarte novedades (opcional)",
      attendingLabel: "¿Podrás venir?",
      attendingYes: "Sí, no me lo pierdo 💕",
      attendingNo: "Lamentablemente no podré asistir",
      partySizeLabel: "¿Cuántas personas en total (contigo incluido/a)?",
      dietaryLabel: "¿Alguna restricción alimentaria o alergia?",
      dietaryPlaceholder: "Vegetariano, sin gluten, alergia al marisco…",
      messageLabel: "Un mensaje para los novios",
      messagePlaceholder: "Unas palabras con cariño (opcional)",
      submitButton: "Enviar confirmación",
      submitting: "Enviando…",
      successTitle: "¡Confirmación recibida! 💕",
      successBody:
        "¡Gracias! Hemos recibido tu respuesta. Si necesitas cambiar algo después, sólo avísanos.",
      errorTitle: "Algo ha ido mal",
      errorBody:
        "No hemos podido enviar tu confirmación. Inténtalo de nuevo en un momento o avísanos directamente.",
      requiredHint: "*Campos obligatorios",
      notConfiguredTitle: "Muy pronto",
      notConfiguredBody:
        "El formulario de confirmación aún no está listo. ¡Vuelve pronto!",
    },
    footer: {
      madeWith: "Con amor,",
    },
  },
  en: {
    nav: {
      home: "Home",
      wedding: "The wedding",
      gifts: "Gift list",
      rsvp: "RSVP",
    },
    home: {
      saveTheDate: "Save the Date",
      tagline: "We're getting married!",
      countdown: {
        days: "days",
        hours: "hours",
        minutes: "min",
        seconds: "sec",
      },
      ourStory: "Our story",
      ourStoryBody:
        "A little about how it all began. (Edit this text in content/translations.ts)",
      seeDetails: "Wedding details",
      seeGifts: "Gift list",
    },
    wedding: {
      title: "The wedding",
      subtitle: "Everything you need to know",
      whenLabel: "When",
      whereLabel: "Where",
      dressCodeLabel: "Dress code",
      mapButton: "Open in maps",
      weatherLabel: "June by the Mediterranean",
      weatherBody:
        "In June, Valencia gives itself over to the Mediterranean: long sun-soaked days, warm sea breezes, and a sky almost always blue. Temperatures wander from 20°C at dawn to 28°C in the afternoon (68–82°F), and the sun lingers on the horizon until around 9:30 pm. Bring light fabrics — cotton, linen — and comfortable shoes to celebrate with us until the evening sets in.",
      faqTitle: "Frequently asked",
      faq: [
        {
          q: "May I bring a plus one?",
          a: "Please confirm with us — your invitation lists how many seats are reserved for you.",
        },
        {
          q: "Are children welcome?",
          a: "Yes, but please let us know in advance so we can prepare.",
        },
        {
          q: "Will there be transport?",
          a: "We're organising it and will update this page soon.",
        },
      ],
    },
    gifts: {
      title: "Gift list",
      subtitle:
        "Your presence is already the greatest gift. But if you'd like to contribute, here are some ideas.",
      contributeButton: "Contribute",
      suggestedAmount: "Suggested amount",
      anyAmount: "Any amount",
      currencyToggleLabel: "Which currency would you like to contribute in?",
      eurFull: "Euros (Spain · Europe)",
      brlFull: "Brazilian reais",
      paymentTitle: "How to contribute",
      paymentSubtitle:
        "Choose one of the options below. Everything is processed securely — we never ask for your card details directly.",
      stripe: {
        title: "Apple Pay · Google Pay · Card",
        instructions:
          "Quick and secure payment processed by Stripe. Works from anywhere in the world.",
        button: "Pay with Apple Pay or card",
        recommended: "Fastest",
      },
      pix: {
        title: "PIX (Brazil)",
        instructions:
          "Open your Brazilian banking app, scan the QR code below, or copy and paste the PIX code. The amount and gift description are pre-filled.",
        qrTitle: "Scan with your bank app",
        copyPasteTitle: "Or copy and paste the PIX code",
        copyPasteCopy: "Copy code",
        copyPasteCopied: "Copied!",
        manualTitle: "Or pay manually with the PIX key",
        keyLabel: "PIX key",
        keyTypeLabel: "Type",
        recipientLabel: "Recipient",
        bankLabel: "Bank",
        copyButton: "Copy key",
        copiedButton: "Copied!",
        unconfigured:
          "The PIX key has not been configured yet. Please contact the couple.",
      },
      bizum: {
        title: "Bizum (Spain)",
        instructions:
          "Open your bank app, choose Bizum, and send to the number below. In the concept/message, write the gift name.",
        phoneLabel: "Phone",
        recipientLabel: "Recipient",
        copyButton: "Copy phone",
        copiedButton: "Copied!",
      },
      bankTransfer: {
        title: "Bank transfer",
        instructions:
          "For other countries: make an international transfer to the IBAN below. Include the gift name in the reference.",
        ibanLabel: "IBAN",
        bicLabel: "BIC/SWIFT",
        bankLabel: "Bank",
        recipientLabel: "Recipient",
        copyButton: "Copy IBAN",
        copiedButton: "Copied!",
      },
      thanksTitle: "Thank you!",
      thanksBody:
        "After sending, please drop us a message so we can confirm receipt. Every contribution will be celebrated with so much love.",
      back: "← Back to the list",
    },
    rsvp: {
      title: "RSVP",
      subtitle: "We can't wait to celebrate with you.",
      deadlinePrefix: "Please reply by",
      nameLabel: "Full name",
      namePlaceholder: "How you'd like to appear on the guest list",
      emailLabel: "Email",
      emailPlaceholder: "So we can send you updates (optional)",
      attendingLabel: "Will you be able to come?",
      attendingYes: "Yes, can't wait 💕",
      attendingNo: "Sadly I won't be able to make it",
      partySizeLabel: "How many people total (including yourself)?",
      dietaryLabel: "Any dietary restrictions or allergies?",
      dietaryPlaceholder: "Vegetarian, gluten-free, shellfish allergy…",
      messageLabel: "A message for the couple",
      messagePlaceholder: "A few words from the heart (optional)",
      submitButton: "Send RSVP",
      submitting: "Sending…",
      successTitle: "RSVP received 💕",
      successBody:
        "Thank you! We've got your reply. If you need to change anything later, just let us know.",
      errorTitle: "Something went wrong",
      errorBody:
        "We couldn't send your reply. Please try again in a moment or message us directly.",
      requiredHint: "*Required fields",
      notConfiguredTitle: "Coming soon",
      notConfiguredBody:
        "The RSVP form isn't ready yet. Please check back soon!",
    },
    footer: {
      madeWith: "With love,",
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
