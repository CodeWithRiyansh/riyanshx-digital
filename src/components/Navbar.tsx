export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Riyansh<span className="text-blue-400">X</span> Digital
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Case Studies</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 rounded-full font-semibold">
          Free Audit
        </button>
      </div>
    </nav>
  );
}