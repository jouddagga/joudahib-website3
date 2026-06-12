import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import logoUrl from "../assets/logo.jpeg";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    labelKey: "contact.phone",
    value: "+971 55 260 4072\n+971 56 166 2910",
    href: "tel:+971552604072",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    labelKey: "contact.email",
    value: "info@alhosson.com",
    href: "mailto:info@alhosson.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    labelKey: "contact.website",
    value: "alhoson.ae",
    href: "https://alhoson.ae",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    labelKey: "contact.hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM",
    href: null,
  },
];

const serviceOptions = [
  "Health Insurance",
  "Motor Insurance",
  "General Insurance",
  "Marine & Cargo Insurance",
  "Property & Fire Insurance",
  "Liability Insurance",
  "Engineering & Construction Insurance",
  "Motor Fleet Insurance",
  "Other",
];

export default function ContactSection() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            {t("contact.title")}
          </h2>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
          <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full opacity-50" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src={logoUrl}
                alt="AHIB"
                className="w-20 h-20 object-cover rounded-2xl shadow-lg"
              />
              <div className="text-white">
                <div className="text-2xl font-extrabold">AHIB</div>
                <div className="text-blue-200 text-sm">Al Hosson Insurance Brokers L.L.C</div>
              </div>
            </div>

            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  {info.icon}
                </div>
                <div>
                  <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">
                    {t(info.labelKey)}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-blue-200 transition-colors whitespace-pre-line"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-white font-medium whitespace-pre-line">{info.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social / Brand note */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-white">
              <p className="text-blue-100 text-sm leading-relaxed">
                We are not just another insurance company selling a single policy — we are your <strong className="text-white">independent advisor</strong> putting your interests first. Contact us today for a free consultation.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">{t("contact.form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5F8E] focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5F8E] focus:border-transparent transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t("contact.form.email")} *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5F8E] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t("contact.form.service")}
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5F8E] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select insurance type...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5F8E] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your insurance needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1E5F8E] hover:bg-[#164d74] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-base"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
