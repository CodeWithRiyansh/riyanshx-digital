import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { caseStudyPages } from "../../src/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Read RiyanshX Digital case studies across fitness, beauty, education, and local service lead generation.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] px-5 py-8 text-[#1E1B4B] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-black text-[#F97316]">
          Back to home
        </Link>
        <section className="mt-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#F97316]">
              Case studies
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] md:text-7xl">
              Proof written like a growth report.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#5B5F7A]">
            Each case study highlights the business problem, system built, and
            outcome measured after launch.
          </p>
        </section>

        <div className="mt-12 grid gap-5">
          {caseStudyPages.map((study) => (
            <article
              key={study.slug}
              className="rounded-lg border border-[#1E1B4B]/10 bg-[#FFF7EA] p-6 text-[#1E1B4B] md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-black uppercase text-[#F97316]">
                    {study.category}
                  </p>
                  <h2 className="mt-2 text-3xl font-black">{study.brand}</h2>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-[#EEF2FF] px-4 py-3 font-black text-[#10B981]">
                  <ShieldCheck size={20} />
                  {study.result}
                </div>
              </div>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-lg bg-white p-5 text-[#1E1B4B]">
                  <p className="text-sm font-black text-[#6B7280]">Challenge</p>
                  <p className="mt-3 leading-8 text-[#5B5F7A]">
                    {study.challenge}
                  </p>
                </div>
                <div className="rounded-lg bg-[#2563EB] p-5 text-white">
                  <p className="text-sm font-black text-white/55">Solution</p>
                  <p className="mt-3 leading-8 text-white/76">
                    {study.solution}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {study.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#1E1B4B]/10 bg-[#EEF2FF] px-3 py-2 text-sm font-black"
                  >
                    <Check size={15} />
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-4 font-black text-white"
        >
          Build a result like this
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}

