/** Ein benannter Textabschnitt mit einem oder mehreren Absätzen. */
export interface Abschnitt {
  titel: string;
  absaetze: string[];
}

/** Frage-und-Antwort-Paar für Q&A-Bereiche. */
export interface InsightFrage {
  frage: string;
  antwort: string;
}

/** Eckdaten eines Projekts als Beschriftung-Wert-Paar. */
export interface ProjektDaten {
  label: string;
  wert: string;
}

export interface Projekt {
  slug: string;
  title: string;
  ort: string;
  /** Kantonskürzel, z. B. 'AG' für Aargau. Wird hinter dem Ort angezeigt. */
  kanton: string;
  /** Bauherrschaft. `null`, wenn nicht öffentlich genannt. */
  kunde: string | null;
  jahr: string;
  /** Kurzfassung für Übersicht und Meta-Description. */
  beschreibung: string;
  /** Gebäudekategorie, z. B. 'Mehrfamilienhaus'. Für Filter und Suchbegriffe. */
  typ: string;
  /** Leistungsumfang, den wir in diesem Projekt erbracht haben. */
  leistungen: string[];
  /**
   * Ausführliche Projektbeschreibung in Abschnitten: Aufgabe, Lösung,
   * Konstruktion, Nachhaltigkeit. Gibt Suchmaschinen und KI-Systemen
   * substanziellen Text statt nur einer Bildergalerie.
   */
  abschnitte: Abschnitt[];
  /** Weitere Eckdaten (Geschossfläche, Bauweise, Status …). */
  daten: ProjektDaten[];
  /** Häufige Fragen zu diesem Projekttyp. */
  fragen: InsightFrage[];
  thumbnail: string;
  heroImage: string;
  galerie: string[];
  featured: boolean;
}

export interface TeamMember {
  /** Kleingeschriebener Bezeichner für die Detailseite, z. B. 'aljili-aljisami'. */
  slug: string;
  name: string;
  rolle: string;
  bild: string;
  /** Einzeiler unter dem Namen auf der Detailseite. */
  kurz: string;
  /** Fachliche Schwerpunkte. */
  schwerpunkte: string[];
  /** Werdegang und Haltung, ein Absatz je Eintrag. */
  absaetze: string[];
  /** E-Mail-Adresse für die direkte Kontaktaufnahme. `null`, wenn keine. */
  email: string | null;
}

export interface NavLink {
  href: string;
  label: string;
}

/**
 * Ein Abschnitt im Fliesstext eines Beitrags.
 * @deprecated Verwende `Abschnitt` — gleicher Aufbau, allgemeiner benannt.
 */
export type InsightAbschnitt = Abschnitt;

export interface Insight {
  slug: string;
  titel: string;
  /** Kurzer Aufhänger für Übersicht und Meta-Description. */
  lead: string;
  /** Themenzuordnung, z. B. 'Digitalisierung'. */
  kategorie: string;
  /** Veröffentlichungsdatum als ISO-Wert (YYYY-MM-DD). */
  datum: string;
  /** Geschätzte Lesedauer in Minuten. */
  lesezeit: number;
  bild: string;
  abschnitte: Abschnitt[];
  fragen: InsightFrage[];
}
