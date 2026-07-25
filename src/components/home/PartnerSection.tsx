import Link from 'next/link';
import Container from '@/components/ui/Container';
import Arrow from '@/components/ui/Arrow';
import { elindo } from '@/data/partner';

/**
 * Querverweis auf Elindo Immobilien.
 *
 * Platzierung bewusst nach den Referenzen und vor dem Kontakt-Abschnitt: Wer
 * bis hierher gelesen hat, beschäftigt sich mit einem konkreten Vorhaben — und
 * genau dann ist die Frage nach Bewertung oder Vermarktung relevant.
 *
 * Der Abschnitt nennt ausdrücklich, dass es zwei eigenständige Unternehmen
 * sind. Ein Querverweis, der eine Verbundenheit suggeriert, die rechtlich nicht
 * besteht, wäre irreführend.
 */
export default function PartnerSection() {
  return (
    <section className="py-20 md:py-28 bg-mist">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              Immobilienpartner
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-ink leading-tight">
              Bauen und Vermarkten zusammen denken
            </h2>
            <p className="mt-8 text-lg text-graphite leading-relaxed">
              Bei Renditeobjekten entscheidet der Wohnungsmix über die Rendite — und
              zwar bevor gestalterische Fragen beantwortet sind. Für Bewertung,
              Vermarktung und Marktbeurteilung arbeiten wir mit{' '}
              <a
                href={elindo.url}
                target="_blank"
                rel="noopener"
                className="text-ink underline decoration-stone underline-offset-4 transition-colors hover:decoration-ink"
              >
                {elindo.kurzname}
              </a>{' '}
              in {elindo.ort} zusammen.
            </p>
            <p className="mt-5 text-graphite leading-relaxed">
              Beide Unternehmen sind eigenständig und werden getrennt beauftragt. Wo
              es Ihrem Projekt dient, stellen wir den Kontakt her.
            </p>

            <Link
              href="/insights/zusammenschluss-elindo-immobilien"
              className="group mt-10 inline-flex items-center gap-4 text-[1.125rem] uppercase tracking-[0.1em] font-medium text-ink transition-colors hover:text-graphite"
            >
              <Arrow className="h-[15px] w-[50px] transition-transform duration-300 ease-out group-hover:translate-x-[0.2em]" />
              Mehr zur Partnerschaft
            </Link>
          </div>

          <div className="lg:pt-16">
            <h3 className="text-xs uppercase tracking-widest text-stone mb-6">
              Leistungen von {elindo.kurzname}
            </h3>
            <ul className="space-y-3 text-graphite">
              {elindo.leistungen.map((l) => (
                <li key={l} className="border-b border-white/60 pb-3 last:border-0">
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-stone leading-relaxed">
              {elindo.name}
              <br />
              {elindo.strasse}, {elindo.plz} {elindo.ort}
              <br />
              Einsatzgebiet: {elindo.regionen}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
