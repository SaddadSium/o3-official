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

// --- Data for Wedding Albums (Photography) ---
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

// --- Data for Wedding Films (Cinematography with YouTube Embed URLs) ---
const weddingFilms = [
  {
    id: 1,
    title: "Arnob & Tarannum's Haldi Trailer",
    thumb:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    duration: "03:45",
  },
  {
    id: 2,
    title: "Tears of Joy: A Wedding Story",
    thumb:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:20",
  },
  {
    id: 3,
    title: "Rafi & Tazri's Wedding Highlights",
    thumb:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "04:15",
  },
  {
    id: 4,
    title: "Cinematic Bangali Gaye Holud || Samudro & Ananna",
    thumb:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "05:00",
  },
  {
    id: 5,
    title: "Wedding Moments || Sumaiya & Uday",
    thumb:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "04:30",
  },
  {
    id: 6,
    title: "Cinematic Haldi Trailer || Sumaiya & Uday",
    thumb:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "03:15",
  },
  {
    id: 7,
    title: "Royal Wedding Trailer || Samir & Tulu",
    thumb:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "06:10",
  },
  {
    id: 8,
    title: "Royal Reception Highlights || Rahat & Nidhi",
    thumb:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "05:45",
  },
];

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function WeddingPage() {
  const [activeTab, setActiveTab] = useState<"photography" | "cinematography">(
    "photography",
  );
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
                layoutId="activeIndicator"
                className="absolute -bottom-8 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>

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
                    <div className="relative aspect-[4/5] overflow-hidden bg-black/30 mb-4 rounded-sm">
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

            {/* 2. CINEMATOGRAPHY TAB CONTENT (4-Column YouTube Cards) */}
            {activeTab === "cinematography" && (
              <motion.div
                key="cinematography"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto"
              >
                {weddingFilms.map((film) => (
                  <div
                    key={film.id}
                    onClick={() => setSelectedVideo(film.youtubeUrl)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-video overflow-hidden bg-black/50 mb-3 rounded-sm shadow-xl border border-white/10 group-hover:border-[#cba677]/50 transition-all duration-500">
                      <Image
                        src={film.thumb}
                        alt={film.title}
                        fill
                        className="object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>

                      {/* YouTube Red Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-9 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-700 transition-all duration-500">
                          <svg
                            className="w-4 h-4 text-white fill-current ml-0.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[9px] tracking-widest text-gray-300">
                        {film.duration}
                      </div>
                    </div>
                    <h3
                      className={`text-lg text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 line-clamp-1 ${cormorant.className}`}
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

      {/* ================= YOUTUBE VIDEO MODAL PLAYER ================= */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-[#cba677] text-white hover:text-[#3E141E] rounded-full flex items-center justify-center text-xl transition-all duration-300"
              >
                ✕
              </button>
              <iframe
                src={`${selectedVideo}?autoplay=1`}
                title="YouTube Video Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
