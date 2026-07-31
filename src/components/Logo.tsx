import Link from "next/link";

/**
 * Stacked lockup: a chevron mark + "IDEAL" wordmark, with the division
 * descriptor set on two tight lines beside it (reference-site style).
 */
export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const word = variant === "light" ? "#ffffff" : "#0f3a6b";
  const sub = variant === "light" ? "#ffffff" : "#0f3a6b";

  return (
    <Link
      href="/"
      aria-label="Ideal Engineering — home"
      className={`group inline-flex items-end gap-3 ${className}`}
    >
      <svg viewBox="0 0 128 44" className="h-9 w-auto shrink-0 md:h-10" aria-hidden="true">
        <text
          x="0"
          y="34"
          fill={word}
          fontFamily="var(--font-red-hat), sans-serif"
          fontSize="36"
          fontWeight="800"
          letterSpacing="-1.5"
        >
          IDE
        </text>
        {/* the "A" is drawn as a gold/ember chevron pair */}
        <path d="M74 36 L88 6 L96 6 L82 36Z" fill="#f5b841" />
        <path d="M92 36 L106 6 L114 6 L100 36Z" fill="#e8622c" />
        <path d="M84 26 H104 L100.5 33 H80.5 Z" fill={variant === "light" ? "#ffffff" : "#14538f"} />
        <text
          x="112"
          y="34"
          fill={word}
          fontFamily="var(--font-red-hat), sans-serif"
          fontSize="36"
          fontWeight="800"
          letterSpacing="-1.5"
        >
          L
        </text>
      </svg>
      <span
        className="hidden text-[0.68rem] font-extrabold leading-[1.15] tracking-[0.06em] sm:block"
        style={{ color: sub }}
      >
        ENGINEERING &amp;
        <br />
        INFRASTRUCTURE
      </span>
    </Link>
  );
}
