import "server-only";

import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/siteConfig";

const DEFAULT_SMTP_HOST = "smtp.web.de";
const DEFAULT_SMTP_PORT = 587;

export class MailConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MailConfigError";
  }
}

export type ContactMail = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new MailConfigError(`Umgebungsvariable ${name} fehlt.`);
  }
  return value;
}

function mailConfig() {
  const port = Number(process.env.SMTP_PORT ?? DEFAULT_SMTP_PORT);
  if (!Number.isInteger(port) || port <= 0) {
    throw new MailConfigError("SMTP_PORT ist ungültig.");
  }

  const user = process.env.SMTP_USER?.trim() || siteConfig.contact.email;

  return {
    host: process.env.SMTP_HOST?.trim() || DEFAULT_SMTP_HOST,
    port,
    user,
    pass: requireEnv("SMTP_PASSWORD"),
    from: process.env.MAIL_FROM?.trim() || user,
    to: process.env.MAIL_TO?.trim() || siteConfig.contact.email,
  };
}

export async function sendContactMail(input: ContactMail) {
  const config = mailConfig();
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    requireTLS: config.port === 587,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      minVersion: "TLSv1.2",
    },
  });

  const lines = [
    "Neue Kontaktanfrage über die Website",
    "",
    `Name: ${input.name}`,
  ];

  if (input.company) {
    lines.push(`Unternehmen: ${input.company}`);
  }

  lines.push(
    `E-Mail: ${input.email}`,
    `Telefon: ${input.phone}`,
    `Art des Projekts: ${input.projectType}`,
    `Projektort: ${input.location}`,
    "",
    "Nachricht:",
    input.message,
  );

  await transporter.sendMail({
    from: {
      name: siteConfig.name,
      address: config.from,
    },
    to: config.to,
    replyTo: input.email,
    envelope: {
      from: config.from,
      to: config.to,
    },
    subject: `Neue Kontaktanfrage: ${input.name}`,
    text: lines.join("\n"),
  });
}
