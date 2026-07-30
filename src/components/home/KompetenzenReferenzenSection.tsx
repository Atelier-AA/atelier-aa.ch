import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getProjekt } from '@/data/projekte';
import { ortMitKanton, cn } from '@/lib/utils';

/**
 * Bewusst festgelegte Auswahl und Reihenfolge statt der ersten vier
 * `featured`-Projekte in Datenreihenfolge.
 */
const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen', 'mfh-letten'];

/**
 * Kompetenzen und Referenzen in einem Abschnitt verschmolzen: statt einer
 * Liste von Leistungstiteln neben einem Bilder-Raster zeigt jede Zeile ein
 * Projekt zusammen mit den echten Leistungen, die dafür erbracht wurden
 * (aus den Projektdaten, nicht neu erfunden) — Bild, Text, Bild, Text im
 * Wechsel, damit keine Seite grösser wirkt als die andere.
 */
export default function KompetenzenReferenzenSection() {
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="mb-3 text-xs uppercase tracking-widest text-stone">
            Kompetenzen &amp; Projekte
          </p>
          <h2 className="text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
            Unsere <span className="font-semibold">Kompetenzen</span>, sichtbar in
            echten <span className="font-semibold">Projekten.</span>
          </h2>
        </div>

        <div className="space-y-14 md:space-y-20">
          {projekte.map((p, idx) => {
            const gerade = idx % 2 === 0;
            return (
              <Link
                key={p.slug}
                href={`/referenzen/${p.slug}`}
                className="group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                <div
                  className={cn(
                    'relative aspect-[4/3] w-full overflow-hidden bg-mist',
                    gerade ? 'md:order-1' : 'md:order-2'
                  )}
                >
                  <Image
                    src={p.thumbnail}
                    alt={`${p.title}, ${ortMitKanton(p)}`}
                    fill
                    priority={idx < 2}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className={gerade ? 'md:order-2' : 'md:order-1'}>
                  <p className="text-xs uppercase tracking-widest text-stone">
                    {ortMitKanton(p)} · {p.jahr}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium leading-tight text-ink transition-colors group-hover:text-graphite md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-[42ch] text-graphite leading-relaxed">
                    {p.beschreibung}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest text-stone">
                      Leistungen
                    </p>
                    <p className="mt-2 text-ink">{p.leistungen.join(' · ')}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap justify-end gap-x-10 gap-y-4 md:mt-20">
          <Button href="/leistungen" variant="text">
            alle Leistungen ansehen
          </Button>
          <Button href="/projekte" variant="text">
            alle Projekte ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
