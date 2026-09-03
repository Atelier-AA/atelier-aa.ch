#!/usr/bin/env bash
# Statischen Export für Hostpoint erzeugen.
#
# Legt vor dem Bauen die serverseitigen Teile beiseite (API-Route des
# Kontaktformulars und die Vorschauseiten), weil `output: 'export'` sie nicht
# exportieren kann, und stellt sie danach wieder her — auch wenn der Build
# fehlschlägt.
set -euo pipefail
cd "$(dirname "$0")/.."

BEISEITE=".export-beiseite"
rm -rf "$BEISEITE"
mkdir -p "$BEISEITE"

wiederherstellen() {
  if [ -d "$BEISEITE/api" ]; then rm -rf src/app/api; mv "$BEISEITE/api" src/app/; fi
  if [ -d "$BEISEITE/vorschau" ]; then rm -rf src/app/vorschau; mv "$BEISEITE/vorschau" src/app/; fi
  if [ -f "$BEISEITE/next.config.ts" ]; then mv -f "$BEISEITE/next.config.ts" next.config.ts; fi
  rmdir "$BEISEITE" 2>/dev/null || true
  echo "→ Server-Teile wiederhergestellt"
}
trap wiederherstellen EXIT

echo "→ API-Route und Vorschauseiten beiseite legen"
mv src/app/api "$BEISEITE/api"
mv src/app/vorschau "$BEISEITE/vorschau"

echo "→ Export-Konfiguration aktivieren"
mv next.config.ts "$BEISEITE/next.config.ts"
cp next.config.export.ts next.config.ts

echo "→ Bauen"
rm -rf .next out
# Das Kontaktformular muss bei Hostpoint auf kontakt.php zeigen, nicht auf
# die Next-Route /api/kontakt, die es dort nicht gibt. Der Wert landet zur
# Bauzeit im JavaScript-Bundle.
# Die Google-Analytics-Kennung muss zur Bauzeit vorliegen, weil
# NEXT_PUBLIC_* im JavaScript-Bundle landet. Ohne sie laedt die Komponente
# GoogleAnalytics.tsx bewusst gar nichts. Die Kennung ist nicht geheim, sie
# steht in jeder ausgelieferten Seite.
NEXT_PUBLIC_FORMULAR_ZIEL=/kontakt.php \
  NEXT_PUBLIC_SCHRAEGSTRICH=1 \
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-RD34H42GGG \
  npx next build

# Medien, die ausschliesslich die Vorschauseiten brauchen. Die Vorschau wird
# nicht exportiert, die Dateien wuerden also 3.7 MB ungenutzt mitreisen. In
# public/ bleiben sie liegen, damit die Vorschau lokal weiter laeuft.
echo "→ Reine Vorschau-Medien aus dem Export nehmen"
rm -f out/videos/ueber-uns-team.mp4
rm -f out/images/team/atelier-aa-ueber-uns-team-poster.jpg

echo "→ Hostpoint-Dateien beilegen"
cp hostpoint/htaccess.txt out/.htaccess
cp hostpoint/kontakt.php out/kontakt.php
cp hostpoint/user.ini.txt out/.user.ini

echo
echo "Fertig. Der gesamte Inhalt von out/ gehört in das Verzeichnis www."
du -sh out
