#!/bin/bash
#
# Baut "Atelier Shot" zu einem fertigen Programm.
#
#   ./bauen.sh               nur bauen, Ergebnis liegt unter build/
#   ./bauen.sh installieren  bauen, nach /Applications legen und starten
#   ./bauen.sh neu           alles Alte entfernen, dann wie "installieren"
#
# Es genuegen die Command Line Tools. Das vollstaendige Xcode ist nicht noetig.
#
# Signatur: Beim ersten Bau wird ein eigenes Zertifikat "Atelier Shot Signatur"
# im Schluesselbund angelegt (ohne Apple-Konto). Damit erkennt macOS das
# Programm nach jedem Neubau wieder, und die Berechtigung "Bildschirmaufnahme"
# muss nur ein einziges Mal erteilt werden. Ohne festes Zertifikat gilt jede
# neue Fassung als neues Programm — das war der Grund fuer die Nachfragen.

set -u

ORDNER="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ORDNER"

MODUS="${1:-}"
PROGRAMM="Atelier Shot"
BINAERNAME="AtelierShot"
KENNUNG="ch.atelier-aa.atelier-shot"
ZIEL="$ORDNER/build/$PROGRAMM.app"
ZERTIFIKAT="Atelier Shot Signatur"
SCHLUESSELBUND="$HOME/Library/Keychains/login.keychain-db"

sagen()   { printf '\n\033[1m%s\033[0m\n' "$1"; }
hinweis() { printf '   %s\n' "$1"; }
fehler()  { printf '\n\033[1;31mAbbruch: %s\033[0m\n\n' "$1" >&2; }

# ---------------------------------------------------------------- Aufraeumen

if [ "$MODUS" = "neu" ]; then
    sagen "0/6  Alles Alte entfernen"
    osascript -e "tell application \"$PROGRAMM\" to quit" >/dev/null 2>&1
    sleep 1
    rm -rf "/Applications/$PROGRAMM.app" && hinweis "Programm aus /Applications entfernt."
    rm -rf "$ORDNER/build" "$ORDNER/.build" && hinweis "Alte Bauergebnisse entfernt."
    tccutil reset ScreenCapture "$KENNUNG" >/dev/null 2>&1 && hinweis "Berechtigung »Bildschirmaufnahme« zurückgesetzt."
    defaults delete "$KENNUNG" >/dev/null 2>&1 && hinweis "Gemerkte Einstellungen gelöscht."
    hinweis "Das Zertifikat im Schlüsselbund bleibt — es ist die feste Kennung."
fi

# ---------------------------------------------------------------- Voraussetzungen

sagen "1/6  Voraussetzungen prüfen"

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
    hinweis "Versuche im Terminal:    sudo xcode-select --reset"
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

# ---------------------------------------------------------------- Zertifikat

sagen "2/6  Zertifikat"

zertifikat_vorhanden() {
    security find-identity -p codesigning 2>/dev/null | grep -q "$ZERTIFIKAT"
}

# Gibt bei einem Fehler die Meldung des Werkzeugs aus, statt sie zu verschlucken.
schritt() {
    local beschreibung="$1"; shift
    local protokoll
    protokoll="$(mktemp)"
    if "$@" >"$protokoll" 2>&1; then
        hinweis "✓ $beschreibung"
        rm -f "$protokoll"
        return 0
    fi
    hinweis "✗ $beschreibung — Meldung:"
    sed 's/^/       /' "$protokoll" | head -8
    rm -f "$protokoll"
    return 1
}

zertifikat_erstellen() {
    local ablage
    ablage="$(mktemp -d)"
    hinweis "openssl: $(openssl version 2>/dev/null)"

    cat > "$ablage/zertifikat.cnf" <<EOF
[req]
distinguished_name = dn
x509_extensions = ext
prompt = no
[dn]
CN = $ZERTIFIKAT
O = Atelier AA
[ext]
keyUsage = critical, digitalSignature
extendedKeyUsage = critical, codeSigning
basicConstraints = critical, CA:false
subjectKeyIdentifier = hash
EOF

    schritt "Schlüssel und Zertifikat erzeugen" \
        openssl req -x509 -newkey rsa:2048 -nodes -days 3650 \
            -keyout "$ablage/schluessel.pem" -out "$ablage/zertifikat.pem" \
            -config "$ablage/zertifikat.cnf" \
        || { rm -rf "$ablage"; return 1; }

    # Als PKCS12 buendeln — neuere OpenSSL-Fassungen brauchen dafuer "-legacy".
    if ! schritt "Als PKCS12 bündeln" \
            openssl pkcs12 -export -out "$ablage/zertifikat.p12" \
                -inkey "$ablage/schluessel.pem" -in "$ablage/zertifikat.pem" \
                -passout pass:ateliershot -name "$ZERTIFIKAT"; then
        schritt "Als PKCS12 bündeln (legacy)" \
            openssl pkcs12 -export -legacy -out "$ablage/zertifikat.p12" \
                -inkey "$ablage/schluessel.pem" -in "$ablage/zertifikat.pem" \
                -passout pass:ateliershot -name "$ZERTIFIKAT" \
            || { rm -rf "$ablage"; return 1; }
    fi

    schritt "In den Schlüsselbund aufnehmen" \
        security import "$ablage/zertifikat.p12" -k "$SCHLUESSELBUND" -P ateliershot \
            -T /usr/bin/codesign -T /usr/bin/security \
        || { rm -rf "$ablage"; return 1; }

    hinweis "macOS fragt jetzt nach deinem Anmeldepasswort (Vertrauen für das Zertifikat)."
    schritt "Zertifikat als vertrauenswürdig eintragen" \
        security add-trusted-cert -r trustRoot -p codeSign -k "$SCHLUESSELBUND" "$ablage/zertifikat.pem" \
        || hinweis "Signieren geht meist trotzdem."

    # Erlaubt codesign den Zugriff auf den Schluessel, ohne jedes Mal zu fragen.
    hinweis "Noch einmal das Anmeldepasswort, damit codesign den Schlüssel nutzen darf:"
    security set-key-partition-list -S apple-tool:,apple:,codesign: -s "$SCHLUESSELBUND" >/dev/null 2>&1 \
        || hinweis "Falls beim Signieren ein Fenster erscheint: »Immer erlauben« wählen."

    rm -rf "$ablage"
    return 0
}

