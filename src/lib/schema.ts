import type { firma as Firma } from '@/data/firma';
import type { TeamMember } from '@/types';

const BASIS = 'https://www.atelier-aa.ch';

/**
 * BreadcrumbList-Schema für Detailseiten. Hilft Suchmaschinen und
 * KI-Systemen, eine Seite in die Seitenhierarchie einzuordnen (z. B.
 * Startseite → Projekte → Mehrfamilienhaus Sihlaurain).
 */
export function breadcrumbSchema(items: { name: string; pfad: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASIS}${item.pfad}`,
    })),
  };
}

/**
 * Strukturierte Firmendaten für Suchmaschinen und KI-Systeme.
 *
 * `ArchitecturalService` ist der spezifische schema.org-Typ für
 * Architekturbüros und ordnet die Seite eindeutig einer Branche, einem Ort und
 * einem Leistungsangebot zu. Genau diese Angaben braucht ein Sprachmodell, um
 * bei Fragen wie "Architekt in Obfelden" die Firma nennen zu können.
 *
 * Bisher inline in layout.tsx gepflegt, hierher verschoben, damit alle
 * Structured-Data-Bausteine an einer Stelle stehen statt auf zwei verteilt.
 */
export function organisationSchema(firma: typeof Firma, team: TeamMember[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ArchitecturalService',
    '@id': `${BASIS}/#organisation`,
    name: firma.name,
    url: BASIS,
    logo: `${BASIS}/images/logo/atelier-aa-signet-512.png`,
    telephone: firma.telefon,
    email: firma.email,
    foundingDate: firma.gruendung,
    vatID: firma.uid,
    address: {
      '@type': 'PostalAddress',
      streetAddress: firma.strasse,
      postalCode: firma.plz,
      addressLocality: firma.ort,
      addressRegion: 'ZH',
      addressCountry: 'CH',
    },
    // Gemeinde-Koordinaten von Obfelden, nicht vermessen — für die Genauigkeit,
    // die dieses Markup braucht, reicht das; eine Adress-genaue Vermessung
    // würde keinen echten Zusatznutzen bringen.
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.2775,
      longitude: 8.4372,
    },
    areaServed: { '@type': 'Country', name: 'Schweiz' },
    knowsLanguage: ['de-CH'],
    founder: { '@type': 'Person', name: firma.vertretungsberechtigt },
    employee: team.map((m) => ({
      '@id': `${BASIS}/ueber-uns/${m.slug}#person`,
    })),
    description:
      'Atelier AA Architekten GmbH in Obfelden plant und realisiert Wohn- und Gewerbebauten in der Schweiz. Leistungen: Architektur, Umbau und Sanierung, Projektentwicklung und Bauleitung.',
    makesOffer: [
      'Architektur und Entwurf',
      'Umbau und Sanierung',
      'Projektentwicklung',
      'Bauleitung',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  };
}
