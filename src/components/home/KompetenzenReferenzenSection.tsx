import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { kompetenzen } from '@/data/expertise';
import { getProjekt } from '@/data/projekte';
import { ortMitKanton } from '@/lib/utils';
import type { Projekt } from '@/types';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten vier
 * `featured`-Projekte in Datenreihenfolge.
 */
const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen', 'mfh-letten'];

/**
 * Referenzbild in fester Höhe statt der quadratischen Aspect-Ratio von
 * `ProjektCard` — nur hier, damit das Raster bis zum rechten Rand der
 * Spalte (bündig mit Kontakt/Burger im Header) reichen kann, ohne dass die
 * Bilder dadurch höher werden.
 */
function ReferenzBild({ projekt, priority }: { projekt: Projekt; priority: boolean }) {
  return (
    <Link
      href={`/referenzen/${projekt.slug}`}
      className="group block min-w-0"
      aria-label={`Zum Projekt ${projekt.title} in ${ortMitKanton(projekt)}`}
    >
      <div className="relative h-60 overflow-hidden bg-mist">
        <Image
          src={projekt.thumbnail}
          alt={`${projekt.title}, ${ortMitKanton(projekt)}`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 1100px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="truncate text-lg font-medium leading-tight text-white">
            {projekt.title}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/70">
            {ortMitKanton(projekt)}
          </p>
        </div>
      </div>
    </Link>
  );
}

/**
 * Kompetenzen und Referenzen in einem gemeinsamen Abschnitt statt zwei
 * getrennten Sektionen: links, was wir leisten (zweispaltig, damit die Liste
 * ihre Hälfte ausfüllt), rechts, was daraus entsteht — eine dünne
 * Trennlinie zwischen beiden bindet sie zu einer Komposition zusammen.
 * Überschrift und Referenzen-Raster stehen in derselben Grid-Zeile, damit
 * die Bilder oben mit der Überschrift abschliessen statt tiefer zu wirken;
 * die beiden "alle ansehen"-Links stehen in einer eigenen Zeile darunter,
 * auf gleicher Höhe. Das Referenzen-Raster füllt die volle Spaltenbreite
 * (bündig mit dem rechten Rand des Headers), die Bildhöhe bleibt dabei fest.
 */
export default function KompetenzenReferenzenSection() {
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container maxWidth="max-w-[1900px]">
        <p className="mb-3 text-xs uppercase tracking-widest text-stone">
          Kompetenzen &amp; Projekte
        </p>

        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-[1fr_1px_1fr]">
          {/* Kompetenzen: Überschrift plus zweispaltige, aufklappbare Liste. */}
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="mb-12 text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
              Fünf <span className="font-semibold">Kompetenzen</span>, sichtbar in
              echten <span className="font-semibold">Projekten.</span>
            </h2>
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {kompetenzen.map((k) => (
                <details key={k.titel} className="group border-b border-mist py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-medium text-ink transition-colors group-hover:text-graphite">
                      {k.titel}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="relative block h-3 w-3 shrink-0 text-stone"
                    >
                      <span className="absolute top-1/2 left-0 block h-px w-3 bg-current" />
                      <span className="absolute top-1/2 left-0 block h-px w-3 rotate-90 bg-current transition-transform duration-300 ease-out group-open:rotate-0" />
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm text-graphite leading-relaxed">{k.text}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <Button href="/leistungen" variant="text">
              alle Kompetenzen ansehen
            </Button>
          </div>

          {/* Trennlinie: bindet Kompetenzen und Referenzen visuell zu einer
              Komposition — nur ab Desktop-Breite, wo beide Seiten
              nebeneinander stehen. */}
          <div
            className="hidden bg-mist lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:block"
            aria-hidden="true"
          />

          {/* Referenzen: 2×2-Raster über die volle Spaltenbreite, mit fester
              Bildhöhe statt der quadratischen Karten sonst auf der Seite. */}
          <div className="lg:col-start-3 lg:row-start-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {projekte.map((p, idx) => (
                <ReferenzBild key={p.slug} projekt={p} priority={idx < 2} />
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
