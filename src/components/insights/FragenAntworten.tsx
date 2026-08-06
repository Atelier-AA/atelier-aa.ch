import type { InsightFrage } from '@/types';

interface FragenAntwortenProps {
  fragen: InsightFrage[];
  /** Überschrift des Abschnitts. */
  titel?: string;
}

/**
 * Aufklappbarer Q&A-Abschnitt.
 *
 * Umsetzung mit native `<details>`/`<summary>` statt einer JavaScript-Lösung —
 * das ist bewusst gewählt, weil es für maschinelles Auslesen entscheidend ist:
 *
 * - Der Antworttext steht immer im HTML, auch im geschlossenen Zustand. Ein
 *   Akkordeon, das Inhalte erst per Klick einfügt, liefert Crawlern und
 *   KI-Systemen (Google Gemini, AI Overviews) leere Container.
 * - `<details>` funktioniert ohne JavaScript, also auch beim ersten Rendern
 *   und in Textextraktoren.
 * - Die Frage ist als `<h3>` im `<summary>` ausgezeichnet, die Antwort folgt
 *   als Absatz — eine flache, eindeutige Frage-Antwort-Struktur.
 *
 * Ergänzend liefert die Detailseite FAQPage-JSON-LD mit denselben Paaren.
 */
export default function FragenAntworten({
  fragen,
  titel,
}: FragenAntwortenProps) {
  if (fragen.length === 0) return null;

  return (
    <section
      id="faq"
      aria-label={titel ?? 'Fragen und Antworten'}
      className="mt-20 md:mt-28 border-t border-mist pt-16"
    >
      {titel && (
        <h2 className="text-2xl md:text-3xl font-medium text-ink mb-10">{titel}</h2>
      )}

      <div className="border-t border-mist">
        {fragen.map((f) => (
          <details key={f.frage} className="group border-b border-mist">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
              <h3 className="text-lg font-medium leading-snug text-ink transition-colors group-hover:text-graphite">
                {f.frage}
              </h3>
              {/* Plus-Zeichen, das beim Öffnen zum Minus wird: die vertikale
                  Linie dreht auf 90 Grad und verschwindet dadurch optisch. */}
              <span
                aria-hidden="true"
                className="relative mt-2 block h-3 w-3 shrink-0 text-stone"
              >
                <span className="absolute top-1/2 left-0 block h-px w-3 bg-current" />
                <span className="absolute top-1/2 left-0 block h-px w-3 rotate-90 bg-current transition-transform duration-300 ease-out group-open:rotate-0" />
              </span>
            </summary>
            <div className="pb-8 pr-10">
              <p className="text-lg text-graphite leading-relaxed">{f.antwort}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
