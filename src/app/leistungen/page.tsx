import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import VorhabenCta from '@/components/ui/VorhabenCta';
import AblaufSection from '@/components/home/AblaufSection';
import { bauaufgaben, kompetenzen } from '@/data/expertise';

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Leistungen von Atelier AA Architekten: Neubau, Umbau, Verdichtung, Projektentwicklung und Generalplanung in Zürich, Aargau und Zug.',
  alternates: { canonical: '/leistungen' },
};

export default function LeistungenPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container className="mb-16 md:mb-24">
        <p className="mb-8 text-xs uppercase tracking-widest text-stone">Leistungen</p>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div>
            {/* Bewusst keine "Architektur mit …"-Formel hier: Diese Seite
                soll fachlich bleiben und mit den echten Leistungen
                arbeiten, nicht mit einer weiteren Markenbotschaft, die mit
                Hero, Intro und Büro-Abschnitt konkurrieren würde. Der
                Einleitungstext bewusst deutlich verdichtet (ca. 50-60% der
                vorherigen Länge) — Themen wie Lebenszykluskosten oder
                Aufstockung/Anbau/Ersatzneubau gehören nicht in diesen Block. */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-ink leading-[1.1] tracking-tight mb-6">
              Von der ersten <span className="font-semibold">Frage</span>
              <br />
              bis zur <span className="font-semibold">Realisierung.</span>
            </h1>
            <div className="space-y-5 text-graphite leading-relaxed">
              <p>
                Atelier AA Architekten begleitet den gesamten Planungsprozess, von der
                ersten Idee bis zur hochwertigen Ausführung, auf Wunsch auch im
                Generalplaner-Mandat.
              </p>
              <p>
                Ort, Nutzung, Machbarkeit, Wirtschaftlichkeit und Realisierung werden
                zusammen gedacht, mit Schwerpunkt in Zürich, Aargau und Zug. Wie das
                konkret aussieht, zeigen die folgenden fünf Leistungen.
              </p>
            </div>
          </div>
          {/* Zusammenschnitt mehrerer Baustellen-Drohnenaufnahmen — zeigt
              reale, laufende Projekte statt eines einzelnen Referenzbilds. */}
          <div className="relative aspect-video w-full overflow-hidden bg-mist lg:aspect-[4/3]">
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
      </Container>

      {/* Leistungsangebot auf der regulären Inhaltsbreite statt vollflächig
          über den Bildschirm — fügt sich damit ins übrige Seitenbild ein. */}
      <section className="border-t border-mist py-20 md:pt-28">
        <Container>
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Angebot
            </p>
            <h2 className="text-3xl font-medium leading-tight text-ink md:text-4xl">
              Leistungen
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {kompetenzen.map((k, index) => (
              <div key={k.titel} className="bg-mist p-8">
                <p className="text-xs uppercase tracking-widest text-stone">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-6 text-2xl font-medium leading-tight text-ink">{k.titel}</h3>
                <ul className="mt-5 space-y-2">
                  {k.punkte.map((punkt) => (
                    <li key={punkt} className="flex gap-3 text-sm leading-relaxed text-graphite">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-stone"
                      />
                      {punkt}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-graphite">{k.text}</p>
                {k.links && k.links.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {k.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm text-ink underline decoration-stone underline-offset-4 hover:decoration-ink"
                        >
                          {l.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Teaser statt sechster Leistung: füllt die Lücke neben
                "Generalplanung", aber bewusst ohne Nummer und ohne
                Punkte-Liste — signalisiert damit, dass es keine der fünf
                gleichrangigen Kernleistungen ist, sondern eine
                Weiterentwicklung der Arbeitsweise, verlinkt auf eine eigene
                Seite statt hier ausgebreitet zu werden. */}
            <Link
              href="/leistungen/integrierte-projektabwicklung"
              className="group flex flex-col justify-between bg-mist p-8 transition-colors hover:bg-stone/15"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-stone">Weiterentwicklung</p>
                <h3 className="mt-6 text-2xl font-medium leading-tight text-ink">
                  Integrierte Projektabwicklung
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-graphite">
                  Wir setzen uns mit Modellen wie Design-Build auseinander und wenden erste
                  Prinzipien bereits in einem aktuellen Projekt an.
                </p>
              </div>
              <p className="mt-5 text-sm text-ink underline decoration-stone underline-offset-4 group-hover:decoration-ink">
                Mehr erfahren →
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <AblaufSection />

      {/* Bauaufgaben — bewusst nicht sichtbar dargestellt, aber im HTML
          vorhanden: `sr-only` blendet den Abschnitt visuell aus, ohne ihn
          aus dem DOM zu entfernen. Suchmaschinen und KI-Systeme lesen den
          Text weiterhin, Screenreader ebenfalls — nur auf dem Bildschirm
          nimmt er keinen Platz mehr weg. */}
      <section className="sr-only">
        <h2>Bauaufgaben: wofür wir Erfahrung mitbringen</h2>
        <div>
          {bauaufgaben.map((b) => (
            <div key={b.kategorie}>
              <h3>{b.kategorie}</h3>
              <p>{b.beispiele}</p>
            </div>
          ))}
        </div>
      </section>

      <VorhabenCta />
    </div>
  );
}
