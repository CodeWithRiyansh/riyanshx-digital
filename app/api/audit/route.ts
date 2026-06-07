import { NextResponse } from "next/server";
import { site } from "../../../src/lib/site";

export async function POST(request: Request) {
  const payload = await request.json();

  const message = [
    "Hi RiyanshX Digital, I want a free growth audit.",
    `Name: ${payload.name ?? ""}`,
    `Phone: ${payload.phone ?? ""}`,
    `Business: ${payload.business ?? ""}`,
    `Monthly ad budget: ${payload.budget ?? ""}`,
    `Current leads/month: ${payload.leads ?? ""}`,
    `Biggest problem: ${payload.problem ?? ""}`,
    `Preferred callback: ${payload.callback ?? ""}`,
  ].join("\n");

  const webhook = process.env.AUDIT_WEBHOOK_URL;

  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "website-audit-form",
        createdAt: new Date().toISOString(),
      }),
    });
  }

  return NextResponse.json({
    ok: true,
    whatsappUrl: `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`,
    thankYouUrl: "/thank-you",
  });
}

