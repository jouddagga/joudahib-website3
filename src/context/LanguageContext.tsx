import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.services": { en: "Services", ar: "خدماتنا" },
  "nav.features": { en: "Why Us", ar: "لماذا نحن" },
  "nav.gallery": { en: "Gallery", ar: "معرض الصور" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.quote": { en: "Get a Quote", ar: "طلب عرض سعر" },

  // Hero
  "hero.tagline": { en: "Your Shield Against Risks", ar: "حصنك الآمن ضد المخاطر" },
  "hero.subtitle": { en: "Al Hosson Insurance Brokers — your trusted independent insurance advisor in the UAE, putting your interests first.", ar: "الحصن لوسطاء التأمين — مستشارك المستقل الموثوق في الإمارات، مصلحتك أولاً دائماً." },
  "hero.contact": { en: "Contact Us", ar: "تواصل معنا" },
  "hero.quote": { en: "Request a Quote", ar: "طلب عرض سعر" },
  "hero.trusted": { en: "Trusted by Businesses Across UAE", ar: "موثوق به من قِبل الشركات في الإمارات" },
  "hero.licensed": { en: "Licensed & Regulated", ar: "مرخص ومنظم" },
  "hero.support": { en: "24/7 Expert Support", ar: "دعم خبراء على مدار الساعة" },

  // About
  "about.title": { en: "About AHIB", ar: "عن الحصن لوسطاء التأمين" },
  "about.subtitle": { en: "Who We Are", ar: "من نحن" },
  "about.p1": { en: "Al Hosson Insurance Brokers L.L.C (AHIB) is a premier insurance brokerage firm operating in the UAE. We are not just another insurance company selling a single policy — we are your independent advisor putting your interests first.", ar: "الحصن لوسطاء التأمين ش.ذ.م.م (AHIB) هي شركة وساطة تأمينية رائدة في الإمارات. نحن لسنا مجرد شركة تأمين تبيع وثيقة واحدة، بل نحن مستشارك المستقل الذي يضع مصلحتك فوق كل اعتبار." },
  "about.p2": { en: "We scan the market on your behalf, comparing top insurance providers to guarantee you the best coverage at the most competitive rates. Our dedicated team handles the entire claims process swiftly and efficiently, saving you time and effort.", ar: "ندرس السوق بالنيابة عنك ونقارن بين كبرى شركات التأمين لنضمن لك أفضل تغطية بأقل الأسعار. فريقنا المتخصص يتولى عملية التعويض بسرعة وكفاءة، مما يوفر عليك الوقت والجهد." },
  "about.mission": { en: "Our Mission", ar: "مهمتنا" },
  "about.missionText": { en: "To protect your future by providing comprehensive, tailored insurance solutions backed by deep market expertise and genuine care for our clients.", ar: "حماية مستقبلك من خلال تقديم حلول تأمينية شاملة ومخصصة مدعومة بخبرة سوقية عميقة واهتمام حقيقي بعملائنا." },
  "about.vision": { en: "Our Vision", ar: "رؤيتنا" },
  "about.visionText": { en: "To be the most trusted insurance brokerage in the UAE, renowned for integrity, expertise, and client-centric service.", ar: "أن نكون وسيط التأمين الأكثر ثقة في الإمارات، معروفين بالنزاهة والخبرة والخدمة المتمحورة حول العميل." },

  // Why Choose Us
  "why.title": { en: "Why Choose AHIB?", ar: "لماذا تختار AHIB؟" },
  "why.subtitle": { en: "Because we are your independent advisor, not just another insurance seller", ar: "لأننا مستشارك المستقل، لسنا مجرد بائع تأمين" },
  "why.compare.title": { en: "Smart Comparisons", ar: "مقارنات ذكية" },
  "why.compare.desc": { en: "We scan the market and compare top insurance providers to guarantee you the best coverage at the most competitive rates.", ar: "ندرس السوق ونقارن بين كبرى شركات التأمين لنضمن لك أفضل تغطية بأقل الأسعار." },
  "why.independent.title": { en: "100% Independent Broker", ar: "وسيط مستقل 100%" },
  "why.independent.desc": { en: "We represent you before the insurance companies, not the other way around. Your protection and rights are always our top priority.", ar: "نحن نمثلك أمام شركات التأمين، وليس العكس. حمايتك وحقوقك هي أولويتنا القصوى دائماً." },
  "why.claims.title": { en: "Hassle-Free Claims", ar: "إدارة مطالبات سلسة" },
  "why.claims.desc": { en: "In the event of a claim, our dedicated team handles the entire recovery process swiftly and efficiently, saving you time and effort.", ar: "عند وقوع أي حادث، يتولى فريقنا المتخصص عملية التعويض الكاملة بسرعة وكفاءة، موفراً عليك الوقت والجهد." },
  "why.advice.title": { en: "Tailored Expert Advice", ar: "استشارات مخصصة" },
  "why.advice.desc": { en: "We help you understand the fine print and customize insurance packages that perfectly match your specific budget and actual needs.", ar: "نساعدك على فهم بنود الوثائق بدقة وتصميم باقات تأمينية تناسب ميزانيتك واحتياجاتك الفعلية." },

  // Services
  "services.title": { en: "Our Insurance Services", ar: "خدمات التأمين" },
  "services.subtitle": { en: "Comprehensive insurance solutions tailored to protect what matters most to you", ar: "حلول تأمينية شاملة مصممة لحماية ما يهمك أكثر" },
  "services.health.title": { en: "Health Insurance", ar: "التأمين الصحي" },
  "services.health.desc": { en: "Comprehensive insurance solutions covering medical care, diagnostics, and treatments for corporate groups and individuals through a vast medical network.", ar: "حلول تأمينية شاملة تغطي الرعاية الطبية، الفحوصات، والعلاجات للموظفين والأفراد عبر شبكة طبية واسعة." },
  "services.motor.title": { en: "Motor Insurance", ar: "تأمين السيارات" },
  "services.motor.desc": { en: "Full and third-party motor insurance covering all vehicle types with competitive premiums and fast claims processing.", ar: "تأمين شامل وضد الغير لجميع أنواع المركبات بأقساط تنافسية ومعالجة سريعة للمطالبات." },
  "services.general.title": { en: "General Insurance", ar: "التأمين العام" },
  "services.general.desc": { en: "A broad range of general insurance products tailored to meet the diverse needs of businesses and individuals across the UAE.", ar: "مجموعة واسعة من منتجات التأمين العام المصممة لتلبية الاحتياجات المتنوعة للشركات والأفراد في الإمارات." },
  "services.marine.title": { en: "Marine & Cargo Insurance", ar: "التأمين البحري والشحن" },
  "services.marine.desc": { en: "Complete coverage for goods and raw materials during transit against loss or damage by land, sea, or air.", ar: "تغطية متكاملة للبضائع والمواد الخام أثناء الشحن البحري، الجوي، أو البري ضد الفقدان أو التلف." },
  "services.property.title": { en: "Property & Fire Insurance", ar: "تأمين الممتلكات والحرائق" },
  "services.property.desc": { en: "Comprehensive protection for buildings, factories, and warehouses against fire, burglary, and natural perils.", ar: "حماية شاملة للمباني، المصانع، والمستودعات ضد أخطار الحريق، السطو والأضرار الطبيعية." },
  "services.liability.title": { en: "Liability Insurance", ar: "تأمين المسؤولية المهنية" },
  "services.liability.desc": { en: "Includes Public Liability and Professional Indemnity to safeguard against professional errors and legal claims.", ar: "يشمل المسؤولية المدنية العامة والمسؤولية المهنية لحماية شركتك من الأخطاء والمطالبات القانونية." },
  "services.engineering.title": { en: "Engineering & Construction", ar: "التأمين الهندسي ومشاريع المقاولات" },
  "services.engineering.desc": { en: "All Risks coverage for contractors during construction projects and machinery breakdown.", ar: "تغطية شاملة لكافة أخطار المقاولين أثناء تنفيذ المشاريع الإنشائية وتأمين عطل الآلات الثقيلة." },
  "services.fleet.title": { en: "Motor Fleet Insurance", ar: "تأمين أساطيل السيارات والمركبات" },
  "services.fleet.desc": { en: "Customized solutions to protect and manage company vehicles and commercial fleets at competitive rates.", ar: "حلول مخصصة لحماية وإدارة تأمين سيارات الشركة ومركبات التوزيع بأسعار تفضيلية." },
  "services.learnMore": { en: "Learn More", ar: "اعرف أكثر" },

  // Stats
  "stats.clients": { en: "Happy Clients", ar: "عميل راضٍ" },
  "stats.partners": { en: "Insurance Partners", ar: "شريك تأمين" },
  "stats.claims": { en: "Claims Processed", ar: "مطالبة مُعالجة" },
  "stats.years": { en: "Years Experience", ar: "سنوات خبرة" },

  // Gallery
  "gallery.title": { en: "Our Services Gallery", ar: "معرض خدماتنا" },
  "gallery.subtitle": { en: "A visual look at the comprehensive insurance solutions we provide", ar: "نظرة مرئية على حلول التأمين الشاملة التي نقدمها" },

  // Contact
  "contact.title": { en: "Contact Us", ar: "تواصل معنا" },
  "contact.subtitle": { en: "Ready to protect what matters most? Reach out to our team today.", ar: "هل أنت مستعد لحماية ما يهمك أكثر؟ تواصل مع فريقنا اليوم." },
  "contact.phone": { en: "Phone Numbers", ar: "أرقام الهاتف" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.website": { en: "Website", ar: "الموقع الإلكتروني" },
  "contact.hours": { en: "Working Hours", ar: "ساعات العمل" },
  "contact.hoursValue": { en: "Mon – Fri: 9:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM", ar: "الاثنين – الجمعة: 9:00 ص – 6:00 م\nالسبت: 9:00 ص – 1:00 م" },
  "contact.form.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.form.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.form.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.form.service": { en: "Insurance Type", ar: "نوع التأمين" },
  "contact.form.message": { en: "Message", ar: "الرسالة" },
  "contact.form.submit": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.form.success": { en: "Thank you! We will get back to you shortly.", ar: "شكراً! سنتواصل معك قريباً." },

  // Footer
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.desc": { en: "Your trusted independent insurance broker in the UAE. We put your interests first.", ar: "وسيط تأمينك المستقل الموثوق في الإمارات. نضع مصلحتك أولاً." },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.services": { en: "Our Services", ar: "خدماتنا" },
  "footer.contact": { en: "Contact Info", ar: "معلومات التواصل" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isRTL: lang === "ar", t }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
