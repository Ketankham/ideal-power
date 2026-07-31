import type { ArtKey } from "@/lib/site";

/**
 * Cinematic SVG scenes used behind hero slides and card headers.
 * Everything is drawn inline so the site ships with zero binary assets.
 */
export function SceneArt({
  variant,
  className = "",
  id,
}: {
  variant: ArtKey;
  className?: string;
  id: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#0b1a2b" />
          <stop offset="45%" stopColor="#10304f" />
          <stop offset="100%" stopColor="#050b13" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.72" cy="0.34" r="0.62">
          <stop offset="0%" stopColor="#f5b841" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#e8622c" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0a2540" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#04070c" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#04070c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#04070c" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id={`${id}-ground`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1622" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#04070c" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="1440" height="820" fill={`url(#${id}-sky)`} />
      <rect width="1440" height="820" fill={`url(#${id}-glow)`} />

      {variant === "energy" && <EnergyScene id={id} />}
      {variant === "grid" && <GridScene id={id} />}
      {variant === "highway" && <HighwayScene id={id} />}
      {variant === "urban" && <UrbanScene id={id} />}
      {variant === "metering" && <MeteringScene id={id} />}

      <rect y="560" width="1440" height="260" fill={`url(#${id}-ground)`} />
      <rect width="1440" height="820" fill={`url(#${id}-fade)`} />
    </svg>
  );
}

const S = "#0d1f31";
const S2 = "#132a41";
const LINE = "#f5b841";

function EnergyScene({ id }: { id: string }) {
  return (
    <g>
      <circle cx="1035" cy="250" r="118" fill="#f5b841" opacity="0.12" />
      <circle cx="1035" cy="250" r="66" fill="#fbc85c" opacity="0.18" />
      {/* cooling towers */}
      <path d="M760 640V430c0-34 12-58 26-72h96c14 14 26 38 26 72v210z" fill={S} />
      <path d="M770 640V434c0-26 9-45 20-56h74c11 11 20 30 20 56v206z" fill={S2} />
      <path d="M930 640V462c0-27 10-46 21-58h78c11 12 21 31 21 58v178z" fill={S} />
      {/* steam */}
      <g opacity="0.28" fill="#dbe7f5">
        <ellipse cx="834" cy="352" rx="72" ry="30" />
        <ellipse cx="880" cy="316" rx="52" ry="22" />
        <ellipse cx="1000" cy="392" rx="58" ry="24" />
      </g>
      {/* stacks */}
      <rect x="1108" y="300" width="26" height="340" fill={S2} />
      <rect x="1152" y="342" width="20" height="298" fill={S} />
      <circle cx="1121" cy="296" r="7" fill="#e8622c" opacity="0.8" />
      {/* plant block */}
      <path d="M560 640V520h150v120z" fill={S} />
      <path d="M580 540h110v22H580zM580 578h110v22H580z" fill="#f5b841" opacity="0.14" />
      {/* pylon */}
      <Pylon x={300} y={640} h={260} />
      <path d="M300 430 L560 470" stroke={LINE} strokeOpacity="0.22" strokeWidth="2" fill="none" />
      <path d="M300 456 L560 496" stroke={LINE} strokeOpacity="0.16" strokeWidth="2" fill="none" />
      <rect y="638" width="1440" height="4" fill="#f5b841" opacity="0.1" />
      <Sparkles id={id} />
    </g>
  );
}

function GridScene({ id }: { id: string }) {
  return (
    <g>
      <circle cx="1120" cy="230" r="150" fill="#f5b841" opacity="0.1" />
      {[0, 1, 2, 3].map((i) => (
        <Pylon key={i} x={230 + i * 300} y={648} h={300 - i * 26} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} stroke={LINE} strokeOpacity={0.2 - i * 0.04} strokeWidth="2" fill="none">
          <path d={`M230 ${360 + i * 30} Q380 ${404 + i * 30} 530 ${382 + i * 28}`} />
          <path d={`M530 ${382 + i * 28} Q680 ${420 + i * 28} 830 ${404 + i * 26}`} />
          <path d={`M830 ${404 + i * 26} Q980 ${440 + i * 26} 1130 ${424 + i * 24}`} />
        </g>
      ))}
      {/* wind turbines */}
      <Turbine x={1180} y={650} s={1} />
      <Turbine x={1330} y={660} s={0.72} />
      <rect y="646" width="1440" height="4" fill="#f5b841" opacity="0.1" />
      <Sparkles id={id} />
    </g>
  );
}

