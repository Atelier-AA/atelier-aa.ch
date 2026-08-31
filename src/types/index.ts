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
  /**
   * Überschreibt den generierten Satz auf der Gemeindeseite ("In X haben wir
   * … realisiert"). Nötig, wenn Anzahl oder Mandat nicht aus `typ` und `jahr`
   * ableitbar sind — etwa bei einem reinen Bauleitungsmandat für mehrere
   * Häuser. Beginnt sprachlich nach "In <Ort> (<Kanton>) haben wir ".
   */
  regionSatz?: string;
  featured: boolean;
  /**
   * Ersetzt ein Foto in `galerie` durch eine kurze, geprüft echte
   * Kamerafahrt über genau dasselbe Bild (Testlauf, vorerst nur bei
   * efh-jonen). `bildPfad` muss exakt einem Eintrag in `galerie`
   * entsprechen — sonst bleibt es beim Foto.
   */
  videoClips?: { bildPfad: string; mp4: string; webm: string; poster: string }[];
  /**
   * Entscheidungslogik statt nur Ergebnis: zeigt, wie gedacht und
   * entschieden wurde, nicht nur, was gebaut wurde. Nur gesetzt, wo eine
   * echte, dokumentierte Entscheidung vorliegt — nichts erfunden, keine
   * Pflichtangabe für jedes Projekt.
   */
  entscheidung?: {
    ausgangslage: string;
    frage: string;
    entscheidung: string;
    resultat: string;
  };
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
  /** Überschreibt den generischen Alt-Text des Porträts, z. B. um bei
   *  Architekt:innen den Tätigkeitsort für die Bildersuche zu nennen. Ohne
   *  Angabe: "Porträt von {name}, {rolle} bei Atelier AA Architekten". */
  bildAlt?: string;
  /** CSS object-position für den Bildausschnitt (z. B. '50% 70%'), um bei
   *  abweichender Kopf-/Schulterhöhe im Originalfoto den sichtbaren
   *  Ausschnitt an die übrigen Porträts anzugleichen. Ohne Angabe: zentriert. */
  bildPosition?: string;
  /** Einzeiler unter dem Namen auf der Detailseite. */
  kurz: string;
  /** Fachliche Schwerpunkte. */
  schwerpunkte: string[];
  /** Werdegang und Haltung, ein Absatz je Eintrag. */
  absaetze: string[];
  /** E-Mail-Adresse für die direkte Kontaktaufnahme. `null`, wenn keine. */
  email: string | null;
  /**
   * Persönliche Editorial-Sektion, bislang nur bei Alisami — eigene Stimme
   * des Inhabers statt Werdegangs-Absätzen. Schlusszeile separat, damit sie
   * auf der Seite optisch hervorgehoben stehen kann.
   */
  editorial?: { absaetze: string[]; schlusszeile: string };
}

export interface NavLink {
  href: string;
  label: string;
  /** Einzelner Unterpunkt im Vollbild-Menü, kleiner dargestellt direkt unter diesem Eintrag. */
  unterlink?: { href: string; label: string };
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
  abschnitte: Abschnitt[];
  fragen: InsightFrage[];
}
