import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { leistungsangebot } from '@/data/expertise';
import { getProjekt } from '@/data/projekte';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten vier
 * `featured`-Projekte in Datenreihenfolge.
 */
const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen', 'mfh-letten'];

/**
 * Kompetenzen und Referenzen in einem gemeinsamen Abschnitt statt zwei
 * getrennten Sektionen: links, was wir leisten (zweispaltig, damit die Liste
 * ihre Hälfte ausfüllt), rechts, was daraus entsteht — eine dünne
 * Trennlinie zwischen beiden bindet sie zu einer Komposition zusammen.
 * Überschrift und Referenzen-Raster stehen in derselben Grid-Zeile, damit
 * die Bilder oben mit der Überschrift abschliessen statt tiefer zu wirken;
 * die beiden "alle ansehen"-Links stehen in einer eigenen Zeile darunter,
 * auf gleicher Höhe. Das Referenzen-Raster bleibt auf `max-w-md` begrenzt,
 * damit die Bilder nicht grösser wirken als die Kompetenzen-Liste daneben.
 */
export default function KompetenzenReferenzenSection() {
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-[1fr_1px_1fr]">
          {/* Kompetenzen: Überschrift plus zweispaltige, aufklappbare Liste. */}
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="mb-3 text-xs uppercase tracking-widest text-stone">
              Kompetenzen &amp; Projekte
            </p>
            <h2 className="mb-12 text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
              Sieben <span className="font-semibold">Kompetenzen</span>, sichtbar in
              echten <span className="font-semibold">Projekten.</span>
            </h2>
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {leistungsangebot.map((l) => (
                <details key={l.titel} className="group border-b border-mist py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-medium text-ink transition-colors group-hover:text-graphite">
                      {l.titel}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="relative block h-3 w-3 shrink-0 text-stone"
                    >
                      <span className="absolute top-1/2 left-0 block h-px w-3 bg-current" />
                      <span className="absolute top-1/2 left-0 block h-px w-3 rotate-90 bg-current transition-transform duration-300 ease-out group-open:rotate-0" />
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm text-graphite leading-relaxed">{l.text}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <Button href="/leistungen" variant="text">
              alle Leistungen ansehen
            </Button>
          </div>

          {/* Trennlinie: bindet Kompetenzen und Referenzen visuell zu einer
              Komposition — nur ab Desktop-Breite, wo beide Seiten
              nebeneinander stehen. */}
          <div
            className="hidden bg-mist lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:block"
            aria-hidden="true"
          />

          {/* Referenzen: als kleineres 2×2-Raster statt vier grossen Karten
              in einer vollen Reihe, damit sie neben der Kompetenzen-Liste
              nicht dominieren. */}
          <div className="lg:col-start-3 lg:row-start-1">
            <div className="grid max-w-md grid-cols-2 gap-4 sm:gap-6">
              {projekte.map((p, idx) => (
                <ProjektCard key={p.slug} projekt={p} priority={idx < 2} />
              ))}
            </div>
          </div>

          <div className="lg:col-start-3 lg:row-start-2">
            <Button href="/projekte" variant="text">
              alle Projekte ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
