/**
 * Hidden preview at /preview/fonts — script font picker.
 * After Laura picks one, swap it into globals.css .font-display-script
 * and remove the others from the @import URL.
 */

const CANDIDATES = [
  {
    name: "Parisienne",
    note: "current — flowing modern wedding script",
  },
  {
    name: "Great Vibes",
    note: "classic warm wedding calligraphy, thick/thin contrast",
  },
  {
    name: "Allura",
    note: "modern script, more contained than Parisienne",
  },
  {
    name: "Mr Dafoe",
    note: "flowing modern calligraphy, generous flourishes",
  },
  {
    name: "Pinyon Script",
    note: "Victorian-formal manuscript",
  },
  {
    name: "Italianno",
    note: "elegant Italian-style flowing script",
  },
  {
    name: "Mrs Saint Delafield",
    note: "refined invitation-style calligraphy",
  },
  {
    name: "Sacramento",
    note: "friendly modern handwritten",
  },
] as const;

const DATE_TEXT = "sábado, 5 de junho de 2027";

export default function FontPreview() {
  return (
    <main className="min-h-screen bg-ivory py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center font-serif text-3xl mb-2">
          Script font picker
        </h1>
        <p className="text-center text-ink/60 text-sm italic mb-10">
          Tell me which number you prefer.
        </p>

        {CANDIDATES.map((c, i) => (
          <section
            key={c.name}
            className="border border-sage/30 rounded-lg p-8 bg-white mb-6"
          >
            <p className="uppercase tracking-widest text-xs text-sageDark">
              {i + 1}. {c.name}
            </p>
            <p className="text-xs text-ink/50 italic mb-4">{c.note}</p>
            <p
              style={{ fontFamily: `"${c.name}", Georgia, serif` }}
              className="text-4xl md:text-5xl text-ink text-center leading-tight"
            >
              {DATE_TEXT}
            </p>
          </section>
        ))}

        <p className="text-center text-ink/60 text-sm italic mt-10">
          Reply with the number you want.
        </p>
      </div>
    </main>
  );
}