ZERTIFIKAT_NEU=0
if zertifikat_vorhanden; then
    hinweis "»${ZERTIFIKAT}« ist im Schlüsselbund vorhanden."
else
    hinweis "Lege einmalig das Zertifikat »${ZERTIFIKAT}« an …"
    if zertifikat_erstellen && zertifikat_vorhanden; then
        hinweis "Zertifikat angelegt."
        ZERTIFIKAT_NEU=1
    else
        hinweis "Zertifikat konnte nicht angelegt werden — es wird ohne festes"
        hinweis "Zertifikat gebaut. Dann fragt macOS nach jedem Neubau erneut."
    fi
fi

# ---------------------------------------------------------------- Übersetzen

sagen "3/6  Programm übersetzen"

if ! swift build -c release; then
    fehler "Das Übersetzen ist fehlgeschlagen."
    hinweis "Bitte den Text ab der ersten Zeile mit »error:« weitergeben."
    exit 1
fi

BINAERORDNER="$(swift build -c release --show-bin-path 2>/dev/null)"
BINAER="$BINAERORDNER/$BINAERNAME"
if [ ! -x "$BINAER" ]; then
    fehler "Das übersetzte Programm wurde nicht gefunden: $BINAER"
    exit 1
fi

# ---------------------------------------------------------------- Paket bauen

sagen "4/6  Programmpaket zusammensetzen"

rm -rf "$ZIEL"
mkdir -p "$ZIEL/Contents/MacOS" "$ZIEL/Contents/Resources"
cp "$BINAER" "$ZIEL/Contents/MacOS/$BINAERNAME"
cp "$ORDNER/Ressourcen/Info.plist" "$ZIEL/Contents/Info.plist"
printf 'APPL????' > "$ZIEL/Contents/PkgInfo"

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

sagen "5/6  Signieren"

xattr -cr "$ZIEL" 2>/dev/null

MIT_ZERTIFIKAT=0
if zertifikat_vorhanden; then
    if codesign --force --deep --sign "$ZERTIFIKAT" --timestamp=none "$ZIEL" >/dev/null 2>&1; then
        MIT_ZERTIFIKAT=1
        hinweis "Mit »${ZERTIFIKAT}« signiert — feste Kennung, Berechtigung bleibt erhalten."
    else
        hinweis "Signieren mit Zertifikat fehlgeschlagen, weiche auf Ad-hoc aus."
    fi
fi
if [ "$MIT_ZERTIFIKAT" -eq 0 ]; then
    if codesign --force --deep --sign - "$ZIEL" >/dev/null 2>&1; then
        hinweis "Ad-hoc signiert — macOS fragt nach jedem Neubau erneut nach der Berechtigung."
    else
        hinweis "Signieren fehlgeschlagen. Das Programm startet meist trotzdem."
    fi
fi

# Berechtigung nur dann zuruecksetzen, wenn die Kennung sich geaendert hat:
# beim Wechsel auf das neue Zertifikat oder ohne festes Zertifikat.
if [ "$MODUS" != "neu" ] && { [ "$ZERTIFIKAT_NEU" -eq 1 ] || [ "$MIT_ZERTIFIKAT" -eq 0 ]; }; then
    tccutil reset ScreenCapture "$KENNUNG" >/dev/null 2>&1 \
        && hinweis "Alte Berechtigung »Bildschirmaufnahme« zurückgesetzt — beim ersten Kürzel fragt macOS neu."
fi

# ---------------------------------------------------------------- Fertig

sagen "6/6  Fertig"
hinweis "Das Programm liegt hier:  $ZIEL"

if [ "$MODUS" = "installieren" ] || [ "$MODUS" = "neu" ]; then
    osascript -e "tell application \"$PROGRAMM\" to quit" >/dev/null 2>&1
    sleep 1
    if rm -rf "/Applications/$PROGRAMM.app" && cp -R "$ZIEL" "/Applications/"; then
        hinweis "Nach /Applications kopiert."
        open "/Applications/$PROGRAMM.app" && hinweis "Gestartet — Symbol oben rechts in der Menüleiste."
    else
        hinweis "Kopieren nach /Applications nicht möglich — bitte von Hand hineinziehen."
    fi
else
    hinweis ""
    hinweis "Empfohlen:  ./bauen.sh installieren"
fi

cat <<HINWEISE

   Erste Aufnahme
   --------------
   ⌃⇧4 drücken (ctrl + shift + 4).

   Fragt macOS nach der Berechtigung »Bildschirmaufnahme«: Erlauben.
   Danach Atelier Shot über das Menüleisten-Symbol beenden und neu
   öffnen (⌘Leertaste, »Atelier Shot«, Enter). Das ist einmalig.

   Kürzel:
        ⌃⇧4   Ausschnitt
        ⌃⇧3   ganzer Bildschirm
        ⌃⇧5   Fenster
   Apples eigene Kürzel (⌘⇧3/4/5) bleiben unverändert.

HINWEISE
