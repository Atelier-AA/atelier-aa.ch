export interface Projekt {
  slug: string;
  title: string;
  ort: string;
  /** Kantonskürzel, z. B. 'AG' für Aargau. Wird hinter dem Ort angezeigt. */
  kanton: string;
  kunde: string;
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
