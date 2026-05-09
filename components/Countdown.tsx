"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/content/translations";
import { t } from "@/content/translations";

export function Countdown({ targetIso, lang }: { targetIso: string; lang: Lang }) {
  const tr = t(lang).home.countdown;
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) return null;

  const diff = Math.max(0, new Date(targetIso).getTime() - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center px-4">
      <div className="font-serif text-4xl md:text-5xl text-sageDark tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs uppercase tracking-widest text-ink/50 mt-1">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center gap-2 md:gap-4 my-8">
      <Box value={days} label={tr.days} />
      <Box value={hours} label={tr.hours} />
      <Box value={minutes} label={tr.minutes} />
      <Box value={seconds} label={tr.seconds} />
    </div>
  );
}
