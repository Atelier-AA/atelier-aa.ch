#!/bin/bash
#
# Baut "Atelier Shot" zu einem fertigen Programm.
#
#   ./bauen.sh              bauen
#   ./bauen.sh installieren bauen und nach /Applications legen
#
# Es genuegen die Command Line Tools. Das vollstaendige Xcode ist nicht noetig.

set -u

ORDNER="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ORDNER"

PROGRAMM="Atelier Shot"
BINAERNAME="AtelierShot"
ZIEL="$ORDNER/build/$PROGRAMM.app"

sagen()   { printf '\n\033[1m%s\033[0m\n' "$1"; }
hinweis() { printf '   %s\n' "$1"; }
fehler()  { printf '\n\033[1;31mAbbruch: %s\033[0m\n\n' "$1" >&2; }

# ---------------------------------------------------------------- Voraussetzungen

sagen "1/5  Voraussetzungen prüfen"

if [ "$(uname)" != "Darwin" ]; then
    fehler "Dieses Programm lässt sich nur auf einem Mac bauen."
    hinweis "Erkanntes System: $(uname)"
    exit 1
fi

if ! xcode-select -p >/dev/null 2>&1; then
    fehler "Die Apple-Entwicklerwerkzeuge fehlen."
    hinweis "So werden sie nachinstalliert — im Terminal eingeben:"
    hinweis ""
    hinweis "    xcode-select --install"
    hinweis ""
    hinweis "Es erscheint ein Fenster von Apple. Auf »Installieren« klicken und"
    hinweis "warten (rund 1 GB, je nach Verbindung einige Minuten). Danach"
    hinweis "dieses Skript noch einmal starten."
    exit 1
fi

if ! command -v swift >/dev/null 2>&1; then
    fehler "»swift« wurde nicht gefunden, obwohl die Entwicklerwerkzeuge da sind."
    hinweis "Das kommt vor, wenn auf einen unvollständigen Ordner verwiesen wird."
    hinweis "Versuche im Terminal:"
    hinweis ""
    hinweis "    sudo xcode-select --reset"
    hinweis ""
    exit 1
fi

hinweis "Werkzeuge: $(xcode-select -p)"
hinweis "Swift:     $(swift --version 2>/dev/null | head -1)"
hinweis "System:    macOS $(sw_vers -productVersion 2>/dev/null)"

MINDESTVERSION=13
SYSTEM_HAUPT="$(sw_vers -productVersion 2>/dev/null | cut -d. -f1)"
if [ -n "${SYSTEM_HAUPT:-}" ] && [ "$SYSTEM_HAUPT" -lt "$MINDESTVERSION" ]; then
    fehler "Atelier Shot braucht mindestens macOS $MINDESTVERSION."
    exit 1
fi

# ---------------------------------------------------------------- Übersetzen

sagen "2/5  Programm übersetzen"
hinweis "Das dauert beim ersten Mal ein bis zwei Minuten."

if ! swift build -c release; then
    fehler "Das Übersetzen ist fehlgeschlagen."
    hinweis "Die Meldungen oben nennen Datei und Zeile."
    hinweis "Bitte den Text von der ersten Fehlermeldung an weitergeben —"
    hinweis "damit lässt sich die Stelle gezielt beheben."
    exit 1
fi

BINAERORDNER="$(swift build -c release --show-bin-path 2>/dev/null)"
BINAER="$BINAERORDNER/$BINAERNAME"
if [ ! -x "$BINAER" ]; then
    fehler "Das übersetzte Programm wurde nicht gefunden: $BINAER"
    exit 1
fi

# ---------------------------------------------------------------- Paket bauen

sagen "3/5  Programmpaket zusammensetzen"

rm -rf "$ZIEL"
mkdir -p "$ZIEL/Contents/MacOS"
mkdir -p "$ZIEL/Contents/Resources"

cp "$BINAER" "$ZIEL/Contents/MacOS/$BINAERNAME"
cp "$ORDNER/Ressourcen/Info.plist" "$ZIEL/Contents/Info.plist"
printf 'APPL????' > "$ZIEL/Contents/PkgInfo"

