import { notFound } from "next/navigation";
import type { Lang } from "@/content/translations";

export const SUPPORTED_LANGS = ["pt", "es"] as const;

export function assertLang(value: string): Lang {
  if (!SUPPORTED_LANGS.includes(value as Lang)) notFound();
  return value as Lang;
}

export function formatDate(iso: string, lang: Lang) {
  const d = new Date(iso);
  const locale = lang === "pt" ? "pt-BR" : "es-ES";
  return d.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatTime(iso: string, lang: Lang) {
  const d = new Date(iso);
  const locale = lang === "pt" ? "pt-BR" : "es-ES";
  return d.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
