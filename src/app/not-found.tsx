import { GhostButton, GoldButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden bg-navy-950 text-white">
      <span className="hairline-grid absolute inset-0 opacity-60" aria-hidden />
      <span
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 25%, rgba(245,184,65,0.25), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container-x relative py-28">
        <p className="eyebrow text-gold-400">Error 404</p>
        <h1 className="mt-5 display-1 max-w-[16ch]">This page is off the grid</h1>
        <p className="mt-6 max-w-lg text-[1.05rem] leading-[1.75] text-white/70">
          The page you were looking for has moved or no longer exists. Try the homepage, or head
          straight to the businesses overview.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <GoldButton href="/">Back to home</GoldButton>
          <GhostButton href="/businesses" tone="light">
            Our businesses
          </GhostButton>
        </div>
      </div>
    </section>
  );
}
