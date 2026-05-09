import Link from "next/link";
import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";
import { LangSwitcher } from "./LangSwitcher";

export function Header({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const initials =
    settings.couple.order === "bride-first"
      ? `${settings.couple.bride[0]} & ${settings.couple.groom[0]}`
      : `${settings.couple.groom[0]} & ${settings.couple.bride[0]}`;

  return (
    <header className="border-b border-sage/30 bg-ivory/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="font-serif text-2xl text-sageDark tracking-wide"
        >
          {initials}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href={`/${lang}`}
            className="hover:text-sageDark text-ink/70 transition"
          >
            {tr.nav.home}
          </Link>
          <Link
            href={`/${lang}/wedding`}
            className="hover:text-sageDark text-ink/70 transition"
          >
            {tr.nav.wedding}
          </Link>
          <Link
            href={`/${lang}/gifts`}
            className="hover:text-sageDark text-ink/70 transition"
          >
            {tr.nav.gifts}
          </Link>
          <LangSwitcher current={lang} />
        </nav>
      </div>
    </header>
  );
}