function HighwayScene({ id }: { id: string }) {
  return (
    <g>
      <path d="M0 820 L610 430 L830 430 L1440 820Z" fill="#0c1e30" />
      <path d="M700 430 L720 430 L900 820 L820 820Z" fill="#f5b841" opacity="0.12" />
      <g fill="#e9f0fa" opacity="0.5">
        <path d="M713 452h14l4 26h-20z" />
        <path d="M708 500h24l6 40h-34z" />
        <path d="M700 566h40l9 62h-56z" />
        <path d="M688 666h64l14 110h-90z" />
      </g>
      <path d="M612 430 L604 820 L560 820 L596 430Z" fill="#0a1826" opacity="0.9" />
      <path d="M828 430 L836 820 L884 820 L846 430Z" fill="#0a1826" opacity="0.9" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} opacity={0.5 - i * 0.09}>
          <rect x={556 - i * 44} y={392 - i * 34} width="5" height={70 + i * 44} fill="#20374f" />
          <circle cx={558.5 - i * 44} cy={390 - i * 34} r="6" fill="#f5b841" opacity="0.75" />
        </g>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <g key={`r${i}`} opacity={0.5 - i * 0.09}>
          <rect x={882 + i * 44} y={392 - i * 34} width="5" height={70 + i * 44} fill="#20374f" />
          <circle cx={884.5 + i * 44} cy={390 - i * 34} r="6" fill="#f5b841" opacity="0.75" />
        </g>
      ))}
      <ellipse cx="720" cy="428" rx="190" ry="34" fill="#f5b841" opacity="0.14" />
      <Sparkles id={id} />
    </g>
  );
}

function UrbanScene({ id }: { id: string }) {
  const towers = [
    [180, 470, 78, 200], [268, 400, 62, 270], [340, 512, 90, 158],
    [440, 356, 74, 314], [524, 448, 58, 222], [592, 300, 88, 370],
    [690, 468, 66, 202], [766, 392, 80, 278], [856, 500, 70, 170],
    [936, 344, 92, 326], [1038, 452, 64, 218], [1112, 396, 86, 274],
    [1208, 486, 74, 184], [1292, 428, 90, 242],
  ];
  return (
    <g>
      <circle cx="330" cy="220" r="120" fill="#e8622c" opacity="0.1" />
      {towers.map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} fill={i % 2 ? S2 : S} />
          {Array.from({ length: Math.floor(h / 34) }).map((_, r) =>
            Array.from({ length: Math.floor(w / 24) }).map((__, c) => (
              <rect
                key={`${r}-${c}`}
                x={x + 8 + c * 24}
                y={y + 12 + r * 34}
                width="11"
                height="14"
                fill="#f5b841"
                opacity={(r * 7 + c * 5 + i * 3) % 4 === 0 ? 0.42 : 0.08}
              />
            ))
          )}
        </g>
      ))}
      {/* crane */}
      <g stroke="#f5b841" strokeOpacity="0.4" strokeWidth="4" fill="none">
        <path d="M600 300V150M520 172h240M600 150l-40 22M600 150l40 22M700 172v52" />
      </g>
      <rect y="668" width="1440" height="4" fill="#f5b841" opacity="0.1" />
      <Sparkles id={id} />
    </g>
  );
}

function MeteringScene({ id }: { id: string }) {
  return (
    <g>
      <g stroke="#2a6fb5" strokeOpacity="0.28" strokeWidth="1.4" fill="none">
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={i} d={`M${60 + i * 100} 820V${180 + (i % 4) * 52}h${i % 2 ? 90 : -90}`} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <path key={`h${i}`} d={`M0 ${210 + i * 84}H1440`} strokeOpacity="0.09" />
        ))}
      </g>
      {Array.from({ length: 18 }).map((_, i) => (
        <circle
          key={i}
          cx={60 + i * 78}
          cy={180 + ((i * 3) % 5) * 84}
          r="5"
          fill="#f5b841"
          opacity="0.6"
        />
      ))}
      {/* meter face */}
      <g transform="translate(900 250)">
        <rect width="300" height="330" rx="26" fill={S2} />
        <rect x="26" y="34" width="248" height="118" rx="12" fill="#04101c" />
        <g fill="#f5b841" opacity="0.85">
          <rect x="46" y="62" width="14" height="52" />
          <rect x="70" y="62" width="14" height="52" />
          <rect x="102" y="62" width="14" height="52" />
          <rect x="126" y="62" width="14" height="52" />
          <rect x="158" y="62" width="14" height="52" />
          <rect x="182" y="62" width="14" height="52" />
        </g>
        <circle cx="80" cy="222" r="22" fill="#0a2540" stroke="#f5b841" strokeOpacity="0.5" strokeWidth="3" />
        <circle cx="150" cy="222" r="22" fill="#0a2540" stroke="#2a6fb5" strokeOpacity="0.6" strokeWidth="3" />
        <circle cx="220" cy="222" r="22" fill="#0a2540" stroke="#e8622c" strokeOpacity="0.5" strokeWidth="3" />
        <rect x="26" y="272" width="248" height="10" rx="5" fill="#0a2540" />
      </g>
      <Sparkles id={id} />
    </g>
  );
}

