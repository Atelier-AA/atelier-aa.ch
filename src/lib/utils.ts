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

  // 3. Zuletzt an der Wortgrenze — aber nicht auf einem Wort, das einen
  //    Anschluss verlangt. In den Suchergebnissen stand sonst
  //    "…an der Flurstrasse in Nussbaumen liegt in der …", was mitten in der
  //    Luft endet. Solche Wörter werden rückwärts weggelassen, bis ein Wort
  //    steht, das für sich allein stehen kann.
  let ende = anschnitt.lastIndexOf(' ');
  if (ende <= 0) ende = max;
  let rest = anschnitt.slice(0, ende).trimEnd();
  while (rest.length > max * 0.4) {
    const letzte = rest.slice(rest.lastIndexOf(' ') + 1).toLowerCase().replace(/[^a-zäöüß]/g, '');
    if (!ANSCHLUSSWORT.has(letzte)) break;
    rest = rest.slice(0, rest.lastIndexOf(' ')).trimEnd();
  }
  return rest + ' …';
}

/**
 * Wörter, die im Deutschen einen Anschluss verlangen: Artikel, Präpositionen,
 * Konjunktionen, Hilfsverben. Endet eine Kurzbeschreibung auf einem davon,
 * fehlt dem Leser das Wichtigste — deshalb wird bis dahinter zurückgekürzt.
 */
const ANSCHLUSSWORT = new Set([
  // Artikel
  'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem',
  'einer', 'eines', 'kein', 'keine', 'keinen', 'keinem', 'keiner',
  // Präpositionen
  'in', 'im', 'an', 'am', 'auf', 'aus', 'bei', 'beim', 'mit', 'nach', 'von',
  'vom', 'vor', 'zu', 'zur', 'zum', 'über', 'unter', 'durch', 'für', 'gegen',
  'ohne', 'um', 'seit', 'bis', 'neben', 'zwischen', 'hinter', 'trotz', 'wegen',
  'entlang', 'gemäss', 'laut', 'statt', 'samt', 'ab', 'je', 'pro', 'per',
  // Konjunktionen und Verweiswörter
  'und', 'oder', 'aber', 'sondern', 'denn', 'sowie', 'sowohl', 'weder', 'als',
  'wie', 'dass', 'ob', 'weil', 'da', 'wenn', 'falls', 'damit', 'sodass',
  'obwohl', 'während', 'bevor', 'nachdem', 'sobald',
  // Hilfs- und Modalverben, Pronomen
  'ist', 'sind', 'war', 'waren', 'wird', 'werden', 'wurde', 'wurden', 'hat',
  'haben', 'hatte', 'hatten', 'kann', 'können', 'soll', 'sollen', 'muss',
  'müssen', 'darf', 'dürfen', 'sich', 'es', 'man', 'auch', 'noch', 'nur',
  'schon', 'rund', 'etwa', 'mehr', 'sehr', 'ganz', 'dabei', 'dafür', 'dazu',
]);

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
