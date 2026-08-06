import Container from '@/components/ui/Container';
import { warum } from '@/data/expertise';

/**
 * Fünf konkrete, faktenbasierte Gründe für die Zusammenarbeit — im selben
 * numerierten Raster wie `AblaufSection` auf der Startseite, damit das
 * Muster über die Seite hinweg wiedererkennbar bleibt.
 */
export default function WarumSection() {
  return (
    <section className="py-20 md:py-28 bg-mist border-t border-mist">
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">
            Warum Atelier AA
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
            Fünf konkrete Gründe für die Zusammenarbeit
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {warum.map((punkt) => (
            <li key={punkt.nummer}>
              <p className="text-sm tracking-[0.1em] text-stone mb-4">{punkt.nummer}</p>
              <h3 className="text-xl font-medium text-ink mb-3">{punkt.titel}</h3>
              <p className="text-graphite leading-relaxed">{punkt.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
