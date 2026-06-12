import { useLang } from "../context/LanguageContext";
import logoUrl from "../assets/logo.jpeg";

const footerServices = [
  "Health Insurance",
  "Motor Insurance",
  "General Insurance",
  "Marine & Cargo",
  "Property & Fire Insurance",
  "Liability Insurance",
  "Engineering Insurance",
  "Motor Fleet Insurance",
];

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { t } = useLang();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D2B42] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoUrl}
                alt="AHIB"
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div>
                <div className="font-extrabold text-xl">AHIB</div>
                <div className="text-gray-400 text-xs">Al Hosson Insurance Brokers</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Licensed UAE Broker</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {footerServices.map((svc) => (
                <li key={svc}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#4A9ECC] mt-0.5">📞</span>
                <div className="text-gray-400 text-sm">
                  <div>+971 55 260 4072</div>
                  <div>+971 56 166 2910</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#4A9ECC]">✉️</span>
                <a
                  href="mailto:info@alhosson.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  info@alhosson.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#4A9ECC]">🌐</span>
                <a
                  href="https://alhoson.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  alhoson.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} AHIB — Al Hosson Insurance Brokers L.L.C. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>UAE Licensed Insurance Broker</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
