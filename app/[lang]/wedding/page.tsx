import { assertLang, formatDate } from "@/lib/i18n";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";

export default function Wedding({ params }: { params: { lang: string } }) {
  const lang = assertLang(params.lang);
  const tr = t(lang);
  const { ceremony, reception } = settings.wedding;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.wedding.title}</h1>
      <p className="section-subtitle">{tr.wedding.subtitle}</p>

      {/* Date — quiet centered headline, no card */}
      <div className="text-center mt-14">
        <p className="uppercase tracking-[0.3em] text-xs text-sageDark mb-3">
          {tr.wedding.whenLabel}
        </p>
        <p className="font-serif text-3xl md:text-4xl text-ink capitalize">
          {formatDate(settings.wedding.date, lang)}
        </p>
      </div>

      {/* Ceremony — image left, text right (alternates on desktop) */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-24">
        {settings.photos.church && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={settings.photos.church}
            alt={ceremony.venueName}
            className="block w-full max-w-md mx-auto md:max-w-none h-auto"
          />
        )}
        <div className="text-center md:text-left">
          <p className="font-serif text-6xl md:text-7xl text-sageDark leading-none">
            {ceremony.time}
          </p>
          <p className="uppercase tracking-[0.3em] text-xs text-sageDark mt-4">
            {tr.wedding.ceremonyLabel}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-ink mt-6">
            {ceremony.venueName}
          </h3>
          {ceremony.venueAddress && (
            <p className="italic text-ink/60 mt-2 text-sm">
              {ceremony.venueAddress}
            </p>
          )}
          <p className="mt-6 text-ink/80 leading-relaxed">
            {tr.wedding.ceremonyBody}
          </p>
          {ceremony.googleMapsUrl && (
            <a
              href={ceremony.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sageDark hover:underline text-sm"
            >
              {tr.wedding.mapButton} →
            </a>
          )}
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

      {/* Reception — image right, text left */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-8">
        <div className="md:order-1 text-center md:text-left">
          <p className="font-serif text-6xl md:text-7xl text-sageDark leading-none">
            {reception.time}
          </p>
          <p className="uppercase tracking-[0.3em] text-xs text-sageDark mt-4">
            {tr.wedding.receptionLabel}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-ink mt-6">
            {reception.venueName}
          </h3>
          {reception.venueAddress && (
            <p className="italic text-ink/60 mt-2 text-sm">
              {reception.venueAddress}
            </p>
          )}
          <p className="mt-6 text-ink/80 leading-relaxed">
            {tr.wedding.receptionBody}
          </p>
          {reception.googleMapsUrl && (
            <a
              href={reception.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sageDark hover:underline text-sm"
            >
              {tr.wedding.mapButton} →
            </a>
          )}
        </div>
        {settings.photos.tower && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={settings.photos.tower}
            alt={reception.venueName}
            className="md:order-2 block w-full max-w-md mx-auto h-auto"
          />
        )}
      </section>

      {/* Dress code — quiet, centered */}
      <div className="text-center mt-24">
        <p className="uppercase tracking-[0.3em] text-xs text-sageDark mb-3">
          {tr.wedding.dressCodeLabel}
        </p>
        <p className="font-serif text-2xl md:text-3xl text-ink">
          {settings.wedding.dressCode[lang]}
        </p>
      </div>

      {/* About Valencia in June */}
      <section className="mt-24 max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-sageDark">
          {tr.wedding.weatherLabel}
        </h2>
        <p className="mt-6 text-ink/80 leading-relaxed font-serif text-lg">
          {tr.wedding.weatherBody}
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-24 max-w-2xl mx-auto">
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
