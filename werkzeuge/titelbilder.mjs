/**
 * Von Hand gewählte Vorschaubilder je Projekt.
 *
 * Ein Bild pro Projekt, durchgehend verwendet: als grosses Bild oben auf der
 * Projektseite (16:9), als Kachel in Übersichten (4:3) und in "Ausgewählte
 * Projekte". Getrennte Bilder für hero und thumb gab es kurzzeitig — das war
 * ein Missverständnis und verwirrt (Vorgabe vom 01.09.2026).
 *
 * Das Vorschaubild erscheint NICHT mehr zusätzlich in der Galerie, sonst
 * steht dasselbe Foto zweimal auf der Seite.
 *
 * Ohne Eintrag greift die automatische Wahl: das Bild mit dem Verhältnis am
 * nächsten bei 16:9 und ausreichender Breite.
 */
export const VORSCHAUBILD = {
  'efh-jonen':            14,  // Haus von der Strasse statt Terrasse
  'mfh-alte-poststrasse':  3,  // war schon vorher das Titelbild
  'mfh-sihlaurain':       12,
  'mfh-letten':            5,
  // Auswahl vom 01.09.2026. Angegeben war die Position in der Galerie; hier
  // steht die Dateinummer, weil das Vorschaubild aus der Galerie fällt und
  // die beiden Zählungen deshalb auseinanderlaufen.
  'mfh-kuenten':           5,  // angegeben: Bild 4
  'mfh-hochwarting':       3,  // angegeben: Bild 3
  'defh-safenwil':         1,  // angegeben: Bild 1
  'efh-wuerenlos':         4,  // angegeben: Bild 3
  'efh-rupperswil':        7,  // angegeben: Bild 6
  'wohnueberbauung-zelgi': 2,  // angegeben: Bild 1
  'efh-merenschwand':      4,  // angegeben: Bild 3
  'mfh-wuerenlingen':      2,  // angegeben: Bild 1
};

/** Alte Bezeichnung, solange noch Skripte darauf zeigen. */
export const TITELBILDER = Object.fromEntries(
  Object.entries(VORSCHAUBILD).map(([k, nr]) => [k, { hero: nr, thumb: nr }])
);
