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
    <section className="py-16 md:py-20">
      <Container>
        <p className="mb-12 text-xs uppercase tracking-widest text-stone">Ablauf</p>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {ablauf.map((phase) => (
            <li key={phase.nummer}>
              <h3 className="mb-3 text-xl font-medium text-ink">{phase.titel}</h3>
              <p className="leading-relaxed text-graphite">{phase.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
