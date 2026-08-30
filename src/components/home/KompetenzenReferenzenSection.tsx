import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { getProjekt } from '@/data/projekte';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten vier
 * `featured`-Projekte in Datenreihenfolge.
 */
const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen'];

/**
 * Drei Kundenschritte statt der fünf Fachkompetenzen — ausdrücklich nur auf
 * der Startseite. Eine Bauherrschaft weiss nicht, ob sie "Analyse und
 * Konzept" oder "Planung und Koordination" braucht; sie weiss, dass sie noch
 * nichts geklärt hat. Drei Schritte sind eine Landkarte, fünf Rollen sind ein
 * Organigramm. Die fünf Kompetenzen mit ihren SIA-Bezügen bleiben auf
 * /leistungen vollständig erhalten — sie arbeiten dort für Fachpublikum und
 * Suchmaschinen.
 *
 * Die Zuordnung folgt den Kompetenzen in `expertise.ts`: Klären fasst
 * Beratung und Analyse/Konzept, Planen die Planung und Koordination,
 * Realisieren die Realisierung und Generalplanung.
 */
const SCHRITTE = [
  {
    titel: 'Klären',
    text: 'Beratung, Grundstücksanalyse, Machbarkeitsstudie und Projektentwicklung. Bevor Ressourcen in die Ausführung fliessen, steht fest, was möglich ist.',
  },
  {
    titel: 'Planen',
    text: 'Entwurf, Baugesuch, Ausführungsplanung und Koordination — auf Wunsch als Generalplanung mit einem Ansprechpartner für das gesamte Planungsteam.',
  },
  {
    titel: 'Realisieren',
    text: 'Ausschreibung, Vergabe, Bauleitung und Übergabe. Wir begleiten die Baustelle und sichern Qualität, Kosten und Termine.',
  },
];

/**
 * Leistungen als durchgehender Prozess (5 nummerierte Stufen), Projekte als
 * eigenständiger, unabhängiger Streifen darunter — statt der früheren
 * Zwei-Spalten-Gegenüberstellung von 5 Leistungstexten und 4 Bildern, bei
 * der die Anzahl nie zusammenpasste und keine 1:1-Zuordnung entstand.
 * Projektkarten sind dieselbe `ProjektCard`-Komponente wie auf /projekte,
 * nicht neu erfunden.
 */
export default function KompetenzenReferenzenSection() {
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <>
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <p className="mb-10 text-xs uppercase tracking-widest text-stone">Leistungen</p>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3">
          {SCHRITTE.map((s, idx) => (
            <div key={s.titel} className="border-t border-mist pt-5">
              <p className="mb-3 text-xs uppercase tracking-widest text-stone">
                0{idx + 1}
              </p>
              <h3 className="text-h2 text-ink">{s.titel}</h3>
              <p className="mt-3 max-w-lesbar text-karte leading-relaxed text-graphite">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/leistungen" variant="text">
            alle Leistungen ansehen
          </Button>
        </div>

      </Container>
    </section>

    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div>
          <p className="mb-8 text-xs uppercase tracking-widest text-stone">
            Ausgewählte Projekte
          </p>
          {/* Links ein hohes Bild, rechts zwei gestapelte. Klare Hierarchie,
              ohne dass ein Bild die halbe Seite einnimmt: Das volle
              Querformat davor war rund 810px hoch. */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projekte[0] && (
              <ProjektCard projekt={projekte[0]} priority aspectClassName="aspect-[4/5]" />
            )}
            <div className="flex flex-col gap-8">
              {projekte.slice(1).map((p) => (
                <ProjektCard key={p.slug} projekt={p} aspectClassName="aspect-[3/2]" />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Button href="/projekte" variant="text">
              alle Projekte ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
