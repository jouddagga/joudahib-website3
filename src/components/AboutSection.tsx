import { useLang } from "../context/LanguageContext";
import brochure1Url from "../assets/brochure1.jpeg";

const stats = [
  { value: "500+", key: "stats.clients" },
  { value: "30+", key: "stats.partners" },
  { value: "2000+", key: "stats.claims" },
  { value: "10+", key: "stats.years" },
];

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#1E5F8E] font-semibold text-sm uppercase tracking-widest">
            {t("about.subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            {t("about.title")}
          </h2>
          <div className="w-16 h-1 bg-[#1E5F8E] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + Stats */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={brochure1Url}
                alt="AHIB Insurance Services"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3A5C]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">
                  Al Hosson Insurance Brokers L.L.C
                </p>
                <p className="text-blue-200 text-sm">Your Shield Against Risks</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.key}
                  className="stat-card rounded-2xl p-5 text-white text-center shadow-lg"
                >
                  <div className="text-3xl font-extrabold">{stat.value}</div>
                  <div className="text-blue-100 text-sm mt-1">{t(stat.key)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">{t("about.p1")}</p>
              <p className="text-gray-700 text-lg leading-relaxed">{t("about.p2")}</p>
            </div>

            {/* Mission & Vision cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1E5F8E] rounded-xl flex items-center justify-center text-white text-lg">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{t("about.mission")}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t("about.missionText")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1E5F8E] rounded-xl flex items-center justify-center text-white text-lg">
                    🔭
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{t("about.vision")}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t("about.visionText")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
