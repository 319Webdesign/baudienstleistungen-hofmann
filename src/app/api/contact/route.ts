import { NextResponse } from "next/server";
import { projectTypes } from "@/data/content";
import { MailConfigError, sendContactMail } from "@/lib/mail";

export const runtime = "nodejs";

const allowedProjectTypes = new Set<string>(projectTypes);

type ContactBody = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  location?: unknown;
  message?: unknown;
  privacy?: unknown;
};

function singleLine(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  const text = value.trim();
  if (!text || text.length > max || /[\r\n]/.test(text)) return "";
  return text;
}

function messageText(value: unknown): string {
  if (typeof value !== "string") return "";
  const text = value.replace(/\r\n/g, "\n").trim();
  if (!text || text.length > 5000) return "";
  return text;
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const name = singleLine(body.name, 120);
  const company = singleLine(body.company, 160);
  const email = singleLine(body.email, 160);
  const phone = singleLine(body.phone, 40);
  const projectType = singleLine(body.projectType, 80);
  const location = singleLine(body.location, 120);
  const message = messageText(body.message);

  if (!name) {
    return NextResponse.json(
      { ok: false, message: "Bitte geben Sie Ihren Namen an." },
      { status: 400 },
    );
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
      { status: 400 },
    );
  }

  if (!phone) {
    return NextResponse.json(
      { ok: false, message: "Bitte geben Sie Ihre Telefonnummer an." },
      { status: 400 },
    );
  }

  if (!projectType || !allowedProjectTypes.has(projectType)) {
    return NextResponse.json(
      { ok: false, message: "Bitte wählen Sie die Art des Projekts." },
      { status: 400 },
    );
  }

  if (!location) {
    return NextResponse.json(
      { ok: false, message: "Bitte geben Sie den Projektort an." },
      { status: 400 },
    );
  }

  if (!message) {
    return NextResponse.json(
      { ok: false, message: "Bitte beschreiben Sie kurz Ihr Vorhaben." },
      { status: 400 },
    );
  }

  if (body.privacy !== true) {
    return NextResponse.json(
      {
        ok: false,
        message: "Bitte stimmen Sie der Datenschutzerklärung zu.",
      },
      { status: 400 },
    );
  }

  if (body.company !== undefined && body.company !== "" && !company) {
    return NextResponse.json(
      { ok: false, message: "Der Firmenname ist ungültig." },
      { status: 400 },
    );
  }

  try {
    await sendContactMail({
      name,
      company,
      email,
      phone,
      projectType,
      location,
      message,
    });

    return NextResponse.json({
      ok: true,
      message: "Anfrage wurde gesendet.",
    });
  } catch (error) {
    const missingConfig =
      error instanceof MailConfigError ||
      (error instanceof Error && error.name === "MailConfigError");

    if (missingConfig) {
      console.error("[contact] SMTP nicht konfiguriert:", error.message);
      return NextResponse.json(
        {
          ok: false,
          message:
            "Der E-Mail-Versand ist serverseitig noch nicht vollständig eingerichtet. Bitte rufen Sie uns an.",
        },
        { status: 503 },
      );
    }

    console.error("[contact] Versand fehlgeschlagen");
    return NextResponse.json(
      {
        ok: false,
        message:
          "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.",
      },
      { status: 502 },
    );
  }
}