function Pylon({ x, y, h }: { x: number; y: number; h: number }) {
  const top = y - h;
  return (
    <g fill="none">
      <g stroke="#20384f" strokeWidth="3">
        <path d={`M${x - 34} ${y} L${x - 9} ${top} L${x + 9} ${top} L${x + 34} ${y}`} />
        <path d={`M${x - 26} ${y - h * 0.28} H${x + 26}`} />
        <path d={`M${x - 18} ${y - h * 0.58} H${x + 18}`} />
        <path d={`M${x - 34} ${y} L${x + 34} ${y - h * 0.55}`} strokeOpacity="0.55" />
        <path d={`M${x + 34} ${y} L${x - 34} ${y - h * 0.55}`} strokeOpacity="0.55" />
        <path d={`M${x - 62} ${top + h * 0.16} H${x + 62}`} />
        <path d={`M${x - 48} ${top + h * 0.34} H${x + 48}`} />
      </g>
      <g fill="#f5b841" opacity="0.55">
        <circle cx={x - 62} cy={top + h * 0.16} r="4" />
        <circle cx={x + 62} cy={top + h * 0.16} r="4" />
        <circle cx={x} cy={top} r="4" />
      </g>
    </g>
  );
}

function Turbine({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-7 0 L-3 -230 L3 -230 L7 0Z" fill="#213a52" />
      <g transform="translate(0 -230)" className="spin-slow" stroke="#2c4a66" strokeWidth="9" strokeLinecap="round">
        <path d="M0 0 L0 -104" />
        <path d="M0 0 L92 52" />
        <path d="M0 0 L-92 52" />
      </g>
      <circle cx="0" cy="-230" r="9" fill="#f5b841" opacity="0.65" />
    </g>
  );
}

function Sparkles({ id }: { id: string }) {
  return (
    <g opacity="0.5">
      {Array.from({ length: 26 }).map((_, i) => {
        const x = ((i * 137) % 1400) + 20;
        const y = ((i * 89) % 520) + 40;
        return (
          <circle key={`${id}-${i}`} cx={x} cy={y} r={i % 5 === 0 ? 2.4 : 1.4} fill="#e6f0ff" opacity={0.2 + (i % 4) * 0.14} />
        );
      })}
    </g>
  );
}

/**
 * Flat editorial illustration used as a full-width band, in the spirit of the
 * "energy → transport → urban" strip on the reference site.
 */
