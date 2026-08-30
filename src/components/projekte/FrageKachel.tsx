import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface FrageKachelProps {
  frage: string;
  text: string;
  href: string;
  label: string;
  /** Seitenverhältnis, damit sich die Kachel ins jeweilige Raster einfügt. */
  aspectClassName?: string;
}

/**
 * Frage-Kachel, die sich zwischen die Projektbilder ins Raster stellt —
 * dasselbe Format wie eine Projektkachel, aber grauer Grund statt Bild.
 *
 * Gebaut nach dem Vorbild von `KarriereKachel` auf der Team-Seite: Dort
 * schliesst eine solche Kachel die Lücke im Raster und spricht die Leserin
 * direkt an, statt dass am Ende ein breiter Block über die volle Breite
 * steht. Genau dieses Mittel fehlte in der Projektübersicht.
 */
export default function FrageKachel({
  frage,
  text,
  href,
  label,
  aspectClassName = 'aspect-square',
}: FrageKachelProps) {
  return (
    <div className={cn('flex flex-col justify-center bg-mist p-8', aspectClassName)}>
      <p className="text-h3 font-semibold text-ink">{frage}</p>
      <p className="mt-3 max-w-lesbar text-karte leading-relaxed text-graphite">{text}</p>
      <div className="mt-6">
        <Button href={href} variant="outline">
          {label}
        </Button>
      </div>
    </div>
  );
}
