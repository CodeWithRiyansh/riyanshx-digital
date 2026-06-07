import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Target, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how RiyanshX Digital helps service businesses build predictable lead systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] px-5 py-8 text-[#202624] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-black text-[#c4552d]">
          Back to home
        </Link>
        <section className="mt-14 grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#c4552d]">
              About us
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] md:text-7xl">
              We are built for businesses that want clearer growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53605d]">
              RiyanshX Digital focuses on the practical parts of marketing:
              clear offers, fast pages, measurable campaigns, disciplined
              follow-up, and reporting that tells owners what to do next.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#202624] px-6 py-4 font-black text-white"
            >
              Talk to the team
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-lg bg-[#202624] p-6 text-white">
            {[
              [Target, "Outcome-first strategy"],
              [Zap, "Fast execution cycles"],
              [Users, "Local business understanding"],
              [BadgeCheck, "Tracking before scaling"],
            ].map(([Icon, label]) => (
              <div
                key={label as string}
                className="mb-4 flex items-center gap-4 rounded-lg bg-white/10 p-4 last:mb-0"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#e7bd65] text-[#202624]">
                  <Icon size={21} />
                </span>
                <p className="font-black">{label as string}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

