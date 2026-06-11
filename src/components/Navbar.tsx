import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import logoUrl from "../assets/logo.jpeg";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="AHIB Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className={scrolled ? "text-[#1E5F8E]" : "text-white"}>
              <div className="font-bold text-lg leading-tight">AHIB</div>
              <div className="text-xs opacity-80 hidden sm:block">Al Hosson Insurance Brokers</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link text-sm font-medium transition-colors duration-200 pb-1 ${
                  scrolled ? "text-gray-700 hover:text-[#1E5F8E]" : "text-white hover:text-blue-200"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className={`text-sm font-semibold px-3 py-1.5 rounded-full border transition-all ${
                scrolled
                  ? "border-[#1E5F8E] text-[#1E5F8E] hover:bg-[#1E5F8E] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#1E5F8E]"
              }`}
            >
              {lang === "en" ? "عربي" : "English"}
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#1E5F8E] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#164d74] transition-colors shadow-md"
            >
              {t("nav.quote")}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                scrolled ? "border-[#1E5F8E] text-[#1E5F8E]" : "border-white text-white"
              }`}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 ${scrolled ? "text-gray-700" : "text-white"}`}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-gray-700 hover:text-[#1E5F8E] font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="block w-full bg-[#1E5F8E] text-white font-semibold py-2.5 rounded-lg text-center mt-2 hover:bg-[#164d74] transition-colors"
            >
              {t("nav.quote")}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
