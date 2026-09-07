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

// --- Data for Wedding Albums with Inner Photos ---
const weddingAlbums = [
  {
    id: 1,
    title: "Deen & Laiba — Royal Wedding",
    src: "/images/wedding/weddingalbum1/C1.jpg",
    count: "6 Photos",
    photos: [
      "/images/wedding/weddingalbum1/P1.jpg",
      "/images/wedding/weddingalbum1/P2.jpg",
      "/images/wedding/weddingalbum1/P3.jpg",
      "/images/wedding/weddingalbum1/P4.jpg",
      "/images/wedding/weddingalbum1/P5.jpg",
      "/images/wedding/weddingalbum1/P6.jpg",
    ],
  },
  {
    id: 2,
    title: "Tanvir & Sanjida — Intimate Akhd",
    src: "/images/wedding/weddingalbum1/C1.jpg",
    count: "6 Photos",
    photos: [
      "/images/wedding/weddingalbum1/P1.jpg",
      "/images/wedding/weddingalbum1/P2.jpg",
      "/images/wedding/weddingalbum1/P3.jpg",
      "/images/wedding/weddingalbum1/P4.jpg",
      "/images/wedding/weddingalbum1/P5.jpg",
      "/images/wedding/weddingalbum1/P6.jpg",
    ],
  },
  {
    id: 3,
    title: "Munim & Tasnim — Post Wedding",
    src: "/images/wedding/weddingalbum1/C1.jpg",
    count: "6 Photos",
    photos: [
      "/images/wedding/weddingalbum1/P1.jpg",
      "/images/wedding/weddingalbum1/P2.jpg",
      "/images/wedding/weddingalbum1/P3.jpg",
      "/images/wedding/weddingalbum1/P4.jpg",
      "/images/wedding/weddingalbum1/P5.jpg",
      "/images/wedding/weddingalbum1/P6.jpg",
    ],
  },
  {
    id: 4,
    title: "Swapnil & Tomori — Pre Wedding",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Tanvir & Sanjida — Royal Reception",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Monia's Mehendi Celebration",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 7,
    title: "Moon & Trina - Wedding Series",
    src: "/images/wedding/weddingalbum7/C7.jpg",
    count: "24 Photos",
    photos: [
      "/images/wedding/weddingalbum7/P1.jpg",
      "/images/wedding/weddingalbum7/P2.jpg",
      "/images/wedding/weddingalbum7/P3.jpg",
      "/images/wedding/weddingalbum7/P4.jpg",
      "/images/wedding/weddingalbum7/P5.jpg",
      "/images/wedding/weddingalbum7/P6.jpg",
      "/images/wedding/weddingalbum7/P7.jpg",
      "/images/wedding/weddingalbum7/P8.jpg",
      "/images/wedding/weddingalbum7/P9.jpg",
      "/images/wedding/weddingalbum7/P10.jpg",
      "/images/wedding/weddingalbum7/P11.jpg",
      "/images/wedding/weddingalbum7/P12.jpg",
      "/images/wedding/weddingalbum7/P13.jpg",
      "/images/wedding/weddingalbum7/P14.jpg",
      "/images/wedding/weddingalbum7/P15.jpg",
      "/images/wedding/weddingalbum7/P16.jpg",
      "/images/wedding/weddingalbum7/P17.jpg",
      "/images/wedding/weddingalbum7/P18.jpg",
      "/images/wedding/weddingalbum7/P19.jpg",
      "/images/wedding/weddingalbum7/P20.jpg",
      "/images/wedding/weddingalbum7/P21.jpg",
      "/images/wedding/weddingalbum7/P22.jpg",
      "/images/wedding/weddingalbum7/P23.jpg",
      "/images/wedding/weddingalbum7/P24.jpg",
    ],
  },
  {
    id: 8,
    title: "Deen & Laiba — Haldi Celebration",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 9,
    title: "Samudro & Ananna — Hindu Reception",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 10,
    title: "Arnob & Tarannum — Reception",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 11,
    title: "Nahid & Tasnim — Wedding Highlights",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
    count: "4 Photos",
    photos: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 12,
    title: "Tanha's Wedding Highlights",
    src: "/images/wedding/weddingalbum12/C12.jpg",
    count: "12 Photos",
    photos: [
      "/images/wedding/weddingalbum12/P1.jpg",
      "/images/wedding/weddingalbum12/P2.jpg",
      "/images/wedding/weddingalbum12/P3.jpg",
      "/images/wedding/weddingalbum12/P4.jpg",
      "/images/wedding/weddingalbum12/P5.jpg",
      "/images/wedding/weddingalbum12/P6.jpg",
      "/images/wedding/weddingalbum12/P7.jpg",
      "/images/wedding/weddingalbum12/P8.jpg",
      "/images/wedding/weddingalbum12/P9.jpg",
      "/images/wedding/weddingalbum12/P10.jpg",
      "/images/wedding/weddingalbum12/P11.jpg",
      "/images/wedding/weddingalbum12/P12.jpg",
    ],
  },
  {
    id: 13,
    title: "Roshni's Haldi Celebration",
    src: "/images/wedding/weddingalbum13/C13.jpg",
    count: "9 Photos",
    photos: [
      "/images/wedding/weddingalbum13/P1.jpg",
      "/images/wedding/weddingalbum13/P2.jpg",
      "/images/wedding/weddingalbum13/P3.jpg",
      "/images/wedding/weddingalbum13/P4.jpg",
      "/images/wedding/weddingalbum13/P5.jpg",
      "/images/wedding/weddingalbum13/P6.jpg",
      "/images/wedding/weddingalbum13/P7.jpg",
      "/images/wedding/weddingalbum13/P8.jpg",
      "/images/wedding/weddingalbum13/P9.jpg",
    ],
  },
  {
    id: 14,
    title: "Proma's Haldi Celebration",
    src: "/images/wedding/weddingalbum14/C14.jpg",
    count: "4 Photos",
    photos: [
      "/images/wedding/weddingalbum14/P1.jpg",
      "/images/wedding/weddingalbum14/P2.jpg",
      "/images/wedding/weddingalbum14/P3.jpg",
      "/images/wedding/weddingalbum14/P4.jpg",
    ],
  },
  {
    id: 15,
    title: "Atik & Auhona - Intimate Wedding",
    src: "/images/wedding/weddingalbum15/C15.jpg",
    count: "25 Photos",
    photos: [
      "/images/wedding/weddingalbum15/P1.jpg",
      "/images/wedding/weddingalbum15/P2.jpg",
      "/images/wedding/weddingalbum15/P3.jpg",
      "/images/wedding/weddingalbum15/P4.jpg",
      "/images/wedding/weddingalbum15/P5.jpg",
      "/images/wedding/weddingalbum15/P6.jpg",
      "/images/wedding/weddingalbum15/P7.jpg",
      "/images/wedding/weddingalbum15/P8.jpg",
      "/images/wedding/weddingalbum15/P9.jpg",
      "/images/wedding/weddingalbum15/P10.jpg",
      "/images/wedding/weddingalbum15/P11.jpg",
      "/images/wedding/weddingalbum15/P12.jpg",
      "/images/wedding/weddingalbum15/P13.jpg",
      "/images/wedding/weddingalbum15/P14.jpg",
      "/images/wedding/weddingalbum15/P15.jpg",
      "/images/wedding/weddingalbum15/P16.jpg",
      "/images/wedding/weddingalbum15/P17.jpg",
      "/images/wedding/weddingalbum15/P18.jpg",
      "/images/wedding/weddingalbum15/P19.jpg",
      "/images/wedding/weddingalbum15/P20.jpg",
      "/images/wedding/weddingalbum15/P21.jpg",
      "/images/wedding/weddingalbum15/P22.jpg",
      "/images/wedding/weddingalbum15/P23.jpg",
      "/images/wedding/weddingalbum15/P24.jpg",
      "/images/wedding/weddingalbum15/P25.jpg",
    ],
  },
];

