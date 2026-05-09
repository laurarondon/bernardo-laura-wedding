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
      <section className="relative py-24 md:py-32 text-center px-4">
        <p className="uppercase tracking-[0.3em] text-sm text-sageDark mb-6">
          {tr.home.saveTheDate}
        </p>
        <h1 className="font-serif text-6xl md:text-8xl text-ink leading-tight">
          {names}
        </h1>
        <p className="mt-8 font-serif italic text-xl text-ink/70">
          {formatDate(settings.wedding.date, lang)}
        </p>
        <p className="font-serif italic text-lg text-ink/60">
          {settings.wedding.city}, {settings.wedding.country[lang]}
        </p>
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
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="section-title">{tr.home.ourStory}</h2>
        <p className="mt-6 text-ink/80 leading-relaxed font-serif text-lg">
          {tr.home.ourStoryBody}
        </p>
      </section>
    </div>
  );
}
