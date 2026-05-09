"use client";

import { QRCodeSVG } from "qrcode.react";
import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";
import { settings } from "@/content/settings";
import { buildPixBRCode, isPixKeyConfigured } from "@/lib/pix";
import { CopyButton } from "./CopyButton";

export function PixPayment({
  lang,
  amount,
  giftId,
  giftLabel,
}: {
  lang: Lang;
  amount: number;
  giftId: string;
  giftLabel: string;
}) {
  const tr = t(lang).gifts.pix;
  const configured = isPixKeyConfigured(settings.pix.key);

  return (
    <div className="bg-white border border-sage/30 rounded-lg p-6 shadow-sm">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h3 className="font-serif text-xl text-ink">{tr.title}</h3>
        <span className="text-xs uppercase tracking-widest text-sageDark">
          🇧🇷 Brasil
        </span>
      </div>
      <p className="text-ink/70 text-sm mt-2">{tr.instructions}</p>

      {!configured ? (
        <p className="mt-6 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3">
          {tr.unconfigured}
        </p>
      ) : (
        <PixContent
          amount={amount}
          giftId={giftId}
          giftLabel={giftLabel}
          tr={tr}
        />
      )}
    </div>
  );
}

function PixContent({
  amount,
  giftId,
  giftLabel,
  tr,
}: {
  amount: number;
  giftId: string;
  giftLabel: string;
  tr: ReturnType<typeof t>["gifts"]["pix"];
}) {
  const brcode = buildPixBRCode({
    pixKey: settings.pix.key,
    recipientName: settings.pix.recipientName,
    recipientCity: settings.pix.recipientCity,
    amount,
    txid: giftId,
  });

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center bg-ivory border border-sage/30 rounded-lg p-6">
        <p className="text-xs uppercase tracking-widest text-sageDark mb-3">
          {tr.qrTitle}
        </p>
        <div className="bg-white p-3 rounded">
          <QRCodeSVG value={brcode} size={200} level="M" />
        </div>
        <p className="mt-3 font-serif italic text-ink/70 text-sm text-center">
          {giftLabel}
          {amount > 0 && <> · R$ {amount.toFixed(2)}</>}
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs uppercase tracking-widest text-sageDark mb-2">
          {tr.copyPasteTitle}
        </p>
        <div className="bg-ivory border border-sage/30 rounded p-3 flex items-center justify-between gap-3">
          <p className="font-mono text-xs text-ink/80 break-all flex-1 max-h-20 overflow-y-auto">
            {brcode}
          </p>
          <CopyButton
            value={brcode}
            labelIdle={tr.copyPasteCopy}
            labelDone={tr.copyPasteCopied}
          />
        </div>
      </div>

      <details className="mt-5">
        <summary className="cursor-pointer text-xs uppercase tracking-widest text-sageDark hover:text-sage">
          {tr.manualTitle}
        </summary>
        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
          <Field label={tr.keyTypeLabel} value={settings.pix.keyType} />
          <Field label={tr.recipientLabel} value={settings.pix.recipientName} />
          {settings.pix.bank && (
            <Field label={tr.bankLabel} value={settings.pix.bank} />
          )}
        </div>
        <div className="mt-3 bg-ivory border border-sage/30 rounded p-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-widest text-sageDark mb-1">
              {tr.keyLabel}
            </p>
            <p className="font-mono text-sm text-ink break-all">
              {settings.pix.key}
            </p>
          </div>
          <CopyButton
            value={settings.pix.key}
            labelIdle={tr.copyButton}
            labelDone={tr.copiedButton}
          />
        </div>
      </details>
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
