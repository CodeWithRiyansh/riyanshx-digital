import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Mail, Phone } from "lucide-react";
import { site } from "../../src/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RiyanshX Digital to book a free growth audit for your website, ads, SEO, and CRM automation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const message = encodeURIComponent(
    "Hi RiyanshX Digital, I want to book a free growth audit.",
  );

  return (
    <main className="min-h-screen bg-[#f6f1e8] px-5 py-8 text-[#202624] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-black text-[#c4552d]">
          Back to home
        </Link>
        <section className="mt-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#c4552d]">
              Contact
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] md:text-7xl">
              Book your free growth audit.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#53605d]">
              Share where your business is now and we will help identify the
              fastest path to more qualified leads.
            </p>
          </div>

          <div className="rounded-lg bg-[#202624] p-6 text-white">
            <a
              href={`https://wa.me/${site.whatsappNumber}?text=${message}`}
              className="flex items-center justify-between gap-4 rounded-lg bg-[#1f8f56] p-5 font-black"
            >
              <span className="flex items-center gap-3">
                <Phone size={22} />
                WhatsApp us
              </span>
              <ArrowRight size={19} />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 flex items-center justify-between gap-4 rounded-lg bg-white/10 p-5 font-black"
            >
              <span className="flex items-center gap-3">
                <Mail size={22} />
                {site.email}
              </span>
              <ArrowRight size={19} />
            </a>
            <div className="mt-4 rounded-lg bg-[#e7bd65] p-5 text-[#202624]">
              <div className="flex items-center gap-3 font-black">
                <CalendarDays size={22} />
                Free audit slots open this week
              </div>
              <p className="mt-3 leading-7 text-[#3d4745]">
                For a full booking system, connect this CTA to Calendly,
                Cal.com, or Google Calendar appointments.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

