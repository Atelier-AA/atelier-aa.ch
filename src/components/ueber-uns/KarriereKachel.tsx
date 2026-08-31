import Button from '@/components/ui/Button';

/**
 * Karriere-Aufruf im selben Format wie eine Team-Porträtkachel
 * (aspect-[3/4] statt aspect-square wie bei KontaktKachel), damit sie sich
 * an der leeren Stelle im Team-Raster einfügt, statt einen eigenen breiten
 * Block zu brauchen.
 */
/**
 * Ohne Oberkante, wie die Kontakt-Kachel im Projektraster: Sie steht
 * zwischen Team-Porträts, und eine Linie über nur einer Zelle des Rasters
 * liest sich als Fehler.
 */
export default function KarriereKachel() {
  return (
    <div className="relative flex aspect-[3/4] flex-col justify-center bg-mist p-8">
      <p className="text-xl font-medium leading-snug text-ink">Hier könntest du sein.</p>
      <p className="mt-3 text-graphite leading-relaxed">
        Suchst du eine neue Herausforderung als Architekt:in? Wir freuen uns auf deine
        Bewerbung.
      </p>
      <div className="mt-6">
        <Button href="/ueber-uns/karriere" variant="outline">
          Offene Position
        </Button>
      </div>
    </div>
  );
}
