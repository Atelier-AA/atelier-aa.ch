import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { kompetenzen } from '@/data/expertise';
import { getProjekt } from '@/data/projekte';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten vier
 * `featured`-Projekte in Datenreihenfolge.
 */
const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen', 'mfh-letten'];

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
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <p className="mb-3 text-xs uppercase tracking-widest text-stone">
          Leistungen &amp; Projekte
        </p>
        <h2 className="mb-12 text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
          <span className="font-semibold">Leistungen,</span>
          <br />
          sichtbar in echten <span className="font-semibold">Projekten.</span>
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
          {kompetenzen.map((k, idx) => (
            <div key={k.titel} className="border-t border-mist pt-5">
              <p className="mb-3 text-xs uppercase tracking-widest text-stone">
                0{idx + 1}
              </p>
              <h3 className="text-base font-medium text-ink">{k.titel}</h3>
              <p className="mt-3 text-sm text-graphite leading-relaxed">{k.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/leistungen" variant="text">
            alle Leistungen ansehen
          </Button>
        </div>

        {/* Eigenständiger Streifen, unabhängig von der Anzahl Leistungen
            oben — keine erzwungene Zuordnung zwischen Text und Bild mehr. */}
        <div className="mt-16 border-t border-mist pt-14 md:mt-20 md:pt-16">
          <p className="mb-8 text-xs uppercase tracking-widest text-stone">
            Ausgewählte Projekte
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projekte.map((p, idx) => (
              <ProjektCard
                key={p.slug}
                projekt={p}
                priority={idx < 2}
                aspectClassName="aspect-[3/4]"
              />
            ))}
          </div>
          <div className="mt-10">
            <Button href="/projekte" variant="text">
              alle Projekte ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
