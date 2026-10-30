"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const themes = [
  { href: "/home", label: "Theme 1", note: "Calm editorial" },
  { href: "/home/theme-2", label: "Theme 2", note: "Clinical bright" },
  { href: "/home/theme-3", label: "Theme 3", note: "Modern dark" },
];

/* Design-preview strip pinned above every theme so the clinic can compare directions. */
export default function ThemeSwitcher() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Design themes"
      className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center justify-center gap-1 bg-black/85 px-3 text-xs text-white/60 backdrop-blur"
    >
      <span className="mr-2 hidden sm:inline">Design preview:</span>
      {themes.map((t) => {
        const active = pathname === t.href;
        return (
          <Link
            key={t.href}
            href={t.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-3 py-1 transition ${
              active ? "bg-white font-semibold text-black" : "hover:bg-white/10 hover:text-white"
            }`}
          >
            {t.label}
            <span className="hidden md:inline"> · {t.note}</span>
          </Link>
        );
      })}
    </nav>
  );
}
