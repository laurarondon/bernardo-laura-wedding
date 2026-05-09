import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";
import { CopyButton } from "./CopyButton";

export function PaymentInstructions({
  lang,
  giftLabel,
  stripePaymentLink,
}: {
  lang: Lang;
  giftLabel: string;
  stripePaymentLink?: string;
}) {
  const tr = t(lang).gifts;

  return (
    <div className="mt-12">
      <h2 className="font-serif text-2xl text-sageDark text-center">
        {tr.paymentTitle}
      </h2>
      <p className="text-center text-ink/60 text-sm mt-2 max-w-xl mx-auto">
        {tr.paymentSubtitle}
      </p>

      <div className="mt-8 space-y-6">
        {stripePaymentLink && (
          <div className="bg-white border-2 border-sageDark rounded-lg p-6 shadow-md relative">
            <span className="absolute -top-3 left-6 bg-sageDark text-white text-xs uppercase tracking-widest px-3 py-1 rounded">
              {tr.stripe.recommended}
            </span>
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-serif text-xl text-ink">{tr.stripe.title}</h3>
              <span className="text-xs uppercase tracking-widest text-sageDark">
                🌍 Worldwide
              </span>
            </div>
            <p className="text-ink/70 text-sm mt-2">{tr.stripe.instructions}</p>
            <a
              href={stripePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block w-full text-center bg-black text-white py-4 rounded-lg font-medium hover:bg-ink transition"
            >
              {tr.stripe.button}
            </a>
          </div>
        )}

        {settings.pix.enabled && (
          <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-serif text-xl text-ink">{tr.pix.title}</h3>
              <span className="text-xs uppercase tracking-widest text-sageDark">
                🇧🇷 Brasil
              </span>
            </div>
            <p className="text-ink/70 text-sm mt-2">{tr.pix.instructions}</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <Field
                label={tr.pix.keyTypeLabel}
                value={settings.pix.keyType}
              />
              <Field
                label={tr.pix.recipientLabel}
                value={settings.pix.recipientName}
              />
            </div>
            <div className="mt-4 bg-ivory border border-sage/30 rounded p-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-sageDark mb-1">
                  {tr.pix.keyLabel}
                </p>
                <p className="font-mono text-sm text-ink break-all">
                  {settings.pix.key}
                </p>
              </div>
              <CopyButton
                value={settings.pix.key}
                labelIdle={tr.pix.copyButton}
                labelDone={tr.pix.copiedButton}
              />
            </div>
            <Reminder lang={lang} giftLabel={giftLabel} />
          </div>
        )}

        {settings.bizum.enabled && (
          <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-serif text-xl text-ink">{tr.bizum.title}</h3>
              <span className="text-xs uppercase tracking-widest text-sageDark">
                🇪🇸 España
              </span>
            </div>
            <p className="text-ink/70 text-sm mt-2">{tr.bizum.instructions}</p>
            <div className="mt-4 text-sm">
              <Field
                label={tr.bizum.recipientLabel}
                value={settings.bizum.recipientName}
              />
            </div>
            <div className="mt-4 bg-ivory border border-sage/30 rounded p-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-sageDark mb-1">
                  {tr.bizum.phoneLabel}
                </p>
                <p className="font-mono text-sm text-ink break-all">
                  {settings.bizum.phone}
                </p>
              </div>
              <CopyButton
                value={settings.bizum.phone}
                labelIdle={tr.bizum.copyButton}
                labelDone={tr.bizum.copiedButton}
              />
            </div>
            <Reminder lang={lang} giftLabel={giftLabel} />
          </div>
        )}

        {settings.bankTransfer.enabled && (
          <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm">
            <h3 className="font-serif text-xl text-ink">
              {tr.bankTransfer.title}
            </h3>
            <p className="text-ink/70 text-sm mt-2">
              {tr.bankTransfer.instructions}
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <Field
                label={tr.bankTransfer.recipientLabel}
                value={settings.bankTransfer.recipientName}
              />
              {settings.bankTransfer.bic && (
                <Field
                  label={tr.bankTransfer.bicLabel}
                  value={settings.bankTransfer.bic}
                />
              )}
              {settings.bankTransfer.bankName && (
                <Field
                  label={tr.bankTransfer.bankLabel}
                  value={settings.bankTransfer.bankName}
                />
              )}
            </div>
            <div className="mt-4 bg-ivory border border-sage/30 rounded p-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-sageDark mb-1">
                  {tr.bankTransfer.ibanLabel}
                </p>
                <p className="font-mono text-sm text-ink break-all">
                  {settings.bankTransfer.iban}
                </p>
              </div>
              <CopyButton
                value={settings.bankTransfer.iban}
                labelIdle={tr.bankTransfer.copyButton}
                labelDone={tr.bankTransfer.copiedButton}
              />
            </div>
            <Reminder lang={lang} giftLabel={giftLabel} />
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-sageDark mb-0.5">
        {label}
      </p>
      <p className="text-ink">{value}</p>
    </div>
  );
}

function Reminder({ lang, giftLabel }: { lang: Lang; giftLabel: string }) {
  const text =
    lang === "pt"
      ? `Não esqueça de escrever "${giftLabel}" na mensagem do pagamento.`
      : `No olvides escribir "${giftLabel}" en el concepto del pago.`;
  return (
    <p className="mt-3 text-xs text-ink/60 italic">{text}</p>
  );
}
