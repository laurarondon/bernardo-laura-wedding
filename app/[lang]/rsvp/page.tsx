import { assertLang, formatDate } from "@/lib/i18n";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";

export default function Rsvp({ params }: { params: { lang: string } }) {
  const lang = assertLang(params.lang);
  const tr = t(lang).rsvp;
  const formUrl = settings.rsvp.formUrl;

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

      <div className="mt-10">
        {formUrl ? (
          <iframe
            src={formUrl}
            title={tr.title}
            className="block w-full border-0 bg-ivory rounded"
            style={{ minHeight: "1500px" }}
            loading="lazy"
          >
            {tr.notConfiguredBody}
          </iframe>
        ) : (
          <div className="bg-sage/10 border border-sage/40 rounded-lg p-8 text-center">
            <p className="font-serif text-2xl text-sageDark">
              {tr.notConfiguredTitle}
            </p>
            <p className="mt-3 text-ink/70">{tr.notConfiguredBody}</p>
          </div>
        )}
      </div>
    </div>
  );
}
