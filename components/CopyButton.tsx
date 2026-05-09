"use client";

import { useState } from "react";

export function CopyButton({
  value,
  labelIdle,
  labelDone,
}: {
  value: string;
  labelIdle: string;
  labelDone: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          // clipboard may be blocked — silently no-op
        }
      }}
      className="text-xs px-3 py-1.5 rounded border border-sageDark text-sageDark hover:bg-sageDark hover:text-white transition"
    >
      {copied ? labelDone : labelIdle}
    </button>
  );
}
