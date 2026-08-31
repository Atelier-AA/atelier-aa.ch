<?php
/**
 * Mailer für den Betrieb bei Hostpoint.
 *
 * Ersetzt den Next.js-Mailer, der Node.js braucht und auf Hostpoint
 * Webhosting nicht laufen kann. Gleicher Ablauf, andere Technik:
 *
 *   Anmelden über Einmal-Link  →  Empfängerliste hochladen  →  HTML laden
 *   →  Entwurf erstellen  →  Testmail  →  Versand
 *
 * Die Anmeldung braucht kein Passwort. Der Link aus der E-Mail und ein
 * Cookie im anfordernden Browser müssen beide stimmen; wer nur die Mail
 * mitliest, kommt nicht hinein.
 *
 * Ehrlicher Hinweis: Brevo kann Listenimport, HTML einfügen, Testmail und
 * Versand auch selbst. Für eine einzige Mail pro Jahr ist der Weg über
 * brevo.com der geringere Aufwand. Dieser Mailer ist bequemer, wenn es
 * regelmässig wird.
 */

declare(strict_types=1);

// Ohne konfig.php gaebe es einen nackten Fatal Error. Lieber ein Satz, der
// sagt, was zu tun ist.
if (!is_file(__DIR__ . '/konfig.php')) {
    http_response_code(503);
    header('Content-Type: text/html; charset=utf-8');
    exit('<!DOCTYPE html><html lang="de"><meta charset="utf-8">'
       . '<title>Mailer nicht eingerichtet</title>'
       . '<body style="font:15px/1.6 Arial,sans-serif;max-width:560px;margin:80px auto;padding:0 24px">'
       . '<p>Der Mailer ist noch nicht eingerichtet.</p>'
       . '<p>Datei <code>konfig.beispiel.php</code> nach <code>konfig.php</code> '
       . 'kopieren, Brevo-Schlüssel und Geheimnis eintragen, hochladen.</p>');
}

require __DIR__ . '/konfig.php';
require __DIR__ . '/brevo.php';

session_name('atelier_aa_mailer');
session_start([
    'cookie_httponly' => true,
    'cookie_samesite' => 'Lax',
    'cookie_secure'   => ($_SERVER['HTTPS'] ?? '') === 'on',
]);

const ANFRAGE_COOKIE = 'atelier_aa_mailer_anfrage';
const LINK_GUELTIG   = 900;   // 15 Minuten

// ---------------------------------------------------------------------------
// Anmeldung
// ---------------------------------------------------------------------------

function signieren(string $wert): string
{
    return rtrim(strtr(base64_encode(hash_hmac('sha256', $wert, GEHEIMNIS, true)), '+/', '-_'), '=');
}

function angemeldet(): bool
{
    return ($_SESSION['angemeldet'] ?? '') === ADMIN_EMAIL;
}

function csrf(): string
{
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(16));
    }
    return $_SESSION['csrf'];
}

function csrfPruefen(): void
{
    if (!hash_equals($_SESSION['csrf'] ?? '', $_POST['csrf'] ?? '')) {
        http_response_code(400);
        exit('Sitzung abgelaufen. Bitte Seite neu laden.');
    }
}

/** Einmal-Link anfordern und per Mail zustellen. */
function linkAnfordern(string $email): void
{
    // Antwort ist immer dieselbe, damit sich nicht herausfinden lässt,
    // welche Adresse Zugang hat.
    if (strtolower(trim($email)) !== strtolower(ADMIN_EMAIL)) {
        return;
    }
    $nonce = rtrim(strtr(base64_encode(random_bytes(24)), '+/', '-_'), '=');
    $ablauf = time() + LINK_GUELTIG;
    $nutzlast = $nonce . '|' . $ablauf;
    $token = $nutzlast . '.' . signieren($nutzlast);

    setcookie(ANFRAGE_COOKIE, $nonce, [
        'expires'  => $ablauf,
        'path'     => '/',
        'httponly' => true,
        'samesite' => 'Lax',
        'secure'   => ($_SERVER['HTTPS'] ?? '') === 'on',
    ]);

    $link = BASIS_URL . '/mailer-php/?token=' . urlencode($token);
    $text = "Anmeldung am Mailing-Bereich von atelier-aa.ch.\n\n$link\n\n"
          . "Der Link ist 15 Minuten gültig und funktioniert nur in dem Browser,\n"
          . "in dem er angefordert wurde.\n\n"
          . "Wurde diese Anmeldung nicht von Ihnen angefordert, ignorieren Sie\n"
          . "diese Nachricht. Ohne den Link passiert nichts.\n";

    mail(
        ADMIN_EMAIL,
        '=?UTF-8?B?' . base64_encode('Anmeldelink Mailing') . '?=',
        $text,
        implode("\r\n", [
            'From: ' . ABSENDER,
            'Content-Type: text/plain; charset=utf-8',
            'MIME-Version: 1.0',
        ])
    );
}

