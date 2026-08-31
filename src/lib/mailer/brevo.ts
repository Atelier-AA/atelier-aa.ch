const API = 'https://api.brevo.com/v3';

function apiKey() {
  const key = process.env.BREVO_API_KEY;
  if (!key) throw new Error('BREVO_API_KEY ist nicht konfiguriert.');
  return key;
}

export async function brevo<T = unknown>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API}${path}`, {
    ...init,
    cache: 'no-store',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey(),
      ...(init.headers || {}),
    },
  });

  const raw = await response.text();
  let data: unknown = null;
  if (raw) {
    try { data = JSON.parse(raw); } catch { data = raw; }
  }

  if (!response.ok) {
    const message = typeof data === 'object' && data && 'message' in data
      ? String((data as { message?: unknown }).message)
      : `Brevo API Fehler ${response.status}`;
    throw new Error(message);
  }

  return data as T;
}

export function senderConfig() {
  const email = process.env.BREVO_SENDER_EMAIL;
  const name = process.env.BREVO_SENDER_NAME || 'Atelier AA Architekten';
  const replyTo = process.env.BREVO_REPLY_TO || email;
  if (!email) throw new Error('BREVO_SENDER_EMAIL ist nicht konfiguriert.');
  return { email, name, replyTo };
}

export function ensureUnsubscribe(html: string) {
  if (/\{\{\s*unsubscribe\s*\}\}/i.test(html)) return html;
  const footer = `\n<div style="margin:40px auto 0;max-width:680px;padding:24px 20px;font:12px/1.5 Arial,sans-serif;color:#777;border-top:1px solid #e8e8e8;text-align:center">\n  Sie möchten keine weiteren Nachrichten dieser Art erhalten? <a href="{{ unsubscribe }}" style="color:#555">Abmelden</a>.\n</div>\n`;
  return /<\/body>/i.test(html) ? html.replace(/<\/body>/i, `${footer}</body>`) : `${html}${footer}`;
}

export type BrevoList = { id: number; name: string; folderId?: number; uniqueSubscribers?: number };

export async function getOrCreateMailerFolderId() {
  const folderName = process.env.BREVO_MAILER_FOLDER_NAME || 'Atelier AA Mailings';
  const folders = await brevo<{ folders?: Array<{ id: number; name: string }> }>('/contacts/folders?limit=50&offset=0&sort=desc');
  const existing = folders.folders?.find((folder) => folder.name === folderName);
  if (existing) return existing.id;
  const created = await brevo<{ id: number }>('/contacts/folders', {
    method: 'POST',
    body: JSON.stringify({ name: folderName }),
  });
  return created.id;
}
