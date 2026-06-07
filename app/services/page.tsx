import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { servicePages, site } from "../../src/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore RiyanshX Digital services: conversion websites, performance ads, CRM automation, and local SEO.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#202624]">
      <section className="px-5 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-black text-[#c4552d]">
            Back to home
          </Link>
          <div className="mt-14 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#202624]/15 bg-white/70 px-3 py-2 text-sm font-black">
              <Sparkles size={16} className="text-[#c4552d]" />
              Services
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[0.98] md:text-7xl">
              Growth systems built around measurable leads.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53605d]">
              {site.name} combines strategy, creative, technical execution, and
              weekly optimization across the full customer acquisition path.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {servicePages.map((service) => (
              <article
                key={service.slug}
                className="rounded-lg border border-[#202624]/10 bg-white p-6"
              >
                <h2 className="text-3xl font-black">{service.title}</h2>
                <p className="mt-4 leading-8 text-[#53605d]">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-[#fff0db] text-[#c4552d]">
                        <Check size={16} />
                      </span>
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#202624] px-6 py-4 font-black text-white"
          >
            Get a service recommendation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

