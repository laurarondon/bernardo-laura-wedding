import { notFound } from "next/navigation";
import type { Lang } from "@/content/translations";

export const SUPPORTED_LANGS = ["pt", "es", "en", "de"] as const;

export function assertLang(value: string): Lang {
  if (!SUPPORTED_LANGS.includes(value as Lang)) notFound();
  return value as Lang;
}

const LOCALES: Record<Lang, string> = {
  pt: "pt-BR",
  es: "es-ES",
  en: "en-GB",
  de: "de-DE",
};

export function formatDate(iso: string, lang: Lang) {
  const formatted = new Date(iso).toLocaleDateString(LOCALES[lang], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // PT/ES day names come back lowercase ("sábado") which loses the
  // beautiful capital letter of the script font. Capitalise the first letter.
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatTime(iso: string, lang: Lang) {
  return new Date(iso).toLocaleTimeString(LOCALES[lang], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
