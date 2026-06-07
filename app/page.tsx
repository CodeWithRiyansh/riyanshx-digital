"use client";


import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { site } from "../src/lib/site";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  CircleDollarSign,
  Compass,
  Gauge,
  Globe,
  Layers3,
  LineChart,
  Mail,
  Menu,
  MousePointer2,
  Phone,
  PhoneCall,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";


const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const clientTypes = [
  "Fitness Studios",
  "Clinics",
  "Coaching Centers",
  "Salons",
  "Local Services",
  "Real Estate",
];

const trustBadges = [
  { icon: Target, label: "Meta Ads Strategy" },
  { icon: Search, label: "Google Search Ads" },
  { icon: Gauge, label: "Analytics Tracking" },
  { icon: Bot, label: "CRM Automation" },
];

const stats = [
  { value: "150+", label: "projects shipped" },
  { value: "25+", label: "growth partners" },
  { value: "3.2x", label: "avg lead lift" },
  { value: "24h", label: "response window" },
];

const services = [
  {
    icon: Globe,
    title: "Website Growth System",
    headline: "A fast website that sells before your team speaks.",
    copy: "We turn your offer into a premium landing page with sharp copy, lead capture, mobile UX, speed, and tracking.",
    deliverables: [
      "Conversion landing page",
      "Lead form and WhatsApp CTA",
      "Speed and SEO basics",
      "Analytics and event tracking",
    ],
    timeline: "7-14 days",
    bestFor: "Businesses with traffic but low enquiries",
  },
  {
    icon: Target,
    title: "Performance Ads",
    headline: "Paid campaigns built around qualified leads, not vanity clicks.",
    copy: "Meta and Google campaigns with offer testing, creative angles, retargeting, and weekly optimization.",
    deliverables: [
      "Campaign structure",
      "Ad creatives and copy",
      "Pixel and conversion setup",
      "Weekly performance actions",
    ],
    timeline: "10-21 days",
    bestFor: "Brands ready to scale demand",
  },
  {
    icon: Bot,
    title: "CRM + Follow-Up Automation",
    headline: "A follow-up machine so fewer leads go cold.",
    copy: "We route, score, and follow up with leads using CRM pipelines, WhatsApp reminders, and clean reporting.",
    deliverables: [
      "Lead pipeline setup",
      "Auto follow-up flows",
      "Team notification rules",
      "Lead source dashboard",
    ],
    timeline: "5-12 days",
    bestFor: "Teams missing leads after forms or calls",
  },
  {
    icon: Search,
    title: "Local SEO Engine",
    headline: "Show up when nearby buyers are already searching.",
    copy: "Google Business Profile, local pages, review systems, and technical SEO foundations for stronger intent traffic.",
    deliverables: [
      "Local keyword map",
      "Google profile optimization",
      "Review growth system",
      "Monthly SEO action plan",
    ],
    timeline: "30-60 days",
    bestFor: "Location-led businesses and services",
  },
  {
    icon: Layers3,
    title: "Brand Content Studio",
    headline: "Content that makes your offer easier to trust.",
    copy: "Messaging, creative direction, social assets, and offer-led content systems that support ads and organic growth.",
    deliverables: [
      "Content pillars",
      "Creative templates",
      "Offer messaging",
      "Monthly content calendar",
    ],
    timeline: "7-20 days",
    bestFor: "Brands that need a sharper market presence",
  },
];

const process = [
  {
    icon: Compass,
    title: "Audit",
    copy: "We inspect your website, offer, traffic sources, tracking, and follow-up gaps.",
    output: "Growth map",
  },
  {
    icon: MousePointer2,
    title: "Strategy",
    copy: "We choose the highest-leverage offer, funnel, ad angle, and lead path.",
    output: "Launch plan",
  },
  {
    icon: Zap,
    title: "Launch",
    copy: "We build the assets, connect tracking, publish campaigns, and activate CRM flows.",
    output: "Live system",
  },
  {
    icon: LineChart,
    title: "Optimize",
    copy: "We review numbers weekly and improve what matters: leads, CPL, bookings, and revenue.",
    output: "Weekly actions",
  },
];

