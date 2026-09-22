"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { projectTypes } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

type FormState = "idle" | "submitting" | "success" | "error";

/**
 * Kontaktformular. Sendet an /api/contact und von dort per SMTP an das Postfach.
 */
export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      location: String(formData.get("location") ?? ""),
      message: String(formData.get("message") ?? ""),
      privacy: formData.get("privacy") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(
          data.message ??
            "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        );
      }

      form.reset();
      setState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-xl border border-orange/20 bg-white p-8 text-center shadow-sm"
        role="status"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-orange" aria-hidden />
        <h3 className="mt-4 text-xl font-bold text-anthracite">
          Anfrage erhalten
        </h3>
        <p className="mt-3 text-muted leading-relaxed">
          Vielen Dank. {siteConfig.owner} meldet sich persönlich bei Ihnen.
        </p>
        <Button
          type="button"
          className="mt-6"
          onClick={() => setState("idle")}
        >
          Weitere Anfrage senden
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl bg-white p-6 shadow-[0_8px_30px_rgba(28,31,33,0.06)] sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Ihr Name"
          />
        </Field>
        <Field label="Unternehmen" htmlFor="company" optional>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Optional"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="E-Mail" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="name@beispiel.de"
          />
        </Field>
        <Field label="Telefonnummer" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="Ihre Telefonnummer"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Art des Projekts" htmlFor="projectType" required>
          <select
            id="projectType"
            name="projectType"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Projektort" htmlFor="location" required>
          <input
            id="location"
            name="location"
            type="text"
            required
            className={inputClass}
            placeholder="Ort / PLZ"
          />
        </Field>
      </div>

      <Field label="Nachricht" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cnTextarea}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben …"
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 h-4 w-4 rounded border-anthracite/30 text-orange focus:ring-orange"
        />
        <span>
          Ich habe die{" "}
          <a
            href="/datenschutz"
            className="font-medium text-orange underline-offset-2 hover:underline"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung
          der Anfrage zu. <span className="text-orange">*</span>
        </span>
      </label>

      {state === "error" ? (
        <p
          role="alert"
          className="rounded-md border border-orange/30 bg-orange/5 px-4 py-3 text-sm text-anthracite"
        >
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Wird gesendet …
          </>
        ) : (
          "Anfrage senden"
        )}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-anthracite/15 bg-surface/50 px-4 py-3 text-ink transition-colors placeholder:text-muted/70 focus:border-orange focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange/20";

const cnTextarea = `${inputClass} resize-y min-h-[120px]`;

function Field({
  label,
  htmlFor,
  required,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-anthracite"
      >
        {label}
        {required ? <span className="text-orange"> *</span> : null}
        {optional ? (
          <span className="font-normal text-muted"> (optional)</span>
        ) : null}
      </label>
      {children}
    </div>
  );
}
