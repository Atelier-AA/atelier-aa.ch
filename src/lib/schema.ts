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
