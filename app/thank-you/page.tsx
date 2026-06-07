import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your RiyanshX Digital growth audit request has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#FFF7ED] px-5 text-[#1E1B4B]">
      <section className="max-w-2xl rounded-lg border border-[#1E1B4B]/10 bg-[#FFF7EA] p-8 text-center text-[#1E1B4B]">
        <CheckCircle className="mx-auto text-[#10B981]" size={56} />
        <h1 className="mt-6 text-4xl font-black md:text-6xl">
          Audit request received.
        </h1>
        <p className="mt-5 leading-8 text-[#5B5F7A]">
          Thanks for reaching out. The next step is a practical review of your
          website, ads, lead flow, and follow-up process.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F97316] px-5 py-4 font-black text-white"
          >
            View services
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/growth-audit-checklist.txt"
            className="inline-flex items-center justify-center rounded-lg border border-[#1E1B4B]/15 px-5 py-4 font-black"
          >
            Download checklist
          </Link>
        </div>
      </section>
    </main>
  );
}

