import Link from 'next/link';
import Container from '@/components/ui/Container';
import { leistungsangebot } from '@/data/expertise';

/**
 * Leistungsübersicht auf der Startseite als nummerierte Liste statt reinem
 * Fliesstext — jede Zeile verschiebt sich beim Hover leicht nach rechts,
 * der Pfeil blendet ein. Alle sieben Leistungen sind die echten Titel aus
 * den Leistungsdaten, nicht neu erfunden.
 */
export default function LeistungenSection() {
  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-stone">Leistungen</p>
            <h2 className="text-2xl font-medium leading-tight text-ink md:text-3xl">
              Was wir tun
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="text-sm uppercase tracking-widest text-stone transition-colors hover:text-ink"
          >
            alle Leistungen →
          </Link>
        </div>

        <div className="border-t border-mist">
          {leistungsangebot.map((l, idx) => (
            <Link
              key={l.titel}
              href="/leistungen"
              className="group flex items-center gap-6 border-b border-mist py-5 transition-[padding] duration-300 hover:pl-3 md:py-6"
            >
              <span className="w-8 shrink-0 text-sm text-stone">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-xl font-medium text-ink transition-colors group-hover:text-graphite md:text-2xl lg:text-3xl">
                {l.titel}
              </span>
              <span className="translate-x-[-8px] text-xl text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