# Symbol — misslingt es, wird ohne gebaut.
SYMBOLORDNER="$(mktemp -d)/AtelierShot.iconset"
mkdir -p "$SYMBOLORDNER"
if swift "$ORDNER/Ressourcen/symbol.swift" "$SYMBOLORDNER" >/dev/null 2>&1 \
   && iconutil -c icns "$SYMBOLORDNER" -o "$ZIEL/Contents/Resources/$BINAERNAME.icns" >/dev/null 2>&1; then
    hinweis "Symbol erzeugt."
else
    hinweis "Symbol konnte nicht erzeugt werden — das Programm läuft trotzdem."
fi
rm -rf "$(dirname "$SYMBOLORDNER")"

# ---------------------------------------------------------------- Signieren

sagen "4/5  Signieren"

# Reste aus dem Kopieren entfernen — sie sind der haeufigste Grund,
# weshalb codesign ein sonst einwandfreies Paket zurueckweist.
xattr -cr "$ZIEL" 2>/dev/null

SIGNATURMELDUNG="$(codesign --force --deep --sign - "$ZIEL" 2>&1)"
if [ $? -eq 0 ]; then
    hinweis "Ad-hoc signiert."
    hinweis "Wichtig: Nach jedem Neubau ändert sich die Signatur. macOS erkennt"
    hinweis "das Programm dann als neu und fragt die Berechtigung zur"
    hinweis "Bildschirmaufnahme noch einmal ab. Das ist normal."
else
    hinweis "Signieren fehlgeschlagen. Meldung von macOS:"
    printf '   %s\n' "$SIGNATURMELDUNG"
    hinweis ""
    hinweis "Das Programm startet meist trotzdem. Ohne gültige Signatur kann"
    hinweis "macOS die Berechtigung zur Bildschirmaufnahme aber schlechter"
    hinweis "zuordnen — bitte diese Meldung weitergeben."
fi

if codesign --verify --verbose=1 "$ZIEL" >/dev/null 2>&1; then
    hinweis "Signatur geprüft: in Ordnung."
fi

# ---------------------------------------------------------------- Fertig

sagen "5/5  Fertig"
hinweis "Das Programm liegt hier:"
hinweis "$ZIEL"

if [ "${1:-}" = "installieren" ]; then
    # Laeuft eine alte Fassung, zuerst beenden — sonst wird sie nicht ersetzt.
    osascript -e "tell application \"$PROGRAMM\" to quit" >/dev/null 2>&1
    sleep 1
    if rm -rf "/Applications/$PROGRAMM.app" && cp -R "$ZIEL" "/Applications/"; then
        hinweis "Nach /Applications kopiert."
        ZIEL="/Applications/$PROGRAMM.app"
        open "$ZIEL" && hinweis "Gestartet."
    else
        hinweis "Kopieren nach /Applications nicht möglich — bitte von Hand hineinziehen."
    fi
else
    hinweis ""
    hinweis "Empfohlen:  ./bauen.sh installieren"
    hinweis "Dann liegt das Programm in /Applications, startet beim Anmelden von"
    hinweis "selbst und läuft wie das Apple-Werkzeug im Hintergrund."
fi

cat <<HINWEISE

   Beim ersten Start
   -----------------
   1. Meldet macOS, das Programm stamme nicht aus dem App Store:
      Systemeinstellungen → Datenschutz & Sicherheit → ganz unten
      auf »Dennoch öffnen« klicken.

   2. Das Programm zeigt einen Hinweis zu den Apple-Kürzeln. Damit ⌘⇧4
      bei Atelier Shot ankommt, in den Systemeinstellungen unter
      Tastatur → Tastaturkurzbefehle → Bildschirmfotos alle Häkchen entfernen.

   3. Erste Aufnahme mit  ⌘⇧4  auslösen.
      macOS fragt einmal nach der Berechtigung »Bildschirmaufnahme«.
      Erlauben, dann Atelier Shot über das Menüleisten-Symbol beenden
      und aus /Applications neu öffnen.

   Kürzel — dieselben wie bisher bei Apple:
        ⌘⇧4   Ausschnitt
        ⌘⇧3   ganzer Bildschirm
        ⌘⇧5   Fenster
   Solange Apples Kürzel noch aktiv sind: dasselbe mit ctrl statt cmd.

HINWEISE
