import Link from 'next/link';
import Container from '@/components/ui/Container';

/**
 * Abschluss der Startseite: zwei Wege statt eines grossen Aufrufs.
 *
 * Die beiden Hauptzielgruppen kommen mit verschiedenen Fragen — "Können Sie
 * mein Haus planen?" und "Was ist auf meinem Grundstück möglich?". Hier
 * trennen sich die Wege einmal sauber.
 *
 * Gestaltung: auf dem grauen Grund, den die Seite ohnehin verwendet, mit
 * Weissraum zwischen den Spalten. Eine frühere Fassung setzte über jede
 * Spalte eine dünne Linie — das las sich wie ein unfertiges Raster statt
 * wie eine Gliederung.
 */
const WEGE = [
  {
    titel: ['Sie möchten', 'bauen'],
    text: 'Neu bauen, umbauen, sanieren — oder zuerst prüfen, was auf Ihrem Grundstück überhaupt möglich ist? Wir klären die Ausgangslage, entwickeln Varianten und begleiten Ihr Projekt bis zur Realisierung.',
    href: '/leistungen',
    label: 'Leistungen ansehen',
  },
  {
    titel: ['Sie besitzen ein', 'Grundstück'],
    text: 'Sie halten ein Grundstück oder eine Liegenschaft und möchten deren Potenzial kennen? Wir prüfen Ausnutzung, Baurecht, Volumen und Wirtschaftlichkeit und zeigen die möglichen nächsten Schritte.',
    // Führt auf die Machbarkeitsstudie, nicht auf die Projektentwicklung:
    // Sie ist das wichtigste Einstiegsprodukt und muss von der Startseite
    // aus erreichbar bleiben, seit der grosse Machbarkeits-Block hier durch
    // diese beiden Spalten ersetzt wurde.
    href: '/leistungen/machbarkeitsstudie',
    label: 'Studien ansehen',
  },
];

export default function ZielgruppenSection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          {WEGE.map((weg) => (
            <div key={weg.href}>
              {/* Schlüsselwort halbfett, wie bei allen übrigen Überschriften
                  der Seite.

                  Bewusste Ausnahme von der H1-Stufe: 20% kleiner (34 statt
                  42px). Hier stehen zwei Überschriften nebeneinander statt
                  einer allein — auf voller H1-Grösse überstrahlen sie den
                  Abschnitt, obwohl sie nur wegweisen sollen. Der Wert ist
                  von der H1-Kurve abgeleitet, damit er beim Verkleinern des
                  Fensters im gleichen Verhältnis mitgeht. */}
              <h2 className="text-3xl font-normal leading-tight tracking-tight text-ink md:text-4xl">
                {weg.titel[0]}{' '}
                <span className="font-semibold">{weg.titel[1]}</span>
              </h2>
              <p className="mt-6 max-w-lesbar text-karte leading-relaxed text-graphite">
                {weg.text}
              </p>
              <Link
                href={weg.href}
                className="mt-7 inline-block rounded-sm text-karte text-ink underline decoration-stone underline-offset-4 transition-colors hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
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
