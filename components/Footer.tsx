import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";

export function Footer({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const names =
    settings.couple.order === "bride-first"
      ? `${settings.couple.bride} & ${settings.couple.groom}`
      : `${settings.couple.groom} & ${settings.couple.bride}`;

  return (
    <footer className="border-t border-sage/30 mt-20 py-12 text-center text-ink/60 text-sm">
      {settings.photos.olives && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={settings.photos.olives}
          alt=""
          aria-hidden
          className="block w-20 h-auto mx-auto mb-4 opacity-70"
        />
      )}
      <p className="font-serif italic text-lg text-sageDark">
        {tr.footer.madeWith} {names}
      </p>
      <p className="mt-2">
        {settings.wedding.city} · 05.06.2027
      </p>
    </footer>
  );
}
