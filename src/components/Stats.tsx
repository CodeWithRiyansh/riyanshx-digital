export default function Stats() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "300%", label: "Average Growth" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
            >
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}