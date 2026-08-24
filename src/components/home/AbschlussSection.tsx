import MachbarkeitCta from '@/components/ui/MachbarkeitCta';

/**
 * Abschliessender Aufruf der Startseite: der "Machbarkeit"-CTA aus dem
 * CTA-System (siehe MachbarkeitCta) statt einer eigenen Formulierung —
 * die Startseite ist genau der "passende Startseitenblock" für diesen Typ.
 */
export default function AbschlussSection() {
  return <MachbarkeitCta />;
}
