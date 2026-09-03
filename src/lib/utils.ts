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

  // 1. Am liebsten am Satzende. Die Schwelle lag bei 50 % und war zu streng —
  //    dadurch endeten Beschreibungen mitten im Satz, obwohl ein Punkt kurz
  //    davor stand.
  const satzende = Math.max(
    anschnitt.lastIndexOf('. '),
    anschnitt.lastIndexOf('! '),
    anschnitt.lastIndexOf('? ')
  );
  if (satzende > max * 0.35) return anschnitt.slice(0, satzende + 1);

  // 2. Sonst an einer Teilsatzgrenze. "…mit Volumenstudie und Kostenrahmen…"
  //    liest sich deutlich besser als "…ein zurückversetztes…".
  const teilsatz = Math.max(
    anschnitt.lastIndexOf(', '),
    anschnitt.lastIndexOf('; '),
    anschnitt.lastIndexOf(' – '),
    anschnitt.lastIndexOf(' — ')
  );
  if (teilsatz > max * 0.55) return anschnitt.slice(0, teilsatz).trimEnd() + ' …';

  // 3. Zuletzt an der Wortgrenze.
  const wortgrenze = anschnitt.lastIndexOf(' ');
  return anschnitt.slice(0, wortgrenze > 0 ? wortgrenze : max).trimEnd() + ' …';
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
