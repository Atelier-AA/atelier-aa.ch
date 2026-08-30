import Link from 'next/link';
import Container from '@/components/ui/Container';

/**
 * Zielgruppen-Weiche zwischen Positionierung und Projekten.
 *
 * Die beiden Hauptzielgruppen kommen mit völlig verschiedenen Fragen: „Können
 * Sie mein Haus planen?" und „Was ist auf meinem Grundstück möglich?". Bisher
 * musste beide derselbe Einleitungstext bedienen. Hier trennen sich die Wege
 * einmal sauber, bevor die Projekte kommen.
 *
 * Bewusst nüchtern gesetzt — zwei Spalten mit Aufforderung darunter kippen
 * schnell ins Werbliche. Darum keine Kästen, keine Knöpfe, keine Symbole:
 * eine Haarlinie, eine Frage, drei Sätze, ein Textlink. Es soll wie eine
 * Wegweisung aussehen, nicht wie ein Verkaufstrichter.
 */
const WEGE = [
  {
    titel: 'Sie möchten bauen',
    text: 'Neu bauen, umbauen, sanieren — oder zuerst prüfen, was auf Ihrem Grundstück überhaupt möglich ist? Wir klären die Ausgangslage, entwickeln Varianten und begleiten Ihr Projekt bis zur Realisierung.',
    href: '/leistungen',
    label: 'Leistungen ansehen',
  },
  {
    titel: 'Sie besitzen ein Grundstück',
    text: 'Sie halten ein Grundstück oder eine Liegenschaft und möchten deren Potenzial kennen? Wir prüfen Ausnutzung, Baurecht, Volumen und Wirtschaftlichkeit und zeigen die möglichen nächsten Schritte.',
    // Führt auf die Machbarkeitsstudie, nicht auf die Projektentwicklung:
    // Sie ist das wichtigste Einstiegsprodukt und muss von der Startseite
    // aus erreichbar bleiben, nachdem der grosse Machbarkeits-Block hier
    // durch diese beiden Spalten ersetzt wurde.
    href: '/leistungen/machbarkeitsstudie',
    label: 'Studien ansehen',
  },
];

export default function ZielgruppenSection() {
  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {WEGE.map((weg) => (
            <div key={weg.href} className="border-t border-ink pt-6">
              <h2 className="text-h3 text-ink">{weg.titel}</h2>
              <p className="mt-4 max-w-lesbar text-karte leading-relaxed text-graphite">
                {weg.text}
              </p>
              <Link
                href={weg.href}
                className="mt-5 inline-block rounded-sm text-karte text-ink underline decoration-stone underline-offset-4 transition-colors hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                {weg.label} →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
