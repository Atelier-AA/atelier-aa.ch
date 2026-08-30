import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { getProjekt } from '@/data/projekte';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten
 * `featured`-Projekte in Datenreihenfolge.
 *
 * Keine Überschneidung mit dem Hero: Der zeigt Hochwarting, Künten und Jonen.
 * Stünde eines davon auch hier, sähe man dasselbe Projekt zweimal auf einer
 * Seite. Frühere Auswahl waren Sihlaurain, Safenwil und Jonen.
 */
const AUSWAHL = ['mfh-alte-poststrasse', 'mfh-wuerenlingen', 'defh-weiningen'];

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
    titel: 'Was möglich ist',
    text: 'Beratung, Grundstücksanalyse und Machbarkeitsstudie. Bevor Ressourcen in die Ausführung fliessen, steht fest, was Ihr Grundstück zulässt und was es kostet.',
    leistungen: ['Beratung', 'Grundstücksanalyse', 'Machbarkeitsstudie', 'Projektentwicklung'],
  },
  {
    titel: 'Wie es entsteht',
    text: 'Entwurf, Baugesuch und Ausführungsplanung. Auf Wunsch als Generalplanung, mit einem Ansprechpartner für das gesamte Planungsteam.',
    leistungen: ['Entwurf', 'Baugesuch', 'Ausführungsplanung', 'Generalplanung'],
  },
  {
    titel: 'Wie es gebaut wird',
    text: 'Ausschreibung, Vergabe und Bauleitung bis zur Übergabe. Wir begleiten die Baustelle und sichern Qualität, Kosten und Termine.',
    leistungen: ['Ausschreibung', 'Vergabe', 'Bauleitung', 'Kostenkontrolle'],
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

        {/* Kacheln auf grauem Grund statt freistehendem Text. Frei stehend
            hoben sich die drei Blöcke von nichts ab und wirkten wie ein
            unfertiger Platzhalter. Die aufgeführten Leistungen darunter
            zeigen, was jeweils konkret dahintersteckt — vorher stand das nur
            im Fliesstext und ging darin unter. */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SCHRITTE.map((s) => (
            <div key={s.titel} className="flex flex-col bg-mist p-8">
              <h3 className="text-h2 font-semibold text-ink">{s.titel}</h3>
              <p className="mt-4 text-karte leading-relaxed text-graphite">{s.text}</p>
              <ul className="mt-6 flex flex-col gap-1.5 border-t border-stone/20 pt-5 text-karte text-graphite">
                {s.leistungen.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
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
          {/* Links ein hohes Bild, rechts zwei gestapelte — zusammen genau so
              hoch wie das linke. Erreicht über `items-stretch` und volle Höhe
              in der rechten Spalte statt fester Seitenverhältnisse: Nur so
              stimmt der Abschluss auf jeder Fensterbreite. */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch">
            {projekte[0] && (
              <ProjektCard projekt={projekte[0]} priority aspectClassName="aspect-[4/5]" />
            )}
            <div className="flex flex-col gap-8 md:h-full">
              {projekte.slice(1).map((p) => (
                <ProjektCard
                  key={p.slug}
                  projekt={p}
                  aspectClassName="aspect-[3/2] md:aspect-auto md:h-full"
                  className="md:flex md:min-h-0 md:flex-1 md:flex-col"
                />
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
