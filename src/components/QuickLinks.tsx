"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "./ui";

const links = [
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about-us" },
  { label: "Investor Relations", href: "/investors" },
  { label: "Ideal Energy Ltd", href: "/businesses/ideal-energy" },
  { label: "Ideal Highways Ltd", href: "/businesses/ideal-highways" },
];

/** Floating quick-links tray plus a back-to-top control, pinned bottom-right. */
export default function QuickLinks() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 md:bottom-8">
      <div className="container-x flex items-end justify-end gap-3">
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-gold-500 text-navy-900 shadow-[0_16px_34px_-14px_rgba(10,37,64,0.7)] transition-all duration-300 hover:bg-gold-400 ${
            showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>

        <div className="pointer-events-auto relative">
          <div
            className={`absolute bottom-full right-0 mb-3 w-64 origin-bottom-right overflow-hidden rounded-xl border border-navy-900/8 bg-white shadow-[0_28px_60px_-26px_rgba(10,37,64,0.55)] transition-all duration-300 ${
              open
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            <ul className="p-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-[0.9rem] font-medium text-navy-900 transition-colors hover:bg-mist/70 hover:text-ember-500"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2.5 rounded-lg bg-gold-500 px-5 py-3.5 text-[0.92rem] font-semibold text-navy-900 shadow-[0_16px_34px_-14px_rgba(10,37,64,0.7)] transition-colors hover:bg-gold-400"
          >
            Quick Links
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "" : "rotate-180"}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
