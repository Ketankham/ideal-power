"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/site";
import { ChevronDown, Chevron } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawer(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const solid = scrolled || !overHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-navy-900/8 bg-white/95 backdrop-blur-lg shadow-[0_2px_24px_-12px_rgba(10,37,64,0.35)]"
            : "bg-gradient-to-b from-black/55 to-transparent"
        }`}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-6 md:h-[84px]">
          <Logo variant={solid ? "dark" : "light"} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpen(item.children ? item.label : null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-[0.78rem] font-bold uppercase tracking-[0.09em] transition-colors duration-200 ${
                      solid
                        ? active
                          ? "text-ember-500"
                          : "text-navy-900/80 hover:text-ember-500"
                        : active
                          ? "text-gold-400"
                          : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          open === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div
                      className={`absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-3 transition-all duration-250 ${
                        open === item.label
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-xl border border-navy-900/8 bg-white p-2 shadow-[0_30px_60px_-24px_rgba(10,37,64,0.4)]">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="group flex items-start gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-mist/60"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                            <span>
                              <span className="block text-[0.92rem] font-semibold text-navy-900">
                                {c.label}
                              </span>
                              {c.note && (
                                <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink/55">
                                  {c.note}
                                </span>
                              )}
                            </span>
                            <Chevron className="ml-auto mt-1 h-3.5 w-3.5 shrink-0 text-navy-900/25 transition-transform group-hover:translate-x-1 group-hover:text-ember-500" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <IconBtn label="Search" solid={solid}>
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </IconBtn>
            <IconBtn label="Accessibility options" solid={solid} className="hidden sm:inline-flex">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
              <path d="M7.5 10.5h9M12 10.5V15M12 15l-2.5 3.5M12 15l2.5 3.5" />
            </IconBtn>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={drawer}
              onClick={() => setDrawer(true)}
              className={`ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
                solid
                  ? "border-navy-900/15 text-navy-900"
                  : "border-white/30 text-white"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
      >
        <button
          type="button"
          tabIndex={drawer ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col bg-white transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            drawer ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-navy-900/8 px-5 py-4">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setDrawer(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 text-navy-900"
            >
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-navy-900/6">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className="flex-1 px-4 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.09em] text-navy-900"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={mobileOpen === item.label}
                      onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                      className="px-4 py-3.5 text-navy-900/50"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileOpen === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div
                    className={`grid transition-all duration-300 ${
                      mobileOpen === item.label ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block py-2.5 pl-8 pr-4 text-[0.88rem] text-ink/70"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="border-t border-navy-900/8 p-5">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-900"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function IconBtn({
  label,
  solid,
  children,
  className = "",
}: {
  label: string;
  solid: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
        solid
          ? "text-navy-900/70 hover:bg-mist hover:text-navy-900"
          : "text-white/85 hover:bg-white/10 hover:text-white"
      } ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </button>
  );
}
