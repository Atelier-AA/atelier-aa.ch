export interface Projekt {
  slug: string;
  title: string;
  ort: string;
  /** Kantonskürzel, z. B. 'AG' für Aargau. Wird hinter dem Ort angezeigt. */
  kanton: string;
  /** Bauherrschaft. `null`, wenn nicht öffentlich genannt. */
  kunde: string | null;
  jahr: string;
  beschreibung: string;
  thumbnail: string;
  heroImage: string;
  galerie: string[];
  featured: boolean;
}

export interface TeamMember {
  name: string;
  rolle: string;
  bild: string;
}

export interface NavLink {
  href: string;
  label: string;
}

/** Ein Abschnitt im Fliesstext eines Beitrags. */
export interface InsightAbschnitt {
  titel: string;
  absaetze: string[];
}

/** Frage-und-Antwort-Paar im Q&A-Teil eines Beitrags. */
export interface InsightFrage {
  frage: string;
  antwort: string;
}

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
  abschnitte: InsightAbschnitt[];
  fragen: InsightFrage[];
}
