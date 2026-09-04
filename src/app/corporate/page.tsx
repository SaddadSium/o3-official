"use client";

import { useState } from "react";
import Image from "next/image";
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
const corporateAlbums = [
  {
    id: 1,
    title: "Crown Micro — Global Expo 2025",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    count: "40 Photos",
  },
  {
    id: 2,
    title: "JCX Architects — Interior Showcase",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    count: "25 Photos",
  },
  {
    id: 3,
    title: "Tech Summit Dhaka — Annual Gala",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    count: "50 Photos",
  },
  {
    id: 4,
    title: "Global Logistics — Brand Campaign",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    count: "30 Photos",
  },
  {
    id: 5,
    title: "Executive Portraits — Leadership Team",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1000&auto=format&fit=crop",
    count: "20 Photos",
  },
  {
    id: 6,
    title: "Modern Workspace — Architectural Shoot",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
    count: "35 Photos",
  },
];

// --- Mock Data for Corporate Cinematography (Films/Promos) ---
const corporateFilms = [
  {
    id: 1,
    title: "Interior Design & Architecture Promo",
    thumb:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    duration: "02:30",
  },
  {
    id: 2,
    title: "Corporate Odyssey — Annual Event Highlights",
    thumb:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop",
    duration: "04:15",
  },
  {
    id: 3,
    title: "Savor Expo 2025 — Brand Commercial",
    thumb:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    duration: "01:45",
  },
  {
    id: 4,
    title: "Workspace Culture — Recruitment Film",
    thumb:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    duration: "03:20",
  },
];

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function CorporatePage() {
  const [activeTab, setActiveTab] = useState<"photography" | "cinematography">(
    "photography",
  );

  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
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

        <div className="relative z-10 text-center px-4 mt-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-3 font-light"
          >
            Commercial Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-6xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            Corporate Solutions
          </motion.h1>
        </div>
      </section>

      {/* ================= TAB SWITCHER SECTION ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex justify-center items-center space-x-12 md:space-x-20 border-b border-white/10 pb-8">
          {/* Photography Tab Button */}
          <button
            onClick={() => setActiveTab("photography")}
            className="relative group focus:outline-none"
          >
            <span
              className={`text-2xl md:text-4xl tracking-widest transition-colors duration-500 ${cormorant.className} ${activeTab === "photography" ? "text-white italic" : "text-gray-400 hover:text-white"}`}
            >
              Photography
            </span>
            {activeTab === "photography" && (
              <motion.div
                layoutId="activeCorporateIndicator"
                className="absolute -bottom-8 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>

          {/* Cinematography Tab Button */}
          <button
            onClick={() => setActiveTab("cinematography")}
            className="relative group focus:outline-none"
          >
            <span
              className={`text-2xl md:text-4xl tracking-widest transition-colors duration-500 ${cormorant.className} ${activeTab === "cinematography" ? "text-white italic" : "text-gray-400 hover:text-white"}`}
            >
              Cinematography
            </span>
            {activeTab === "cinematography" && (
              <motion.div
                layoutId="activeCorporateIndicator"
                className="absolute -bottom-8 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>
        </div>

        {/* ================= CONTENT DISPLAY AREA ================= */}
        <div className="mt-20">
          <AnimatePresence mode="wait">
            {/* 1. PHOTOGRAPHY TAB CONTENT (Corporate Albums/Projects) */}
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
                  <div key={album.id} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden bg-black/30 mb-4">
                      <Image
                        src={album.src}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3E141E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#cba677] mb-1">
                          View Project
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-white font-light">
                          {album.count}
                        </span>
                      </div>
                    </div>
                    <h3
                      className={`text-xl text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 ${cormorant.className}`}
                    >
                      {album.title}
                    </h3>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 2. CINEMATOGRAPHY TAB CONTENT (Corporate Promos/Videos) */}
            {activeTab === "cinematography" && (
              <motion.div
                key="corporate-cine"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {corporateFilms.map((film) => (
                  <div key={film.id} className="group cursor-pointer">
                    <div className="relative aspect-video overflow-hidden bg-black/40 mb-4 rounded-sm">
                      <Image
                        src={film.thumb}
                        alt={film.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-red-600 transition-all duration-500">
                          <svg
                            className="w-5 h-5 text-white fill-current ml-0.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/80 px-2.5 py-1 text-[10px] tracking-widest text-gray-300">
                        {film.duration}
                      </div>
                    </div>
                    <h3
                      className={`text-2xl text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 ${cormorant.className}`}
                    >
                      {film.title}
                    </h3>
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
