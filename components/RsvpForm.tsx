"use client";

import { useState, type FormEvent } from "react";
import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";

type Status = "idle" | "submitting" | "success" | "error";

export function RsvpForm({
  lang,
  endpoint,
}: {
  lang: Lang;
  endpoint: string;
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

    const subject =
      attendingValue === "yes"
        ? `RSVP – ${name} – Yes (${partySize})`
        : `RSVP – ${name} – No`;

    // Formsubmit AJAX endpoint expects JSON; "_" prefixed fields are special.
    const payload: Record<string, string> = {
      Name: name,
      Email: email || "(not provided)",
      Attending: attendingValue === "yes" ? "Yes" : "No",
      "Party size": attendingValue === "yes" ? partySize : "—",
      "Dietary / allergies": dietary || "—",
      Message: message || "—",
      Language: lang.toUpperCase(),
      _subject: subject,
      _template: "table",
      _captcha: "false",
    };
    if (email) payload._replyto = email;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
