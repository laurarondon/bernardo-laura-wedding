import { assertLang, formatDate } from "@/lib/i18n";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";

export default function Rsvp({ params }: { params: { lang: string } }) {
  const lang = assertLang(params.lang);
  const tr = t(lang).rsvp;
  const formUrl = settings.rsvp.formUrl;
  // Non-embedded version for the "open in new tab" fallback link
  const openableUrl = formUrl.replace("?embedded=true", "").replace("&embedded=true", "");

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.title}</h1>
      <p className="section-subtitle">{tr.subtitle}</p>

      {settings.rsvp.deadline && (
        <p className="text-center text-sageDark text-sm mt-4 mb-8">
          {tr.deadlinePrefix}{" "}
          <strong>{formatDate(settings.rsvp.deadline, lang)}</strong>
        </p>
      )}

      {formUrl ? (
        <>
          {/* Always-visible fallback link — guarantees access even if iframe fails */}
          <p className="text-center mt-8 mb-4">
            <a
              href={openableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sageDark hover:underline text-sm"
            >
              {tr.openFormFallback}
            </a>
          </p>

          <div className="w-full overflow-hidden rounded">
            <iframe
              src={formUrl}
              title={tr.title}
              className="block w-full border-0 bg-ivory"
              style={{ minHeight: "1750px" }}
              loading="lazy"
            >
              {tr.notConfiguredBody}
            </iframe>
          </div>
        </>
      ) : (
        <div className="mt-10 bg-sage/10 border border-sage/40 rounded-lg p-8 text-center">
          <p className="font-serif text-2xl text-sageDark">
            {tr.notConfiguredTitle}
          </p>
          <p className="mt-3 text-ink/70">{tr.notConfiguredBody}</p>
        </div>
      )}
    </div>
  );
}
