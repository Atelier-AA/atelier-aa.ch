import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { kompetenzen } from '@/data/expertise';
import { getProjekt } from '@/data/projekte';
import { cn, ortMitKanton } from '@/lib/utils';
import type { Projekt } from '@/types';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten vier
 * `featured`-Projekte in Datenreihenfolge.
 */
const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen', 'mfh-letten'];

/**
 * Referenzbild in fester Höhe statt der quadratischen Aspect-Ratio von
 * `ProjektCard`, nur hier, damit das Raster bis zum rechten Rand der Spalte
 * (bündig mit Kontakt/Burger im Header) reichen kann, ohne dass die Bilder
 * dadurch höher werden.
 */
function ReferenzBild({ projekt, priority }: { projekt: Projekt; priority: boolean }) {
  return (
    <Link
      href={`/referenzen/${projekt.slug}`}
      className="group block h-full min-w-0"
      aria-label={`Zum Projekt ${projekt.title} in ${ortMitKanton(projekt)}`}
    >
      <div className="relative h-44 overflow-hidden bg-mist sm:h-48 lg:h-full">
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
 * getrennten Sektionen. Die Überschrift steht über der ganzen Breite, über
 * Liste und Bildern gemeinsam, statt nur über der Liste. Darunter: links,
 * was wir leisten (zweispaltig, Text immer sichtbar statt aufklappbar),
 * rechts, was daraus entsteht, eine dünne Trennlinie bindet beide Seiten
 * zu einer Komposition zusammen.
 * Beide Spalten sind gleich hoch (Grid-Standard `stretch`) und enden unten
 * auf derselben Höhe mit ihrem "alle ansehen"-Link, damit Liste und
 * Bilder oben wie unten bündig zueinander stehen.
 */
export default function KompetenzenReferenzenSection() {
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <p className="mb-3 text-xs uppercase tracking-widest text-stone">
          Leistungen &amp; Projekte
        </p>
        {/* Fester Zeilenumbruch statt einer Breitenbegrenzung, die je nach
            Fensterbreite mal reicht, mal nicht — der Titel reichte sonst
            optisch über den linken Rand der Projektbilder hinaus. */}
        <h2 className="mb-12 text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
          <span className="font-semibold">Leistungen,</span>
          <br />
          sichtbar in echten <span className="font-semibold">Projekten.</span>
        </h2>

        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-[1fr_1px_1fr]">
          {/* Kompetenzen: zweispaltige Liste, Text immer sichtbar. Ab lg
              löst sich dieser Wrapper auf (display: contents), Liste und
              Button werden zu eigenen Zellen im äusseren Grid — die
              gemeinsame Zeile bekommt dadurch automatisch genau die Höhe,
              die der Text braucht, und die Referenzen daneben strecken sich
              (lg:h-full an den Bildern) exakt auf diese Höhe, statt eine
              geschätzte Pixelhöhe zu tragen. */}
          <div className="flex h-full flex-col justify-between lg:contents">
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:col-start-1 lg:row-start-1">
              {/* Bei 5 Einträgen bliebe in der letzten Zeile sonst eine
                  Spalte leer — der letzte Eintrag füllt die Zeile deshalb
                  ganz aus. */}
              {kompetenzen.map((k, idx) => (
                <div
                  key={k.titel}
                  className={cn(
                    'border-b border-mist py-4',
                    idx === kompetenzen.length - 1 && 'sm:col-span-2'
                  )}
                >
                  <h3 className="text-base font-medium text-ink">{k.titel}</h3>
                  <p className="mt-3 pr-8 text-sm text-graphite leading-relaxed">{k.text}</p>
                </div>
              ))}
            </div>
            <div className="pt-8 lg:col-start-1 lg:row-start-2">
              <Button href="/leistungen" variant="text">
                alle Leistungen ansehen
              </Button>
            </div>
          </div>

          {/* Trennlinie: bindet Kompetenzen und Referenzen visuell zu einer
              Komposition, nur ab Desktop-Breite, wo beide Seiten
              nebeneinander stehen. */}
          <div
            className="hidden bg-mist lg:col-start-2 lg:row-span-2 lg:block"
            aria-hidden="true"
          />

          {/* Referenzen: 2×2-Raster, mit fester Bildhöhe auf Mobile/Tablet,
              ab lg stretcht sich das Raster auf die Höhe der Zeile. */}
          <div className="flex h-full flex-col justify-between lg:contents">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:col-start-3 lg:row-start-1 lg:h-full">
              {projekte.map((p, idx) => (
                <ReferenzBild key={p.slug} projekt={p} priority={idx < 2} />
              ))}
            </div>
            <div className="pt-8 lg:col-start-3 lg:row-start-2">
              <Button href="/projekte" variant="text">
                alle Projekte ansehen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
