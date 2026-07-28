interface PlanArtProps {
  /** Ob die Linien "gezeichnet" sind — steuert `stroke-dashoffset`. */
  revealed: boolean;
}

const KURVE =
  'transition-[stroke-dashoffset] duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]';

/** Gemeinsame Eigenschaften jeder Linie, die sich beim Einblenden "zeichnet". */
function zeichnung(laenge: number, revealed: boolean) {
  return {
    className: KURVE,
    style: { strokeDasharray: laenge, strokeDashoffset: revealed ? 0 : laenge },
  };
}

/** 01 Beratung — Lageplan mit Nordpfeil, wie eine Parzellenbeurteilung. */
export function BeratungArt({ revealed }: PlanArtProps) {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="40" y="40" width="220" height="220" {...zeichnung(900, revealed)} />
      <rect
        x="70"
        y="70"
        width="160"
        height="160"
        strokeDasharray="6 6"
        opacity={revealed ? 1 : 0}
        className="transition-opacity duration-[500ms] delay-150"
      />
      <circle cx="150" cy="150" r="26" {...zeichnung(300, revealed)} />
      <path d="M150 132 L150 124 M158 128 L150 124 L142 128" {...zeichnung(60, revealed)} />
      <text x="150" y="180" textAnchor="middle" fontSize="11" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">N</text>
      <line x1="40" y1="270" x2="260" y2="270" {...zeichnung(220, revealed)} />
      <line x1="40" y1="266" x2="40" y2="274" />
      <line x1="260" y1="266" x2="260" y2="274" />
      <text x="150" y="288" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">PARZELLE</text>
    </svg>
  );
}

/** 02 Projektentwicklung — Massstudie, gestufte Volumen wie im Kostenrahmen. */
export function ProjektentwicklungArt({ revealed }: PlanArtProps) {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <line x1="40" y1="240" x2="260" y2="240" {...zeichnung(220, revealed)} />
      <rect x="55" y="190" width="40" height="50" {...zeichnung(180, revealed)} />
      <rect x="110" y="140" width="40" height="100" {...zeichnung(260, revealed)} />
      <rect x="165" y="90" width="40" height="150" {...zeichnung(340, revealed)} />
      <rect x="220" y="160" width="40" height="80" {...zeichnung(220, revealed)} />
      <path d="M205 90 L215 90 M210 85 L210 95" {...zeichnung(40, revealed)} />
      <text x="222" y="80" fontSize="9" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">+12.4M</text>
    </svg>
  );
}

/** 03 Planung und Entwurf — Grundriss mit Türanschlägen und Treppe. */
export function PlanungArt({ revealed }: PlanArtProps) {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="35" y="45" width="230" height="210" {...zeichnung(900, revealed)} />
      <line x1="150" y1="45" x2="150" y2="150" {...zeichnung(210, revealed)} />
      <line x1="35" y1="150" x2="265" y2="150" {...zeichnung(230, revealed)} />
      <line x1="150" y1="150" x2="150" y2="255" {...zeichnung(115, revealed)} />
      <path d="M115 150 A 35 35 0 0 1 150 115" {...zeichnung(35, revealed)} />
      <path d="M150 185 A 35 35 0 0 1 185 150" {...zeichnung(35, revealed)} />
      <line x1="200" y1="230" x2="200" y2="180" {...zeichnung(60, revealed)} />
      <line x1="200" y1="180" x2="230" y2="180" />
      <line x1="204" y1="222" x2="230" y2="222" />
      <line x1="208" y1="214" x2="230" y2="214" />
      <line x1="212" y1="206" x2="230" y2="206" />
    </svg>
  );
}

