const services = [
  ["🌐", "Website Development", "Fast, modern and mobile-friendly websites."],
  ["📈", "SEO Optimization", "Google par ranking improve karke organic leads lao."],
  ["🎯", "Meta & Google Ads", "Paid ads se targeted customers generate karo."],
  ["📱", "Social Media Growth", "Reels, posts, creatives aur brand presence build karo."],
  ["⚙️", "CRM Automation", "Leads, follow-ups aur customer tracking automate karo."],
  ["🚀", "Lead Generation", "Landing pages + ads se quality leads generate karo."],
];

export default function Services() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-cyan-300">Our Services</p>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Everything Your Business Needs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            RiyanshX Digital helps businesses grow with complete digital solutions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map(([icon, title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}