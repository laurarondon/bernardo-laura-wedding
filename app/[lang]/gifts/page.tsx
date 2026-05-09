import Link from "next/link";
import { assertLang } from "@/lib/i18n";
import { t } from "@/content/translations";
import { gifts } from "@/content/gifts";

export default function Gifts({ params }: { params: { lang: string } }) {
  const lang = assertLang(params.lang);
  const tr = t(lang);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.gifts.title}</h1>
      <p className="section-subtitle max-w-2xl mx-auto">{tr.gifts.subtitle}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {gifts.map((g) => (
          <Link
            key={g.id}
            href={`/${lang}/gifts/${g.id}`}
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
                  {g.amount > 0
                    ? `${tr.gifts.suggestedAmount}: ${tr.gifts.currency}${g.amount}`
                    : tr.gifts.anyAmount}
                </span>
                <span className="text-sageDark group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
