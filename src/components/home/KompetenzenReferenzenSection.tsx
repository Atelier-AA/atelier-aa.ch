import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { leistungsangebot } from '@/data/expertise';
import { getProjekt } from '@/data/projekte';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten vier
 * `featured`-Projekte in Datenreihenfolge.
 */
const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen', 'mfh-letten'];

/**
 * Kompetenzen und Referenzen in einem gemeinsamen Abschnitt statt zwei
 * getrennten Sektionen: links knapp, was wir leisten, rechts, was daraus
 * entsteht — beides unter einer gemeinsamen Überschrift, die beide Seiten
 * verbindet.
 */
export default function KompetenzenReferenzenSection() {
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs uppercase tracking-widest text-stone">
            Kompetenzen &amp; Projekte
          </p>
          <h2 className="text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
            Sieben <span className="font-semibold">Kompetenzen</span>, sichtbar in
            echten <span className="font-semibold">Projekten.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,20rem)_1fr]">
          {/* Kompetenzen: kompakt, jeder Punkt per Klick aufklappbar,
              standardmässig zugeklappt. */}
          <div>
            <div>
              {leistungsangebot.map((l) => (
                <details key={l.titel} className="group border-b border-mist py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-medium text-ink transition-colors group-hover:text-graphite">
                      {l.titel}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="relative block h-3 w-3 shrink-0 text-stone"
                    >
                      <span className="absolute top-1/2 left-0 block h-px w-3 bg-current" />
                      <span className="absolute top-1/2 left-0 block h-px w-3 rotate-90 bg-current transition-transform duration-300 ease-out group-open:rotate-0" />
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm text-graphite leading-relaxed">{l.text}</p>
                </details>
              ))}
            </div>
            <div className="mt-8 text-right">
              <Button href="/leistungen" variant="text">
                alle Leistungen ansehen
              </Button>
            </div>
          </div>

          {/* Referenzen: als 2×2-Raster statt vier Karten in einer vollen
              Reihe, damit sie neben der Kompetenzen-Liste Platz findet. */}
          <div>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {projekte.map((p, idx) => (
                <ProjektCard key={p.slug} projekt={p} priority={idx < 2} />
              ))}
            </div>
            <div className="mt-8 text-right">
              <Button href="/projekte" variant="text">
                alle Projekte ansehen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