/** 04 Baugesuch und Bewilligung — Fassade mit Fenstergitter und Bewilligungsstempel. */
export function BaugesuchArt({ revealed }: PlanArtProps) {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M50 250 L50 110 L150 55 L250 110 L250 250 Z" {...zeichnung(520, revealed)} />
      <line x1="50" y1="250" x2="250" y2="250" {...zeichnung(200, revealed)} />
      <rect x="75" y="150" width="30" height="30" {...zeichnung(60, revealed)} />
      <rect x="135" y="150" width="30" height="30" {...zeichnung(60, revealed)} />
      <rect x="195" y="150" width="30" height="30" {...zeichnung(60, revealed)} />
      <rect x="130" y="200" width="40" height="50" {...zeichnung(70, revealed)} />
      <circle cx="215" cy="90" r="34" strokeDasharray="4 4" {...zeichnung(260, revealed)} />
      <path d="M203 90 L212 99 L228 79" strokeWidth="2" />
    </svg>
  );
}

/** 05 Bauleitung und Kostenkontrolle — Baustellenschnitt mit Gerüst und Kontrollhaken. */
export function BauleitungArt({ revealed }: PlanArtProps) {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <line x1="40" y1="60" x2="260" y2="60" {...zeichnung(220, revealed)} />
      <line x1="40" y1="120" x2="260" y2="120" {...zeichnung(220, revealed)} />
      <line x1="40" y1="180" x2="260" y2="180" {...zeichnung(220, revealed)} />
      <line x1="40" y1="240" x2="260" y2="240" {...zeichnung(220, revealed)} />
      <line x1="60" y1="60" x2="60" y2="240" {...zeichnung(180, revealed)} />
      <g strokeDasharray="3 5" opacity={revealed ? 1 : 0} className="transition-opacity duration-[500ms] delay-200">
        <line x1="80" y1="60" x2="100" y2="120" />
        <line x1="100" y1="60" x2="120" y2="120" />
        <line x1="120" y1="60" x2="140" y2="120" />
        <line x1="80" y1="120" x2="100" y2="180" />
        <line x1="100" y1="120" x2="120" y2="180" />
        <line x1="80" y1="180" x2="100" y2="240" />
      </g>
      <path d="M180 108 L188 116 L204 96" strokeWidth="2" />
      <path d="M180 168 L188 176 L204 156" strokeWidth="2" />
    </svg>
  );
}

/** 06 Generalplanung — Organigramm, ein Knoten koordiniert alle Fachplaner. */
export function GeneralplanungArt({ revealed }: PlanArtProps) {
  const knoten: [number, number][] = [
    [150, 60],
    [230, 95],
    [245, 150],
    [230, 205],
    [150, 240],
    [70, 205],
    [55, 150],
    [70, 95],
  ];
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="150" cy="150" r="18" {...zeichnung(110, revealed)} />
      {knoten.map(([x, y]) => (
        <line
          key={`${x}-${y}`}
          x1="150"
          y1="150"
          x2={x}
          y2={y}
          {...zeichnung(90, revealed)}
        />
      ))}
      {knoten.map(([x, y]) => (
        <circle key={`k-${x}-${y}`} cx={x} cy={y} r="9" />
      ))}
    </svg>
  );
}

/** 07 Wettbewerbe und Studien — zwei axonometrische Volumenvarianten im Vergleich. */
export function WettbewerbeArt({ revealed }: PlanArtProps) {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M60 210 L60 130 L130 95 L130 175 Z" {...zeichnung(400, revealed)} />
      <path d="M60 130 L130 95 M60 210 L130 175" {...zeichnung(220, revealed)} />
      <path
        d="M170 230 L170 120 L240 80 L240 190 Z"
        strokeDasharray="5 5"
        opacity={revealed ? 1 : 0}
        className="transition-opacity duration-[500ms] delay-150"
      />
      <path
        d="M170 120 L240 80 M170 230 L240 190"
        strokeDasharray="5 5"
        opacity={revealed ? 1 : 0}
        className="transition-opacity duration-[500ms] delay-150"
      />
      <text x="80" y="255" fontSize="9" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">VARIANTE A</text>
      <text x="190" y="255" fontSize="9" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">VARIANTE B</text>
    </svg>
  );
}

/** Reihenfolge exakt wie `leistungsangebot` in `data/expertise.ts`. */
export const planArtReihenfolge = [
  BeratungArt,
  ProjektentwicklungArt,
  PlanungArt,
  BaugesuchArt,
  BauleitungArt,
  GeneralplanungArt,
  WettbewerbeArt,
];