/** Einmal-Link einlösen. */
function linkEinloesen(string $token): bool
{
    $teile = explode('.', $token, 2);
    if (count($teile) !== 2) {
        return false;
    }
    [$nutzlast, $signatur] = $teile;
    if (!hash_equals(signieren($nutzlast), $signatur)) {
        return false;
    }
    [$nonce, $ablauf] = array_pad(explode('|', $nutzlast, 2), 2, '0');
    if ((int) $ablauf < time()) {
        return false;
    }
    if (!hash_equals($_COOKIE[ANFRAGE_COOKIE] ?? '', $nonce)) {
        return false;
    }
    session_regenerate_id(true);
    $_SESSION['angemeldet'] = ADMIN_EMAIL;
    setcookie(ANFRAGE_COOKIE, '', ['expires' => 1, 'path' => '/']);
    return true;
}

// ---------------------------------------------------------------------------
// Anfragen abarbeiten
// ---------------------------------------------------------------------------

$meldung = '';
$fehler  = '';

if (isset($_GET['token'])) {
    if (linkEinloesen((string) $_GET['token'])) {
        header('Location: ' . BASIS_URL . '/mailer-php/');
        exit;
    }
    $fehler = 'Der Anmeldelink ist ungültig oder abgelaufen.';
}

if (($_POST['tat'] ?? '') === 'abmelden') {
    session_destroy();
    header('Location: ' . BASIS_URL . '/mailer-php/');
    exit;
}

if (($_POST['tat'] ?? '') === 'anfordern') {
    linkAnfordern((string) ($_POST['email'] ?? ''));
    $meldung = 'Wenn die Adresse zugelassen ist, liegt jetzt ein Anmeldelink im Postfach.';
}

if (angemeldet() && ($_POST['tat'] ?? '') !== '') {
    csrfPruefen();
    try {
        switch ($_POST['tat']) {
            case 'liste-import':
                if (!isset($_FILES['csv']) || $_FILES['csv']['error'] !== UPLOAD_ERR_OK) {
                    throw new RuntimeException('Keine Datei empfangen.');
                }
                $name = trim((string) ($_POST['listenname'] ?? '')) ?: 'Atelier AA Mailing';
                $listeId = brevoListeAnlegen($name);
                $anzahl = brevoKontakteImportieren($listeId, (string) file_get_contents($_FILES['csv']['tmp_name']));
                $_SESSION['liste'] = ['id' => $listeId, 'name' => $name, 'anzahl' => $anzahl];
                $meldung = "Liste «$name» angelegt, $anzahl Adressen übergeben. Brevo verarbeitet den Import im Hintergrund.";
                break;

            case 'kampagne':
                if (empty($_SESSION['liste']['id'])) {
                    throw new RuntimeException('Zuerst eine Empfängerliste hochladen.');
                }
                if (!isset($_FILES['html']) || $_FILES['html']['error'] !== UPLOAD_ERR_OK) {
                    throw new RuntimeException('Keine HTML-Datei empfangen.');
                }
                $html = (string) file_get_contents($_FILES['html']['tmp_name']);
                if (!str_contains($html, '{{ unsubscribe }}') && !str_contains($html, '{{unsubscribe}}')) {
                    throw new RuntimeException('Im HTML fehlt der Abmeldelink {{ unsubscribe }}. Ohne den darf nicht versendet werden.');
                }
                $_SESSION['kampagne'] = brevoKampagneAnlegen(
                    trim((string) ($_POST['betreff'] ?? '')),
                    trim((string) ($_POST['vorschau'] ?? '')),
                    $html,
                    (int) $_SESSION['liste']['id']
                );
                $meldung = 'Entwurf in Brevo angelegt. Jetzt eine Testmail schicken.';
                break;

            case 'test':
                if (empty($_SESSION['kampagne'])) {
                    throw new RuntimeException('Kein Entwurf vorhanden.');
                }
                $adressen = array_values(array_filter(array_map(
                    'trim',
                    explode(',', (string) ($_POST['testadressen'] ?? ''))
                )));
                if (!$adressen) {
                    throw new RuntimeException('Keine Testadresse angegeben.');
                }
                brevoTestmail((int) $_SESSION['kampagne'], $adressen);
                $_SESSION['getestet'] = true;
                $meldung = 'Testmail verschickt. Bitte auf dem Handy und im Webmail prüfen: Anrede, Bilder, Abmeldelink.';
                break;

            case 'senden':
                if (empty($_SESSION['kampagne'])) {
                    throw new RuntimeException('Kein Entwurf vorhanden.');
                }
                if (empty($_SESSION['getestet'])) {
                    throw new RuntimeException('Bitte zuerst eine Testmail verschicken und prüfen.');
                }
                if (($_POST['bestaetigung'] ?? '') !== 'SENDEN') {
                    throw new RuntimeException('Zur Bestätigung SENDEN eingeben.');
                }
                brevoSenden((int) $_SESSION['kampagne']);
                $meldung = 'Versand ausgelöst. Der Fortschritt steht in Brevo unter Kampagnen.';
                unset($_SESSION['kampagne'], $_SESSION['getestet']);
                break;
        }
    } catch (Throwable $e) {
        $fehler = $e->getMessage();
    }
}

