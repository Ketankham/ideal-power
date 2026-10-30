import { clinic, telHref } from "@/lib/clinic";

/* Always-visible Call / Book bar on small screens, where most patients look up the clinic. */
export default function MobileActionBar({
  barClass = "border-pine-900/10 bg-white/90",
  callClass = "text-pine-900 ring-pine-900/15",
  bookClass = "bg-pine-900 text-white",
}: {
  barClass?: string;
  callClass?: string;
  bookClass?: string;
}) {
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 border-t px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden ${barClass}`}>
      <div className="grid grid-cols-2 gap-2">
        <a
          href={telHref(clinic.phones[0])}
          className={`flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold ring-1 ${callClass}`}
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
          </svg>
          Call clinic
        </a>
        <a href="#book" className={`rounded-full py-3 text-center text-sm font-semibold ${bookClass}`}>
          Book a visit
        </a>
      </div>
    </div>
  );
}
