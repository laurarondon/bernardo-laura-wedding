"use client";

import { settings } from "@/content/settings";

/**
 * Generates a minimal .ics file covering the whole wedding day (ceremony
 * through end of reception) and triggers a browser download. Works on iOS,
 * Android, macOS, and Windows calendar apps.
 */
function buildIcs(): string {
  // Wedding is in Spain (CEST = UTC+2 in June). Convert local time to UTC:
  // 12:00 CEST → 10:00 UTC. We assume the party wraps by ~02:00 the next day
  // (00:00 UTC on June 6).
  const dtStart = "20270605T100000Z";
  const dtEnd = "20270606T000000Z";
  const dtStamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

  const summary = `${settings.couple.groom} & ${settings.couple.bride} — Wedding`;
  const description = [
    `Ceremony at ${settings.wedding.ceremony.time} — ${settings.wedding.ceremony.venueName}`,
    `Reception at ${settings.wedding.reception.time} — ${settings.wedding.reception.venueName}`,
  ].join("\\n");
  const location = `${settings.wedding.ceremony.venueName}, ${settings.wedding.city}`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Bernardo and Laura//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:wedding-bernardo-laura-20270605@bernardo-laura",
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${summary}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function AddToCalendarButton({ label }: { label: string }) {
  function handleClick() {
    const blob = new Blob([buildIcs()], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bernardo-laura-wedding.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 btn-ghost"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="w-4 h-4"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
      {label}
    </button>
  );
}
