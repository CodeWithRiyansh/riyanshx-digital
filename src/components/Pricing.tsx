const plans = [
  ["Starter", "₹4,999", ["Social media basics", "Basic SEO", "Monthly report"]],
  ["Growth", "₹9,999", ["SEO + Ads setup", "Lead generation", "Weekly reporting"]],
  ["Premium", "₹19,999", ["Website + Ads", "CRM automation", "Full growth system"]],
];

export default function Pricing() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-cyan-300">Pricing</p>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Simple Plans For Growth
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map(([name, price, features]) => (
            <div
              key={name as string}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:bg-white/10"
            >
              <h3 className="text-2xl font-bold">{name}</h3>
              <h4 className="mt-5 text-5xl font-extrabold text-cyan-300">
                {price}
              </h4>
              <p className="mt-2 text-gray-400">per month</p>

              <ul className="mt-8 space-y-4 text-gray-300">
                {(features as string[]).map((feature) => (
                  <li key={feature}>✅ {feature}</li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 font-semibold">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}