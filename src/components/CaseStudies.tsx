const cases = [
  ["Local Gym", "35", "180", "414%"],
  ["Salon Business", "20", "95", "375%"],
  ["Coaching Center", "50", "210", "320%"],
];

export default function CaseStudies() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-cyan-300">Case Studies</p>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Real Growth Examples
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map(([name, before, after, growth]) => (
            <div
              key={name}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8"
            >
              <h3 className="text-2xl font-bold">{name}</h3>

              <div className="mt-8 space-y-4 text-gray-300">
                <p>Before: {before} Leads/Month</p>
                <p>After: {after} Leads/Month</p>
              </div>

              <div className="mt-8 rounded-2xl bg-cyan-400/10 p-5">
                <p className="text-sm text-gray-400">Growth</p>
                <h4 className="text-4xl font-extrabold text-cyan-300">
                  {growth}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}