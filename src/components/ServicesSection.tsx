import { useLang } from "../context/LanguageContext";

const serviceIcons: Record<string, string> = {
  health: "🏥",
  motor: "🚗",
  general: "🏢",
  marine: "⚓",
  property: "🏠",
  liability: "⚖️",
  engineering: "🏗️",
  fleet: "🚛",
};

const services = [
  { key: "health", gradient: "from-blue-500 to-blue-700" },
  { key: "motor", gradient: "from-slate-600 to-slate-800" },
  { key: "general", gradient: "from-teal-500 to-teal-700" },
  { key: "marine", gradient: "from-cyan-600 to-blue-800" },
  { key: "property", gradient: "from-orange-500 to-orange-700" },
  { key: "liability", gradient: "from-purple-600 to-purple-800" },
  { key: "engineering", gradient: "from-yellow-600 to-yellow-800" },
  { key: "fleet", gradient: "from-green-600 to-green-800" },
];

// Unsplash images for each service type
const serviceImages: Record<string, string> = {
  health: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  motor: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  general: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  marine: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
  property: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  liability: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  engineering: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  fleet: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
};

export default function ServicesSection() {
  const { t } = useLang();

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#1E5F8E] font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            {t("services.title")}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            {t("services.subtitle")}
          </p>
          <div className="w-16 h-1 bg-[#1E5F8E] mx-auto mt-4 rounded-full" />
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div key={svc.key} className="service-card group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md cursor-pointer">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={serviceImages[svc.key]}
                  alt={t(`services.${svc.key}.title`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${svc.gradient} opacity-60`} />
                <div className="absolute top-4 left-4 text-3xl">{serviceIcons[svc.key]}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {t(`services.${svc.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {t(`services.${svc.key}.desc`)}
                </p>
                <button
                  onClick={scrollToContact}
                  className="mt-4 text-[#1E5F8E] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {t("services.learnMore")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
