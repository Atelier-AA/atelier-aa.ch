import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { insights } from '@/data/insights';
import { formatDatum } from '@/lib/utils';

/**
 * Vier Fachbeiträge auf der Startseite, im selben quadratischen Bildstil wie
 * die Referenzprojekte (inkl. Zoom beim Hover). Der Titel blendet erst beim
 * Hover über dem Bild ein (dunkler Verlauf, weisser Text); fest sichtbar
 * bleiben nur das Datum und ein kurzer Textauszug darunter.
 */
export default function InsightsSection() {
  const neueste = insights.slice(0, 4);

  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="mb-10 max-w-2xl md:mb-16">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Insights</p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
            Fachbeiträge aus unserer Arbeit
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {neueste.map((i, idx) => (
            <Link
              key={i.slug}
              href={`/insights/${i.slug}`}
              className="group block min-w-0"
              aria-label={`Beitrag lesen: ${i.titel}`}
            >
              <div className="relative aspect-square overflow-hidden bg-mist">
                <Image
                  src={i.bild}
                  alt=""
                  fill
                  priority={idx < 2}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="truncate text-lg font-medium leading-tight text-white">
                    {i.titel}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.1em] text-stone">
                {formatDatum(i.datum)}
              </p>
              <p className="mt-2 text-graphite leading-relaxed">{i.lead}</p>
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
