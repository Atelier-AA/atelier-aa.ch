import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { insights } from '@/data/insights';
import { formatDatum } from '@/lib/utils';

/**
 * Vier Fachbeiträge auf der Startseite, im selben hochformatigen Bildstil
 * (3:4) wie die Übersicht auf /insights (inkl. Zoom beim Hover). Der Titel
 * blendet erst beim Hover über dem Bild ein (dunkler Verlauf, weisser Text,
 * bis zu zwei Zeilen); fest sichtbar bleibt nur das Datum darunter.
 */
export default function InsightsSection() {
  const neueste = insights.slice(0, 4);

  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <p className="mb-10 text-xs uppercase tracking-widest text-stone md:mb-16">Journal</p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {neueste.map((i, idx) => (
            <Link
              key={i.slug}
              href={`/insights/${i.slug}`}
              className="group block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              aria-label={`Beitrag lesen: ${i.titel}, ${formatDatum(i.datum)}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                <Image
                  src={i.bild}
                  alt={`${i.titel}, Atelier AA Architekten`}
                  fill
                  priority={idx < 2}
                  className="object-cover grayscale transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.05] group-hover:grayscale-0 group-focus-visible:scale-[1.05] group-focus-visible:grayscale-0"
                  sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
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
