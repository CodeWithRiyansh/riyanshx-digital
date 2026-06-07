import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../../src/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for RiyanshX Digital website visitors and leads.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] px-5 py-8 text-[#1E1B4B] md:px-8">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-black text-[#F97316]">
          Back to home
        </Link>
        <h1 className="mt-12 text-5xl font-black">Privacy Policy</h1>
        <div className="mt-8 space-y-6 leading-8 text-[#5B5F7A]">
          <p>
            {site.name} collects information submitted through website forms,
            including name, phone number, business type, budget range, and
            messages shared for audit requests.
          </p>
          <p>
            We use this information to respond to enquiries, prepare growth
            audits, improve our services, and communicate by phone, WhatsApp, or
            email.
          </p>
          <p>
            We do not sell visitor information. If a CRM, automation tool, or
            analytics tool is connected, information may be processed by those
            systems only for operational purposes.
          </p>
          <p>
            To request deletion or correction of your information, contact us at{" "}
            <a className="font-black text-[#F97316]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}

