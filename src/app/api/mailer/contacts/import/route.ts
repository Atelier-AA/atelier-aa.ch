import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/mailer/session';
import { brevo, getOrCreateMailerFolderId } from '@/lib/mailer/brevo';

type Contact = { email?: string; firstName?: string; lastName?: string; company?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Nicht gefunden.' }, { status: 404 });

  try {
    const body = await request.json() as { contacts?: Contact[]; listName?: string; legalConfirmed?: boolean };
    if (!body.legalConfirmed) {
      return NextResponse.json({ error: 'Bitte bestätige vor dem Import die Berechtigung zur Verwendung dieser Empfänger.' }, { status: 400 });
    }

    const listName = String(body.listName || '').trim().slice(0, 120);
    if (!listName) return NextResponse.json({ error: 'Bitte einen Listennamen angeben.' }, { status: 400 });

    const seen = new Set<string>();
    const contacts = (body.contacts || [])
      .map((contact) => ({
        email: String(contact.email || '').trim().toLowerCase(),
        firstName: String(contact.firstName || '').trim().slice(0, 100),
        lastName: String(contact.lastName || '').trim().slice(0, 100),
        company: String(contact.company || '').trim().slice(0, 160),
      }))
      .filter((contact) => EMAIL.test(contact.email))
      .filter((contact) => {
        if (seen.has(contact.email)) return false;
        seen.add(contact.email);
        return true;
      });

    if (!contacts.length) return NextResponse.json({ error: 'Keine gültigen E-Mail-Adressen gefunden.' }, { status: 400 });
    if (contacts.length > 20000) return NextResponse.json({ error: 'Maximal 20.000 Kontakte pro Import in dieser Web-App.' }, { status: 400 });

    const jsonBody = contacts.map((contact) => ({
      email: contact.email,
      attributes: {
        ...(contact.firstName ? { FIRSTNAME: contact.firstName } : {}),
        ...(contact.lastName ? { LASTNAME: contact.lastName } : {}),
        ...(contact.company ? { COMPANY: contact.company } : {}),
      },
    }));

    const size = Buffer.byteLength(JSON.stringify(jsonBody), 'utf8');
    if (size > 3_800_000) {
      return NextResponse.json({ error: 'Der Import ist für ein einzelnes Vercel-Request zu groß. Bitte die CSV in kleinere Dateien aufteilen.' }, { status: 413 });
    }

    const folderId = await getOrCreateMailerFolderId();
    const list = await brevo<{ id: number }>('/contacts/lists', {
      method: 'POST',
      body: JSON.stringify({ name: listName, folderId }),
    });

    const process = await brevo<{ processId: number }>('/contacts/import', {
      method: 'POST',
      body: JSON.stringify({
        listIds: [list.id],
        jsonBody,
        updateExistingContacts: true,
        emptyContactsAttributes: false,
        emailBlacklist: false,
        smsBlacklist: false,
        disableNotification: true,
      }),
    });

    return NextResponse.json({
      ok: true,
      listId: list.id,
      listName,
      processId: process.processId,
      acceptedContacts: contacts.length,
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Kontaktimport fehlgeschlagen.' }, { status: 502 });
  }
}

/**
 * Andere Methoden bekommen 404 statt des voreingestellten 405. Ein 405
 * bestaetigt, dass die Route existiert; das braucht ein interner Bereich nicht
 * zu verraten.
 */
export async function GET() {
  return new NextResponse(null, { status: 404 });
}
