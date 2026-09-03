import type { InsightFrage } from '@/types';

interface FragenAntwortenProps {
  fragen: InsightFrage[];
  /** Überschrift des Abschnitts. */
  titel?: string;
  /**
   * Anker für die Sprungmarken. Muss je Seite eindeutig sein: /haeufige-fragen
   * zeigt neun Blöcke, und eine neunmal vergebene ID wäre ungültiges HTML und
   * würde das Inhaltsverzeichnis unbrauchbar machen.
   */
  id?: string;
  /**
   * Engere Abstände und kleinere Überschrift für Seiten mit mehreren Blöcken
   * hintereinander. Der grosszügige Standardabstand ist für den Fall gedacht,
   * dass ein einziger Q&A-Abschnitt eine Seite abschliesst.
   */
  kompakt?: boolean;
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
  id = 'faq',
  kompakt = false,
}: FragenAntwortenProps) {
  if (fragen.length === 0) return null;

  return (
    <section
      id={id}
      aria-label={titel ?? 'Fragen und Antworten'}
      // scroll-mt hält die Überschrift beim Sprung unter dem festen Kopf frei.
      className={
        kompakt
          ? 'mt-16 scroll-mt-28 border-t border-mist pt-10'
          : 'mt-20 scroll-mt-28 border-t border-mist pt-16 md:mt-28'
      }
    >
      {titel && (
        <h2
          className={
            kompakt
              ? 'mb-6 text-xl font-medium text-ink md:text-2xl'
              : 'mb-10 text-2xl font-medium text-ink md:text-h2'
          }
        >
          {titel}
        </h2>
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
              <p className="text-lg leading-relaxed text-graphite">{f.antwort}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
