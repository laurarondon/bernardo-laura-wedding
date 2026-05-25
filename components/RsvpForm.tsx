"use client";

import { useState, type FormEvent } from "react";
import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function RsvpForm({
  lang,
  accessKey,
}: {
  lang: Lang;
  accessKey: string;
}) {
  const tr = t(lang).rsvp;
  const [status, setStatus] = useState<Status>("idle");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const attendingValue = (
      form.elements.namedItem("attending") as HTMLInputElement
    )?.value;
    const partySize =
      (form.elements.namedItem("partySize") as HTMLInputElement)?.value || "1";
    const dietary = (form.elements.namedItem("dietary") as HTMLTextAreaElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const botcheck = (form.elements.namedItem("botcheck") as HTMLInputElement)
      ?.value;

    // Honeypot: if the hidden field has a value, silently "succeed" — it was a bot.
    if (botcheck) {
      setStatus("success");
      return;
    }

    const subject =
      attendingValue === "yes"
        ? `RSVP – ${name} – Yes (${partySize})`
        : `RSVP – ${name} – No`;

    const payload = {
      access_key: accessKey,
      subject,
      from_name: "Bernardo & Laura — Wedding RSVP",
      // Fields below appear in the email body, in this order:
      Name: name,
      Email: email || "(not provided)",
      Attending: attendingValue === "yes" ? "Yes" : "No",
      "Party size": attendingValue === "yes" ? partySize : "—",
      "Dietary / allergies": dietary || "—",
      Message: message || "—",
      Language: lang.toUpperCase(),
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data: { success?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-sage/10 border border-sage/40 rounded-lg p-8 text-center">
        <p className="font-serif text-2xl text-sageDark">{tr.successTitle}</p>
        <p className="mt-3 text-ink/70">{tr.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot — hidden from real users, attractive to bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <Field label={`${tr.nameLabel} *`}>
        <input
          name="name"
          type="text"
          required
          placeholder={tr.namePlaceholder}
          className={inputClass}
        />
      </Field>

      <Field label={tr.emailLabel}>
        <input
          name="email"
          type="email"
          placeholder={tr.emailPlaceholder}
          className={inputClass}
        />
      </Field>

      <Field label={`${tr.attendingLabel} *`}>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="attending"
              value="yes"
              required
              checked={attending === "yes"}
              onChange={() => setAttending("yes")}
              className="accent-sageDark"
            />
            <span>{tr.attendingYes}</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="attending"
              value="no"
              checked={attending === "no"}
              onChange={() => setAttending("no")}
              className="accent-sageDark"
            />
            <span>{tr.attendingNo}</span>
          </label>
        </div>
      </Field>

      {attending === "yes" && (
        <>
          <Field label={`${tr.partySizeLabel} *`}>
            <input
              name="partySize"
              type="number"
              min={1}
              max={10}
              defaultValue={1}
              required
              className={`${inputClass} max-w-[8rem]`}
            />
          </Field>

          <Field label={tr.dietaryLabel}>
            <textarea
              name="dietary"
              rows={2}
              placeholder={tr.dietaryPlaceholder}
              className={inputClass}
            />
          </Field>
        </>
      )}

      <Field label={tr.messageLabel}>
        <textarea
          name="message"
          rows={4}
          placeholder={tr.messagePlaceholder}
          className={inputClass}
        />
      </Field>

      {status === "error" && (
        <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded p-4">
          <p className="font-medium">{tr.errorTitle}</p>
          <p className="text-sm mt-1">{tr.errorBody}</p>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-ink/50 italic">{tr.requiredHint}</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? tr.submitting : tr.submitButton}
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full bg-white border border-sage/40 rounded px-4 py-3 text-ink focus:outline-none focus:border-sageDark focus:ring-1 focus:ring-sageDark transition";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-widest text-sageDark mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
