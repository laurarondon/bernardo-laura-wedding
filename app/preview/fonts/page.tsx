/**
 * Hidden preview route at /preview/fonts
 * Compares typography directions side-by-side so the couple can pick
 * without committing live. Not linked from the navigation — delete this
 * folder once a direction is chosen.
 */

export default function FontPreview() {
  return (
    <main className="min-h-screen bg-ivory py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center font-serif text-4xl text-sageDark mb-2">
          Font comparison
        </h1>
        <p className="text-center text-ink/60 text-sm italic">
          Same content rendered three ways. Pick one.
        </p>

        {/* ────────── CURRENT ────────── */}
        <Section
          label="Current — what's live now"
          note="Cormorant Garamond everywhere. Italic tagline + serif numerals."
        >
          <p className="font-serif italic text-2xl md:text-3xl text-sageDark text-center">
            Vamos nos casar!
          </p>
          <p className="font-serif text-2xl md:text-3xl text-ink text-center capitalize mt-3">
            Sábado, 5 de junho de 2027
          </p>
          <p className="font-serif text-lg md:text-xl text-ink/70 text-center mt-1">
            Valencia, Espanha
          </p>
          <Countdown font="font-serif" tone="text-sageDark" />
          <Phones font="font-serif" />
        </Section>

        {/* ────────── DIRECTION 2 ────────── */}
        <Section
          label="Direction 2 — Cormorant prose + Inter numbers (recommended)"
          note="No more italic on tagline. Countdown digits and phone numbers switch to clean Inter."
        >
          <p className="font-serif text-2xl md:text-3xl text-sageDark text-center">
            Vamos nos casar!
          </p>
          <p className="font-serif text-2xl md:text-3xl text-ink text-center capitalize mt-3">
            Sábado, 5 de junho de 2027
          </p>
          <p className="font-serif text-lg md:text-xl text-ink/70 text-center mt-1">
            Valencia, Espanha
          </p>
          <Countdown font="font-sans" tone="text-sageDark" tabular />
          <Phones font="font-sans" />
        </Section>

        {/* ────────── DIRECTION 3 ────────── */}
        <Section
          label="Direction 3 — Playfair Display headers + Inter numbers"
          note="Bigger, more dramatic display serif for tagline & date. Story paragraphs would stay in Cormorant."
        >
          <p className="font-display-playfair italic text-2xl md:text-3xl text-sageDark text-center">
            Vamos nos casar!
          </p>
          <p className="font-display-playfair text-2xl md:text-3xl text-ink text-center capitalize mt-3">
            Sábado, 5 de junho de 2027
          </p>
          <p className="font-display-playfair text-lg md:text-xl text-ink/70 text-center mt-1">
            Valencia, Espanha
          </p>
          <Countdown font="font-sans" tone="text-sageDark" tabular />
          <Phones font="font-sans" />
        </Section>

        <p className="text-center text-ink/60 text-sm italic mt-10">
          Reply with the number you like. I&apos;ll ship it everywhere.
        </p>
      </div>
    </main>
  );
}

function Section({
  label,
  note,
  children,
}: {
  label: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <p className="uppercase tracking-widest text-xs text-sageDark mb-1">
        {label}
      </p>
      <p className="text-xs text-ink/50 italic mb-4">{note}</p>
      <div className="border border-sage/30 rounded-lg p-8 bg-white">
        {children}
      </div>
    </section>
  );
}

function Countdown({
  font,
  tone,
  tabular,
}: {
  font: string;
  tone: string;
  tabular?: boolean;
}) {
  const Box = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center px-2 sm:px-4">
      <div
        className={`${font} ${tone} text-3xl md:text-5xl ${
          tabular ? "tabular-nums" : ""
        }`}
      >
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-ink/50 mt-1">
        {label}
      </div>
    </div>
  );
  return (
    <div className="flex justify-center gap-2 md:gap-4 my-6">
      <Box value="365" label="dias" />
      <Box value="12" label="horas" />
      <Box value="30" label="min" />
      <Box value="45" label="seg" />
    </div>
  );
}

function Phones({ font }: { font: string }) {
  return (
    <div
      className={`mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-10 ${font} text-lg text-sageDark`}
    >
      <span>Laura · +34 687 63 93 46</span>
      <span>Bernardo · +34 646 58 47 43</span>
    </div>
  );
}
