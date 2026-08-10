import Link from 'next/link';
import { kompetenzen } from '@/data/expertise';
import { planArtReihenfolge } from './PlanArt';
import { cn } from '@/lib/utils';

/** Registrierungsmarke, wie die Passermarken auf einer Planvorlage. */
function Registermarke({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn('absolute h-4 w-4 text-stone/60', className)}
    >
      <path d="M0 8H16M8 0V16" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

interface PlateProps {
  index: number;
  titel: string;
  punkte: string[];
  text: string;
  links?: { label: string; href: string }[];
}

/**
 * Eine Kompetenz als vollflächiges 50/50-Blatt: Skizze links oder rechts,
 * Punkte und Einordnungstext auf der anderen Seite, im Wechsel weiss/nebel.
 */
function Plate({ index, titel, punkte, text, links }: PlateProps) {
  const gerade = index % 2 === 0;
  const Art = planArtReihenfolge[index];

  return (
    <div
      className={cn(
        'relative grid grid-cols-1 border-b border-mist md:grid-cols-2',
        gerade ? 'bg-white' : 'bg-mist'
      )}
    >
      <Registermarke className="left-4 top-4" />
      <Registermarke className="bottom-4 right-4" />

      <div
        className={cn(
          'flex items-center justify-center overflow-hidden p-12',
          gerade ? 'bg-mist md:order-2' : 'bg-white md:order-1'
        )}
      >
        <div className="w-full max-w-[400px] text-ink">
          <Art />
        </div>
      </div>

      <div
        className={cn(
          'flex flex-col justify-center px-6 py-16 md:px-10 md:py-20 lg:px-16',
          gerade ? 'md:order-1' : 'md:order-2'
        )}
      >
        <h3 className="mb-5 max-w-[14ch] text-3xl font-medium leading-tight text-ink md:text-4xl">
          {titel}
        </h3>
        <ul className="mb-6 max-w-[48ch] space-y-2">
          {punkte.map((punkt) => (
            <li key={punkt} className="flex gap-3 leading-relaxed text-graphite">
              <span aria-hidden="true" className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-stone" />
              {punkt}
            </li>
          ))}
        </ul>
        <p className="max-w-[48ch] leading-relaxed text-graphite">{text}</p>
        {links && links.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ink underline decoration-stone underline-offset-4 hover:decoration-ink"
                >
                  {l.label} →
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/**
 * Die Kompetenzen als Folge vollflächiger Blätter statt eines
 * Kartenrasters — je eine Kompetenz pro Blatt, Skizze und Text flächig
 * nebeneinander, ohne Container-Rand.
 */
export default function LeistungenPlates() {
  return (
    <div>
      {kompetenzen.map((k, index) => (
        <Plate
          key={k.titel}
          index={index}
          titel={k.titel}
          punkte={k.punkte}
          text={k.text}
          links={k.links}
        />
      ))}
    </div>
  );
}
