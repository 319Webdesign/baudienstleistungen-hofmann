import { NextResponse } from "next/server";

/**
 * Platzhalter-API für Kontaktanfragen.
 * Später: Validierung + Versand via Resend / SMTP / Formspree.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: Validierung (Zod) und E-Mail-Versand anbinden
    console.info("[contact] Anfrage empfangen:", body);

    return NextResponse.json({
      ok: true,
      message:
        "Anfrage empfangen (Platzhalter). E-Mail-Versand noch nicht angebunden.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Ungültige Anfrage." },
      { status: 400 },
    );
  }
}
