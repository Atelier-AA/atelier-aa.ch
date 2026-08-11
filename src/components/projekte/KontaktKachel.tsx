import Button from '@/components/ui/Button';

/**
 * Drei unterschiedliche Anreize statt derselben Zeile mehrfach im Raster —
 * jede Kachel im Text an einen anderen Beweggrund adressiert (eigene Idee,
 * ungenutztes Grundstück, Eindruck der gezeigten Arbeit).
 */
export const kontaktTexte = [
  {
    titel: 'Ein Projekt im Kopf, aber noch keinen Plan?',
    text: 'Wir hören zu, bevor wir zeichnen. Erzählen Sie uns von Ihrer Idee.',
  },
  {
    titel: 'Nutzt Ihr Grundstück schon sein volles Potenzial?',
    text: 'Eine Machbarkeitsstudie zeigt in wenigen Wochen, was möglich wäre.',
  },
  {
    titel: 'Gefällt Ihnen, was Sie hier sehen?',
    text: 'Lassen Sie uns über Ihr eigenes Projekt sprechen, unverbindlich und persönlich.',
  },
];

/**
 * Kontakt-Aufruf im selben Format wie eine Projektkachel (aspect-square),
 * damit er sich unauffällig ins Raster einfügt, statt einen eigenen breiten
 * Block zu brauchen, an Stellen, wo Besucher schon mehrere Projekte gesehen
 * haben und Fragen aufkommen könnten.
 */
export default function KontaktKachel({ variante = 0 }: { variante?: number }) {
  const { titel, text } = kontaktTexte[variante % kontaktTexte.length];

  return (
    <div className="relative flex aspect-square flex-col justify-center bg-mist p-8">
      <p className="text-xl font-medium leading-snug text-ink">{titel}</p>
      <p className="mt-3 text-graphite leading-relaxed">{text}</p>
      <div className="mt-6">
        <Button href="/kontakt" variant="outline">
          Kontakt
        </Button>
      </div>
    </div>
  );
}
