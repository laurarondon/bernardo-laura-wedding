import { assertLang } from "@/lib/i18n";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";
import { Countdown } from "@/components/Countdown";
import { formatDate } from "@/lib/i18n";

export default function Home({ params }: { params: { lang: string } }) {
  const lang = assertLang(params.lang);
  const tr = t(lang);

  const names =
    settings.couple.order === "bride-first"
      ? `${settings.couple.bride} & ${settings.couple.groom}`
      : `${settings.couple.groom} & ${settings.couple.bride}`;

  return (
    <div>
      {/* Banner */}
      {settings.photos.banner && (
        <section className="relative w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={settings.photos.banner}
            alt={names}
            className="w-full h-[55vh] md:h-[75vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/40" />
          <div className="absolute inset-x-0 bottom-0 text-center text-white pb-10 md:pb-16 px-4">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-3 opacity-90">
              {tr.home.saveTheDate}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg">
              {names}
            </h1>
          </div>
        </section>
      )}

      {/* Olive trees — brand mark of the wedding */}
      {settings.photos.olives && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={settings.photos.olives}
          alt=""
          aria-hidden
          className="block w-60 sm:w-72 md:w-80 mx-auto mt-12 h-auto"
        />
      )}

      {/* Names + date (shown when there is no banner photo, or as a sub-header) */}
      <section className="text-center px-4 pt-6 md:pt-8">
        {!settings.photos.banner && (
          <>
            <p className="uppercase tracking-[0.3em] text-sm text-sageDark mb-6">
              {tr.home.saveTheDate}
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-ink leading-tight">
              {names}
            </h1>
          </>
        )}
        <p
          className={`font-serif text-2xl md:text-3xl text-ink capitalize ${
            settings.photos.banner ? "" : "mt-8"
          }`}
        >
          {formatDate(settings.wedding.date, lang)}
        </p>
        <p className="font-serif text-lg md:text-xl text-ink/70 mt-1">
          {settings.wedding.city}, {settings.wedding.country[lang]}
        </p>
        <Countdown targetIso={settings.wedding.date} lang={lang} />
      </section>

      {/* Our little family */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div
          className={`grid gap-10 md:gap-16 items-center ${
            settings.photos.portrait ? "md:grid-cols-2" : ""
          }`}
        >
          {settings.photos.portrait && (
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={settings.photos.portrait}
                alt={names}
                className="w-full max-w-md mx-auto rounded-sm shadow-md"
              />
            </div>
          )}
          <div className={settings.photos.portrait ? "" : "max-w-2xl mx-auto text-center"}>
            <h2
              className={`section-title ${
                settings.photos.portrait ? "md:text-left" : ""
              }`}
            >
              {tr.home.ourStory}
            </h2>
            <p
              className={`mt-6 text-ink/80 leading-relaxed font-serif text-lg ${
                settings.photos.portrait ? "" : "text-center"
              }`}
            >
              {tr.home.ourStoryBody}
            </p>
          </div>
        </div>

        {/* Pets — little portraits */}
        {settings.pets.length > 0 && (
          <div className="mt-16 flex justify-center items-end gap-8 sm:gap-14 flex-wrap">
            {settings.pets.map((pet) => (
              <div key={pet.name} className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="block w-40 sm:w-52 md:w-60 h-auto mx-auto"
                />
                <p className="font-serif italic text-xl text-sageDark mt-4">
                  {pet.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
