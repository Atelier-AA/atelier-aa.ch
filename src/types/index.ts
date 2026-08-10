/** Ein benannter Textabschnitt mit einem oder mehreren Absätzen. */
export interface Abschnitt {
  titel: string;
  absaetze: string[];
  /** Optionale Bilder innerhalb des Abschnitts, z. B. zur Illustration. */
  bilder?: string[];
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

/** Ein herunterladbarer Planausschnitt (Kataster, Grundriss, Fassade …). */
export interface ProjektPlan {
  titel: string;
  datei: string;
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
  /** Kategorien für das Filter-Menü auf der Projekte-Seite, z. B. 'Neubau', 'Wohnen'. */
  kategorien: string[];
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
  /** Downloadbare Pläne als PDF. Nur gesetzt, wenn Originalpläne vorliegen. */
  plaene?: ProjektPlan[];
  featured: boolean;
}

/**
 * Frühphasige, nicht gebaute Vorabklärung — Machbarkeitsstudie,
 * Konzeptstudie, Bauherrenvertretung oder Wettbewerbsbeitrag. Bewusst
 * getrennt von `Projekt` (realisierte/projektierte Bauvorhaben) und nicht
 * unter /projekte gelistet — zeigt Ortskenntnis, ohne unfertige Vorhaben als
 * Referenzen auszugeben.
 */
export interface Studie {
  slug: string;
  ort: string;
  kanton: string;
  kategorie: 'Machbarkeitsstudie' | 'Konzeptstudie' | 'Wettbewerbsbeitrag' | 'Bauherrenvertretung';
  strasse: string | null;
  parzelle: string | null;
  datum: string | null;
  kennzahlen: ProjektDaten[];
  /** Kurzer, aus den Kennzahlen abgeleiteter Fliesstext (1 Absatz). */
  analyse: string;
  luftbild: string | null;
  katasterplan: string | null;
  /** Für Wettbewerb/Konzeptstudie: echtes Projektbild statt Lageplan. */
  projektbild: string | null;
}

/**
 * Real gebautes, aber kleineres Projekt (Umbau, Sanierung, Kleinauftrag) —
 * bewusst nicht auf /projekte gezeigt (zu klein/repetitiv für die kuratierte
 * Hauptübersicht), aber trotzdem über eine eigene Seite auffindbar.
 */
export interface Kleinprojekt {
  slug: string;
  ort: string;
  kanton: string;
  strasse: string | null;
  gebaeudetyp: string;
  bauherrschaft: string | null;
  jahr: string | null;
  leistungen: string[];
  /** Bildpfade, erstes Bild dient als Vorschaubild. */
  bilder: string[];
}

export interface TeamMember {
  /** Kleingeschriebener Bezeichner für die Detailseite, z. B. 'alisami-aljili'. */
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
  /** Einzelner Unterpunkt im Vollbild-Menü, kleiner dargestellt direkt unter diesem Eintrag. */
  unterlink?: { href: string; label: string };
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
