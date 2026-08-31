<?php
/**
 * Brevo-Anbindung für den Mailer bei Hostpoint.
 *
 * Nur HTTP-Aufrufe gegen die Brevo-API, kein SDK. Damit läuft es auf jedem
 * PHP mit cURL, ohne Composer und ohne Abhängigkeiten, die gepflegt werden
 * müssten.
 */

declare(strict_types=1);

const BREVO_API = 'https://api.brevo.com/v3';

/**
 * Ruft die Brevo-API auf und gibt die Antwort als Feld zurück.
 *
 * @throws RuntimeException wenn Brevo einen Fehler meldet
 */
function brevo(string $pfad, string $methode = 'GET', ?array $daten = null): array
{
    $ch = curl_init(BREVO_API . $pfad);
    $kopf = [
        'accept: application/json',
        'content-type: application/json',
        'api-key: ' . BREVO_API_KEY,
    ];
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST  => $methode,
        CURLOPT_HTTPHEADER     => $kopf,
        CURLOPT_TIMEOUT        => 60,
    ]);
    if ($daten !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($daten, JSON_UNESCAPED_UNICODE));
    }

    $antwort = curl_exec($ch);
    if ($antwort === false) {
        $grund = curl_error($ch);
        curl_close($ch);
        throw new RuntimeException('Brevo nicht erreichbar: ' . $grund);
    }
    $code = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);

    $inhalt = json_decode((string) $antwort, true);
    if (!is_array($inhalt)) {
        $inhalt = [];
    }
    if ($code >= 400) {
        throw new RuntimeException(
            'Brevo meldet einen Fehler (' . $code . '): ' . ($inhalt['message'] ?? 'unbekannt')
        );
    }
    return $inhalt;
}

/** Ordner für die Listen anlegen oder den bestehenden finden. */
function brevoOrdnerId(): int
{
    $ordner = brevo('/contacts/folders?limit=50&offset=0');
    foreach ($ordner['folders'] ?? [] as $eintrag) {
        if (($eintrag['name'] ?? '') === BREVO_ORDNER) {
            return (int) $eintrag['id'];
        }
    }
    $neu = brevo('/contacts/folders', 'POST', ['name' => BREVO_ORDNER]);
    return (int) $neu['id'];
}

function brevoListeAnlegen(string $name): int
{
    $liste = brevo('/contacts/lists', 'POST', [
        'name'     => $name,
        'folderId' => brevoOrdnerId(),
    ]);
    return (int) $liste['id'];
}

/**
 * Kontakte aus einer CSV in die Liste importieren.
 *
 * Brevo verarbeitet den Import im Hintergrund. Die Rückgabe ist deshalb die
 * Zahl der übergebenen Zeilen, nicht die der tatsächlich angelegten
 * Kontakte — den Stand zeigt Brevo unter Kontakte, Importe.
 */
function brevoKontakteImportieren(int $listeId, string $csvInhalt): int
{
    $zeilen = preg_split('/\r\n|\r|\n/', trim($csvInhalt)) ?: [];
    if (count($zeilen) < 2) {
        throw new RuntimeException('Die CSV enthält keine Datenzeilen.');
    }

    // Kopfzeile auf die Attributnamen in Brevo übersetzen
    $kopf = array_map(
        static fn(string $s): string => strtoupper(trim($s, " \t\"'\xEF\xBB\xBF")),
        explode(',', array_shift($zeilen))
    );
    $karte = ['EMAIL' => 'EMAIL', 'VORNAME' => 'FIRSTNAME', 'NACHNAME' => 'LASTNAME', 'FIRMA' => 'COMPANY'];
    $spalten = array_map(static fn(string $s): string => $karte[$s] ?? $s, $kopf);
    if (!in_array('EMAIL', $spalten, true)) {
        throw new RuntimeException('In der CSV fehlt die Spalte Email.');
    }

    $csv = implode(';', $spalten) . "\n";
    $anzahl = 0;
    foreach ($zeilen as $zeile) {
        if (trim($zeile) === '') {
            continue;
        }
        // Semikolon als Trenner, weil Brevo das erwartet; Semikolons in den
        // Werten selbst werden entfernt, damit die Spalten nicht verrutschen.
        $felder = array_map(
            static fn(string $s): string => str_replace(';', ' ', trim($s, " \t\"'")),
            str_getcsv($zeile)
        );
        $csv .= implode(';', $felder) . "\n";
        $anzahl++;
    }

    brevo('/contacts/import', 'POST', [
        'fileBody'            => $csv,
        'listIds'             => [$listeId],
        'emailBlacklist'      => false,
        'smsBlacklist'        => false,
        'updateExistingContacts' => true,
        'emptyContactsAttributes' => false,
    ]);

    return $anzahl;
}

/** Abmeldelink sicherstellen, falls im HTML keiner steht. */
function abmeldelinkSicherstellen(string $html): string
{
    if (preg_match('/\{\{\s*unsubscribe\s*\}\}/i', $html)) {
        return $html;
    }
    $fuss = "\n<div style=\"margin:40px auto 0;max-width:680px;padding:24px 20px;"
          . "font:12px/1.5 Arial,sans-serif;color:#777;border-top:1px solid #e8e8e8;"
          . "text-align:center\">Sie möchten keine weiteren Nachrichten dieser Art "
          . "erhalten? <a href=\"{{ unsubscribe }}\" style=\"color:#555\">Abmelden</a>.</div>\n";
    return preg_match('#</body>#i', $html)
        ? preg_replace('#</body>#i', $fuss . '</body>', $html, 1)
        : $html . $fuss;
}

function brevoKampagneAnlegen(string $betreff, string $vorschau, string $html, int $listeId): int
{
    if ($betreff === '') {
        throw new RuntimeException('Der Betreff fehlt.');
    }
    $kampagne = brevo('/emailCampaigns', 'POST', [
        'name'       => $betreff . ' (' . date('d.m.Y H:i') . ')',
        'subject'    => $betreff,
        'previewText' => $vorschau,
        'sender'     => ['name' => ABSENDER_NAME, 'email' => ABSENDER_EMAIL],
        'replyTo'    => ANTWORT_EMAIL,
        'htmlContent' => abmeldelinkSicherstellen($html),
        'recipients' => ['listIds' => [$listeId]],
    ]);
    return (int) $kampagne['id'];
}

function brevoTestmail(int $kampagneId, array $adressen): void
{
    brevo('/emailCampaigns/' . $kampagneId . '/sendTest', 'POST', ['emailTo' => $adressen]);
}

function brevoSenden(int $kampagneId): void
{
    brevo('/emailCampaigns/' . $kampagneId . '/sendNow', 'POST', []);
}
