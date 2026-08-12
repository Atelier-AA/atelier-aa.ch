import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FragenAntworten from '@/components/insights/FragenAntworten';
import ProjektGrid from '@/components/projekte/ProjektGrid';
import { projekte } from '@/data/projekte';

export const metadata: Metadata = { robots: { index: false, follow: false } };

const schritte = [
  {
    nummer: '01',
    titel: 'Grundstück analysieren',
    text: 'Lage, Zone, Ausnützung und Erschliessung — die Ausgangslage, bevor über Varianten gesprochen wird.',
  },
  {
    nummer: '02',
    titel: 'Potenzial ermitteln',
    text: 'Wir zeigen, welche Nutzung und welches Volumen auf dem Grundstück realistisch sind.',
  },
  {
    nummer: '03',
    titel: 'Varianten entwickeln',
    text: 'Mehrere städtebauliche und architektonische Ansätze, vergleichbar in Aufwand und Ertrag.',
  },
  {
    nummer: '04',
    titel: 'Wirtschaftlichkeit prüfen',
    text: 'Erstellungskosten, Mietzinsniveau und Wohnungsmix rechnen wir gegeneinander, nicht erst am Ende.',
  },
  {
    nummer: '05',
    titel: 'Projekt planen',
    text: 'Die gewählte Variante wird zum bewilligungsfähigen Projekt ausgearbeitet.',
  },
  {
    nummer: '06',
    titel: 'Bewilligung erwirken',
    text: 'Wir begleiten das Baugesuch durch das Verfahren der zuständigen Gemeinde.',
  },
  {
    nummer: '07',
    titel: 'Realisierung begleiten',
    text: 'Auf Wunsch als Generalplaner: ein Ansprechpartner von der Ausschreibung bis zur Übergabe.',
  },
];

const fragen = [
  {
    frage: 'Für wen ist Projektentwicklung gedacht?',
    antwort:
      'Für Investoren, Grundstückeigentümer und institutionelle Bauherrschaften, die aus einem Grundstück oder einer Liegenschaft ein wirtschaftlich tragfähiges Bauprojekt entwickeln möchten.',
  },
  {
    frage: 'Was unterscheidet Projektentwicklung von einer Machbarkeitsstudie?',
    antwort:
      'Die Machbarkeitsstudie klärt, was grundsätzlich möglich ist. Projektentwicklung geht weiter: Varianten, Wirtschaftlichkeit, Planung und Bewilligung bis zum realisierungsreifen Projekt.',
  },
  {
    frage: 'Übernehmen Sie auch die Rolle als Generalplaner?',
    antwort:
      'Ja. Auf Wunsch koordinieren wir alle Fachplaner und sind Ihr alleiniger Vertrags- und Ansprechpartner bis zur Übergabe.',
  },
];

const beispiele = projekte.filter((p) =>
  ['mfh-sihlaurain', 'wohnueberbauung-zelgi'].includes(p.slug)
);

/**
 * Vorschau: Hero mit Bild statt reinem Text-Einstieg, gleiches Format wie
 * auf /leistungen (Drohnen-Montage). Rest der Seite unverändert.
 */
export default function ProjektentwicklungHeroVorschau() {
  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <div className="border-b border-mist bg-[#fffbe6] py-3 text-center text-sm text-ink">
        Entwurf — nicht live. Nur zum Vergleich, nicht verlinkt.
      </div>

      <Container className="mt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <Link
              href="/leistungen"
              className="mb-4 inline-block text-xs uppercase tracking-widest text-stone hover:text-ink"
            >
              ← Kompetenzen
            </Link>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Projektentwicklung
            </p>
            <h1 className="mb-8 text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
              Von der Grundstücksidee zum{' '}
              <span className="font-semibold">bewilligungsfähigen Projekt.</span>
            </h1>
            <p className="text-lg leading-relaxed text-graphite md:text-xl">
              Wir entwickeln Grundstücke und Liegenschaften von der ersten
              Potenzialanalyse bis zur bewilligungsfähigen Projektidee — für
              Investoren, Grundstückeigentümer und institutionelle Bauherrschaften.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" variant="primary">
                Potenzial besprechen
              </Button>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-mist lg:aspect-square">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/leistungen-projekte-montage.mp4"
              poster="/images/leistungen/montage-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
          </div>
        </div>

        <div className="mt-20 border-t border-mist pt-16 md:mt-28">
          <p className="mb-10 text-xs uppercase tracking-widest text-stone">Ablauf</p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {schritte.map((s) => (
              <div key={s.nummer}>
                <p className="mb-3 text-sm text-stone">{s.nummer}</p>
                <h2 className="mb-2 text-xl font-medium text-ink">{s.titel}</h2>
                <p className="text-graphite leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {beispiele.length > 0 && (
          <div className="mt-20 border-t border-mist pt-16 md:mt-28">
            <p className="mb-10 text-xs uppercase tracking-widest text-stone">Beispiele</p>
            <ProjektGrid projekte={beispiele} />
          </div>
        )}

        <FragenAntworten fragen={fragen} titel="Häufige Fragen zur Projektentwicklung" />
      </Container>
    </div>
  );
}
