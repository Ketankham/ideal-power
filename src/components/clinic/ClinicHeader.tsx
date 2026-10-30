"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clinic, telHref } from "@/lib/clinic";
import OpenStatus from "./OpenStatus";

const nav = [
  { label: "About", href: "#about" },
  { label: "Conditions", href: "#conditions" },
  { label: "Approach", href: "#approach" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#visit" },
];

export function ClinicMark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid size-9 place-items-center rounded-xl ${light ? "bg-white/10 text-sage-100" : "bg-pine-900 text-sage-100"}`}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M12 3v8" />
          <path d="M12 11c-1.2 1.4-2.6 2-4 2" />
          <path d="M12 11c1.2 1.4 2.6 2 4 2" />
          <path d="M9 6.5C6 6 3.5 9.5 3.5 14.5c0 3 1.2 5.5 3.5 5.5 2.6 0 3-2.6 3-5.5V8.5" />
          <path d="M15 6.5c3-.5 5.5 3 5.5 8 0 3-1.2 5.5-3.5 5.5-2.6 0-3-2.6-3-5.5V8.5" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-clinic-serif text-[1.08rem] ${light ? "text-white" : "text-pine-950"}`}>
          Chest &amp; Allergy
        </span>
        <span className={`block text-[0.68rem] uppercase tracking-[0.22em] ${light ? "text-white/55" : "text-pine-700/70"}`}>
          Clinic · {clinic.city}
        </span>
      </span>
    </span>
  );
}

export default function ClinicHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-9 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto hidden max-w-6xl items-center justify-between overflow-hidden px-5 text-xs text-pine-900/70 transition-all duration-500 md:flex ${
          scrolled ? "h-0 opacity-0" : "h-8 opacity-100"
        }`}
      >
        <OpenStatus className="font-medium text-pine-900" />
        <span className="flex items-center gap-5">
          {clinic.phones.map((p) => (
            <a key={p} href={telHref(p)} className="transition hover:text-pine-950">
              {p}
            </a>
          ))}
          <a href={`mailto:${clinic.emails.info}`} className="transition hover:text-pine-950">
            {clinic.emails.info}
          </a>
        </span>
      </div>
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? "bg-white/80 shadow-[0_10px_40px_-18px_rgb(6_42_38/0.35)] ring-1 ring-pine-900/5 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Link href="/home" aria-label={`${clinic.name} home`}>
          <ClinicMark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-pine-900/75 transition hover:bg-pine-900/5 hover:text-pine-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref(clinic.phones[0])} className="hidden pr-2 text-sm font-semibold text-pine-900 lg:inline-block">
            {clinic.phones[0]}
          </a>
          <a
            href="#book"
            className="hidden rounded-full bg-pine-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pine-700 sm:inline-block"
          >
            Book a visit
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full text-pine-950 hover:bg-pine-900/5 md:hidden"
            aria-expanded={open}
            aria-controls="clinic-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="clinic-menu"
          className="mx-auto mt-2 max-w-6xl rounded-2xl bg-white/95 p-3 shadow-[0_20px_50px_-20px_rgb(6_42_38/0.4)] ring-1 ring-pine-900/5 backdrop-blur-xl md:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-[0.95rem] font-medium text-pine-950 hover:bg-sage-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-pine-900 px-4 py-3 text-center font-semibold text-white"
          >
            Book a visit
          </a>
        </nav>
      )}
    </header>
  );
}
