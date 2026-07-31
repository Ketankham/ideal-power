"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/lib/site";
import { SceneArt } from "./Art";
import { GoldButton, RichText } from "./ui";

const DURATION = 7200;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), DURATION);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      className="relative isolate min-h-[92svh] overflow-hidden bg-navy-950 text-white"
      aria-roledescription="carousel"
      aria-label="Ideal Engineering highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <SceneArt
            id={`hero-${i}`}
            variant={slide.art}
            className={`h-full w-full object-cover ${i === index ? "slide-art" : ""}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 hairline-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/72 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-navy-950 to-transparent"
        aria-hidden
      />

      {/* Copy */}
      <div className="container-x relative flex min-h-[92svh] flex-col justify-center pt-32 pb-44 md:pb-52">
        <div className="max-w-3xl">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.title}
              className={`transition-all duration-700 ${
                i === index
                  ? "relative opacity-100 blur-0 translate-y-0"
                  : "pointer-events-none absolute inset-x-0 top-0 opacity-0 blur-[2px] translate-y-4"
              }`}
              aria-hidden={i !== index}
            >
              {slide.kicker && (
                <p className="eyebrow mb-5 flex items-center gap-3 text-gold-400">
                  <span className="h-px w-9 bg-gold-400/70" />
                  {slide.kicker}
                </p>
              )}
              <h1 className="display-1 max-w-[16ch] text-balance">{slide.title}</h1>
              <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-[1.7] text-white/78 md:text-[1.12rem]">
                <RichText text={slide.body} />
              </p>
              <div className="mt-9">
                <GoldButton href={slide.href}>{slide.cta}</GoldButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="container-x absolute inset-x-0 bottom-10 z-10 md:bottom-14">
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="grid h-11 w-11 place-items-center rounded-lg border border-gold-500/60 text-gold-400 transition-all hover:bg-gold-500 hover:text-navy-900"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>

          <ol className="flex items-center gap-3 text-sm font-semibold tabular-nums">
            {heroSlides.map((s, i) => (
              <li key={s.title} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.title}`}
                  aria-current={i === index}
                  className={`transition-colors ${
                    i === index ? "text-white" : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
                {i === index && (
                  <span className="relative block h-px w-12 overflow-hidden bg-white/25" aria-hidden>
                    <span
                      key={`${index}-${paused}`}
                      className="absolute inset-y-0 left-0 bg-gold-500"
                      style={{
                        animation: paused
                          ? "none"
                          : `ie-progress ${DURATION}ms linear forwards`,
                        width: paused ? "100%" : undefined,
                      }}
                    />
                  </span>
                )}
              </li>
            ))}
          </ol>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="grid h-11 w-11 place-items-center rounded-lg border border-gold-500/60 text-gold-400 transition-all hover:bg-gold-500 hover:text-navy-900"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`@keyframes ie-progress{from{width:0}to{width:100%}}`}</style>
    </section>
  );
}
