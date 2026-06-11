import { useLang } from "../context/LanguageContext";
import logoUrl from "../assets/logo.jpeg";

export default function HeroSection() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-300 opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="text-white space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Licensed Insurance Broker — UAE
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                {t("hero.tagline")}
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-xl">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-white text-[#1E5F8E] font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                {t("hero.contact")}
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#1E5F8E] transition-all text-sm sm:text-base"
              >
                {t("hero.quote")}
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: "🛡️", text: t("hero.trusted") },
                { icon: "✅", text: t("hero.licensed") },
                { icon: "💬", text: t("hero.support") },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs sm:text-sm border border-white/20"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl scale-110" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-2xl">
                <img
                  src={logoUrl}
                  alt="AHIB – Al Hosson Insurance Brokers"
                  className="w-64 h-64 object-contain rounded-2xl"
                />
                <div className="mt-6 text-center text-white">
                  <div className="text-2xl font-bold">AHIB</div>
                  <div className="text-blue-200 text-sm mt-1">Al Hosson Insurance Brokers L.L.C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#f7f9fc" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
