import ProjektCard from './ProjektCard';
import FrageKachel from './FrageKachel';
import Eingeblendet from '@/components/ui/Eingeblendet';
import type { Projekt } from '@/types';

interface ProjektGridProps {
  projekte: Projekt[];
}

/** Kachelbreite und -abstand. */
const KACHEL_KLASSE = 'w-full sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.834rem)]';

/**
 * Frage-Kacheln im Raster, an festen Stellen statt periodisch.
 *
 * Eine frühere Fassung streute die Kontakt-Kachel regelmässig ein und wurde
 * deshalb wieder entfernt — zu viele Unterbrechungen zwischen den Projekten.
 * Zwei Kacheln über die ganze Liste verteilt behalten den Nutzen, ohne das
 * alte Problem zurückzuholen: Sie erscheinen nur, wenn davor genügend
 * Projekte stehen, sonst würden sie bei einer gefilterten Ansicht mit drei
 * Treffern die Liste dominieren.
 */
const FRAGEN = [
  {
    nachIndex: 5,
    frage: 'Möchten Sie auch bauen?',
    text: 'Neubau, Umbau oder Sanierung — erzählen Sie uns kurz von Ihrem Vorhaben.',
    href: '/kontakt',
    label: 'Vorhaben besprechen',
  },
  {
    nachIndex: 13,
    frage: 'Was ist auf Ihrem Grundstück möglich?',
    text: 'Wir prüfen Ausnutzung, Baurecht und Volumen und zeigen die Varianten.',
    href: '/leistungen/machbarkeitsstudie',
    label: 'Studien ansehen',
  },
];

export default function ProjektGrid({ projekte }: ProjektGridProps) {
  return (
    // Spaltenbreiten und Abstand 1:1 aus stage.atelier-aa.ch/projekte/
    // (.referenzen-list / .referenzen-item): eine Spalte mobil, zwei ab
    // 600px, drei ab 1280px, 1.25rem Abstand.
    <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
      {projekte.flatMap((projekt, idx) => {
        const elemente = [
          <Eingeblendet key={projekt.slug} className={KACHEL_KLASSE}>
            <ProjektCard projekt={projekt} priority={idx < 2} />
          </Eingeblendet>,
        ];

        const frage = FRAGEN.find((f) => f.nachIndex === idx);
        if (frage && projekte.length > frage.nachIndex + 2) {
          elemente.push(
            <Eingeblendet key={`frage-${frage.nachIndex}`} className={KACHEL_KLASSE}>
              <FrageKachel
                frage={frage.frage}
                text={frage.text}
                href={frage.href}
                label={frage.label}
              />
            </Eingeblendet>
          );
        }

        return elemente;
      })}
    </div>
  );
}
