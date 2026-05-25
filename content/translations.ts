export type Lang = "pt" | "es" | "en" | "de";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      wedding: "O casamento",
      gifts: "Lista de presentes",
      travel: "Viajar",
      rsvp: "Confirmar presença",
    },
    home: {
      saveTheDate: "Save the Date",
      addToCalendar: "Adicionar à agenda",
      tagline: "Vamos casar!",
      countdown: {
        days: "dias",
        hours: "horas",
        minutes: "min",
        seconds: "seg",
      },
      ourStory: "A nossa pequena família",
      ourStoryIntro:
        "Bernardo cresceu em Valência, Laura no Campo Grande. Culturas, famílias, países diferentes. Mas a vida cruzou os nossos caminhos aqui em Valência, e desde o primeiro instante descobrimos quanta coisa temos em comum: desde o mais banal — o gosto pela música e pelos filmes, o jeito de rir das mesmas bobagens — até o que mais importa: os sonhos e a vontade de formar uma família.",
      ourStoryFamily:
        "Tivemos a sorte de crescer vendo nossos pais juntos a vida inteira, e é esse o exemplo que queremos seguir. Pelo caminho chegaram a Formiga, a calopsita atrevida que canta o dia inteiro, e o Grilo, o cachorro mais campestre do bairro. A nossa família já começou — queremos vocês aqui para celebrar com a gente.",
      seeDetails: "Ver detalhes do casamento",
      seeGifts: "Ver lista de presentes",
    },
    wedding: {
      title: "O casamento",
      subtitle: "Tudo o que você precisa saber",
      whenLabel: "Quando",
      ceremonyLabel: "Cerimônia",
      receptionLabel: "Recepção",
      dressCodeLabel: "Traje",
      mapButton: "Ver no mapa",
      ceremonyBody:
        "A Igreja de San Juan del Hospital, fundada no século XIII pelos Cavaleiros do Hospital de São João, é um dos templos mais antigos de Valência. Suas pedras antigas, arcos góticos e pátio silencioso guardam séculos de história — parece-nos o lugar perfeito para começar a nossa vida juntos.",
      receptionBody:
        "Os Jardines de la Cartuja são os jardins históricos do antigo mosteiro cartuxo Ara Christi, em El Puig — a uns 20 minutos do centro de Valência. Construído no século XVII, o lugar guarda olivais centenários, fontes em pedra antiga e arcos brancos, onde vamos almoçar, brindar e dançar até o sol se pôr.",
      weatherLabel: "Sobre Valência em junho",
      weatherBody:
        "Valência fica na costa leste da Espanha, banhada pelo mar Mediterrâneo. Em junho, as temperaturas costumam variar entre 20°C e 28°C, com céu ensolarado e brisa suave do mar. O sol se põe por volta das 21h30, então a celebração se estende com calma sob o longo céu de verão. Recomendamos tecidos leves — algodão, linho — e sapatos confortáveis, sobretudo porque os jardins da Cartuja têm caminhos de pedra.",
      transportLabel: "Como vamos chegar",
      transportBody:
        "Vamos organizar ônibus para que ninguém precise se preocupar em dirigir. Da igreja até os jardins da Cartuja e, na volta, da Cartuja até o centro de Valência em vários horários, para que cada um curte a festa no seu ritmo.",
      transportRouteFrom: "Saída de",
      transportRouteTo: "Chegada em",
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
      comingSoonTitle: "Em breve",
      comingSoonBody:
        "Estamos preparando a lista de presentes com muito carinho. Volte em breve!",
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
    travel: {
      title: "Para os nossos viajantes",
      subtitle:
        "Algumas ideias para vocês descansarem e descobrirem Valência sem stress.",
      gettingThereTitle: "Como chegar",
      gettingThereBody:
        "Do Brasil, os voos costumam fazer escala em Madri, Lisboa ou Barcelona — daí dá para pegar um voo curto até Valência ou o trem de alta velocidade (AVE Madri-Valência, ~1h40). O aeroporto de Valência (VLC) também recebe voos diretos de várias cidades da Europa. Do aeroporto, o metrô (linhas 3 e 5) leva ao centro em uns 25 minutos.",
      hotelsTitle: "Hotéis recomendados",
      hotelsBody:
        "Selecionamos algumas opções com boa localização. Os preços são uma referência e variam pela época.",
      apartmentsTitle: "Apartamentos",
      apartmentsBody:
        "Para quem prefere mais espaço, cozinha, ou viaja em grupo.",
      priceFromLabel: "A partir de",
      bookButton: "Ver no Booking",
      tipsTitle: "Dicas de Valência",
      tipsBody:
        "Algumas coisas que adoramos na nossa cidade: paella autêntica na Albufera, horchata fresca no verão, passear pelo Jardín del Turia (um antigo rio convertido em parque), e tomar um vermouth na hora do aperitivo no bairro de Ruzafa.",
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
      openFormFallback: "Não consegue ver o formulário? Abra numa nova aba →",
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
      travel: "Viaje",
      rsvp: "Confirmar asistencia",
    },
    home: {
      saveTheDate: "Save the Date",
      addToCalendar: "Añadir al calendario",
      tagline: "¡Nos casamos!",
      countdown: {
        days: "días",
        hours: "horas",
        minutes: "min",
        seconds: "seg",
      },
      ourStory: "Nuestra pequeña familia",
      ourStoryIntro:
        "Bernardo creció en Valencia, Laura en Campo Grande. Culturas, familias, países distintos. Pero la vida cruzó nuestros caminos aquí, en Valencia, y desde el primer momento descubrimos cuántas cosas teníamos en común: desde lo más cotidiano — el gusto por la música y por las películas, la forma de reírnos de las mismas tonterías — hasta lo que más importa: los sueños y las ganas de formar una familia.",
      ourStoryFamily:
        "Tuvimos la suerte de crecer viendo a nuestros padres juntos toda la vida, y ese es el ejemplo que queremos seguir. Por el camino llegaron Formiga, la ninfa cantarina y atrevida, y Grilo, el perro más campestre del barrio. Nuestra familia ya ha empezado — queremos que vengáis a celebrarlo con nosotros.",
      seeDetails: "Ver detalles de la boda",
      seeGifts: "Ver lista de regalos",
    },
    wedding: {
      title: "La boda",
      subtitle: "Todo lo que necesitas saber",
      whenLabel: "Cuándo",
      ceremonyLabel: "Ceremonia",
      receptionLabel: "Recepción",
      dressCodeLabel: "Vestimenta",
      mapButton: "Ver en el mapa",
      ceremonyBody:
        "La iglesia de San Juan del Hospital, fundada en el siglo XIII por los Caballeros Hospitalarios de San Juan, es uno de los templos más antiguos de Valencia. Sus piedras viejas, arcos góticos y patio silencioso guardan siglos de historia — nos parece el lugar perfecto para comenzar nuestra vida juntos.",
      receptionBody:
        "Los Jardines de la Cartuja son los jardines históricos del antiguo monasterio cartujo Ara Christi, en El Puig — a unos 20 minutos del centro de Valencia. Construido en el siglo XVII, el lugar guarda olivos centenarios, fuentes de piedra antigua y arcos blancos, donde vamos a almorzar, brindar y bailar hasta que se ponga el sol.",
      weatherLabel: "Sobre Valencia en junio",
      weatherBody:
        "Valencia está en la costa este de España, bañada por el mar Mediterráneo. En junio, las temperaturas suelen oscilar entre los 20°C y los 28°C, con cielos soleados y una suave brisa del mar. El sol se pone hacia las 21:30, así que la celebración se alarga con calma bajo el largo cielo de verano. Recomendamos tejidos ligeros — algodón, lino — y calzado cómodo, sobre todo porque los jardines de la Cartuja tienen caminos de piedra.",
      transportLabel: "Cómo llegamos",
      transportBody:
        "Vamos a organizar autobuses para que nadie tenga que preocuparse por conducir. Desde la iglesia hasta los jardines de la Cartuja y, a la vuelta, desde la Cartuja al centro de Valencia en varios horarios, para que cada quien disfrute la fiesta a su ritmo.",
      transportRouteFrom: "Salida desde",
      transportRouteTo: "Llegada a",
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
      comingSoonTitle: "Muy pronto",
      comingSoonBody:
        "Estamos preparando la lista de regalos con mucho cariño. ¡Vuelve pronto!",
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
    travel: {
      title: "Para nuestros viajeros",
      subtitle:
        "Algunas ideas para que descanséis y descubráis Valencia sin estrés.",
      gettingThereTitle: "Cómo llegar",
      gettingThereBody:
        "Desde Brasil, los vuelos suelen hacer escala en Madrid, Lisboa o Barcelona — desde ahí se puede coger un vuelo corto hasta Valencia o el tren de alta velocidad (AVE Madrid-Valencia, ~1h40). El aeropuerto de Valencia (VLC) también recibe vuelos directos desde varias ciudades europeas. Desde el aeropuerto, el metro (líneas 3 y 5) llega al centro en unos 25 minutos.",
      hotelsTitle: "Hoteles recomendados",
      hotelsBody:
        "Hemos seleccionado algunas opciones bien ubicadas. Los precios son orientativos y varían según la temporada.",
      apartmentsTitle: "Apartamentos",
      apartmentsBody:
        "Para quienes prefieren más espacio, cocina, o viajan en grupo.",
      priceFromLabel: "Desde",
      bookButton: "Ver en Booking",
      tipsTitle: "Tips de Valencia",
      tipsBody:
        "Algunas cosas que amamos de nuestra ciudad: paella auténtica en l'Albufera, horchata fresca en verano, pasear por el Jardín del Turia (un antiguo río convertido en parque), y tomarse un vermut a la hora del aperitivo en el barrio de Ruzafa.",
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
      openFormFallback: "¿No ves el formulario? Ábrelo en una pestaña nueva →",
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
      travel: "Travel",
      rsvp: "RSVP",
    },
    home: {
      saveTheDate: "Save the Date",
      addToCalendar: "Add to calendar",
      tagline: "We're getting married!",
      countdown: {
        days: "days",
        hours: "hours",
        minutes: "min",
        seconds: "sec",
      },
      ourStory: "Our little family",
      ourStoryIntro:
        "Bernardo grew up in Valencia, Laura in Campo Grande. Different cultures, families, countries. But life crossed our paths here in Valencia, and from the very first moment we discovered how much we had in common: from mundane things like the taste in music and films, the way of laughing at the same silly humour, to the big ones — the dreams and the purpose of forming a family.",
      ourStoryFamily:
        "We were lucky to grow up watching our parents stay together a lifetime, and that's the example we want to follow. Along the way came Formiga, the cheeky singing cockatiel, and Grilo, the most countryside-loving dog in the neighbourhood. Our family is starting — we want you to come celebrate with us.",
      seeDetails: "Wedding details",
      seeGifts: "Gift list",
    },
    wedding: {
      title: "The wedding",
      subtitle: "Everything you need to know",
      whenLabel: "When",
      ceremonyLabel: "Ceremony",
      receptionLabel: "Reception",
      dressCodeLabel: "Dress code",
      mapButton: "Open in maps",
      ceremonyBody:
        "The Church of San Juan del Hospital, founded in the 13th century by the Knights Hospitaller of Saint John, is one of the oldest churches in Valencia. Its old stones, Gothic arches, and quiet inner courtyard hold centuries of history — and feel like the perfect place to begin our life together.",
      receptionBody:
        "The Jardines de la Cartuja are the historic gardens of the former Ara Christi Carthusian monastery in El Puig — about 20 minutes from central Valencia. Built in the 17th century, the grounds hold centuries-old olive trees, old stone fountains, and white arches, where we'll lunch, toast, and dance until sundown.",
      weatherLabel: "About Valencia in June",
      weatherBody:
        "Valencia sits on Spain's east coast, on the Mediterranean. In June, temperatures usually range from 20°C to 28°C (68–82°F), with sunny skies and a gentle sea breeze. Sunset comes around 9:30 pm, so the celebration unfolds at a leisurely pace under the long summer sky. We suggest light fabrics — cotton, linen — and comfortable shoes, especially since the gardens at la Cartuja have stone paths.",
      transportLabel: "How we'll get there",
      transportBody:
        "We're putting on coaches so no one has to worry about driving. From the church to the Jardines de la Cartuja, and back from the Cartuja to central Valencia at several times so everyone can enjoy the party at their own pace.",
      transportRouteFrom: "Departing from",
      transportRouteTo: "Arriving at",
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
      comingSoonTitle: "Coming soon",
      comingSoonBody:
        "We're putting the gift list together with a lot of care. Please check back soon!",
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
    travel: {
      title: "For our travellers",
      subtitle:
        "A few ideas to help you settle in and explore Valencia, stress-free.",
      gettingThereTitle: "Getting here",
      gettingThereBody:
        "From Brazil, flights usually connect through Madrid, Lisbon or Barcelona — from there you can take a short flight to Valencia or the high-speed train (AVE Madrid–Valencia, ~1h40). Valencia airport (VLC) also has direct flights from many European cities. From the airport, the metro (lines 3 and 5) reaches the centre in about 25 minutes.",
      hotelsTitle: "Recommended hotels",
      hotelsBody:
        "A handful of well-located options. Prices are indicative and vary by season.",
      apartmentsTitle: "Apartments",
      apartmentsBody:
        "For those who'd rather have more space, a kitchen, or are travelling in a group.",
      priceFromLabel: "From",
      bookButton: "View on Booking",
      tipsTitle: "Valencia tips",
      tipsBody:
        "A few things we love about our city: real paella out in l'Albufera, cold horchata in summer, a long walk through the Jardín del Turia (an old riverbed turned park), and an early-evening vermouth in the Ruzafa neighbourhood.",
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
      openFormFallback: "Can't see the form? Open it in a new tab →",
    },
    footer: {
      madeWith: "With love,",
    },
  },
  de: {
    nav: {
      home: "Start",
      wedding: "Die Hochzeit",
      gifts: "Geschenkliste",
      travel: "Reise",
      rsvp: "Zusagen",
    },
    home: {
      saveTheDate: "Save the Date",
      addToCalendar: "Im Kalender speichern",
      tagline: "Wir heiraten!",
      countdown: {
        days: "Tage",
        hours: "Std",
        minutes: "Min",
        seconds: "Sek",
      },
      ourStory: "Unsere kleine Familie",
      ourStoryIntro:
        "Bernardo wuchs in Valencia auf, Laura in Campo Grande. Andere Kulturen, andere Familien, andere Länder. Aber das Leben kreuzte unsere Wege hier in Valencia, und vom ersten Moment an entdeckten wir, wie viel wir gemeinsam haben: vom Alltäglichen — dem Geschmack für Musik und Filme, der Art, über dieselben Albernheiten zu lachen — bis zum Wesentlichen: den Träumen und dem Wunsch, eine Familie zu gründen.",
      ourStoryFamily:
        "Wir hatten das Glück, mit Eltern aufzuwachsen, die ein ganzes Leben zusammen geblieben sind, und genau diesem Vorbild wollen wir folgen. Unterwegs kamen Formiga, die freche, singende Nymphensittich-Dame, und Grilo, der ländlichste Hund der Nachbarschaft. Unsere Familie hat begonnen — wir möchten, dass ihr kommt, um mit uns zu feiern.",
      seeDetails: "Hochzeitsdetails",
      seeGifts: "Geschenkliste",
    },
    wedding: {
      title: "Die Hochzeit",
      subtitle: "Alles Wichtige auf einen Blick",
      whenLabel: "Wann",
      ceremonyLabel: "Trauung",
      receptionLabel: "Empfang",
      dressCodeLabel: "Dresscode",
      mapButton: "Auf Karte öffnen",
      ceremonyBody:
        "Die Kirche San Juan del Hospital wurde im 13. Jahrhundert von den Johanniterrittern gegründet und ist eine der ältesten Kirchen Valencias. Ihre alten Steine, gotischen Bögen und der stille Innenhof bewahren Jahrhunderte an Geschichte — für uns der perfekte Ort, um unser gemeinsames Leben zu beginnen.",
      receptionBody:
        "Die Jardines de la Cartuja sind die historischen Gärten des ehemaligen Kartäuserklosters Ara Christi in El Puig — etwa 20 Minuten vom Stadtzentrum Valencias entfernt. Erbaut im 17. Jahrhundert, beherbergt der Ort jahrhundertealte Olivenbäume, alte Steinbrunnen und weiße Bögen, wo wir essen, anstoßen und bis zum Sonnenuntergang tanzen werden.",
      weatherLabel: "Valencia im Juni",
      weatherBody:
        "Valencia liegt an der spanischen Mittelmeerküste. Im Juni bewegen sich die Temperaturen meist zwischen 20°C und 28°C, mit Sonnenschein und einer sanften Meeresbrise. Die Sonne geht erst gegen 21:30 Uhr unter, sodass das Fest sich entspannt unter dem langen Sommerhimmel hinzieht. Wir empfehlen leichte Stoffe — Baumwolle, Leinen — und bequeme Schuhe, vor allem weil die Gärten der Cartuja Steinwege haben.",
      transportLabel: "Wie wir hinkommen",
      transportBody:
        "Wir organisieren Busse, damit niemand sich um die Fahrt kümmern muss. Von der Kirche zu den Jardines de la Cartuja, und auf dem Rückweg zu mehreren Zeiten von der Cartuja zurück ins Zentrum Valencias — damit jeder das Fest in seinem Tempo genießen kann.",
      transportRouteFrom: "Abfahrt",
      transportRouteTo: "Ankunft",
      faqTitle: "Häufige Fragen",
      faq: [
        {
          q: "Darf ich jemanden mitbringen?",
          a: "Bitte bestätige es mit uns — die Einladung gibt an, wie viele Plätze für dich reserviert sind.",
        },
        {
          q: "Sind Kinder willkommen?",
          a: "Ja, sag uns aber bitte rechtzeitig Bescheid, damit wir alles vorbereiten können.",
        },
        {
          q: "Wird es Transport geben?",
          a: "Wir organisieren das gerade und werden diese Seite bald aktualisieren.",
        },
      ],
    },
    gifts: {
      title: "Geschenkliste",
      subtitle:
        "Eure Anwesenheit ist schon das schönste Geschenk. Wenn ihr trotzdem etwas beitragen möchtet, haben wir ein paar Ideen zusammengestellt.",
      comingSoonTitle: "Bald da",
      comingSoonBody:
        "Wir stellen die Geschenkliste gerade liebevoll zusammen. Schaut bald wieder vorbei!",
      contributeButton: "Beitragen",
      currency: "€",
      suggestedAmount: "Vorgeschlagener Betrag",
      anyAmount: "Beliebiger Betrag",
      currencyToggleLabel: "In welcher Währung möchtest du beitragen?",
      eurFull: "Euro (Spanien · Europa)",
      brlFull: "Brasilianische Real",
      paymentTitle: "Wie ihr beitragen könnt",
      paymentSubtitle:
        "Wählt eine der Optionen unten. Alles läuft sicher — wir fragen niemals direkt nach euren Kartendaten.",
      stripe: {
        title: "Apple Pay · Google Pay · Karte",
        instructions:
          "Schnelle und sichere Zahlung über Stripe. Funktioniert von überall auf der Welt.",
        button: "Mit Apple Pay oder Karte zahlen",
        recommended: "Am schnellsten",
      },
      pix: {
        title: "PIX (Brasilien)",
        instructions:
          "Öffne deine brasilianische Banking-App, scanne den QR-Code unten, oder kopiere und füge den PIX-Code ein. Der Betrag und die Geschenkbeschreibung sind bereits ausgefüllt.",
        qrTitle: "Mit deiner Bank-App scannen",
        copyPasteTitle: "Oder kopiere und füge den PIX-Code ein",
        copyPasteCopy: "Code kopieren",
        copyPasteCopied: "Kopiert!",
        manualTitle: "Oder zahle manuell mit dem PIX-Schlüssel",
        keyLabel: "PIX-Schlüssel",
        keyTypeLabel: "Typ",
        recipientLabel: "Empfänger",
        bankLabel: "Bank",
        copyButton: "Schlüssel kopieren",
        copiedButton: "Kopiert!",
        unconfigured:
          "Der PIX-Schlüssel ist noch nicht konfiguriert. Bitte wendet euch an das Paar.",
      },
      bizum: {
        title: "Bizum (Spanien)",
        instructions:
          "Öffne deine Banking-App, wähle Bizum und sende an die unten stehende Nummer. Schreibe in den Verwendungszweck den Namen des Geschenks.",
        phoneLabel: "Telefon",
        recipientLabel: "Empfänger",
        copyButton: "Telefon kopieren",
        copiedButton: "Kopiert!",
      },
      bankTransfer: {
        title: "Banküberweisung",
        instructions:
          "Für andere Länder: macht eine internationale Überweisung an die IBAN unten. Bitte fügt den Geschenknamen in den Verwendungszweck ein.",
        ibanLabel: "IBAN",
        bicLabel: "BIC/SWIFT",
        bankLabel: "Bank",
        recipientLabel: "Empfänger",
        copyButton: "IBAN kopieren",
        copiedButton: "Kopiert!",
      },
      thanksTitle: "Danke!",
      thanksBody:
        "Nachdem ihr gesendet habt, schreibt uns kurz, damit wir den Empfang bestätigen können. Jeder Beitrag wird mit ganz viel Liebe gefeiert.",
      back: "← Zurück zur Liste",
    },
    travel: {
      title: "Für unsere Reisenden",
      subtitle:
        "Ein paar Tipps, damit ihr euch entspannt einlebt und Valencia stressfrei entdeckt.",
      gettingThereTitle: "Anreise",
      gettingThereBody:
        "Aus Brasilien führen die Flüge meist über Madrid, Lissabon oder Barcelona — von dort lässt sich ein Kurzflug nach Valencia oder der Hochgeschwindigkeitszug (AVE Madrid–Valencia, ~1h40) nehmen. Der Flughafen Valencia (VLC) ist auch von vielen europäischen Städten direkt erreichbar. Vom Flughafen bringen euch die Metrolinien 3 und 5 in etwa 25 Minuten ins Zentrum.",
      hotelsTitle: "Hotelempfehlungen",
      hotelsBody:
        "Ein paar gut gelegene Optionen. Die Preise sind ungefähre Anhaltspunkte und schwanken je nach Saison.",
      apartmentsTitle: "Apartments",
      apartmentsBody:
        "Für alle, die mehr Platz, eine Küche oder Gruppenreisen bevorzugen.",
      priceFromLabel: "Ab",
      bookButton: "Bei Booking ansehen",
      tipsTitle: "Tipps für Valencia",
      tipsBody:
        "Ein paar Lieblingsdinge aus unserer Stadt: echte Paella draußen in der Albufera, eiskalte Horchata im Sommer, ein langer Spaziergang durch den Jardín del Turia (ein altes Flussbett, das zum Park wurde) und ein frühabendlicher Vermouth im Stadtviertel Ruzafa.",
    },
    rsvp: {
      title: "Zusagen",
      subtitle: "Wir können es kaum erwarten, mit euch zu feiern.",
      deadlinePrefix: "Bitte antwortet bis zum",
      nameLabel: "Vollständiger Name",
      namePlaceholder: "So wie ihr auf der Gästeliste erscheinen möchtet",
      emailLabel: "E-Mail",
      emailPlaceholder: "Damit wir euch Updates schicken können (optional)",
      attendingLabel: "Könnt ihr kommen?",
      attendingYes: "Ja, ich freue mich riesig 💕",
      attendingNo: "Leider kann ich nicht teilnehmen",
      partySizeLabel:
        "Wie viele Personen insgesamt (euch eingeschlossen)?",
      dietaryLabel: "Lebensmittelunverträglichkeiten oder Allergien?",
      dietaryPlaceholder:
        "Vegetarisch, glutenfrei, Schalentier-Allergie…",
      messageLabel: "Eine Nachricht für das Brautpaar",
      messagePlaceholder: "Ein paar liebe Worte (optional)",
      submitButton: "Zusage senden",
      submitting: "Senden…",
      successTitle: "Zusage erhalten 💕",
      successBody:
        "Vielen Dank! Wir haben eure Antwort. Falls ihr später etwas ändern möchtet, sagt uns einfach Bescheid.",
      errorTitle: "Etwas ist schiefgelaufen",
      errorBody:
        "Wir konnten eure Zusage nicht senden. Versucht es bitte gleich noch einmal oder schreibt uns direkt.",
      requiredHint: "*Pflichtfelder",
      notConfiguredTitle: "Bald verfügbar",
      notConfiguredBody:
        "Das Zusage-Formular ist noch nicht bereit. Schaut bald wieder vorbei!",
      openFormFallback: "Siehst du das Formular nicht? Öffne es in einem neuen Tab →",
    },
    footer: {
      madeWith: "Mit Liebe,",
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
