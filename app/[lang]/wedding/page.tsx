import { assertLang, formatDate } from "@/lib/i18n";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";

export default function Wedding({ params }: { params: { lang: string } }) {
  const lang = assertLang(params.lang);
  const tr = t(lang);
  const { ceremony, reception } = settings.wedding;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.wedding.title}</h1>
      <p className="section-subtitle">{tr.wedding.subtitle}</p>

      {settings.photos.church && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={settings.photos.church}
          alt={ceremony.venueName}
          className="block w-full max-w-3xl mx-auto mt-8 h-auto"
        />
      )}

      {/* Date */}
      <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm mt-10 text-center">
        <p className="uppercase tracking-widest text-xs text-sageDark mb-2">
          {tr.wedding.whenLabel}
        </p>
        <p className="font-serif text-2xl text-ink capitalize">
          {formatDate(settings.wedding.date, lang)}
        </p>
      </div>

      {/* Ceremony + Reception */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm">
          <p className="uppercase tracking-widest text-xs text-sageDark mb-2">
            {tr.wedding.ceremonyLabel} · {ceremony.time}
          </p>
          <p className="font-serif text-2xl text-ink">{ceremony.venueName}</p>
          {ceremony.venueAddress && (
            <p className="text-ink/70 mt-1 text-sm">{ceremony.venueAddress}</p>
          )}
          <p className="text-ink/80 mt-3 text-sm leading-relaxed">
            {tr.wedding.ceremonyBody}
          </p>
          {ceremony.googleMapsUrl && (
            <a
              href={ceremony.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sageDark hover:underline text-sm"
            >
              {tr.wedding.mapButton} →
            </a>
          )}
        </div>

        <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm">
          <p className="uppercase tracking-widest text-xs text-sageDark mb-2">
            {tr.wedding.receptionLabel} · {reception.time}
          </p>
          <p className="font-serif text-2xl text-ink">{reception.venueName}</p>
          {reception.venueAddress && (
            <p className="text-ink/70 mt-1 text-sm">{reception.venueAddress}</p>
          )}
          <p className="text-ink/80 mt-3 text-sm leading-relaxed">
            {tr.wedding.receptionBody}
          </p>
          {reception.googleMapsUrl && (
            <a
              href={reception.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sageDark hover:underline text-sm"
            >
              {tr.wedding.mapButton} →
            </a>
          )}
        </div>

        {/* Dress code */}
        <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm md:col-span-2">
          <p className="uppercase tracking-widest text-xs text-sageDark mb-2">
            {tr.wedding.dressCodeLabel}
          </p>
          <p className="font-serif text-2xl text-ink">
            {settings.wedding.dressCode[lang]}
          </p>
        </div>
      </div>

      {/* Tower illustration */}
      {settings.photos.tower && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={settings.photos.tower}
          alt=""
          aria-hidden
          className="block w-full max-w-md mx-auto mt-16 h-auto"
        />
      )}

      {/* About Valencia in June */}
      <section className="mt-12 max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-sageDark">
          {tr.wedding.weatherLabel}
        </h2>
        <p className="mt-6 text-ink/80 leading-relaxed font-serif text-lg">
          {tr.wedding.weatherBody}
        </p>
      </section>

      {/* Olive divider before FAQ */}
      {settings.photos.olives && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={settings.photos.olives}
          alt=""
          aria-hidden
          className="block w-32 sm:w-40 h-auto mx-auto mt-20 opacity-90"
        />
      )}

      {/* FAQ */}
      <section className="mt-8">
        <h2 className="section-title">{tr.wedding.faqTitle}</h2>
        <div className="mt-8 space-y-6">
          {tr.wedding.faq.map((item, i) => (
            <div key={i} className="border-l-2 border-sage pl-4">
              <p className="font-serif text-lg text-sageDark">{item.q}</p>
              <p className="text-ink/70 mt-1">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
