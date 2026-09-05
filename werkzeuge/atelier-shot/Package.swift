// swift-tools-version:5.9
// Atelier Shot — Bildschirmfoto-Werkzeug fuer die Planpruefung.
// Gebaut wird ueber ./bauen.sh, nicht direkt mit "swift run" —
// das Programm braucht ein fertiges .app-Paket, damit macOS die
// Berechtigung fuer die Bildschirmaufnahme sauber zuordnen kann.

import PackageDescription

let package = Package(
    name: "AtelierShot",
    platforms: [
        .macOS(.v13)
    ],
    targets: [
        .executableTarget(
            name: "AtelierShot",
            path: "Sources/AtelierShot"
        )
    ]
)
