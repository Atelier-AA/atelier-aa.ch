#!/usr/bin/env bash
# Statischen Export für Hostpoint erzeugen.
#
# Legt vor dem Bauen die serverseitigen Teile beiseite (API-Routen und
# Mailer), weil `output: 'export'` sie nicht exportieren kann, und stellt
# sie danach wieder her — auch wenn der Build fehlschlägt.
set -euo pipefail
cd "$(dirname "$0")/.."

BEISEITE=".export-beiseite"
rm -rf "$BEISEITE"
mkdir -p "$BEISEITE"

wiederherstellen() {
  if [ -d "$BEISEITE/api" ]; then rm -rf src/app/api; mv "$BEISEITE/api" src/app/; fi
  if [ -d "$BEISEITE/mailer" ]; then rm -rf src/app/mailer; mv "$BEISEITE/mailer" src/app/; fi
  if [ -d "$BEISEITE/vorschau" ]; then rm -rf src/app/vorschau; mv "$BEISEITE/vorschau" src/app/; fi
  if [ -f "$BEISEITE/next.config.ts" ]; then mv -f "$BEISEITE/next.config.ts" next.config.ts; fi
  rmdir "$BEISEITE" 2>/dev/null || true
  echo "→ Server-Teile wiederhergestellt"
}
trap wiederherstellen EXIT

echo "→ API-Routen, Mailer und Vorschauseiten beiseite legen"
mv src/app/api "$BEISEITE/api"
mv src/app/mailer "$BEISEITE/mailer"
mv src/app/vorschau "$BEISEITE/vorschau"

echo "→ Export-Konfiguration aktivieren"
mv next.config.ts "$BEISEITE/next.config.ts"
cp next.config.export.ts next.config.ts

echo "→ Bauen"
rm -rf .next out
# Das Kontaktformular muss bei Hostpoint auf kontakt.php zeigen, nicht auf
# die Next-Route /api/kontakt, die es dort nicht gibt. Der Wert landet zur
# Bauzeit im JavaScript-Bundle.
NEXT_PUBLIC_FORMULAR_ZIEL=/kontakt.php \
  NEXT_PUBLIC_SCHRAEGSTRICH=1 \
  npx next build

echo "→ Hostpoint-Dateien beilegen"
cp hostpoint/htaccess.txt out/.htaccess
cp hostpoint/kontakt.php out/kontakt.php
cp hostpoint/user.ini.txt out/.user.ini
# Der Mailer kommt bewusst NICHT mit. Entschieden am 31.08.2026: Die
# Website soll online, der Mailer wird spaeter nachgeholt. Der Code liegt
# unveraendert in hostpoint/mailer/ — zum Aktivieren diese Zeilen wieder
# einkommentieren und konfig.php anlegen.
#
# mkdir -p out/mailer-php
# cp hostpoint/mailer/index.php hostpoint/mailer/brevo.php \
#    hostpoint/mailer/konfig.beispiel.php out/mailer-php/
# cp hostpoint/mailer/htaccess.txt out/mailer-php/.htaccess

echo
echo "Fertig. Der gesamte Inhalt von out/ gehört in das Verzeichnis www."
du -sh out
