const common = {
  viewBox: "0 0 120 80",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const WASH = "rgba(255, 255, 255, 0.35)";

const draw = { className: "draw", pathLength: 1 };

function Gaming() {
  return (
    <svg {...common}>
      <path
        {...draw}
        d="M34 28h52a18 18 0 0 1 17 24l-5 13a8 8 0 0 1-14 2l-7-10H43l-7 10a8 8 0 0 1-14-2l-5-13a18 18 0 0 1 17-24z"
        fill={WASH}
      />
      <path {...draw} d="M32 44h14M39 37v14" />
      <g className="pop">
        <circle cx="80" cy="40" r="3" fill="currentColor" />
        <circle cx="90" cy="48" r="3" fill="currentColor" />
      </g>
      <path {...draw} d="M56 22c0-6 8-6 8-12" strokeWidth="2" />
    </svg>
  );
}

function Trekking() {
  return (
    <svg {...common}>
      <path {...draw} d="M6 70 38 24l18 24 16-18 42 40z" fill={WASH} />
      <path {...draw} d="M31 34l7-10 7 9" />
      <path d="M24 70c8-8 18-6 24-14s10-12 16-16" strokeDasharray="4 6" strokeWidth="2.5" />
      <path {...draw} d="M72 30V12" />
      <path className="wave" d="M72 12l12 5-12 5" />
    </svg>
  );
}

function Wheel({ cx }: { cx: number }) {
  return (
    <g className="spin">
      <circle {...draw} cx={cx} cy="58" r="14" fill={WASH} />
      <path d={`M${cx} 50v16M${cx - 8} 58h16`} strokeWidth="2" />
    </g>
  );
}

function Motorcycling() {
  return (
    <svg {...common}>
      <Wheel cx={26} />
      <Wheel cx={94} />
      <path {...draw} d="M26 58 48 54" />
      <path {...draw} d="M40 40q12-10 28-6l8 6z" fill={WASH} />
      <path {...draw} d="M28 38h16" />
      <rect {...draw} x="46" y="44" width="18" height="12" rx="3" />
      <path {...draw} d="M74 34 94 58M70 25l10 2M76 27l-2 7" />
      <path {...draw} d="M64 56h14" />
    </svg>
  );
}

function Photography() {
  return (
    <svg {...common}>
      <path {...draw} d="M44 26l6-8h20l6 8" />
      <rect {...draw} x="18" y="26" width="84" height="44" rx="8" fill={WASH} />
      <g className="zoom">
        <circle {...draw} cx="60" cy="48" r="14" />
        <circle {...draw} cx="60" cy="48" r="6" />
      </g>
      <path {...draw} d="M86 36h6" />
    </svg>
  );
}

const ART = {
  gaming: Gaming,
  trekking: Trekking,
  motorcycling: Motorcycling,
  photography: Photography,
};

export type HobbyId = keyof typeof ART;

export function HobbyArt({ id }: { id: HobbyId }) {
  const Art = ART[id];
  return <Art />;
}
