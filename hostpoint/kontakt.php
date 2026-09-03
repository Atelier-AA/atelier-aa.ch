<?php
/**
 * Kontaktformular für den Betrieb bei Hostpoint.
 *
 * Ersetzt die Next.js-Route /api/kontakt, die beim statischen Export
 * wegfällt. Versand über den Mailserver von Hostpoint (Sendmail), was
 * Hostpoint für Formulare ausdrücklich als den richtigen Weg nennt;
 * authentifiziertes SMTP ist dort nur für Ausnahmefälle vorgesehen.
 *
 * Die Absenderadresse wird über die Datei .user.ini im Document Root
 * gesetzt, damit sie zur Domain passt und die Zustellung nicht an den
 * Absenderrichtlinien scheitert.
 *
 * Antwortet mit JSON, damit das bestehende Formular unverändert damit
 * arbeiten kann.
 */

declare(strict_types=1);

const EMPFAENGER      = 'info@atelier-aa.ch';
const ABSENDER        = 'Atelier AA Website <info@atelier-aa.ch>';
const MAX_LAENGE      = 5000;
const MIN_SEKUNDEN    = 3;      // schneller als 3 Sekunden tippt kein Mensch
const MAX_PRO_STUNDE  = 5;      // pro IP-Adresse

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function fehler(string $text, int $code = 400): never
{
    http_response_code($code);
    echo json_encode(['error' => $text], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fehler('Nicht gefunden.', 404);
}

// ---------------------------------------------------------------------------
// Eingaben lesen: das Formular sendet JSON, ein Browser ohne JavaScript
// sendet ein normales Formular. Beides wird angenommen.
// ---------------------------------------------------------------------------
$roh = file_get_contents('php://input');
$daten = [];
if ($roh !== '' && $roh !== false) {
    $versuch = json_decode($roh, true);
    if (is_array($versuch)) {
        $daten = $versuch;
    }
}
if (!$daten) {
    $daten = $_POST;
}

function feld(array $daten, string $name): string
{
    $wert = $daten[$name] ?? '';
    if (!is_string($wert)) {
        return '';
    }
    // Zeilenumbrüche aus Kopfzeilenfeldern entfernen: sonst liesse sich
    // über ein Eingabefeld eine zusätzliche Mail-Kopfzeile einschmuggeln.
    return trim(mb_substr(str_replace(["\r", "\n", "\0"], ' ', $wert), 0, MAX_LAENGE));
}

$vorname    = feld($daten, 'vorname');
$nachname   = feld($daten, 'nachname');
$email      = feld($daten, 'email');
$telefon    = feld($daten, 'telefon');
$unternehmen = feld($daten, 'unternehmen');
$betreff    = feld($daten, 'betreff');
$falle      = feld($daten, 'webseite');           // Honigtopf, siehe unten
$zeitstempel = (int) ($daten['zeit'] ?? 0);

$nachricht = $daten['nachricht'] ?? '';
$nachricht = is_string($nachricht)
    ? trim(mb_substr(str_replace("\0", '', $nachricht), 0, MAX_LAENGE))
    : '';

// ---------------------------------------------------------------------------
// Spamschutz. Drei Hürden, keine davon sichtbar für Menschen:
//
//   1. Honigtopf "webseite": ein für Besucher unsichtbares Feld, das es im
//      Formular schon gibt. Wer es ausfüllt, ist ein Bot. Die Antwort ist
//      trotzdem freundlich, damit der Bot nicht merkt, dass er erkannt wurde.
//   2. Zeitsperre: ein Formular, das in unter drei Sekunden abgeschickt
//      wird, wurde nicht von Hand ausgefüllt.
//   3. Zähler pro IP-Adresse, höchstens fünf Nachrichten pro Stunde.
// ---------------------------------------------------------------------------
if ($falle !== '') {
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
}

/*
 * Zeitsperre. Frueher lief die Pruefung nur, wenn ueberhaupt ein Zeitstempel
 * mitkam — ein Bot musste das Feld also bloss weglassen. Jetzt gilt ein
 * fehlender, zukuenftiger oder unrealistisch alter Wert ebenfalls als Bot.
 * Die Antwort bleibt bewusst "ok", damit ein Bot nicht erfaehrt, woran es lag.
 */
$verstrichen = $zeitstempel > 0
    ? (int) floor(microtime(true) * 1000) - $zeitstempel
    : -1;
if ($verstrichen < MIN_SEKUNDEN * 1000 || $verstrichen > 12 * 3600 * 1000) {
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
}

/*
 * Ratenbegrenzung je Absenderadresse.
 *
 * Lesen, Pruefen und Schreiben laufen unter einer exklusiven Dateisperre und
 * der Platz wird VOR dem Versand verbucht. Ohne Sperre sahen gleichzeitige
 * Anfragen alle denselben alten Zaehlerstand, kamen alle durch und
 * ueberschrieben sich anschliessend gegenseitig — 30 gleichzeitige Anfragen
 * ergaben 30 Mails trotz eines Limits von fuenf.
 *
 * Schlaegt mail() spaeter fehl, bleibt der Platz belegt. Das ist die sichere
 * Richtung: lieber eine Anfrage zu wenig als ein unbegrenzter Endpunkt.
 */
$zaehlerDatei = sys_get_temp_dir() . '/atelier-aa-kontakt-' .
    hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unbekannt') . '.txt';
$jetzt = time();

$griff = @fopen($zaehlerDatei, 'c+');
if ($griff === false || !flock($griff, LOCK_EX)) {
    if ($griff !== false) {
        fclose($griff);
    }
    fehler('Der Versand ist derzeit nicht möglich. Bitte später erneut versuchen.', 503);
}

$zeiten = [];
foreach (explode("\n", (string) stream_get_contents($griff)) as $zeile) {
    $z = (int) trim($zeile);
    if ($z > $jetzt - 3600) {
        $zeiten[] = $z;
    }
}

if (count($zeiten) >= MAX_PRO_STUNDE) {
    flock($griff, LOCK_UN);
    fclose($griff);
    fehler('Es wurden zu viele Nachrichten gesendet. Bitte später erneut versuchen.', 429);
}

$zeiten[] = $jetzt;
rewind($griff);
ftruncate($griff, 0);
if (fwrite($griff, implode("\n", $zeiten)) === false) {
    flock($griff, LOCK_UN);
    fclose($griff);
    fehler('Der Versand ist derzeit nicht möglich. Bitte später erneut versuchen.', 503);
}
fflush($griff);
flock($griff, LOCK_UN);
fclose($griff);

// ---------------------------------------------------------------------------
// Pflichtfelder prüfen
// ---------------------------------------------------------------------------
if ($vorname === '' || $nachname === '' || $email === '' || $nachricht === '') {
    fehler('Bitte Vorname, Nachname, E-Mail und Nachricht ausfüllen.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fehler('Bitte eine gültige E-Mail-Adresse angeben.');
}

// ---------------------------------------------------------------------------
// Mail zusammensetzen
// ---------------------------------------------------------------------------
$zeilen = [
    'Name: ' . $vorname . ' ' . $nachname,
    'E-Mail: ' . $email,
];
if ($telefon !== '')     { $zeilen[] = 'Telefon: ' . $telefon; }
if ($unternehmen !== '') { $zeilen[] = 'Unternehmen: ' . $unternehmen; }

$text = implode("\n", $zeilen) . "\n\n" . $nachricht . "\n";
$titel = $betreff !== '' ? $betreff : 'Neue Anfrage über die Website';

$kopf = [
    'From: ' . ABSENDER,
    'Reply-To: =?UTF-8?B?' . base64_encode($vorname . ' ' . $nachname) . '?= <' . $email . '>',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    'MIME-Version: 1.0',
    'X-Mailer: atelier-aa.ch',
];

$erfolg = mail(
    EMPFAENGER,
    '=?UTF-8?B?' . base64_encode($titel) . '?=',
    $text,
    implode("\r\n", $kopf)
);

if (!$erfolg) {
    error_log('Kontaktformular: mail() ist fehlgeschlagen.');
    fehler('Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie an info@atelier-aa.ch.', 502);
}

echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
