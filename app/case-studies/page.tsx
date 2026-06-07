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
    <main className="min-h-screen bg-[#f6f1e8] px-5 py-8 text-[#202624] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-black text-[#c4552d]">
          Back to home
        </Link>
        <section className="mt-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#c4552d]">
              Case studies
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] md:text-7xl">
              Proof written like a growth report.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#53605d]">
            Each case study highlights the business problem, system built, and
            outcome measured after launch.
          </p>
        </section>

        <div className="mt-12 grid gap-5">
          {caseStudyPages.map((study) => (
            <article
              key={study.slug}
              className="rounded-lg border border-[#202624]/10 bg-white p-6 md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-black uppercase text-[#c4552d]">
                    {study.category}
                  </p>
                  <h2 className="mt-2 text-3xl font-black">{study.brand}</h2>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-[#fff0db] px-4 py-3 font-black text-[#9a5a1f]">
                  <ShieldCheck size={20} />
                  {study.result}
                </div>
              </div>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-lg bg-[#f7f7f4] p-5">
                  <p className="text-sm font-black text-[#697370]">Challenge</p>
                  <p className="mt-3 leading-8 text-[#53605d]">
                    {study.challenge}
                  </p>
                </div>
                <div className="rounded-lg bg-[#202624] p-5 text-white">
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
                    className="inline-flex items-center gap-2 rounded-lg border border-[#202624]/10 bg-[#fff0db] px-3 py-2 text-sm font-black"
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
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#c4552d] px-6 py-4 font-black text-white"
        >
          Build a result like this
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}

