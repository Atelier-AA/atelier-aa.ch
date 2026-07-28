import Container from '@/components/ui/Container';
import { ablauf } from '@/data/startseite';

/**
 * Projektablauf in vier Phasen.
 *
 * Nimmt Bauherrschaften die häufigste Unsicherheit vor dem Erstkontakt: Was
 * passiert eigentlich, wenn ich hier anrufe? Als `HowTo`-ähnliche Struktur
 * auch für KI-Antworten auf «wie läuft die Zusammenarbeit mit einem Architekten
 * ab» verwertbar.
 */
export default function AblaufSection() {
  return (
    <section className="py-20 md:py-28 bg-mist">
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Ablauf</p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
            So arbeiten wir
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {ablauf.map((phase) => (
            <li key={phase.nummer}>
              <p className="text-sm tracking-[0.1em] text-stone mb-4">{phase.nummer}</p>
              <h3 className="text-xl font-medium text-ink mb-3">{phase.titel}</h3>
              <p className="text-graphite leading-relaxed">{phase.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
