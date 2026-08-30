import ZielgruppenSection from './ZielgruppenSection';

/**
 * Abschluss der Startseite: die beiden Zielgruppen nebeneinander statt des
 * grossen Machbarkeits-Aufrufs.
 *
 * Der frühere Block (`MachbarkeitCta`) nahm mit Label, grosser Überschrift,
 * Fliesstext und Knopf sehr viel Raum für eine einzige Frage. Zwei gleich
 * schwere Spalten stellen stattdessen zwei Wege nebeneinander, von denen
 * sich jeder Besucher für einen entscheidet.
 *
 * Die Machbarkeitsstudie verschwindet dabei nicht: Die rechte Spalte führt
 * direkt dorthin — sie ist das wichtigste Einstiegsprodukt und muss auf der
 * Startseite erreichbar bleiben.
 *
 * `MachbarkeitCta` bleibt unverändert bestehen und wird weiterhin auf
 * anderen Seiten verwendet.
 */
export default function AbschlussSection() {
  return <ZielgruppenSection />;
}