const caseStudies = [
  {
    brand: "Local Fitness Studio",
    category: "Fitness",
    result: "4.1x",
    metric: "more qualified leads",
    before: "36 leads/month",
    after: "148 leads/month",
    timeline: ["Offer rebuild", "Meta ads", "WhatsApp nurture"],
  },
  {
    brand: "Beauty & Salon Chain",
    category: "Beauty",
    result: "62%",
    metric: "lower cost per booking",
    before: "Rs 310 CPL",
    after: "Rs 118 CPL",
    timeline: ["Creative testing", "Retargeting", "Booking funnel"],
  },
  {
    brand: "Coaching Institute",
    category: "Education",
    result: "210",
    metric: "demo requests in 30 days",
    before: "Manual call sheet",
    after: "CRM pipeline",
    timeline: ["Search ads", "Lead scoring", "Counselor routing"],
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, FitCore Studio",
    quote:
      "The audit was clear, but the execution was the real win. We finally understood which campaigns were producing booked trials.",
  },
  {
    name: "Neha Kapoor",
    role: "Director, Bloom Salon",
    quote:
      "Our old website looked fine but did not convert. RiyanshX rebuilt the flow and our booking cost dropped within the first month.",
  },
  {
    name: "Rahul Sinha",
    role: "Owner, BrightPath Classes",
    quote:
      "The CRM setup alone saved hours every week. Leads now reach the right counselor without manual follow-up chaos.",
  },
];

