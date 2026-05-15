import { assertLang } from "@/lib/i18n";
import { t, type Lang } from "@/content/translations";
import { settings } from "@/content/settings";

export default function Travel({ params }: { params: { lang: string } }) {
  const lang = assertLang(params.lang);
  const tr = t(lang).travel;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.title}</h1>
      <p className="section-subtitle max-w-2xl mx-auto">{tr.subtitle}</p>

      {/* Getting there */}
      <section className="mt-16 max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-sageDark">
          {tr.gettingThereTitle}
        </h2>
        <p className="mt-6 text-ink/80 leading-relaxed font-serif text-lg">
          {tr.gettingThereBody}
        </p>
      </section>

      {/* Hotels */}
      <section className="mt-20">
        <h2 className="font-serif text-3xl text-sageDark text-center">
          {tr.hotelsTitle}
        </h2>
        <p className="mt-3 text-center text-ink/60 max-w-xl mx-auto">
          {tr.hotelsBody}
        </p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {settings.accommodations.hotels.map((h) => (
            <Card key={h.name} item={h} lang={lang} tr={tr} />
          ))}
        </div>
      </section>

      {/* Olive divider */}
      {settings.photos.olives && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={settings.photos.olives}
          alt=""
          aria-hidden
          className="block w-24 sm:w-28 h-auto mx-auto my-16 opacity-80"
        />
      )}

      {/* Apartments */}
      <section>
        <h2 className="font-serif text-3xl text-sageDark text-center">
          {tr.apartmentsTitle}
        </h2>
        <p className="mt-3 text-center text-ink/60 max-w-xl mx-auto">
          {tr.apartmentsBody}
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {settings.accommodations.apartments.map((a) => (
            <Card key={a.name} item={a} lang={lang} tr={tr} />
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mt-20 max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-sageDark">
          {tr.tipsTitle}
        </h2>
        <p className="mt-6 text-ink/80 leading-relaxed font-serif text-lg">
          {tr.tipsBody}
        </p>
      </section>
    </div>
  );
}

type CardItem = {
  name: string;
  brief: { pt: string; es: string; en: string; de: string };
  priceFrom: string;
  bookingUrl: string;
};

function Card({
  item,
  lang,
  tr,
}: {
  item: CardItem;
  lang: Lang;
  tr: { priceFromLabel: string; bookButton: string };
}) {
  return (
    <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm flex flex-col">
      <h3 className="font-serif text-xl text-ink">{item.name}</h3>
      <p className="mt-2 text-ink/70 text-sm flex-1">{item.brief[lang]}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-sageDark text-sm">
          <span className="text-ink/50 text-xs uppercase tracking-widest mr-1">
            {tr.priceFromLabel}
          </span>
          {item.priceFrom}
        </span>
        <a
          href={item.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sageDark hover:underline text-sm whitespace-nowrap"
        >
          {tr.bookButton} →
        </a>
      </div>
    </div>
  );
}
