"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { Currency } from "@/content/gifts";
import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";

export function CurrencyToggle({
  current,
  lang,
}: {
  current: Currency;
  lang: Lang;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tr = t(lang).gifts;

  function setCurrency(c: Currency) {
    if (c === current) return;
    const params = new URLSearchParams(searchParams?.toString());
    params.set("c", c);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const Pill = ({ value, label }: { value: Currency; label: string }) => {
    const active = current === value;
    return (
      <button
        type="button"
        onClick={() => setCurrency(value)}
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition border ${
          active
            ? "bg-sageDark text-white border-sageDark"
            : "bg-white text-ink/70 border-sage/40 hover:border-sageDark hover:text-sageDark"
        }`}
        aria-pressed={active}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs uppercase tracking-widest text-sageDark">
        {tr.currencyToggleLabel}
      </p>
      <div className="flex gap-2">
        <Pill value="eur" label={`€ · ${tr.eurFull}`} />
        <Pill value="brl" label={`R$ · ${tr.brlFull}`} />
      </div>
    </div>
  );
}