export function SkylineBand({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 320" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sb-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9f2e4" />
          <stop offset="100%" stopColor="#d6e6cf" />
        </linearGradient>
        <linearGradient id="sb-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a6fb5" />
          <stop offset="100%" stopColor="#14538f" />
        </linearGradient>
      </defs>

      <rect width="1440" height="320" fill="#f4f7fb" />
      <path d="M0 250h1440v70H0z" fill="url(#sb-ground)" />

      {/* distant city */}
      <g fill="#ccd7e6">
        {[[560, 120], [596, 88], [634, 140], [672, 104], [712, 152], [752, 116], [792, 148], [832, 96], [874, 136]].map(
          ([x, h], i) => (
            <rect key={i} x={x} y={250 - h} width="30" height={h} rx="2" />
          )
        )}
      </g>

      {/* cooling towers + plant */}
      <g>
        <path d="M120 250V160c0-20 8-34 16-42h48c8 8 16 22 16 42v90z" fill="#c9d4e2" />
        <path d="M188 250V176c0-16 7-28 14-34h40c7 6 14 18 14 34v74z" fill="#dbe4ee" />
        <g fill="#e8622c">
          <rect x="132" y="112" width="10" height="18" rx="4" />
          <rect x="200" y="130" width="9" height="16" rx="4" />
        </g>
        <rect x="60" y="196" width="52" height="54" fill="#b9c7d9" />
        <rect x="256" y="206" width="70" height="44" fill="#d2dced" />
        <g stroke="#9fb0c6" strokeWidth="3" fill="none">
          <path d="M40 250v-86M22 178h36M22 200h36" />
        </g>
      </g>

      {/* wind + solar */}
      <g>
        <path d="M918 250l-3-96h6l-3 96z" fill="#aebccd" />
        <g transform="translate(918 154)" stroke="#c3cfdd" strokeWidth="5" strokeLinecap="round">
          <path d="M0 0v-48M0 0l42 24M0 0l-42 24" />
        </g>
        <path d="M1002 250l-2-70h4l-2 70z" fill="#aebccd" />
        <g transform="translate(1002 180)" stroke="#c3cfdd" strokeWidth="4" strokeLinecap="round">
          <path d="M0 0v-34M0 0l30 17M0 0l-30 17" />
        </g>
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M${1060 + i * 54} 250 L${1082 + i * 54} 196 L${1122 + i * 54} 196 L${1100 + i * 54} 250Z`}
            fill="url(#sb-panel)"
          />
        ))}
      </g>

      {/* highway */}
      <path d="M0 268h1440v22H0z" fill="#b5c0cd" />
      <g fill="#ffffff">
        {Array.from({ length: 24 }).map((_, i) => (
          <rect key={i} x={i * 62} y="277" width="34" height="4" rx="2" />
        ))}
      </g>
      <g>
        <rect x="360" y="238" width="76" height="26" rx="6" fill="#f5b841" />
        <rect x="368" y="228" width="46" height="16" rx="5" fill="#fbc85c" />
        <circle cx="382" cy="266" r="8" fill="#2b3442" />
        <circle cx="418" cy="266" r="8" fill="#2b3442" />
        <rect x="900" y="234" width="104" height="30" rx="6" fill="#14538f" />
        <circle cx="926" cy="266" r="9" fill="#2b3442" />
        <circle cx="978" cy="266" r="9" fill="#2b3442" />
      </g>

      {/* trees */}
      <g fill="#8fbf7d">
        {[240, 470, 528, 860, 1210, 1300, 1380].map((x, i) => (
          <g key={i}>
            <rect x={x + 6} y="232" width="4" height="20" fill="#7a9a6c" />
            <circle cx={x + 8} cy="228" r="16" />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Simplified India outline with plotted asset locations (Adani-style footprint map). */
export function IndiaMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 460 520" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="im-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7d9b8" />
          <stop offset="55%" stopColor="#f0bd8c" />
          <stop offset="100%" stopColor="#e79f66" />
        </linearGradient>
      </defs>
      {/* mainland silhouette */}
      <path
        fill="url(#im-fill)"
        d="M118 74c16-14 38-20 59-16 15 3 30 1 44-6 16-8 35-4 46 10 7 9 18 14 30 13l38-3c16-1 28 15 23 30l-9 27c-3 9-1 19 5 26l25 30c9 11 6 27-6 34l-33 20c-8 5-13 14-13 24l-1 27c-1 15-15 25-29 21l-25-7c-11-3-22 2-27 12l-14 28c-6 12-6 26-1 38l14 33c6 15-4 31-20 32l-16 1c-12 1-22 9-25 21l-14 51c-4 16-26 18-33 3l-22-47c-4-9-11-15-20-18l-25-8c-15-5-21-23-12-36l19-27c6-8 7-19 3-28L92 331c-6-13 1-28 15-32l25-7c9-3 16-11 18-20l6-29c2-11-2-22-11-29l-30-24c-13-10-12-30 2-39l24-15c8-5 12-14 11-23l-3-26c-1-6 1-12 5-16l-36 3Z"
      />
      {/* Kashmir cap + north-east arm */}
      <path
        fill="url(#im-fill)"
        opacity="0.94"
        d="M150 62c-9-10-6-26 7-31l30-13c9-4 19-2 26 5l19 19c8 8 20 10 31 6l52-19c14-5 28 6 27 21l-2 23c-1 12-11 21-23 21l-49 1c-9 0-18 4-24 11l-13 15c-9 11-26 11-35 0l-46-59Z"
      />
      <path
        fill="url(#im-fill)"
        opacity="0.9"
        d="M336 96l52-6c14-2 26 10 24 24l-4 27c-2 12-13 21-25 20l-19-2c-9-1-18 4-22 12l-16 32c-7 14-27 14-34 0l-14-28c-4-8-3-18 2-25l24-33c8-11 20-19 32-21Z"
      />
    </svg>
  );
}
