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
    <section className="bg-mist py-16 md:py-20">
      <Container>
        {/* Ohne Überschrift "So arbeiten wir": Das Label "Ablauf" sagt es
            bereits, und eine grosse Zeile über kleinem Text war genau das,
            was die Seite überladen wirken liess. Ohne Nummerierung, weil die
            Reihenfolge der Spalten sie ohnehin zeigt. */}
        <p className="mb-10 text-xs uppercase tracking-widest text-stone">Ablauf</p>

        <ol className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ablauf.map((phase) => (
            <li key={phase.nummer}>
              <h3 className="mb-3 text-h3 text-ink">{phase.titel}</h3>
              <p className="max-w-lesbar text-karte leading-relaxed text-graphite">{phase.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
