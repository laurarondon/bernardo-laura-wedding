"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/content/translations";

export function LangSwitcher({ current }: { current: Lang }) {
  const pathname = usePathname() ?? `/${current}`;
  const other: Lang = current === "pt" ? "es" : "pt";
  const otherPath = pathname.replace(/^\/(pt|es)/, `/${other}`);

  return (
    <div className="flex items-center gap-1 text-xs">
      <span className={current === "pt" ? "text-sageDark font-semibold" : "text-ink/40"}>
        PT
      </span>
      <span className="text-ink/30">·</span>
      <Link
        href={otherPath}
        className={current === "es" ? "text-sageDark font-semibold" : "text-ink/40 hover:text-sageDark"}
      >
        ES
      </Link>
    </div>
  );
}
