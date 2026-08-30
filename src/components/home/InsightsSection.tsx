import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { insights } from '@/data/insights';
import { cn, formatDatum } from '@/lib/utils';

/**
 * Drei Fachbeiträge auf der Startseite in drei verschiedenen Grössen (siehe
 * FORMATE/SPALTEN unten), im Bildstil der Übersicht auf /insights (inkl.
 * Zoom beim Hover). Der Titel
 * blendet erst beim Hover über dem Bild ein (dunkler Verlauf, weisser Text,
 * bis zu zwei Zeilen); fest sichtbar bleibt nur das Datum darunter.
 */
export default function InsightsSection() {
  // Drei Beiträge in drei verschiedenen Grössen: Vier gleich grosse Karten
  // hatten dasselbe visuelle Gewicht wie vier Projekte — damit behauptete die
  // Seite, die Fachbeiträge seien so wichtig wie die Bauten. Drei ungleiche
  // Kacheln zeigen eine Reihe, ohne sie den Projekten gleichzustellen.
  //
  // Bewusst ein anderer Rhythmus als beim Projektraster darüber (dort links
  // hoch, rechts zwei gestapelt) — sonst wiederholt sich dasselbe Muster
  // zweimal auf derselben Seite.
  const neueste = insights.slice(0, 3);

  /** Der erste Beitrag bleibt gross und steht allein links, die beiden
   *  kleineren rechts übereinander. 5:3 ist so gewählt, dass die rechte
   *  Spalte samt Abstand genau die Höhe des linken 4:5-Bildes erreicht. */
  const FORMATE = ['aspect-[4/5]', 'aspect-[5/3]', 'aspect-[5/3]'];
  const PLATZ = ['md:row-span-2', '', ''];

  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="mb-10 max-w-2xl md:mb-16">
          {/* Ohne eigene Überschrift: "Aus dem Journal" wiederholte nur das
              Label darüber. Der Einordnungssatz trägt den Abschnitt. */}
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Journal</p>
          <p className="max-w-lesbar text-lg text-graphite leading-relaxed">
            Fachbeiträge und Fragen aus unserer täglichen Arbeit.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:grid-rows-2">
          {neueste.map((i, idx) => (
            <Link
              key={i.slug}
              href={`/insights/${i.slug}`}
              className={cn(
                'group block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
                PLATZ[idx]
              )}
              aria-label={`Beitrag lesen: ${i.titel}, ${formatDatum(i.datum)}`}
            >
              <div className={cn('relative overflow-hidden bg-mist', FORMATE[idx])}>
                <Image
                  src={i.bild}
                  alt={`${i.titel}, Atelier AA Architekten`}
                  fill
                  priority={idx < 2}
                  className="object-cover grayscale transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.05] group-hover:grayscale-0 group-focus-visible:scale-[1.05] group-focus-visible:grayscale-0"
                  sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <p className="line-clamp-2 text-lg font-medium leading-tight text-white">
                    {i.titel}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.1em] text-stone">
                {formatDatum(i.datum)}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-right md:mt-16">
          <Button href="/insights" variant="text">
            alle Beiträge lesen
          </Button>
        </div>
      </Container>
    </section>
  );
}
