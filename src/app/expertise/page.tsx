import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import FragenAntworten from '@/components/insights/FragenAntworten';
import { getFeaturedProjekte } from '@/data/projekte';
import {
  schwerpunkte,
  leistungsbereiche,
  gebaeudetypen,
  expertiseFragen,
} from '@/data/expertise';
import { elindo } from '@/data/partner';
import { ablauf } from '@/data/startseite';

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    'Leistungen von Atelier AA Architekten GmbH: Neubau, Umbau und Sanierung, Verdichtung, Projektentwicklung, Innenarchitektur, hindernisfreies Bauen, Bauleitung und Baugesuche in den Kantonen Zürich, Aargau und Zug.',
};

export default function ExpertisePage() {
  const referenzen = getFeaturedProjekte().slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.atelier-aa.ch/expertise#faq',
    inLanguage: 'de-CH',
    mainEntity: expertiseFragen.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-32 md:pt-40">
        <Container>
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Expertise</p>
            <h1 className="text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
              Architektur mit Klarheit
              <br />
              und Verantwortung
            </h1>
            <p className="mt-10 text-lg leading-relaxed text-graphite md:text-xl">
              Neue Lebensstile, Arbeitsformen und der Klimawandel verlangen, die gebaute
              Welt neu zu denken. Wir übersetzen diese Anforderungen in Architektur und
              Innenräume, die funktional, nachhaltig und auf die Bedürfnisse der
              Menschen zugeschnitten sind — in den Kantonen Zürich, Aargau und Zug.
            </p>
          </div>
        </Container>

        {/* Themenblöcke mit Bild, abwechselnd angeordnet */}
        <div className="border-t border-mist">
          {schwerpunkte.map((s, idx) => (
            <section key={s.titel} className="border-b border-mist py-16 md:py-20">
              <Container>
                <div
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                    idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                    <Image
                      src={s.bild}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1100px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h2 className="mb-6 text-2xl font-light leading-snug text-ink md:text-3xl">
                      {s.titel}
                    </h2>
                    <div className="space-y-5 leading-relaxed text-graphite">
                      {s.absaetze.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          ))}
        </div>

        {/* Leistungen im Detail */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-stone">
                Leistungen
              </p>
              <h2 className="text-3xl font-light leading-tight text-ink md:text-4xl">
                Was wir übernehmen
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {leistungsbereiche.map((l) => (
                <div key={l.titel}>
                  <h3 className="mb-3 text-xl font-light text-ink">{l.titel}</h3>
                  <p className="leading-relaxed text-graphite">{l.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Ablauf */}
        <section className="border-t border-mist bg-mist py-20 md:py-28">
          <Container>
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-stone">Ablauf</p>
              <h2 className="text-3xl font-light leading-tight text-ink md:text-4xl">
                Von der ersten Frage zum fertigen Haus
              </h2>
            </div>
            <ol className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
              {ablauf.map((phase) => (
                <li key={phase.nummer}>
                  <p className="mb-4 text-sm tracking-[0.1em] text-stone">
                    {phase.nummer}
                  </p>
                  <h3 className="mb-3 text-xl font-light text-ink">{phase.titel}</h3>
                  <p className="leading-relaxed text-graphite">{phase.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Gebäudetypen */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-stone">
                Gebäudetypen
              </p>
              <h2 className="text-3xl font-light leading-tight text-ink md:text-4xl">
                Wofür wir Erfahrung mitbringen
              </h2>
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {gebaeudetypen.map((t) => (
                <li
                  key={t}
                  className="border border-mist px-4 py-2 text-sm text-graphite"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Immobilienpartner */}
        <section className="border-t border-mist py-20 md:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-stone">
                Immobilienpartner
              </p>
              <h2 className="text-3xl font-light leading-tight text-ink md:text-4xl">
                Bewertung und Vermarktung
              </h2>
              <p className="mt-8 leading-relaxed text-graphite">
                Für Marktbeurteilung, Bewertung und Vermarktung arbeiten wir mit{' '}
                <a
                  href={elindo.url}
                  target="_blank"
                  rel="noopener"
                  className="text-ink underline decoration-stone underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {elindo.kurzname}
                </a>{' '}
                in {elindo.ort} zusammen — besonders bei Renditeobjekten, wo der
                Wohnungsmix über die Rendite entscheidet, und bei Neubauprojekten zum
                Verkauf. Beide Unternehmen sind eigenständig und werden getrennt
                beauftragt.
              </p>
              <div className="mt-8">
                <Button href="/insights/zusammenschluss-elindo-immobilien" variant="text">
                  Mehr zur Partnerschaft
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Referenzen */}
        <section className="border-t border-mist py-20 md:py-28">
          <Container>
            <h2 className="mb-12 text-2xl font-light text-ink md:text-3xl">
              Unsere Expertise zeigt sich in unseren Projekten.
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {referenzen.map((projekt) => (
                <ProjektCard key={projekt.slug} projekt={projekt} />
              ))}
            </div>
            <div className="mt-16">
              <Button href="/projekte" variant="text">
                alle Projekte ansehen
              </Button>
            </div>
          </Container>
        </section>

        <Container>
          <div className="max-w-3xl">
            <FragenAntworten fragen={expertiseFragen} titel="Häufige Fragen" />
          </div>

          <div className="mt-20 max-w-3xl border-t border-mist pt-16">
            <h2 className="mb-6 text-2xl font-light text-ink md:text-3xl">
              Sprechen wir über Ihr Vorhaben.
            </h2>
            <p className="mb-8 leading-relaxed text-graphite">
              Das Erstgespräch ist kostenlos. Wir sagen Ihnen offen, was wir für machbar
              und sinnvoll halten.
            </p>
            <Button href="/kontakt" variant="text">
              Kontaktieren Sie uns
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
