import { assertLang, formatDate, formatTime } from "@/lib/i18n";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";

export default function Wedding({ params }: { params: { lang: string } }) {
  const lang = assertLang(params.lang);
  const tr = t(lang);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.wedding.title}</h1>
      <p className="section-subtitle">{tr.wedding.subtitle}</p>

      {settings.photos.church && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={settings.photos.church}
          alt={settings.wedding.venueName}
          className="block w-full max-w-2xl mx-auto mt-10 h-auto"
        />
      )}

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm">
          <p className="uppercase tracking-widest text-xs text-sageDark mb-2">
            {tr.wedding.whenLabel}
          </p>
          <p className="font-serif text-2xl text-ink capitalize">
            {formatDate(settings.wedding.date, lang)}
          </p>
          <p className="text-ink/70 mt-1">
            {formatTime(settings.wedding.date, lang)}
          </p>
        </div>

        <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm">
          <p className="uppercase tracking-widest text-xs text-sageDark mb-2">
            {tr.wedding.whereLabel}
          </p>
          <p className="font-serif text-2xl text-ink">
            {settings.wedding.venueName}
          </p>
          {settings.wedding.venueAddress && (
            <p className="text-ink/70 mt-1">{settings.wedding.venueAddress}</p>
          )}
          <p className="text-ink/70 mt-1">
            {settings.wedding.city}, {settings.wedding.country[lang]}
          </p>
          {settings.wedding.googleMapsUrl && (
            <a
              href={settings.wedding.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sageDark hover:underline text-sm"
            >
              {tr.wedding.mapButton} →
            </a>
          )}
        </div>

        <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm md:col-span-2">
          <p className="uppercase tracking-widest text-xs text-sageDark mb-2">
            {tr.wedding.dressCodeLabel}
          </p>
          <p className="font-serif text-2xl text-ink">
            {settings.wedding.dressCode[lang]}
          </p>
        </div>

        <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm md:col-span-2">
          <p className="uppercase tracking-widest text-xs text-sageDark mb-2">
            ☀ {tr.wedding.weatherLabel}
          </p>
          <p className="text-ink/80 leading-relaxed">
            {tr.wedding.weatherBody}
          </p>
        </div>
      </div>

      <section className="mt-16">
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
