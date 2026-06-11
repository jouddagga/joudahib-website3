import { useLang } from "../context/LanguageContext";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    titleKey: "why.compare.title",
    descKey: "why.compare.desc",
    color: "bg-blue-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titleKey: "why.independent.title",
    descKey: "why.independent.desc",
    color: "bg-teal-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titleKey: "why.claims.title",
    descKey: "why.claims.desc",
    color: "bg-orange-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    titleKey: "why.advice.title",
    descKey: "why.advice.desc",
    color: "bg-purple-600",
  },
];

export default function FeaturesSection() {
  const { t } = useLang();

  return (
    <section id="features" className="py-24 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#1E5F8E] font-semibold text-sm uppercase tracking-widest">
            Our Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            {t("why.title")}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            {t("why.subtitle")}
          </p>
          <div className="w-16 h-1 bg-[#1E5F8E] mx-auto mt-4 rounded-full" />
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{t(f.titleKey)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 hero-gradient rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Ready to Find the Best Coverage for You?
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            Let our experts compare the market and find the perfect insurance package that fits your needs and budget.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-[#1E5F8E] font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:scale-105 text-base"
          >
            Get a Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
}
