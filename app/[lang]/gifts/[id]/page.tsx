import Link from "next/link";
import { notFound } from "next/navigation";
import { assertLang } from "@/lib/i18n";
import { t } from "@/content/translations";
import {
  gifts,
  formatAmount,
  defaultCurrencyForLang,
  type Currency,
} from "@/content/gifts";
import { PaymentInstructions } from "@/components/PaymentInstructions";

export default function GiftDetail({
  params,
  searchParams,
}: {
  params: { lang: string; id: string };
  searchParams: { c?: string };
}) {
  const lang = assertLang(params.lang);
  const tr = t(lang);
  const gift = gifts.find((g) => g.id === params.id);
  if (!gift) notFound();

  const requested: Currency =
    searchParams.c === "brl"
      ? "brl"
      : searchParams.c === "eur"
        ? "eur"
        : defaultCurrencyForLang(lang);

  // If guest somehow lands with a currency the gift doesn't support, fall back.
  const currency: Currency = gift.currencies.includes(requested)
    ? requested
    : gift.currencies[0];

  const amount = currency === "eur" ? gift.eurAmount : gift.brlAmount;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href={`/${lang}/gifts?c=${currency}`}
        className="text-sageDark hover:underline text-sm"
      >
        {tr.gifts.back}
      </Link>

      <div className="mt-6 bg-white border border-sage/30 rounded-lg overflow-hidden shadow-sm">
        <div className="aspect-[16/9] bg-sage/10 flex items-center justify-center text-sage/40 font-serif text-7xl">
          {gift.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={gift.image}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            "♥"
          )}
        </div>
        <div className="p-8">
          <h1 className="font-serif text-3xl md:text-4xl text-ink">
            {gift.title[lang]}
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed">
            {gift.description[lang]}
          </p>
          <p className="mt-6 text-sageDark text-lg">
            {amount > 0
              ? `${tr.gifts.suggestedAmount}: ${formatAmount(currency, amount)}`
              : tr.gifts.anyAmount}
          </p>
        </div>
      </div>

      <PaymentInstructions
        lang={lang}
        currency={currency}
        giftId={gift.id}
        giftLabel={gift.title[lang]}
        brlAmount={gift.brlAmount}
        stripePaymentLink={gift.stripePaymentLink}
      />

      <div className="mt-12 bg-sage/10 border border-sage/30 rounded-lg p-6 text-center">
        <p className="font-serif text-xl text-sageDark">
          {tr.gifts.thanksTitle}
        </p>
        <p className="text-ink/70 mt-2 text-sm">{tr.gifts.thanksBody}</p>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const langs = ["pt", "es", "en", "de"] as const;
  return langs.flatMap((lang) =>
    gifts.map((g) => ({ lang, id: g.id })),
  );
}
