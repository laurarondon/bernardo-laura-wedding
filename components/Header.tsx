import Link from "next/link";
import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";
import { LangSwitcher } from "./LangSwitcher";

export function Header({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const monogramAlt =
    settings.couple.order === "bride-first"
      ? `${settings.couple.bride} & ${settings.couple.groom}`
      : `${settings.couple.groom} & ${settings.couple.bride}`;

  return (
    <header className="border-b border-sage/30 bg-ivory/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
        <Link
          href={`/${lang}`}
          className="block shrink-0"
          aria-label={monogramAlt}
        >
          {settings.photos.monogram ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={settings.photos.monogram}
              alt={monogramAlt}
              className="block h-10 sm:h-12 w-auto"
            />
          ) : (
            <span className="font-serif text-xl sm:text-2xl text-sageDark tracking-wide whitespace-nowrap">
              B & L
            </span>
          )}
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-sm">
          <Link
            href={`/${lang}`}
            className="hover:text-sageDark text-ink/70 transition whitespace-nowrap"
          >
            {tr.nav.home}
          </Link>
          <Link
            href={`/${lang}/wedding`}
            className="hover:text-sageDark text-ink/70 transition whitespace-nowrap"
          >
            {tr.nav.wedding}
          </Link>
          <Link
            href={`/${lang}/gifts`}
            className="hover:text-sageDark text-ink/70 transition whitespace-nowrap"
          >
            {tr.nav.gifts}
          </Link>
          <Link
            href={`/${lang}/travel`}
            className="hover:text-sageDark text-ink/70 transition whitespace-nowrap"
          >
            {tr.nav.travel}
          </Link>
          <Link
            href={`/${lang}/rsvp`}
            className="hover:text-sageDark text-ink/70 transition whitespace-nowrap font-medium"
          >
            {tr.nav.rsvp}
          </Link>
          <LangSwitcher current={lang} />
        </nav>
      </div>
    </header>
  );
}