const plans = [
  {
    name: "Launch",
    price: "Rs 7,999",
    line: "For new brands that need a clean digital base.",
    cta: "Start Launch",
    features: [
      "Landing page audit",
      "Basic SEO setup",
      "Lead form and WhatsApp CTA",
      "Monthly performance report",
    ],
  },
  {
    name: "Scale",
    price: "Rs 14,999",
    line: "For businesses ready to run ads and improve conversions.",
    cta: "Choose Scale",
    featured: true,
    features: [
      "Ad campaign setup",
      "Creative and copy testing",
      "Conversion tracking",
      "Weekly optimization actions",
    ],
  },
  {
    name: "Operate",
    price: "Rs 29,999",
    line: "For serious growth with funnel, ads, CRM, and reporting.",
    cta: "Build My System",
    features: [
      "Website and ads system",
      "CRM automation",
      "Lead quality dashboard",
      "Monthly growth roadmap",
    ],
  },
];

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  }).format(value);
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [leadCount, setLeadCount] = useState(80);
  const [closingRate, setClosingRate] = useState(18);
  const [saleValue, setSaleValue] = useState(12000);
  const [adBudget, setAdBudget] = useState(35000);
  const [formSent, setFormSent] = useState(false);

  const active = services[activeService];
  const ActiveIcon = active.icon;

  const roi = useMemo(() => {
    const projectedLeads = Math.round(leadCount * 2.7);
    const extraLeads = Math.max(projectedLeads - leadCount, 0);
    const extraCustomers = Math.round(extraLeads * (closingRate / 100));
    const extraRevenue = extraCustomers * saleValue;
    const estimatedRoi = adBudget > 0 ? Math.round((extraRevenue / adBudget) * 10) / 10 : 0;

    return { projectedLeads, extraLeads, extraCustomers, extraRevenue, estimatedRoi };
  }, [adBudget, closingRate, leadCount, saleValue]);

  async function handleAuditSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();

    if (result.whatsappUrl) {
      window.open(result.whatsappUrl, "_blank", "noreferrer");
    }
    setFormSent(true);
    window.setTimeout(() => {
      window.location.href = result.thankYouUrl ?? "/thank-you";
    }, 600);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-[#202624]">
      <nav className="sticky top-0 z-50 border-b border-[#202624]/10 bg-[#f6f1e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="RiyanshX Digital home">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#202624] text-sm font-black text-[#f6f1e8]">
              RX
            </span>
            <span>
              <span className="block text-lg font-black leading-none">
                RiyanshX
              </span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-[#697370]">
                Digital
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#c4552d]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="hidden items-center gap-2 rounded-lg bg-[#c4552d] px-5 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(196,85,45,0.22)] transition hover:bg-[#a94422] md:flex"
          >
            Get My Audit
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[#202624]/15 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#202624]/10 bg-[#f6f1e8] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2 text-sm font-black">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="relative">
        <div className="mx-auto grid min-h-[calc(100vh-77px)] max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[1.04fr_0.96fr] md:px-8 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#202624]/15 bg-white/70 px-3 py-2 text-sm font-black">
              <Sparkles size={16} className="text-[#c4552d]" />
              Predictable lead systems for service businesses
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.96] md:text-7xl">
              We build your next 30 days of qualified leads.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53605d]">
              RiyanshX Digital combines conversion websites, performance ads,
              CRM automation, and weekly optimization so local brands can turn
              attention into booked calls.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#202624] px-6 py-4 font-black text-white transition hover:bg-[#343d3a]"
              >
                Book Free Growth Audit
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("#calculator")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#202624]/15 bg-white/70 px-6 py-4 font-black transition hover:bg-white"
              >
                Calculate ROI
                <CircleDollarSign size={18} />
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-[#202624]/10 bg-white/65 p-4"
                >
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[#697370]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative overflow-hidden rounded-lg border border-[#202624]/12 bg-[#26302f] p-5 text-white shadow-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-[#e7bd65]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-[#26302f]">
                  Growth Command Center
                </p>
                <span className="inline-flex items-center gap-2 rounded-md bg-[#26302f] px-3 py-1 text-xs font-black">
                  <span className="h-2 w-2 rounded-full bg-[#66e39a]" />
                  Live
                </span>
              </div>

              <div className="mt-16 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-5 text-[#202624]">
                  <p className="text-sm font-black text-[#697370]">
                    Projected leads
                  </p>
                  <h3 className="mt-3 text-5xl font-black">
                    {roi.projectedLeads}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#697370]">
                    after funnel and ads optimization
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/10 p-5">
                  <p className="text-sm font-black text-white/70">
                    Weekly priorities
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      ["Lead quality", 86],
                      ["Follow-up speed", 74],
                      ["Booking rate", 63],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-xs font-black">
                          <span>{label}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/15">
                          <div
                            className="h-2 rounded-full bg-[#e7bd65]"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-white/10 bg-[#151b1a] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-white/60">
                      Current lead volume
                    </p>
                    <p className="mt-1 text-2xl font-black">
                      {leadCount} leads/month
                    </p>
                  </div>
                  <TrendingUp className="text-[#e7bd65]" size={34} />
                </div>
                <input
                  aria-label="Current monthly leads"
                  type="range"
                  min="20"
                  max="300"
                  value={leadCount}
                  onChange={(event) => setLeadCount(Number(event.target.value))}
                  className="mt-7 w-full accent-[#e7bd65]"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                  <p className="text-sm font-black text-white/60">
                    Extra revenue
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#e7bd65]">
                    {formatCurrency(roi.extraRevenue)}
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                  <p className="text-sm font-black text-white/60">
                    Est. ROI
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#e7bd65]">
                    {roi.estimatedRoi}x
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#202624]/10 bg-white px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#697370]">
            Built for
          </p>
          <div className="flex flex-wrap gap-3">
            {clientTypes.map((type) => (
              <span
                key={type}
                className="rounded-lg border border-[#202624]/10 bg-[#f7f7f4] px-4 py-2 text-sm font-black"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase text-[#c4552d]">
                Service tabs
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Everything needed to turn traffic into calls.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-[#53605d]">
                Pick the area that hurts most. Each system includes strategy,
                execution, tracking, and improvement actions.
              </p>
            </div>

            <div className="grid gap-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveService(index)}
                    className={`rounded-lg border p-5 text-left transition ${
                      activeService === index
                        ? "border-[#c4552d] bg-[#fff7ed]"
                        : "border-[#202624]/10 bg-[#f7f7f4] hover:bg-[#fff7ed]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#202624] text-white">
                        <Icon size={22} />
                      </span>
                      <span>
                        <span className="block text-xl font-black">
                          {service.title}
                        </span>
                        <span className="mt-2 block leading-7 text-[#53605d]">
                          {service.copy}
                        </span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-10 rounded-lg bg-[#202624] p-6 text-white md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-lg bg-[#e7bd65] text-[#202624]">
                  <ActiveIcon size={25} />
                </span>
                <h3 className="mt-5 text-3xl font-black">{active.headline}</h3>
                <p className="mt-4 leading-8 text-white/68">{active.copy}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                    <p className="text-sm font-black text-white/55">
                      Timeline
                    </p>
                    <p className="mt-2 text-xl font-black">{active.timeline}</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                    <p className="text-sm font-black text-white/55">
                      Best for
                    </p>
                    <p className="mt-2 font-bold">{active.bestFor}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#e7bd65]">
                  Deliverables
                </p>
                <div className="mt-5 grid gap-3">
                  {active.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg bg-white/10 p-3"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-[#e7bd65] text-[#202624]">
                        <Check size={16} />
                      </span>
                      <p className="font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="process" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#c4552d]">
                Process
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
                A clear operating system for growth.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#202624] px-5 py-3 font-black text-white transition hover:bg-[#343d3a]"
            >
              See Your Growth Plan
              <ArrowRight size={18} />
            </button>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.title}
                  delay={index * 0.06}
                  className="rounded-lg border border-[#202624]/10 bg-white p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#202624] text-white">
                      <Icon size={22} />
                    </span>
                    <span className="text-sm font-black text-[#c4552d]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-[#53605d]">{step.copy}</p>
                  <div className="mt-6 rounded-lg bg-[#fff0db] p-3">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#9a5a1f]">
                      Output
                    </p>
                    <p className="mt-1 font-black">{step.output}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="calculator" className="bg-[#26302f] px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-sm font-black uppercase text-[#e7bd65]">
              ROI calculator
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Estimate what better follow-up and conversion can unlock.
            </h2>
            <p className="mt-5 leading-8 text-white/68">
              These numbers are directional, but they make the business case
              simple: more qualified leads plus faster follow-up can change the
              economics quickly.
            </p>
          </Reveal>

          <Reveal className="rounded-lg border border-white/10 bg-white/10 p-5 md:p-7">
            <div className="grid gap-5 md:grid-cols-2">
              <label>
                <span className="text-sm font-black text-white/70">
                  Current leads/month: {leadCount}
                </span>
                <input
                  type="range"
                  min="20"
                  max="300"
                  value={leadCount}
                  onChange={(event) => setLeadCount(Number(event.target.value))}
                  className="mt-3 w-full accent-[#e7bd65]"
                />
              </label>
              <label>
                <span className="text-sm font-black text-white/70">
                  Closing rate: {closingRate}%
                </span>
                <input
                  type="range"
                  min="5"
                  max="45"
                  value={closingRate}
                  onChange={(event) => setClosingRate(Number(event.target.value))}
                  className="mt-3 w-full accent-[#e7bd65]"
                />
              </label>
              <label>
                <span className="text-sm font-black text-white/70">
                  Average sale value
                </span>
                <input
                  type="number"
                  min="1000"
                  value={saleValue}
                  onChange={(event) => setSaleValue(Number(event.target.value))}
                  className="mt-3 h-12 w-full rounded-lg border border-white/10 bg-[#151b1a] px-4 font-bold outline-none focus:border-[#e7bd65]"
                />
              </label>
              <label>
                <span className="text-sm font-black text-white/70">
                  Monthly ad budget
                </span>
                <input
                  type="number"
                  min="0"
                  value={adBudget}
                  onChange={(event) => setAdBudget(Number(event.target.value))}
                  className="mt-3 h-12 w-full rounded-lg border border-white/10 bg-[#151b1a] px-4 font-bold outline-none focus:border-[#e7bd65]"
                />
              </label>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Projected leads", roi.projectedLeads],
                ["Extra leads", roi.extraLeads],
                ["Extra customers", roi.extraCustomers],
                ["Est. ROI", `${roi.estimatedRoi}x`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-white p-4 text-[#202624]">
                  <p className="text-sm font-black text-[#697370]">{label}</p>
                  <p className="mt-2 text-3xl font-black">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg bg-[#e7bd65] p-5 text-[#202624]">
              <p className="text-sm font-black uppercase tracking-[0.14em]">
                Estimated extra monthly revenue
              </p>
              <p className="mt-2 text-4xl font-black">
                {formatCurrency(roi.extraRevenue)}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="results" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#c4552d]">
                Results
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
                Proof that reads like a growth report.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#53605d]">
              Case studies focus on the metrics clients actually care about:
              CPL, booking rate, lead quality, and team speed.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {caseStudies.map((item, index) => (
              <Reveal
                key={item.brand}
                delay={index * 0.06}
                className="rounded-lg border border-[#202624]/10 bg-white p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-[#c4552d]">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-xl font-black">{item.brand}</h3>
                  </div>
                  <ShieldCheck className="text-[#c4552d]" size={25} />
                </div>
                <p className="mt-8 text-6xl font-black">{item.result}</p>
                <p className="mt-2 font-bold text-[#53605d]">{item.metric}</p>
                <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-[#f2f0eb] p-3">
                    <p className="font-black text-[#697370]">Before</p>
                    <p className="mt-1 font-black">{item.before}</p>
                  </div>
                  <div className="rounded-lg bg-[#fff0db] p-3">
                    <p className="font-black text-[#9a5a1f]">After</p>
                    <p className="mt-1 font-black">{item.after}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  {item.timeline.map((step) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#c4552d]" />
                      <p className="text-sm font-bold text-[#53605d]">{step}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.06}
                className="rounded-lg bg-[#202624] p-6 text-white"
              >
                <div className="flex gap-1 text-[#e7bd65]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 leading-8 text-white/76">{item.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-black">{item.name}</p>
                  <p className="mt-1 text-sm font-bold text-white/55">
                    {item.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-5 md:grid-cols-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;

              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 rounded-lg border border-[#202624]/10 bg-[#f7f7f4] p-4"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#fff0db] text-[#c4552d]">
                    <Icon size={21} />
                  </span>
                  <p className="font-black">{badge.label}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section id="pricing" className="bg-[#26302f] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-sm font-black uppercase text-[#e7bd65]">
              Pricing
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black md:text-6xl">
              Choose the support level that matches your growth stage.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal
                key={plan.name}
                delay={index * 0.06}
                className={`rounded-lg border p-6 ${
                  plan.featured
                    ? "border-[#e7bd65] bg-[#e7bd65] text-[#202624]"
                    : "border-white/10 bg-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black">{plan.name}</h3>
                    <p
                      className={`mt-3 leading-7 ${
                        plan.featured ? "text-[#3d4745]" : "text-white/68"
                      }`}
                    >
                      {plan.line}
                    </p>
                  </div>
                  {plan.featured && <BadgeCheck size={27} />}
                </div>

                <p className="mt-8 text-5xl font-black">{plan.price}</p>
                <p
                  className={`mt-2 text-sm font-black ${
                    plan.featured ? "text-[#3d4745]" : "text-white/55"
                  }`}
                >
                  per month
                </p>

                <ul className="mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${
                          plan.featured
                            ? "bg-[#202624] text-white"
                            : "bg-white/12 text-[#e7bd65]"
                        }`}
                      >
                        <Check size={15} />
                      </span>
                      <span className="font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollToSection("#contact")}
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-4 font-black transition ${
                    plan.featured
                      ? "bg-[#202624] text-white hover:bg-[#343d3a]"
                      : "bg-white text-[#202624] hover:bg-[#f6f1e8]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={18} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <p className="text-sm font-black uppercase text-[#c4552d]">
              Lead magnet
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Download the checklist we use before running ads.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-[#53605d]">
              Use this quick audit to fix the biggest website conversion leaks
              before spending more on traffic.
            </p>
            <a
              href="/growth-audit-checklist.txt"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#202624] px-6 py-4 font-black text-white transition hover:bg-[#343d3a]"
            >
              Download Free Checklist
              <ArrowRight size={18} />
            </a>
          </Reveal>
          <Reveal>
            <Image
              src="/growth-checklist.svg"
              alt="10 website fixes to increase leads checklist"
              width={900}
              height={620}
              className="rounded-lg border border-[#202624]/10 shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-black uppercase text-[#c4552d]">
              Free audit
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Get a practical growth audit in one call.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-[#53605d]">
              Share your business stage, ad budget, current lead flow, and
              biggest bottleneck. We will map the fastest route across website,
              ads, SEO, and automation.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Website conversion gaps",
                "Ad campaign opportunities",
                "Follow-up and CRM automation ideas",
                "Estimated lead and revenue upside",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#fff0db] text-[#c4552d]">
                    <Check size={17} />
                  </span>
                  <p className="font-black">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 text-sm font-bold text-[#53605d]">
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-[#c4552d]">
                <Mail size={18} />
                {site.email}
              </a>
             <a
  href={`https://wa.me/${site.whatsappNumber}`}
  className="flex items-center gap-3 hover:text-[#c4552d]"
>
  <Phone size={18} />
  {site.phoneDisplay}
</a>
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleAuditSubmit}
              className="rounded-lg border border-[#202624]/10 bg-[#f7f7f4] p-5 md:p-7"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-black">Name</span>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-2 h-12 w-full rounded-lg border border-[#202624]/12 bg-white px-4 outline-none transition focus:border-[#c4552d]"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-black">Phone</span>
                  <input
                    name="phone"
                    required
                    placeholder="+91"
                    className="mt-2 h-12 w-full rounded-lg border border-[#202624]/12 bg-white px-4 outline-none transition focus:border-[#c4552d]"
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-black">Business Type</span>
                  <select
                    name="business"
                    className="mt-2 h-12 w-full rounded-lg border border-[#202624]/12 bg-white px-4 outline-none transition focus:border-[#c4552d]"
                  >
                    <option>Local business</option>
                    <option>Clinic or healthcare</option>
                    <option>Coaching or education</option>
                    <option>Salon or beauty</option>
                    <option>Real estate</option>
                    <option>Service agency</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-black">Monthly Ad Budget</span>
                  <select
                    name="budget"
                    className="mt-2 h-12 w-full rounded-lg border border-[#202624]/12 bg-white px-4 outline-none transition focus:border-[#c4552d]"
                  >
                    <option>Not running ads</option>
                    <option>Under Rs 25,000</option>
                    <option>Rs 25,000 - Rs 75,000</option>
                    <option>Rs 75,000 - Rs 2,00,000</option>
                    <option>Rs 2,00,000+</option>
                  </select>
                </label>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-black">Current Leads/Month</span>
                  <input
                    name="leads"
                    type="number"
                    min="0"
                    placeholder="80"
                    className="mt-2 h-12 w-full rounded-lg border border-[#202624]/12 bg-white px-4 outline-none transition focus:border-[#c4552d]"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-black">Callback Time</span>
                  <select
                    name="callback"
                    className="mt-2 h-12 w-full rounded-lg border border-[#202624]/12 bg-white px-4 outline-none transition focus:border-[#c4552d]"
                  >
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>This week</option>
                    <option>WhatsApp first</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block">
                <span className="text-sm font-black">Biggest Problem</span>
                <textarea
                  name="problem"
                  rows={5}
                  placeholder="Low leads, bad CPL, weak website conversion, missed follow-ups..."
                  className="mt-2 w-full resize-none rounded-lg border border-[#202624]/12 bg-white px-4 py-3 outline-none transition focus:border-[#c4552d]"
                />
              </label>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#c4552d] px-5 py-4 font-black text-white transition hover:bg-[#a94422]"
              >
                Send WhatsApp Audit Request
                <Send size={18} />
              </button>

              {formSent && (
                <p className="mt-4 rounded-lg bg-[#e8f7ee] p-3 text-sm font-black text-[#16633b]">
                  WhatsApp message opened. Send it there to book your audit.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[#202624]/10 bg-[#f6f1e8] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-black">RiyanshX Digital</p>
            <p className="mt-1 text-sm font-bold text-[#697370]">
              Predictable lead systems for ambitious local brands.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-black text-[#53605d]">
            <a href="/services" className="hover:text-[#c4552d]">
              Services
            </a>
            <a href="/case-studies" className="hover:text-[#c4552d]">
              Case Studies
            </a>
            <a href="/about" className="hover:text-[#c4552d]">
              About
            </a>
            <a href="/contact" className="hover:text-[#c4552d]">
              Contact
            </a>
            <a href="/privacy-policy" className="hover:text-[#c4552d]">
              Privacy
            </a>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${site.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-lg bg-[#1f8f56] text-white shadow-2xl transition hover:bg-[#157445]"
      >
        <PhoneCall size={24} />
      </a>

      <div className="fixed bottom-5 left-5 z-40 hidden rounded-lg border border-[#202624]/10 bg-white/90 px-4 py-3 text-sm font-black text-[#202624] shadow-xl backdrop-blur md:flex md:items-center md:gap-2">
        <Users size={17} className="text-[#c4552d]" />
        Free audit slots open this week
      </div>
    </main>
  );
}
