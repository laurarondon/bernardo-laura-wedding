"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/content/translations";

const LANGS: Lang[] = ["pt", "es", "en", "de"];
const LABELS: Record<Lang, string> = { pt: "PT", es: "ES", en: "EN", de: "DE" };

export function LangSwitcher({ current }: { current: Lang }) {
  const pathname = usePathname() ?? `/${current}`;

  return (
    <div className="flex items-center gap-1.5 text-xs">
      {LANGS.map((lang, i) => {
        const path = pathname.replace(/^\/(pt|es|en|de)/, `/${lang}`);
        const active = lang === current;
        return (
          <span key={lang} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-ink/30">·</span>}
            {active ? (
              <span className="text-sageDark font-semibold">
                {LABELS[lang]}
              </span>
            ) : (
              <Link
                href={path}
                className="text-ink/40 hover:text-sageDark transition"
              >
                {LABELS[lang]}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