$liste    = $_SESSION['liste'] ?? null;
$kampagne = $_SESSION['kampagne'] ?? null;
$getestet = !empty($_SESSION['getestet']);

?><!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>Atelier AA — Mailing</title>
<style>
  :root { --ink:#111; --stone:#6b6b6b; --linie:#e2e2df; --flaeche:#f5f5f4; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--flaeche); color:var(--ink);
         font:15px/1.6 -apple-system, "Helvetica Neue", Arial, sans-serif; }
  main { max-width:720px; margin:0 auto; padding:48px 24px 96px; }
  .marke { font-size:11px; letter-spacing:3px; text-transform:uppercase; color:var(--stone); }
  h1 { font-size:28px; font-weight:400; letter-spacing:-.02em; margin:14px 0 4px; }
  h2 { font-size:15px; font-weight:600; margin:0 0 12px; }
  .karte { background:#fff; border:1px solid var(--linie); padding:24px; margin-top:20px; }
  .karte[data-aus] { opacity:.45; }
  label { display:block; font-size:13px; color:var(--stone); margin:14px 0 4px; }
  input, textarea, button { font:inherit; }
  input[type=text], input[type=email], input[type=file], textarea {
    width:100%; padding:10px 12px; border:1px solid var(--linie); background:#fff; }
  button { margin-top:18px; padding:11px 22px; background:var(--ink); color:#fff;
           border:0; cursor:pointer; font-size:12px; letter-spacing:1.5px;
           text-transform:uppercase; }
  button.leise { background:transparent; color:var(--ink); border:1px solid var(--linie); }
  .hinweis, .warnung { padding:12px 14px; margin-top:18px; font-size:14px; }
  .hinweis { background:#f0f4f0; border-left:3px solid #4a7a4a; }
  .warnung { background:#faf0f0; border-left:3px solid #a61b1b; }
  .stand { font-size:13px; color:var(--stone); }
  .kopf { display:flex; justify-content:space-between; align-items:baseline; }
  .kopf form { margin:0; }
  .kopf button { margin:0; }
</style>
</head>
<body>
<main>

<?php if (!angemeldet()): ?>

  <p class="marke">Atelier AA — intern</p>
  <h1>Mailing</h1>
  <p class="stand">Geben Sie Ihre Adresse ein. Sie erhalten einen Anmeldelink
  per E-Mail, ein Passwort gibt es nicht.</p>

  <?php if ($meldung): ?><div class="hinweis"><?= htmlspecialchars($meldung) ?></div><?php endif; ?>
  <?php if ($fehler):  ?><div class="warnung"><?= htmlspecialchars($fehler) ?></div><?php endif; ?>

  <div class="karte">
    <form method="post">
      <input type="hidden" name="tat" value="anfordern">
      <label for="email">E-Mail</label>
      <input id="email" type="email" name="email" required autocomplete="email">
      <button>Anmeldelink senden</button>
    </form>
  </div>

<?php else: ?>

  <div class="kopf">
    <div>
      <p class="marke">Atelier AA — intern</p>
      <h1>Mailing</h1>
    </div>
    <form method="post">
      <input type="hidden" name="csrf" value="<?= csrf() ?>">
      <input type="hidden" name="tat" value="abmelden">
      <button class="leise">Abmelden</button>
    </form>
  </div>

  <?php if ($meldung): ?><div class="hinweis"><?= htmlspecialchars($meldung) ?></div><?php endif; ?>
  <?php if ($fehler):  ?><div class="warnung"><?= htmlspecialchars($fehler) ?></div><?php endif; ?>

  <div class="karte">
    <h2>1. Empfängerliste</h2>
    <p class="stand">CSV mit den Spalten Email, Vorname, Nachname, Firma.
    Vorher mit <code>liste-filtern.py</code> bereinigen: Rollenadressen,
    Behörden und Architekturbüros gehören nicht in den Versand.</p>
    <form method="post" enctype="multipart/form-data">
      <input type="hidden" name="csrf" value="<?= csrf() ?>">
      <input type="hidden" name="tat" value="liste-import">
      <label for="listenname">Listenname in Brevo</label>
      <input id="listenname" type="text" name="listenname" value="Jubiläum 2026">
      <label for="csv">CSV-Datei</label>
      <input id="csv" type="file" name="csv" accept=".csv,text/csv" required>
      <button>Liste anlegen und importieren</button>
    </form>
    <?php if ($liste): ?>
      <div class="hinweis">Aktive Liste: <strong><?= htmlspecialchars($liste['name']) ?></strong>
      (Nummer <?= (int) $liste['id'] ?>, <?= (int) $liste['anzahl'] ?> Adressen übergeben)</div>
    <?php endif; ?>
  </div>

  <div class="karte"<?= $liste ? '' : ' data-aus' ?>>
    <h2>2. Entwurf</h2>
    <p class="stand">Das HTML muss <code>{{ unsubscribe }}</code> enthalten,
    sonst wird der Entwurf abgelehnt. Ein Abmeldelink ist Pflicht.</p>
    <form method="post" enctype="multipart/form-data">
      <input type="hidden" name="csrf" value="<?= csrf() ?>">
      <input type="hidden" name="tat" value="kampagne">
      <label for="betreff">Betreff</label>
      <input id="betreff" type="text" name="betreff" required
             value="Fünf Jahre Atelier AA — und ein Dank an Sie">
      <label for="vorschau">Vorschautext</label>
      <input id="vorschau" type="text" name="vorschau"
             value="Fünf Jahre Atelier AA — danke für Ihr Vertrauen. Und unser neuer Webauftritt ist online.">
      <label for="html">HTML-Datei</label>
      <input id="html" type="file" name="html" accept=".html,text/html" required>
      <button<?= $liste ? '' : ' disabled' ?>>Entwurf in Brevo anlegen</button>
    </form>
    <?php if ($kampagne): ?>
      <div class="hinweis">Entwurf angelegt, Nummer <?= (int) $kampagne ?></div>
    <?php endif; ?>
  </div>

  <div class="karte"<?= $kampagne ? '' : ' data-aus' ?>>
    <h2>3. Testmail</h2>
    <p class="stand">An die eigene Adresse und an eine Gmail- oder
    Outlook-Adresse schicken. Prüfen: Anrede mit und ohne Name, Bilder
    sichtbar, Abmeldelink, Ansicht auf dem Handy.</p>
    <form method="post">
      <input type="hidden" name="csrf" value="<?= csrf() ?>">
      <input type="hidden" name="tat" value="test">
      <label for="testadressen">Adressen, mit Komma getrennt</label>
      <input id="testadressen" type="text" name="testadressen"
             value="<?= htmlspecialchars(ADMIN_EMAIL) ?>" required>
      <button<?= $kampagne ? '' : ' disabled' ?>>Testmail schicken</button>
    </form>
  </div>

  <div class="karte"<?= $getestet ? '' : ' data-aus' ?>>
    <h2>4. Versand</h2>
    <p class="stand">Der Versand lässt sich nicht zurückholen. Zur
    Bestätigung SENDEN in Grossbuchstaben eingeben.</p>
    <form method="post" onsubmit="return confirm('Wirklich an die gesamte Liste senden?');">
      <input type="hidden" name="csrf" value="<?= csrf() ?>">
      <input type="hidden" name="tat" value="senden">
      <label for="bestaetigung">Bestätigung</label>
      <input id="bestaetigung" type="text" name="bestaetigung" placeholder="SENDEN" required>
      <button<?= $getestet ? '' : ' disabled' ?>>Jetzt senden</button>
    </form>
  </div>

<?php endif; ?>

</main>
</body>
</html>
