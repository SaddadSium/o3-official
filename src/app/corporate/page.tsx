"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

// --- Mock Data for Corporate Photography (Albums/Projects) ---
export const corporateAlbums = [
  {
    id: "1",
    title: "Tree Fair 2025  — Ponchovujh Foundation",
    category: "Corporate Expo",
    src: "/images/corporate/album1/P7.jpg",
    coverSrc: "/images/corporate/album1/P1.jpg", 
    count: "32 Photos",
    photos: [
      "/images/corporate/album1/P1.jpg",
      "/images/corporate/album1/P2.jpg",
      "/images/corporate/album1/P3.jpg",
      "/images/corporate/album1/P4.jpg",
      "/images/corporate/album1/P5.jpg",
      "/images/corporate/album1/P6.jpg",
      "/images/corporate/album1/P7.jpg",
      "/images/corporate/album1/P8.jpg",
      "/images/corporate/album1/P9.jpg",
      "/images/corporate/album1/P10.jpg",
      "/images/corporate/album1/P11.jpg",
      "/images/corporate/album1/P12.jpg",
      "/images/corporate/album1/P13.jpg",
      "/images/corporate/album1/P14.jpg",
      "/images/corporate/album1/P15.jpg",
      "/images/corporate/album1/P16.jpg",
      "/images/corporate/album1/P17.jpg",
      "/images/corporate/album1/P18.jpg",
      "/images/corporate/album1/P19.jpg",
      "/images/corporate/album1/P20.jpg",
      "/images/corporate/album1/P21.jpg",
      "/images/corporate/album1/P22.jpg",
      "/images/corporate/album1/P23.jpg",
      "/images/corporate/album1/P24.jpg",
      "/images/corporate/album1/P25.jpg",
      "/images/corporate/album1/P26.jpg",
      "/images/corporate/album1/P27.jpg",
      "/images/corporate/album1/P28.jpg",
      "/images/corporate/album1/P29.jpg",
      "/images/corporate/album1/P30.jpg",
      "/images/corporate/album1/P31.jpg",
      "/images/corporate/album1/P32.jpg"
    ],
  },
  {
    id: "2",
    title: "OFHA 5s Academy Cup",
    category: "Corporate Expo",
    src: "/images/corporate/album2/P10.jpg",
    coverSrc: "/images/corporate/album2/P31.jpg",
    count: "35 Photos",
    photos: [
      "/images/corporate/album2/P1.jpg",
      "/images/corporate/album2/P2.jpg",
      "/images/corporate/album2/P3.jpg",
      "/images/corporate/album2/P4.jpg",
      "/images/corporate/album2/P5.jpg",
      "/images/corporate/album2/P6.jpg",
      "/images/corporate/album2/P7.jpg",
      "/images/corporate/album2/P8.jpg",
      "/images/corporate/album2/P9.jpg",
      "/images/corporate/album2/P10.jpg",
      "/images/corporate/album2/P11.jpg",
      "/images/corporate/album2/P12.jpg",
      "/images/corporate/album2/P13.jpg",
      "/images/corporate/album2/P14.jpg",
      "/images/corporate/album2/P15.jpg",
      "/images/corporate/album2/P16.jpg",
      "/images/corporate/album2/P17.jpg",
      "/images/corporate/album2/P18.jpg",
      "/images/corporate/album2/P19.jpg",
      "/images/corporate/album2/P20.jpg",
      "/images/corporate/album2/P21.jpg",
      "/images/corporate/album2/P22.jpg",
      "/images/corporate/album2/P23.jpg",
      "/images/corporate/album2/P24.jpg",
      "/images/corporate/album2/P25.jpg",
      "/images/corporate/album2/P26.jpg",
      "/images/corporate/album2/P27.jpg",
      "/images/corporate/album2/P28.jpg",
      "/images/corporate/album2/P29.jpg",
      "/images/corporate/album2/P30.jpg",
      "/images/corporate/album2/P31.jpg",
      "/images/corporate/album2/P32.jpg",
      "/images/corporate/album2/P33.jpg",
      "/images/corporate/album2/P34.jpg",
      "/images/corporate/album2/P35.jpg",
    ],
  },
  {
    id: "3",
    title: "BIMSSCON 2025 — 6th Edition",
    category: "Corporate Event",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    coverSrc: "", 
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "4",
    title: "Crown Micro — Global Expo 2025",
    category: "Corporate Expo",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    coverSrc: "", // Add specific hero cover link if you want, else it falls back to src
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "11",
    title: "JCX Architects — Interior Showcase",
    category: "Architecture",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    coverSrc: "",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "12",
    title: "Tech Summit Dhaka — Annual Gala",
    category: "Summit",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    coverSrc: "",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "13",
    title: "Global Logistics — Brand Campaign",
    category: "Campaign",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    coverSrc: "",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "14",
    title: "Executive Portraits — Leadership Team",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1000&auto=format&fit=crop",
    coverSrc: "",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "15",
    title: "Modern Workspace — Architectural Shoot",
    category: "Architecture",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
    coverSrc: "",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

// --- Mock Data for Corporate Cinematography (Videos) ---
const corporateFilms = [
  {
    id: 1,
    title: "Interior Design & Architecture Promo",
    youtubeEmbedUrl: "https://www.youtube.com/embed/iEJ73IuorfI",
  },
  {
    id: 2,
    title: "Corporate Odyssey — Annual Event Highlights",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Cu1jOBAAh5U",
  },
  {
    id: 3,
    title: "Savor Expo 2025 — Brand Commercial",
    youtubeEmbedUrl: "https://www.youtube.com/embed/_xvPWqeKVoA",
  },
  {
    id: 4,
    title: "Workspace Culture — Recruitment Film",
    youtubeEmbedUrl: "https://www.youtube.com/embed/S2z1qfBUPRY",
  },
];

// --- Mock Data for Corporate Documentaries (Videos) ---
const corporateDocumentaries = [
  {
    id: 1,
    title: "Behind the Brand — Industry Leaders Documentary",
    youtubeEmbedUrl: "https://www.youtube.com/embed/k5OTlbekLj8",
  },
  {
    id: 2,
    title: "Sustainable Futures — Corporate Social Responsibility",
    youtubeEmbedUrl: "https://www.youtube.com/embed/HKe42qUTunI",
  },
  {
    id: 3,
    title: "The Journey of Innovation — Tech Doc",
    youtubeEmbedUrl: "https://www.youtube.com/embed/8CS0C6I7198",
  },
  {
    id: 4,
    title: "Founders' Vision — Enterprise Documentary",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Th5iQ499OSU",
  },
];

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function CorporatePage() {
  const [activeTab, setActiveTab] = useState<
    "photography" | "cinematography" | "documentary"
  >("photography");

  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[35vh] w-full overflow-hidden flex items-center justify-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Hero"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[9px] uppercase tracking-[0.4em] text-[#cba677] block mb-1.5 font-light"
          >
            Commercial Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-4xl md:text-6xl text-white tracking-wide ${cormorant.className}`}
          >
            Corporate Solutions
          </motion.h1>
        </div>
      </section>

      {/* ================= TAB SWITCHER SECTION (3 Tabs) ================= */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("photography")}
            className="relative group focus:outline-none"
          >
            <span
              className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${activeTab === "photography" ? "text-white italic font-medium" : "text-gray-400 hover:text-white"}`}
            >
              Photography
            </span>
            {activeTab === "photography" && (
              <motion.div
                layoutId="activeCorporateIndicator"
                className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab("cinematography")}
            className="relative group focus:outline-none"
          >
            <span
              className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${activeTab === "cinematography" ? "text-white italic font-medium" : "text-gray-400 hover:text-white"}`}
            >
              Cinematography
            </span>
            {activeTab === "cinematography" && (
              <motion.div
                layoutId="activeCorporateIndicator"
                className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab("documentary")}
            className="relative group focus:outline-none"
          >
            <span
              className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${activeTab === "documentary" ? "text-white italic font-medium" : "text-gray-400 hover:text-white"}`}
            >
              Documentary
            </span>
            {activeTab === "documentary" && (
              <motion.div
                layoutId="activeCorporateIndicator"
                className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>
        </div>

        {/* ================= CONTENT DISPLAY AREA ================= */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            
            {/* 1. PHOTOGRAPHY TAB CONTENT (Cards leading to dynamic ID page) */}
            {activeTab === "photography" && (
              <motion.div
                key="corporate-photo"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {corporateAlbums.map((album) => (
                  <Link
                    key={album.id}
                    href={`/corporate/${album.id}`}
                    className="group cursor-pointer relative"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-black/30 rounded-sm shadow-xl border border-white/10 group-hover:border-[#cba677]/60 transition-all duration-500">
                      <Image
                        src={album.src}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        unoptimized
                      />
                      
                      {/* Premium Bottom Overlay (Matching Wedding Layout) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black transition-all duration-500 flex flex-col justify-end p-6 text-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#cba677] mb-2 font-light">
                          {album.category} &bull; {album.count}
                        </span>
                        <h3
                          className={`text-2xl md:text-3xl text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 mb-4 ${cormorant.className}`}
                        >
                          {album.title}
                        </h3>
                        <div className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-2 border border-[#cba677]/40 bg-black/40 group-hover:bg-[#cba677] group-hover:text-[#3E141E] transition-all duration-500 rounded-sm text-[10px] uppercase tracking-[0.25em]">
                          <span>Explore Project</span>
                          <span>↗</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}

            {/* 2. CINEMATOGRAPHY TAB CONTENT */}
            {activeTab === "cinematography" && (
              <motion.div
                key="corporate-cine"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto"
              >
                {corporateFilms.map((film) => (
                  <div key={film.id} className="group flex flex-col">
                    <div className="relative aspect-video overflow-hidden bg-black/50 mb-3 rounded-sm shadow-xl border border-white/10 group-hover:border-[#cba677]/50 transition-all duration-500">
                      <iframe
                        src={film.youtubeEmbedUrl}
                        title={film.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {film.title && (
                      <h3
                        className={`text-lg text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 line-clamp-1 ${cormorant.className}`}
                      >
                        {film.title}
                      </h3>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. DOCUMENTARY TAB CONTENT */}
            {activeTab === "documentary" && (
              <motion.div
                key="corporate-doc"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto"
              >
                {corporateDocumentaries.map((doc) => (
                  <div key={doc.id} className="group flex flex-col">
                    <div className="relative aspect-video overflow-hidden bg-black/50 mb-3 rounded-sm shadow-xl border border-white/10 group-hover:border-[#cba677]/50 transition-all duration-500">
                      <iframe
                        src={doc.youtubeEmbedUrl}
                        title={doc.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {doc.title && (
                      <h3
                        className={`text-lg text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 line-clamp-1 ${cormorant.className}`}
                      >
                        {doc.title}
                      </h3>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}