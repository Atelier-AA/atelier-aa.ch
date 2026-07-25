export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Ort mit Kantonskürzel, z. B. "Künten AG" — die Schreibweise der alten Website.
 */
export function ortMitKanton(projekt: { ort: string; kanton: string }): string {
  return `${projekt.ort} ${projekt.kanton}`;
}
