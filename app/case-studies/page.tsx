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
    <main className="min-h-screen bg-[#F7F8F2] px-5 py-8 text-[#12201C] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-black text-[#FF6B35]">
          Back to home
        </Link>
        <section className="mt-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#FF6B35]">
              Case studies
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] md:text-7xl">
              Proof written like a growth report.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#586A64]">
            Each case study highlights the business problem, system built, and
            outcome measured after launch.
          </p>
        </section>

        <div className="mt-12 grid gap-5">
          {caseStudyPages.map((study) => (
            <article
              key={study.slug}
              className="rounded-lg border border-[#12201C]/10 bg-white p-6 md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-black uppercase text-[#FF6B35]">
                    {study.category}
                  </p>
                  <h2 className="mt-2 text-3xl font-black">{study.brand}</h2>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-[#E9FFE6] px-4 py-3 font-black text-[#267A63]">
                  <ShieldCheck size={20} />
                  {study.result}
                </div>
              </div>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-lg bg-[#EEF3E8] p-5">
                  <p className="text-sm font-black text-[#6E7F78]">Challenge</p>
                  <p className="mt-3 leading-8 text-[#586A64]">
                    {study.challenge}
                  </p>
                </div>
                <div className="rounded-lg bg-[#12201C] p-5 text-white">
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
                    className="inline-flex items-center gap-2 rounded-lg border border-[#12201C]/10 bg-[#E9FFE6] px-3 py-2 text-sm font-black"
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
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#FF6B35] px-6 py-4 font-black text-white"
        >
          Build a result like this
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}

