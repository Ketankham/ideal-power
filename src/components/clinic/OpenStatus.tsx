"use client";

import { useEffect, useState } from "react";

// Clinic runs Mon–Sat, 13:00–20:00 IST. Status is computed in IST regardless of the visitor's timezone.
const OPEN = 13;
const CLOSE = 20;

function statusNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const day = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const workday = day !== "Sun";

  if (workday && hour >= OPEN && hour < CLOSE) return { open: true, text: "Open now · until 8 PM" };
  if (workday && hour < OPEN) return { open: false, text: "Closed · opens 1 PM today" };
  return { open: false, text: day === "Sat" || day === "Sun" ? "Closed · opens Monday 1 PM" : "Closed · opens 1 PM tomorrow" };
}

export default function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    const tick = () => setStatus(statusNow());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex size-2" aria-hidden>
        {status?.open && <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />}
        <span className={`relative inline-flex size-2 rounded-full ${status?.open ? "bg-emerald-400" : "bg-coral-500"}`} />
      </span>
      {status ? status.text : "Mon – Sat · 1 PM – 8 PM"}
    </span>
  );
}
