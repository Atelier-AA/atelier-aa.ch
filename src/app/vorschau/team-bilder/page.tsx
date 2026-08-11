import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { team } from '@/data/team';

export const metadata: Metadata = { robots: { index: false, follow: false } };

const person = team[0];

const VARIANTEN = [
  {
    key: 'a',
    label: 'A — Aktuell (hell, neutral)',
    beschreibung: 'Das bereits live verwendete Bild: heller, neutraler Hintergrund, ruhiges Licht.',
    bild: '/images/team/vorschau/variante-a-hell.jpg',
  },
  {
    key: 'b',
    label: 'B — Farbig, Wand mit Schattenwurf',
    beschreibung: 'Neues Foto, warmes Seitenlicht vor einer strukturierten Wand, mit sichtbarem Schlagschatten.',
    bild: '/images/team/vorschau/variante-b-farbe-schatten.jpg',
  },
  {
    key: 'c',
    label: 'C — Schwarzweiss',
    beschreibung: 'Dieselbe Aufnahme wie B, in Schwarzweiss, wirkt zurückhaltender und zeitloser.',
    bild: '/images/team/vorschau/variante-c-schwarzweiss.jpg',
  },
  {
    key: 'd',
    label: 'D — Dunkler Hintergrund, enger Ausschnitt',
    beschreibung: 'Bildbearbeitetes Porträt mit dunklem, atmosphärischem Hintergrund und engerem Bildausschnitt.',
    bild: '/images/team/vorschau/variante-d-dunkel.jpg',
  },
];

/**
 * Vorschau: vier Bildvarianten für das Porträt von Alisami Aljili, jeweils
 * im Layout der echten Personenseite (grosses Porträt links, Name/Rolle
 * rechts) und als kleine Kachel wie im Team-Raster — damit sich beurteilen
 * lässt, welcher Stil zur bestehenden Website passt.
 *
 * Das ebenfalls hochgeladene Foto vor dem "ELINDO"-Tablet ist bewusst nicht
 * dabei: Elindo ist eine andere, unabhängige Marke, ihr Logo hat auf der
 * Atelier-AA-Seite nichts verloren.
 */
export default function VorschauTeamBilder() {
  return (
    <div className="min-h-screen pt-32 pb-28 md:pt-40">
      <Container>
        <div className="bg-mist px-6 py-3 text-center text-sm text-ink">
          Vorschau — vier Bildvarianten für die Teamseite, nicht live
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {VARIANTEN.map((v) => (
            <section key={v.key} className="border-t border-mist pt-12 first:border-t-0 first:pt-0">
              <p className="text-xs uppercase tracking-widest text-stone">{v.label}</p>
              <p className="mt-2 max-w-[60ch] text-graphite">{v.beschreibung}</p>

              <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr_180px] lg:gap-16">
                {/* Wie auf der echten Personenseite */}
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <Image
                    src={v.bild}
                    alt={`${person.name}, Bildvariante ${v.key.toUpperCase()}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1100px) 100vw, 380px"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-medium leading-tight text-ink md:text-4xl">
                    {person.name}
                  </h2>
                  <p className="mt-2 text-lg text-stone">{person.rolle}</p>
                  <p className="mt-6 max-w-[55ch] text-graphite leading-relaxed">{person.kurz}</p>
                </div>

                {/* Wie im Team-Raster (kleine Kachel) */}
                <div>
                  <p className="mb-3 text-xs uppercase tracking-widest text-stone">
                    Als Kachel im Team-Raster
                  </p>
                  <div className="relative aspect-[3/4] w-full max-w-[180px] overflow-hidden bg-mist">
                    <Image
                      src={v.bild}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
