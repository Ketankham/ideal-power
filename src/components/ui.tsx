import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h13M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Chevron({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Solid gold pill CTA — the primary action style across the site. */
export function GoldButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-lg bg-gold-500 px-7 py-3.5 text-[0.95rem] font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_14px_30px_-12px_rgba(245,184,65,0.75)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold-500 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const styles =
    tone === "light"
      ? "border-white/40 text-white hover:border-white hover:bg-white/10"
      : "border-navy-800/25 text-navy-800 hover:border-navy-800 hover:bg-navy-800 hover:text-white";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-lg border px-7 py-3.5 text-[0.95rem] font-semibold transition-all duration-300 ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/** Understated inline link with a chevron — used inside cards. */
export function KnowMore({
  href,
  label = "Know More",
  tone = "gold",
}: {
  href: string;
  label?: string;
  tone?: "gold" | "navy";
}) {
  return (
    <Link
      href={href}
      className={`group/km inline-flex items-center gap-1.5 text-[0.9rem] font-semibold ${
        tone === "gold" ? "text-gold-500" : "text-navy-700"
      }`}
    >
      {label}
      <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover/km:translate-x-1" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow mb-4 flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          } ${tone === "light" ? "text-gold-400" : "text-ember-500"}`}
        >
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`display-2 ${tone === "light" ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-[1.02rem] leading-[1.75] ${
            tone === "light" ? "text-white/72" : "text-ink/68"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}

/** Renders **bold** segments inside otherwise plain copy. */
export function RichText({ text, className = "" }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-bold">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </span>
  );
}
