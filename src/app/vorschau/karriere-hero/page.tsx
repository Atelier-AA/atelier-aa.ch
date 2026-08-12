import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { firma } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

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
 * Vorschau: echter Stellentext vom Büro statt Platzhalter, mit dem
 * Architekturmodell aus dem Büro als Bild statt der Team-Porträts (die
 * gefielen nicht) — zeigt die eigentliche Werkstatt statt einzelner
 * Gesichter, passt neutraler zu wechselnden offenen Stellen.
 */
export default function KarriereHeroVorschau() {
  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <div className="border-b border-mist bg-[#fffbe6] py-3 text-center text-sm text-ink">
        Entwurf — nicht live. Nur zum Vergleich, nicht verlinkt.
      </div>

      <Container className="mt-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Karriere</p>
            <h1 className="mb-3 text-3xl font-normal leading-[1.1] tracking-tight text-ink md:text-4xl lg:text-5xl">
              <span className="font-semibold">Architekt:in</span> FH/ETH oder{' '}
              <span className="font-semibold">Zeichner:in</span> EFZ Fachrichtung
              Architektur
            </h1>
            <p className="mb-8 text-sm uppercase tracking-widest text-stone">80–100 %</p>

            <dl className="mb-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-mist pt-6 text-sm">
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
                als <span className="font-semibold">Architekt:in FH/ETH oder Zeichner:in EFZ
                Fachrichtung Architektur</span>.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist lg:sticky lg:top-32">
            <Image
              src="/images/hero/slide-modell-1.jpg"
              alt="Architekturmodell im Büro von Atelier AA Architekten"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1100px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="mt-20 max-w-2xl border-t border-mist pt-16 md:mt-28">
          <p className="mb-8 text-xs uppercase tracking-widest text-stone">Deine Aufgaben</p>
          <ul className="space-y-3">
            {aufgaben.map((a) => (
              <li key={a} className="flex items-start gap-3 text-graphite">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 max-w-2xl border-t border-mist pt-16 md:mt-28">
          <p className="mb-8 text-xs uppercase tracking-widest text-stone">Dein Profil</p>
          <ul className="space-y-3">
            {profil.map((p) => (
              <li key={p} className="flex items-start gap-3 text-graphite">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 max-w-2xl border-t border-mist pt-16 md:mt-28">
          <p className="mb-8 text-xs uppercase tracking-widest text-stone">
            Das erwartet dich
          </p>
          <ul className="space-y-3">
            {erwartet.map((e) => (
              <li key={e} className="flex items-start gap-3 text-graphite">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 max-w-2xl border-t border-mist pt-16 pb-4 md:mt-28">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Bewerbung</p>
          <h2 className="mb-6 text-4xl font-normal leading-tight text-ink md:text-5xl">
            Möchtest du mit uns <span className="font-semibold">Architektur gestalten?</span>
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
      </Container>
    </div>
  );
}
