import Link from "next/link";
import { assertLang } from "@/lib/i18n";
import { t } from "@/content/translations";
import {
  gifts,
  formatAmount,
  defaultCurrencyForLang,
  type Currency,
} from "@/content/gifts";
import { settings } from "@/content/settings";
import { CurrencyToggle } from "@/components/CurrencyToggle";

export default function Gifts({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: { c?: string };
}) {
  const lang = assertLang(params.lang);
  const tr = t(lang);

  // While the gift list is being prepared, show a "Coming soon" placeholder.
  if (settings.gifts.comingSoon) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="section-title">{tr.gifts.title}</h1>
        <div className="mt-10 bg-sage/10 border border-sage/40 rounded-lg p-10">
          {settings.photos.olives && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={settings.photos.olives}
              alt=""
              aria-hidden
              className="block w-40 sm:w-48 h-auto mx-auto mb-6 opacity-90"
            />
          )}
          <p className="font-serif text-3xl text-sageDark">
            {tr.gifts.comingSoonTitle}
          </p>
          <p className="mt-3 text-ink/70 font-serif text-lg italic">
            {tr.gifts.comingSoonBody}
          </p>
        </div>
      </div>
    );
  }

  const currency: Currency =
    searchParams.c === "brl"
      ? "brl"
      : searchParams.c === "eur"
        ? "eur"
        : defaultCurrencyForLang(lang);

  const visible = gifts.filter((g) => g.currencies.includes(currency));

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.gifts.title}</h1>
      <p className="section-subtitle max-w-2xl mx-auto">{tr.gifts.subtitle}</p>

      <div className="mt-8 mb-12">
        <CurrencyToggle current={currency} lang={lang} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((g) => {
          const amount = currency === "eur" ? g.eurAmount : g.brlAmount;
          return (
            <Link
              key={g.id}
              href={`/${lang}/gifts/${g.id}?c=${currency}`}
              className="group bg-white border border-sage/30 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="aspect-[4/3] bg-sage/10 flex items-center justify-center text-sage/40 font-serif text-5xl">
                {g.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={g.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  "♥"
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif text-xl text-ink">{g.title[lang]}</h3>
                <p className="text-ink/70 text-sm mt-2 flex-1">
                  {g.description[lang]}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sageDark font-medium">
                    {amount > 0
                      ? `${tr.gifts.suggestedAmount}: ${formatAmount(currency, amount)}`
                      : tr.gifts.anyAmount}
                  </span>
                  <span className="text-sageDark group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
