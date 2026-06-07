"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute top-40 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-28 text-center relative z-10">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          🚀 Helping Businesses Scale Faster
        </span>

       <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-8 text-6xl md:text-8xl font-extrabold leading-tight">
  Grow Faster.
  <br />
  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
    Scale Smarter.
  </span>
</motion.h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-400">
          We build websites, run ads, automate lead generation and help
          businesses generate more customers consistently.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold hover:scale-105 transition">
            Get Free Audit
          </button>

          <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur hover:bg-white/10 transition">
            View Services
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-4xl font-bold text-cyan-300">150+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-300">25+</h3>
            <p className="text-gray-400">Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-300">300%</h3>
            <p className="text-gray-400">Growth</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-300">24/7</h3>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}