import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { firma } from '@/data/firma';

export const metadata: Metadata = {
  title: 'Karriere',
  description:
    'Offene Stelle bei Atelier AA Architekten GmbH in Obfelden: Architekt:in FH/ETH oder Zeichner:in EFZ Fachrichtung Architektur, 80–100 %.',
  alternates: { canonical: '/ueber-uns/karriere' },
};

const aufgaben = [
  'Mitarbeit an vielseitigen Neubau-, Umbau- und Sanierungsprojekten',
  'Bearbeitung von Projekten in unterschiedlichen Planungsphasen',
  'Erstellen von Projekt-, Baueingabe-, Ausführungs- und Detailplänen',
  'Entwicklung konstruktiver und gestalterisch überzeugender Lösungen',
  'Koordination mit Fachplanenden, Behörden und ausführenden Unternehmen',
  'Unterstützung bei Ausschreibungen und in der Realisierung',
  'Selbstständige Bearbeitung eigener Aufgabenbereiche und Teilprojekte',
];

const profil = [
  'Abgeschlossenes Architekturstudium ETH/FH oder eine abgeschlossene Ausbildung als Zeichner:in EFZ Fachrichtung Architektur',
  'Berufserfahrung in der Planung und Ausführung von Bauprojekten in der Schweiz',
  'Sehr gute Kenntnisse in Archicad, sowohl in der 2D- als auch in der 3D-Planung',
  'Sicherer Umgang mit macOS und den gängigen Office-Anwendungen',
  'Erfahrung in der Ausführungs- und Detailplanung',
  'Kenntnisse der schweizerischen Bauvorschriften und Planungsprozesse',
  'Sehr gute Deutschkenntnisse in Wort und Schrift',
  'Selbstständige, strukturierte und verantwortungsbewusste Arbeitsweise',
  'Hohes Qualitätsbewusstsein sowie ein gutes Verständnis für Gestaltung und Konstruktion',
  'Freude an der Zusammenarbeit in einem kleinen, engagierten Team',
];

const erwartet = [
  'Vielseitige und anspruchsvolle Projekte im Neubau und im Bestand',
  'Direkte Mitarbeit in verschiedenen Phasen eines Projekts',
  'Kurze Entscheidungswege und eine offene Zusammenarbeit',
  'Eigenverantwortliches Arbeiten mit Gestaltungsspielraum',
  'Ein moderner Arbeitsplatz mit Mac und Archicad',
  'Ein persönliches und kollegiales Arbeitsumfeld',
  'Die Möglichkeit, Verantwortung zu übernehmen und dich fachlich weiterzuentwickeln',
  'Projekte mit Schwerpunkt in den Kantonen Zürich, Aargau und Zug',
];

/**
 * Zwei Spalten statt einer einzelnen schmalen Textsäule, damit die rechte
 * Seite nicht leer wirkt: links Einleitung/Haltung, rechts die drei Listen
 * (Aufgaben, Profil, Erwartungen). Innerhalb jeder Spalte durchgehender
 * Text ohne Trennstriche, damit es wie ein zusammenhängendes Stelleninserat
 * wirkt statt wie mehrere separate Seitenabschnitte.
 */
export default function KarrierePage() {
  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <Container>
        <p className="mb-4 text-xs uppercase tracking-widest text-stone">Karriere</p>
        <h1 className="mb-3 max-w-2xl text-3xl font-normal leading-[1.1] tracking-tight text-ink md:text-4xl lg:text-5xl">
          <span className="font-semibold">Architekt:in</span> FH/ETH oder{' '}
          <span className="font-semibold">Zeichner:in</span> EFZ Fachrichtung
          Architektur
        </h1>
        <p className="mb-10 text-sm uppercase tracking-widest text-stone">80–100 %</p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <dl className="mb-10 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div>
                <dt className="text-stone">Arbeitsort</dt>
                <dd className="mt-1 text-ink">Obfelden ZH</dd>
              </div>
              <div>
                <dt className="text-stone">Stellenantritt</dt>
                <dd className="mt-1 text-ink">per sofort oder nach Vereinbarung</dd>
              </div>
            </dl>

            <h2 className="mb-4 text-2xl font-normal leading-tight text-ink">
              Architektur mit <span className="font-semibold">bleibendem Wert.</span>
            </h2>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Atelier AA Architekten ist ein engagiertes Architekturbüro mit Sitz in
                Obfelden im Kanton Zürich. Wir planen und realisieren Einfamilienhäuser,
                Mehrfamilienhäuser und Wohnüberbauungen sowie anspruchsvolle Umbauten und
                Sanierungen im Bestand.
              </p>
              <p>
                Unsere Projekte begleiten wir von der ersten Machbarkeitsstudie über den
                Entwurf, das Baugesuch und die Ausführungsplanung bis zur Realisierung.
                Dabei verbinden wir gestalterischen Anspruch mit sorgfältiger Planung und
                einem verantwortungsvollen Umgang mit dem Bestand.
              </p>
              <p className="text-ink">
                Zur Verstärkung unseres Teams suchen wir eine engagierte Persönlichkeit
                als{' '}
                <span className="font-semibold">
                  Architekt:in FH/ETH oder Zeichner:in EFZ Fachrichtung Architektur
                </span>
                .
              </p>
            </div>

            <h2 className="mt-14 mb-6 text-3xl font-normal leading-tight text-ink md:text-4xl">
              Möchtest du mit uns{' '}
              <span className="font-semibold">Architektur gestalten?</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Dann freuen wir uns auf deine vollständigen Bewerbungsunterlagen mit
              Lebenslauf, Arbeitszeugnissen und Portfolio.
            </p>
            <Button href={`mailto:${firma.email}`} variant="primary">
              Jetzt bewerben
            </Button>
            <p className="mt-14 text-xs uppercase tracking-widest text-stone">
              Verantwortungsvoll geplant. Gemeinsam gebaut.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-xs uppercase tracking-widest text-stone">
              Deine Aufgaben
            </h2>
            <ul className="space-y-3 text-graphite">
              {aufgaben.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                  {a}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 mb-5 text-xs uppercase tracking-widest text-stone">
              Dein Profil
            </h2>
            <ul className="space-y-3 text-graphite">
              {profil.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                  {p}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 mb-5 text-xs uppercase tracking-widest text-stone">
              Das erwartet dich
            </h2>
            <ul className="space-y-3 text-graphite">
              {erwartet.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
