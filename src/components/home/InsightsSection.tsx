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
      <Container maxWidth="max-w-[1600px]">
        <div className="mb-10 max-w-2xl md:mb-16">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Insights</p>
          <h2 className="text-3xl font-normal leading-tight text-ink md:text-4xl">
            <span className="font-semibold">Fachbeiträge</span> aus unserer{' '}
            <span className="font-semibold">Arbeit</span>
          </h2>
          <p className="mt-4 text-lg text-graphite leading-relaxed">
            Verdichtung, Bewilligungsverfahren, Umbau im Alter, KI im Entwurf — wir
            schreiben über die Fragen, die uns Bauherrschaften stellen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {neueste.map((i, idx) => (
            <Link
              key={i.slug}
              href={`/insights/${i.slug}`}
              className="group block min-w-0"
              aria-label={`Beitrag lesen: ${i.titel}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                <Image
                  src={i.bild}
                  alt={i.titel}
                  fill
                  priority={idx < 2}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
