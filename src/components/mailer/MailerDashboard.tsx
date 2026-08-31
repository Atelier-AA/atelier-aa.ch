'use client';

import { ChangeEvent, useEffect, useMemo, useState } from 'react';

type Contact = { email: string; firstName: string; lastName: string; company: string };
type BrevoList = { id: number; name: string; uniqueSubscribers?: number };
type Config = { configured: boolean; sender: { email: string; name: string; replyTo?: string }; folderName: string };
type StepStatus = 'idle' | 'busy' | 'ok' | 'error';

const DEFAULT_HTML = `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Atelier AA</title>
</head>
<body style="margin:0;background:#f5f5f2;color:#111;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5f5f2;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="680" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:680px;background:#fff;">
        <tr><td style="padding:42px 42px 16px;font-size:13px;letter-spacing:.14em;text-transform:uppercase;">Atelier AA Architekten</td></tr>
        <tr><td style="padding:16px 42px 8px;font-size:42px;line-height:1.05;font-weight:500;">Fünf Jahre Atelier AA.</td></tr>
        <tr><td style="padding:20px 42px 14px;font-size:18px;line-height:1.65;">Lieber {{ contact.FIRSTNAME }},</td></tr>
        <tr><td style="padding:0 42px 20px;font-size:18px;line-height:1.65;">heute blicken wir auf fünf Jahre intensive Arbeit, vielseitige Projekte und wertvolle Zusammenarbeit zurück.</td></tr>
        <tr><td style="padding:12px 42px 42px;"><a href="https://atelier-aa.ch" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:15px 20px;font-size:14px;">Atelier AA besuchen</a></td></tr>
        <tr><td style="padding:26px 42px 36px;border-top:1px solid #e7e7e2;font-size:12px;line-height:1.6;color:#777;">Atelier AA Architekten · <a href="{{ unsubscribe }}" style="color:#555;">Abmelden</a></td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

function normalizeHeader(value: string) {
  return value.trim().toLowerCase().replace(/[\s_.-]+/g, '');
}

function parseDelimited(text: string) {
  const firstLine = text.split(/\r?\n/, 1)[0] || '';
  const delimiter = (firstLine.match(/;/g)?.length || 0) > (firstLine.match(/,/g)?.length || 0) ? ';' : ',';
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      if (quoted && text[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      row.push(field); field = '';
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
    } else {
      field += char;
    }
  }
  row.push(field);
  if (row.some((cell) => cell.trim())) rows.push(row);
  return rows;
}

function csvToContacts(text: string) {
  const rows = parseDelimited(text);
  if (rows.length < 2) return [];
  const headers = rows[0].map(normalizeHeader);
  const find = (variants: string[]) => headers.findIndex((h) => variants.includes(h));
  const emailIndex = find(['email', 'emailadresse', 'emailaddress', 'mail', 'mailadresse']);
  const firstIndex = find(['vorname', 'firstname', 'first', 'fname', 'givenname']);
  const lastIndex = find(['nachname', 'lastname', 'last', 'lname', 'surname', 'familyname']);
  const companyIndex = find(['firma', 'company', 'unternehmen', 'organisation', 'organization']);
  if (emailIndex < 0) throw new Error('Keine E-Mail-Spalte erkannt. Bitte die Spalte z. B. „Email“ nennen.');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const seen = new Set<string>();
  return rows.slice(1).map((row) => ({
    email: (row[emailIndex] || '').trim().toLowerCase(),
    firstName: firstIndex >= 0 ? (row[firstIndex] || '').trim() : '',
    lastName: lastIndex >= 0 ? (row[lastIndex] || '').trim() : '',
    company: companyIndex >= 0 ? (row[companyIndex] || '').trim() : '',
  })).filter((contact) => emailRegex.test(contact.email)).filter((contact) => {
    if (seen.has(contact.email)) return false;
    seen.add(contact.email);
    return true;
  });
}

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { 'content-type': 'application/json', ...(init?.headers || {}) },
  });
  const data = await response.json().catch(() => ({}));
  if (response.status === 401) {
    window.location.href = '/mailer/login';
    throw new Error('Sitzung abgelaufen.');
  }
  if (!response.ok) throw new Error(data.error || `Fehler ${response.status}`);
  return data as T;
}

export default function MailerDashboard() {
  const [config, setConfig] = useState<Config | null>(null);
  const [lists, setLists] = useState<BrevoList[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [listName, setListName] = useState(`Jubiläum ${new Date().getFullYear()}`);
  const [selectedListId, setSelectedListId] = useState<number | ''>('');
  const [legalConfirmed, setLegalConfirmed] = useState(false);
  const [importProcessId, setImportProcessId] = useState<number | null>(null);
  const [importStatus, setImportStatus] = useState('');
  const [campaignName, setCampaignName] = useState(`Atelier AA Jubiläum ${new Date().getFullYear()}`);
  const [subject, setSubject] = useState('Fünf Jahre Atelier AA');
  const [previewText, setPreviewText] = useState('Ein persönlicher Rückblick und unser neuer Webauftritt.');
  const [html, setHtml] = useState(DEFAULT_HTML);
  const [testEmails, setTestEmails] = useState('');
  const [campaignId, setCampaignId] = useState<number | null>(null);
  const [testToken, setTestToken] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [status, setStatus] = useState<StepStatus>('idle');
  const [message, setMessage] = useState('');
  const [previewMobile, setPreviewMobile] = useState(false);

  const activeList = useMemo(() => lists.find((list) => list.id === selectedListId), [lists, selectedListId]);

  useEffect(() => {
    Promise.all([
      api<Config>('/api/mailer/config'),
      api<{ lists: BrevoList[] }>('/api/mailer/lists'),
    ]).then(([cfg, listData]) => {
      setConfig(cfg);
      setLists(listData.lists);
    }).catch((error) => {
      setStatus('error'); setMessage(error.message);
    });
  }, []);

  async function refreshLists() {
    const data = await api<{ lists: BrevoList[] }>('/api/mailer/lists');
    setLists(data.lists);
  }

  async function uploadCsv(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const parsed = csvToContacts(await file.text());
      if (!parsed.length) throw new Error('Keine gültigen Empfänger gefunden.');
      setContacts(parsed);
      setMessage(`${parsed.length.toLocaleString('de-CH')} eindeutige gültige E-Mail-Adressen erkannt.`);
      setStatus('ok');
      setCampaignId(null); setTestToken('');
    } catch (error) {
      setStatus('error'); setMessage(error instanceof Error ? error.message : 'CSV konnte nicht gelesen werden.');
    }
  }

  async function importContacts() {
    if (!contacts.length) return;
    const payloadBytes = new Blob([JSON.stringify({ contacts, listName, legalConfirmed })]).size;
    if (payloadBytes > 3_800_000) {
      setStatus('error'); setMessage('Diese Kontaktliste ist für einen einzelnen Vercel-Upload zu groß. Bitte die CSV in kleinere Dateien aufteilen.');
      return;
    }
    setStatus('busy'); setMessage('Kontakte werden an Brevo übergeben…');
    try {
      const data = await api<{ listId: number; processId: number; acceptedContacts: number; listName: string }>('/api/mailer/contacts/import', {
        method: 'POST',
        body: JSON.stringify({ contacts, listName, legalConfirmed }),
      });
      setSelectedListId(data.listId);
      setImportProcessId(data.processId);
      setImportStatus('queued');
      await refreshLists();
      setStatus('ok');
      setMessage(`${data.acceptedContacts.toLocaleString('de-CH')} Kontakte angenommen. Brevo verarbeitet den Import im Hintergrund.`);
    } catch (error) {
      setStatus('error'); setMessage(error instanceof Error ? error.message : 'Import fehlgeschlagen.');
    }
  }

  async function checkImport() {
    if (!importProcessId) return;
    setStatus('busy');
    try {
      const data = await api<{ status: string }>(`/api/mailer/process/${importProcessId}`);
      setImportStatus(data.status);
      await refreshLists();
      setStatus(data.status === 'completed' ? 'ok' : 'idle');
      setMessage(data.status === 'completed' ? 'Kontaktimport abgeschlossen.' : `Importstatus: ${data.status}`);
    } catch (error) {
      setStatus('error'); setMessage(error instanceof Error ? error.message : 'Statusabfrage fehlgeschlagen.');
    }
  }

  async function uploadHtml(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setHtml(await file.text());
    setCampaignId(null); setTestToken('');
  }

  async function createCampaign() {
    if (!selectedListId) { setStatus('error'); setMessage('Bitte zuerst eine Empfängerliste auswählen.'); return; }
    if (importProcessId && importStatus !== 'completed') {
      setStatus('error'); setMessage('Der aktuelle Kontaktimport ist noch nicht als abgeschlossen bestätigt. Bitte zuerst „Importstatus prüfen“ verwenden.'); return;
    }
    setStatus('busy'); setMessage('Brevo-Kampagnenentwurf wird erstellt…');
    try {
      const data = await api<{ campaignId: number }>('/api/mailer/campaigns', {
        method: 'POST',
        body: JSON.stringify({ name: campaignName, subject, previewText, html, listId: selectedListId }),
      });
      setCampaignId(data.campaignId); setTestToken('');
      setStatus('ok'); setMessage(`Kampagnenentwurf #${data.campaignId} wurde erstellt.`);
    } catch (error) {
      setStatus('error'); setMessage(error instanceof Error ? error.message : 'Entwurf konnte nicht erstellt werden.');
    }
  }

  async function sendTest() {
    if (!campaignId) return;
    const emailTo = testEmails.split(/[;,\s]+/).map((x) => x.trim()).filter(Boolean);
    setStatus('busy'); setMessage('Testmail wird versendet…');
    try {
      const data = await api<{ testToken: string; emailTo: string[] }>(`/api/mailer/campaigns/${campaignId}/test`, {
        method: 'POST', body: JSON.stringify({ emailTo }),
      });
      setTestToken(data.testToken);
      setStatus('ok'); setMessage(`Testmail an ${data.emailTo.join(', ')} versendet. Nach Prüfung ist der finale Versand freigeschaltet.`);
    } catch (error) {
      setStatus('error'); setMessage(error instanceof Error ? error.message : 'Testversand fehlgeschlagen.');
    }
  }

  async function sendNow() {
    if (!campaignId || !testToken) return;
    setStatus('busy'); setMessage('Finaler Versand wird an Brevo übergeben…');
    try {
      await api(`/api/mailer/campaigns/${campaignId}/send`, {
        method: 'POST', body: JSON.stringify({ confirm: confirmText, testToken }),
      });
      setStatus('ok'); setMessage(`Kampagne #${campaignId} wurde bei Brevo zum Versand eingeplant.`);
      setConfirmText('');
    } catch (error) {
      setStatus('error'); setMessage(error instanceof Error ? error.message : 'Versand fehlgeschlagen.');
    }
  }

  async function logout() {
    await fetch('/api/mailer/auth/logout', { method: 'POST' });
    window.location.href = '/mailer/login';
  }

  return (
    <div className="mailer-ui">
    <main className="app-shell">
      <header className="topbar">
        <div><span className="mini-brand">AA</span><span className="top-title">ATELIER AA — MAILING</span></div>
        <div className="top-actions"><span className="status-dot" /> Intern <button className="text-button" onClick={logout}>Abmelden</button></div>
      </header>

      <section className="hero">
        <p className="eyebrow">KOMMUNIKATION</p>
        <h1>Newsletter erstellen<br />und kontrolliert versenden.</h1>
        <p>Kontakte importieren, HTML gestalten, testen und über Brevo versenden. API-Schlüssel und Versandlogik bleiben serverseitig.</p>
      </section>

      {message && <div className={`notice ${status}`}>{status === 'busy' ? '● ' : ''}{message}</div>}

      <div className="grid">
        <section className="panel span-2">
          <div className="panel-head"><span>01</span><div><h2>Empfänger</h2><p>CSV einlesen und als separate Brevo-Liste importieren.</p></div></div>
          <div className="form-grid two">
            <label className="file-drop">
              <input type="file" accept=".csv,text/csv" onChange={uploadCsv} />
              <strong>CSV auswählen</strong>
              <span>Erkannt werden Email, Vorname, Nachname und Firma.</span>
            </label>
            <div className="metric-card"><span>Erkannte Empfänger</span><strong>{contacts.length.toLocaleString('de-CH')}</strong><small>Duplikate und ungültige Adressen werden entfernt.</small></div>
          </div>
          {contacts.length > 0 && (
            <div className="contact-preview">
              <div className="table-head"><span>E-Mail</span><span>Name</span><span>Firma</span></div>
              {contacts.slice(0, 6).map((c) => <div className="table-row" key={c.email}><span>{c.email}</span><span>{[c.firstName, c.lastName].filter(Boolean).join(' ') || '—'}</span><span>{c.company || '—'}</span></div>)}
              {contacts.length > 6 && <div className="table-more">+ {contacts.length - 6} weitere Kontakte</div>}
            </div>
          )}
          <div className="form-grid two compact-top">
            <label>Neue Listenbezeichnung<input value={listName} onChange={(e) => setListName(e.target.value)} /></label>
            <label>Vorhandene Brevo-Liste<select value={selectedListId} onChange={(e) => { setSelectedListId(e.target.value ? Number(e.target.value) : ''); setImportProcessId(null); setImportStatus(''); setCampaignId(null); setTestToken(''); }}><option value="">Bitte auswählen</option>{lists.map((list) => <option key={list.id} value={list.id}>{list.name}{typeof list.uniqueSubscribers === 'number' ? ` · ${list.uniqueSubscribers}` : ''}</option>)}</select></label>
          </div>
          <label className="check-row"><input type="checkbox" checked={legalConfirmed} onChange={(e) => setLegalConfirmed(e.target.checked)} /><span>Ich bestätige, dass die ausgewählten Empfänger für diesen Versand verwendet werden dürfen und eine Abmeldemöglichkeit vorhanden ist.</span></label>
          <div className="button-row"><button className="button button-dark" disabled={!contacts.length || !legalConfirmed || status === 'busy'} onClick={importContacts}>Als neue Brevo-Liste importieren</button><button className="button" onClick={refreshLists}>Listen aktualisieren</button>{importProcessId && <button className="button" onClick={checkImport}>Importstatus prüfen · {importStatus || 'offen'}</button>}</div>
        </section>

        <section className="panel">
          <div className="panel-head"><span>02</span><div><h2>Kampagne</h2><p>Metadaten und Absender.</p></div></div>
          <label>Kampagnenname<input value={campaignName} onChange={(e) => { setCampaignName(e.target.value); setCampaignId(null); setTestToken(''); }} /></label>
          <label>Betreff<input value={subject} onChange={(e) => { setSubject(e.target.value); setCampaignId(null); setTestToken(''); }} /></label>
          <label>Preheader<textarea rows={3} value={previewText} onChange={(e) => { setPreviewText(e.target.value); setCampaignId(null); setTestToken(''); }} /></label>
          <div className="sender-box"><span>Absender</span><strong>{config?.sender.name || '—'}</strong><small>{config?.sender.email || 'Noch nicht konfiguriert'}{config?.sender.replyTo ? ` · Antworten: ${config.sender.replyTo}` : ''}</small></div>
          <div className="sender-box"><span>Empfängerliste</span><strong>{activeList?.name || (selectedListId ? `Liste #${selectedListId}` : 'Noch nicht ausgewählt')}</strong><small>{activeList?.uniqueSubscribers ? `${activeList.uniqueSubscribers.toLocaleString('de-CH')} Kontakte laut Brevo` : 'Bitte Import abschließen bzw. Liste auswählen.'}</small></div>
        </section>

        <section className="panel span-2">
          <div className="panel-head"><span>03</span><div><h2>HTML Newsletter</h2><p>Bestehende HTML-Datei laden oder Code direkt bearbeiten.</p></div></div>
          <div className="editor-toolbar"><label className="button file-button"><input type="file" accept=".html,text/html" onChange={uploadHtml} />HTML-Datei laden</label><span className="code-hint">Personalisierung: <code>{'{{ contact.FIRSTNAME }}'}</code> · Abmeldung: <code>{'{{ unsubscribe }}'}</code></span></div>
          <textarea className="code-editor" spellCheck={false} value={html} onChange={(e) => { setHtml(e.target.value); setCampaignId(null); setTestToken(''); }} />
        </section>

        <section className="panel span-2">
          <div className="panel-head"><span>04</span><div><h2>Vorschau</h2><p>Browser-Vorschau. Echte Mailclients können geringfügig abweichen.</p></div></div>
          <div className="preview-toggle"><button className={!previewMobile ? 'active' : ''} onClick={() => setPreviewMobile(false)}>Desktop</button><button className={previewMobile ? 'active' : ''} onClick={() => setPreviewMobile(true)}>Mobile</button></div>
          <div className={`preview-frame-wrap ${previewMobile ? 'mobile' : ''}`}><iframe title="Newsletter Vorschau" sandbox="allow-popups" srcDoc={html} /></div>
        </section>

        <section className="panel span-2 danger-zone">
          <div className="panel-head"><span>05</span><div><h2>Test & Versand</h2><p>Dreistufig: Entwurf → Testmail → finale Freigabe.</p></div></div>
          <div className="send-flow">
            <div className="send-step"><b>1</b><div><h3>Brevo-Entwurf erstellen</h3><p>Erstellt noch keinen Massenversand.</p><button className="button button-dark" onClick={createCampaign} disabled={status === 'busy' || !selectedListId}>Entwurf erstellen</button>{campaignId && <small>Kampagnen-ID: #{campaignId}</small>}</div></div>
            <div className="send-step"><b>2</b><div><h3>Testmail senden</h3><p>Maximal fünf interne Testadressen.</p><input placeholder="name@atelier-aa.ch" value={testEmails} onChange={(e) => setTestEmails(e.target.value)} /><button className="button" onClick={sendTest} disabled={!campaignId || status === 'busy'}>Testmail senden</button>{testToken && <small className="verified">✓ Testversand bestätigt</small>}</div></div>
            <div className="send-step final"><b>3</b><div><h3>Final freigeben</h3><p>Erst nach erfolgreichem Test möglich. Zur Bestätigung exakt <strong>SENDEN</strong> eingeben.</p><input placeholder="SENDEN" value={confirmText} onChange={(e) => setConfirmText(e.target.value)} /><button className="button button-danger" onClick={sendNow} disabled={!testToken || confirmText !== 'SENDEN' || status === 'busy'}>Newsletter jetzt versenden</button></div></div>
          </div>
        </section>
      </div>

      <footer className="footer"><span>ATELIER AA — MAILING</span><span>Brevo API · Vercel Server Functions · geschützt</span></footer>
    </main>
    </div>
  );
}
