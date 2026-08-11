import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Arrow from '@/components/ui/Arrow';
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
 * Ein Bild im Filmstreifen: Nummer, Titel und Ort stehen fest sichtbar
 * darüber statt als Hover-Einblendung — Layoutvorgabe für diesen Abschnitt.
 * Die Bilder stossen ohne Abstand aneinander, nur eine Haarlinie trennt sie.
 */
function FilmstreifenBild({
  projekt,
  index,
  priority,
}: {
  projekt: Projekt;
  index: number;
  priority: boolean;
}) {
  return (
    <Link
      href={`/referenzen/${projekt.slug}`}
      className="group flex min-w-0 flex-col"
      aria-label={`Zum Projekt ${projekt.title} in ${ortMitKanton(projekt)}`}
    >
      <div className="px-4 pt-5 pb-4 sm:px-5">
        <p className="text-xs font-medium tabular-nums text-stone">
          {String(index + 1).padStart(2, '0')}
        </p>
        <p className="mt-2 text-xs font-medium uppercase leading-snug tracking-[0.06em] text-ink transition-colors group-hover:text-graphite">
          {projekt.title}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.06em] text-stone">
          {ortMitKanton(projekt)}
        </p>
      </div>
      <div className="relative aspect-[3/4] min-h-[220px] overflow-hidden bg-mist">
        <Image
          src={projekt.thumbnail}
          alt=""
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 50vw, (max-width: 1100px) 25vw, 20vw"
        />
      </div>
    </Link>
  );
}

/** Zeile in der nummerierten Kompetenzen-Liste: Nummer, Titel, Linie, Pfeil. */
function KompetenzZeile({ titel, nummer }: { titel: string; nummer: number }) {
  return (
    <Link
      href="/leistungen"
      className="group flex items-center gap-4 border-b border-mist py-4"
    >
      <span className="text-sm font-medium tabular-nums text-stone">
        {String(nummer).padStart(2, '0')}
      </span>
      <span className="text-base font-medium text-ink transition-colors group-hover:text-graphite">
        {titel}
      </span>
      <span aria-hidden="true" className="mx-2 h-px flex-1 bg-mist" />
      <Arrow
        className="h-[12px] w-[34px] shrink-0 text-stone transition-all duration-300 ease-out group-hover:translate-x-[0.2em] group-hover:text-ink"
      />
    </Link>
  );
}

/**
 * Kompetenzen und Referenzen in einem gemeinsamen Abschnitt statt zwei
 * getrennten Sektionen: links, was wir leisten, als nummerierte Liste;
 * rechts, was daraus entsteht, als Bild-Filmstreifen — eine dünne
 * Trennlinie zwischen beiden bindet sie zu einer Komposition zusammen.
 * Jede Spalte schliesst mit dem gewohnten "alle ansehen"-Pfeil-Textlink ab.
 */
export default function KompetenzenReferenzenSection() {
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <p className="mb-3 text-xs uppercase tracking-widest text-stone">
          Kompetenzen &amp; Projekte
        </p>

        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-[1fr_1px_1fr]">
          {/* Kompetenzen: Überschrift plus nummerierte Liste. */}
          <div>
            <h2 className="mb-10 text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
              Fünf <span className="font-semibold">Kompetenzen</span>, sichtbar in
              echten <span className="font-semibold">Projekten.</span>
            </h2>
            <div>
              {kompetenzen.map((k, idx) => (
                <KompetenzZeile key={k.titel} titel={k.titel} nummer={idx + 1} />
              ))}
            </div>
            <Button href="/leistungen" variant="text" className="mt-4">
              alle Kompetenzen ansehen
            </Button>
          </div>

          {/* Trennlinie: bindet Kompetenzen und Referenzen visuell zu einer
              Komposition — nur ab Desktop-Breite, wo beide Seiten
              nebeneinander stehen. */}
          <div className="hidden bg-mist lg:block" aria-hidden="true" />

          {/* Referenzen: Filmstreifen aus vier Bildern, ohne Zwischenraum,
              über die volle Spaltenbreite. */}
          <div>
            <div className="grid grid-cols-2 divide-x divide-y divide-mist border border-mist sm:grid-cols-4 sm:divide-y-0">
              {projekte.map((p, idx) => (
                <FilmstreifenBild key={p.slug} projekt={p} index={idx} priority={idx < 2} />
              ))}
            </div>
            <Button href="/projekte" variant="text" className="mt-4">
              alle Projekte ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
