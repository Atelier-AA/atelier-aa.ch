import Button from '@/components/ui/Button';

/**
 * Kontakt-Aufruf im selben Format wie eine Projektkachel (aspect-square),
 * damit er sich unauffällig ins Raster einfügt, statt einen eigenen breiten
 * Block zu brauchen — an einer Stelle, wo Besucher schon mehrere Projekte
 * gesehen haben und Fragen aufkommen könnten.
 */
export default function KontaktKachel() {
  return (
    <div className="relative flex aspect-square flex-col justify-center bg-mist p-8">
      <p className="text-xl font-medium leading-snug text-ink">
        Haben Sie Fragen zu unseren Projekten?
      </p>
      <p className="mt-3 text-graphite leading-relaxed">
        Wir freuen uns auf ein persönliches Gespräch.
      </p>
      <div className="mt-6">
        <Button href="/kontakt" variant="outline">
          Kontakt
        </Button>
      </div>
    </div>
  );
}
