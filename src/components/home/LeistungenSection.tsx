'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { leistungsbereiche } from '@/data/expertise';
import { cn } from '@/lib/utils';

/**
 * Leistungsübersicht auf der Startseite.
 *
 * Bewusst knapp: ein einleitender Fliesstext statt Aufzählung, darunter eine
 * Liste, die geschlossen bleibt, bis man eine Zeile antippt. So nimmt der
 * Abschnitt kaum Platz ein, ohne dass etwas fehlt — wer mehr wissen will,
 * klappt auf oder geht über den Link zur Seite «Leistungen».
 *
 * Dieselbe Liste (`leistungsbereiche`) wie auf der Leistungen-Seite, damit
 * Titel und Wortlaut nirgends auseinanderlaufen.
 */
export default function LeistungenSection() {
  const [offen, setOffen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="max-w-2xl mb-8">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Leistungen</p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight mb-4">
            Sämtliche Planungsleistungen aus einer Hand
          </h2>
          <p className="text-lg text-graphite leading-relaxed">
            Wir planen und realisieren Neubauten und Sanierungen für das Wohnen und die
            Arbeitswelt — von der Machbarkeitsstudie bis zur Bauleitung vor Ort, auf
            Wunsch auch im Generalplaner-Mandat.
          </p>
        </div>

        <div className="max-w-2xl border-y border-mist">
          {leistungsbereiche.map((l, idx) => {
            const istOffen = offen === idx;
            return (
              <div key={l.titel} className="border-b border-mist last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOffen(istOffen ? null : idx)}
                  aria-expanded={istOffen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-base font-medium text-ink">{l.titel}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'shrink-0 text-xl leading-none text-stone transition-transform duration-300',
                      istOffen && 'rotate-45'
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-[max-height] duration-300 ease-out',
                    istOffen ? 'max-h-32' : 'max-h-0'
                  )}
                >
                  <p className="pb-4 text-graphite leading-relaxed">{l.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Button href="/expertise" variant="text">
            Alle Leistungen im Detail
          </Button>
        </div>
      </Container>
    </section>
  );
}
