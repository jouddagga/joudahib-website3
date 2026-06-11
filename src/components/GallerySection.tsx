import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import brochure1Url from "../assets/brochure1.jpeg";
import brochure2Url from "../assets/brochure2.jpeg";

const galleryItems = [
  {
    title: "Health Insurance",
    subtitle: "Medical Care Coverage",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    span: "col-span-2",
  },
  {
    title: "Motor Insurance",
    subtitle: "Vehicle Protection",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    span: "",
  },
  {
    title: "Property Insurance",
    subtitle: "Buildings & Assets",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    span: "",
  },
  {
    title: "Corporate Insurance",
    subtitle: "Business Coverage",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    span: "col-span-2",
  },
  {
    title: "Marine & Cargo",
    subtitle: "Transit Protection",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    span: "",
  },
  {
    title: "Liability Insurance",
    subtitle: "Professional Indemnity",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    span: "",
  },
  {
    title: "Our Brochure",
    subtitle: "Services Overview",
    image: brochure1Url,
    span: "",
    local: true,
  },
  {
    title: "Our Services",
    subtitle: "Complete Coverage",
    image: brochure2Url,
    span: "col-span-2",
    local: true,
  },
];

export default function GallerySection() {
  const { t } = useLang();
  const [selected, setSelected] = useState<null | (typeof galleryItems)[0]>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#1E5F8E] font-semibold text-sm uppercase tracking-widest">
            Visual Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            {t("gallery.title")}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            {t("gallery.subtitle")}
          </p>
          <div className="w-16 h-1 bg-[#1E5F8E] mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${item.span && "lg:" + item.span}`}
              style={{ height: "260px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = brochure1Url;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3A5C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.subtitle}</p>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = brochure1Url;
              }}
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <p className="text-gray-300">{selected.subtitle}</p>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
