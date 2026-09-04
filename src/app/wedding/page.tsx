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

// --- Mock Data for Wedding Albums (Photography) ---
const weddingAlbums = [
  {
    id: 1,
    title: "Era & Emran — Royal Wedding",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    count: "45 Photos",
  },
  {
    id: 2,
    title: "Azfar & Sadiia — Haldi Night",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    count: "30 Photos",
  },
  {
    id: 3,
    title: "Hamza & Ruksad — Reception",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop",
    count: "50 Photos",
  },
  {
    id: 4,
    title: "Sazzad & Nowreen — Intimate Vows",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    count: "40 Photos",
  },
  {
    id: 5,
    title: "Samara & Anik — Traditional Bengali",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
    count: "60 Photos",
  },
  {
    id: 6,
    title: "Tahsin & Mim — Sunset Portrait",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
    count: "35 Photos",
  },
];

// --- Mock Data for Wedding Films (Cinematography) ---
const weddingFilms = [
  {
    id: 1,
    title: "Arnob & Tarannum — Cinematic Haldi Trailer",
    thumb:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
    duration: "03:45",
  },
  {
    id: 2,
    title: "Tears of Joy — Full Wedding Film",
    thumb:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    duration: "12:20",
  },
  {
    id: 3,
    title: "Rafi & Tazri — Highlights Reel",
    thumb:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    duration: "04:15",
  },
  {
    id: 4,
    title: "Royal Bengali Wedding — Cinematic Story",
    thumb:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    duration: "05:00",
  },
];

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function WeddingPage() {
  // activeTab বলতে পারে ব্যবহারকারী এখন 'photography' দেখছে নাকি 'cinematography'
  const [activeTab, setActiveTab] = useState<"photography" | "cinematography">(
    "photography",
  );

  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Wedding Hero"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 mt-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-3 font-light"
          >
            Curated Collections
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-6xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            Wedding Stories
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
            <span
              className={`absolute -bottom-8 left-0 w-full h-[2px] bg-[#cba677] transition-all duration-500 ${activeTab === "photography" ? "opacity-15 scale-x-100" : "opacity-0 scale-x-0"}`}
            ></span>
            {activeTab === "photography" && (
              <motion.div
                layoutId="activeIndicator"
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
                layoutId="activeIndicator"
                className="absolute -bottom-8 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>
        </div>

        {/* ================= CONTENT DISPLAY AREA ================= */}
        <div className="mt-20">
          <AnimatePresence mode="wait">
            {/* 1. PHOTOGRAPHY TAB CONTENT (Albums) */}
            {activeTab === "photography" && (
              <motion.div
                key="photography"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {weddingAlbums.map((album) => (
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
                          View Album
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

            {/* 2. CINEMATOGRAPHY TAB CONTENT (Videos) */}
            {activeTab === "cinematography" && (
              <motion.div
                key="cinematography"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {weddingFilms.map((film) => (
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
