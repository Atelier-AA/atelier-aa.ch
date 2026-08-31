import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { kompetenzen } from '@/data/expertise';
import { getProjekt } from '@/data/projekte';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten
 * `featured`-Projekte in Datenreihenfolge.
 *
 * Keine Überschneidung mit dem Hero: Der zeigt Hochwarting, Künten und Jonen.
 * Stünde eines davon auch hier, sähe man dasselbe Projekt zweimal auf einer
 * Seite. Frühere Auswahl waren Sihlaurain, Safenwil und Jonen.
 */
const AUSWAHL = ['mfh-sihlaurain', 'mfh-wuerenlingen', 'defh-weiningen'];


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

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
          {kompetenzen.map((k) => (
            <div key={k.titel}>
              <h3 className="text-base font-medium text-ink">{k.titel}</h3>
              <p className="mt-3 text-karte text-graphite leading-relaxed">{k.text}</p>
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
