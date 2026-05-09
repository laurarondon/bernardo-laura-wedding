import Link from "next/link";
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
      {/* Hero */}
      <section className="relative py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {settings.photos.hero && (
            <div className="order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={settings.photos.hero}
                alt={names}
                className="w-full max-w-md mx-auto rounded-sm shadow-md"
              />
            </div>
          )}
          <div
            className={`order-1 md:order-2 text-center md:text-left ${
              settings.photos.hero ? "" : "md:col-span-2"
            }`}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-sageDark mb-6">
              {tr.home.saveTheDate}
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-ink leading-[1.05]">
              {names}
            </h1>
            <p className="mt-8 font-serif italic text-xl text-ink/70">
              {formatDate(settings.wedding.date, lang)}
            </p>
            <p className="font-serif italic text-lg text-ink/60">
              {settings.wedding.city}, {settings.wedding.country[lang]}
            </p>
          </div>
        </div>

        <Countdown targetIso={settings.wedding.date} lang={lang} />

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href={`/${lang}/wedding`} className="btn-ghost">
            {tr.home.seeDetails}
          </Link>
          <Link href={`/${lang}/gifts`} className="btn-primary">
            {tr.home.seeGifts}
          </Link>
        </div>
      </section>

      {/* Our story */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        {settings.photos.story && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={settings.photos.story}
            alt=""
            className="w-full rounded-sm shadow-md mb-12"
          />
        )}
        <h2 className="section-title">{tr.home.ourStory}</h2>
        <p className="mt-6 text-ink/80 leading-relaxed font-serif text-lg">
          {tr.home.ourStoryBody}
        </p>
      </section>
    </div>
  );
}
