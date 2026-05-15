"use client";

import { useEffect, useState } from "react";

// Cycles through greetings in PT · ES · EN · DE every few seconds.
// The order reflects the couple's languages and their international guests.
const GREETINGS = ["Bem-vindos", "Bienvenidos", "Welcome", "Willkommen"] as const;

const ROTATION_MS = 2800;
const FADE_MS = 350;

export function WelcomeRotation() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((x) => (x + 1) % GREETINGS.length);
        setVisible(true);
      }, FADE_MS);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-ivory text-center py-3 border-b border-sage/20">
      <span
        className={`inline-block font-serif italic text-sageDark tracking-[0.3em] text-sm transition-opacity ease-in-out duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-live="polite"
      >
        {GREETINGS[index]}
      </span>
    </div>
  );
}