// --- Data for Wedding Films (Direct YouTube Embed URLs) ---
const weddingFilms = [
  {
    id: 1,
    title: "Arnob & Tarannum's Haldi Trailer",
    youtubeEmbedUrl: "https://www.youtube.com/embed/iEJ73IuorfI",
  },
  {
    id: 2,
    title: "Tears of Joy: A Wedding Story",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Cu1jOBAAh5U",
  },
  {
    id: 3,
    title: "Rafi & Tazri's Wedding Highlights",
    youtubeEmbedUrl: "https://www.youtube.com/embed/_xvPWqeKVoA",
  },
  {
    id: 4,
    title: "Cinematic Bangali Gaye Holud || Samudro & Ananna",
    youtubeEmbedUrl: "https://www.youtube.com/embed/S2z1qfBUPRY",
  },
  {
    id: 5,
    title: "Wedding Moments || Sumaiya & Uday",
    youtubeEmbedUrl: "https://www.youtube.com/embed/k5OTlbekLj8",
  },
  {
    id: 6,
    title: "Cinematic Haldi Trailer || Sumaiya & Uday",
    youtubeEmbedUrl: "https://www.youtube.com/embed/HKe42qUTunI",
  },
  {
    id: 7,
    title: "Royal Wedding Trailer || Samir & Tulu",
    youtubeEmbedUrl: "https://www.youtube.com/embed/8CS0C6I7198",
  },
  {
    id: 8,
    title: "Royal Reception Highlights || Rahat & Nidhi",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Th5iQ499OSU",
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
  const [selectedAlbum, setSelectedAlbum] = useState<
    (typeof weddingAlbums)[0] | null
  >(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
            onClick={() => {
              setActiveTab("photography");
              setSelectedAlbum(null);
            }}
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
            onClick={() => {
              setActiveTab("cinematography");
              setSelectedAlbum(null);
            }}
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
            {/* 1. PHOTOGRAPHY TAB CONTENT */}
            {activeTab === "photography" && !selectedAlbum && (
              <motion.div
                key="photography-list"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {weddingAlbums.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => setSelectedAlbum(album)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-black/30 mb-4 rounded-sm">
                      <Image
                        src={album.src}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3E141E]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#cba677] mb-1 font-medium">
                          View Album ↗
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

            {/* INSIDE ALBUM VIEW (Pinterest Masonry Layout - Natural Sizes) */}
            {activeTab === "photography" && selectedAlbum && (
              <motion.div
                key="inside-album"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-10"
              >
                {/* Back Button & Album Title Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 gap-4">
                  <div>
                    <button
                      onClick={() => setSelectedAlbum(null)}
                      className="text-xs uppercase tracking-[0.25em] text-[#cba677] hover:text-white transition-colors flex items-center gap-2 mb-2"
                    >
                      ← Back to All Albums
                    </button>
                    <h2
                      className={`text-3xl md:text-5xl text-white ${cormorant.className}`}
                    >
                      {selectedAlbum.title}
                    </h2>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-300">
                    {selectedAlbum.count} Available
                  </span>
                </div>

                {/* Masonry Grid (Preserves natural photo dimensions without cropping) */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border">
                  {selectedAlbum.photos.map((photo, index) => (
                    <div
                      key={index}
                      onClick={() => setLightboxImage(photo)}
                      className="mb-6 break-inside-avoid relative overflow-hidden rounded-sm group cursor-pointer bg-black/40 border border-white/10 shadow-lg"
                    >
                      <img
                        src={photo}
                        alt={`${selectedAlbum.title} - ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-[0.25em] text-[#cba677] bg-black/70 px-4 py-2 border border-[#cba677]/40 rounded-sm">
                          Zoom Photo
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 2. CINEMATOGRAPHY TAB CONTENT */}
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
          </AnimatePresence>
        </div>
      </section>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/10 hover:bg-[#cba677] text-white hover:text-[#3E141E] rounded-full flex items-center justify-center text-xl transition-all duration-300"
              >
                ✕
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={lightboxImage}
                  alt="Expanded Wedding Photo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
