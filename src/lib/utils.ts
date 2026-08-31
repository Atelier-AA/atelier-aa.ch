export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Ort mit Kantonskürzel, z. B. "Künten AG" — die Schreibweise der alten Website.
 */
/**
 * Metabeschreibung auf Suchergebnis-Länge kürzen.
 *
 * Google schneidet nach etwa 155 Zeichen ab — mitten im Wort. Wir schneiden
 * lieber selbst, und zwar am letzten vollständigen Satz: So steht in der
 * Trefferliste ein abgeschlossener Gedanke statt eines Bruchstücks. Findet
 * sich kein Satzende, wird an der letzten Wortgrenze getrennt.
 *
 * Die längste Beschreibung der Website war zuvor 566 Zeichen lang; 100 von
 * 213 Seiten lagen über der Grenze.
 */
export function kurzbeschreibung(text: string, max = 155): string {
  const sauber = text.replace(/\s+/g, ' ').trim();
  if (sauber.length <= max) return sauber;

  const anschnitt = sauber.slice(0, max);
  const satzende = Math.max(
    anschnitt.lastIndexOf('. '),
    anschnitt.lastIndexOf('! '),
    anschnitt.lastIndexOf('? ')
  );
  // Nur wenn danach noch ein brauchbarer Satz steht, sonst wird es zu kurz.
  if (satzende > max * 0.5) return anschnitt.slice(0, satzende + 1);

  const wortgrenze = anschnitt.lastIndexOf(' ');
  return anschnitt.slice(0, wortgrenze > 0 ? wortgrenze : max).trimEnd() + '…';
}

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
