export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Ort mit Kantonskürzel, z. B. "Künten AG" — die Schreibweise der alten Website.
 */
export function ortMitKanton(projekt: { ort: string; kanton: string }): string {
  return `${projekt.ort} ${projekt.kanton}`;
}

/** ISO-Datum als "18. Juni 2026". */
export function formatDatum(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('de-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
