<?php
/**
 * Zugangsdaten für den Mailer.
 *
 * SO VORGEHEN: Diese Datei nach `konfig.php` kopieren, Werte eintragen,
 * dann hochladen. `konfig.php` gehört NICHT ins Git-Repository — die Datei
 * enthält den Brevo-Schlüssel.
 */

declare(strict_types=1);

// Brevo: unter SMTP & API → API-Keys erzeugen.
const BREVO_API_KEY = 'xkeysib-hier-den-schluessel-einsetzen';

// Ordner in Brevo, in dem die Listen angelegt werden.
const BREVO_ORDNER = 'Atelier AA Mailings';

// Absender. news@atelier-aa.ch muss bei Hostpoint als echtes Postfach
// bestehen und in Brevo als Absender verifiziert sein.
const ABSENDER_EMAIL = 'news@atelier-aa.ch';
const ABSENDER_NAME  = 'Alisami Aljili | Atelier AA Architekten';

// Antworten der Empfänger sollen hier landen, nicht bei news@.
const ANTWORT_EMAIL = 'aljili@atelier-aa.ch';

// Die einzige Adresse, die sich am Mailer anmelden darf.
const ADMIN_EMAIL = 'aljili@atelier-aa.ch';

// Absender des Anmeldelinks, verschickt über den Mailserver von Hostpoint.
const ABSENDER = 'Atelier AA Mailing <news@atelier-aa.ch>';

// Mindestens 32 Zufallszeichen. Erzeugen mit:  openssl rand -base64 48
const GEHEIMNIS = 'hier-ein-langes-zufaelliges-geheimnis-einsetzen';

// Ohne abschliessenden Schrägstrich.
const BASIS_URL = 'https://atelier-aa.ch';
