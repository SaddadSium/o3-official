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

// --- Data for Wedding Albums with separate coverSrc for Hero ---
export const weddingAlbums = [
  {
    id: "1",
    title: "Deen & Laiba — Royal Wedding",
    category: "Muslim Wedding",
    src: "/images/wedding/covers/W1.jpg",
    coverSrc: "/images/wedding/weddingalbum1/hero-cover.jpg",
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
    id: "2",
    title: "Tanvir & Sanjida — Reception Highlights",
    category: "Reception",
    src: "/images/wedding/covers/R1.jpg",
    coverSrc: "",
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
    id: "3",
    title: "Swapnil & Tomori — Pre Wedding",
    category: "Pre/Post Wedding",
    src: "/images/wedding/covers/PW3.jpg",
    coverSrc: "",
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
    id: "4",
    title: "Deen & Laiba — Haldi Celebration",
    category: "Haldi",
    src: "/images/wedding/covers/H4.jpg",
    coverSrc: "",
    count: "4 Photos",
    photos: ["", "", "", ""],
  },
  {
    id: "5",
    title: "Prova's Mehendi Celebration",
    category: "Haldi",
    src: "/images/wedding/covers/H5.jpg",
    coverSrc: "",
    count: "4 Photos",
    photos: ["", "", "", ""],
  },
  {
    id: "6",
    title: "Tanvir & Sanjida — Intimate Akhd",
    category: "Muslim Wedding",
    src: "/images/wedding/covers/W6.jpg",
    coverSrc: "",
    count: "4 Photos",
    photos: ["", "", "", ""],
  },
  {
    id: "7",
    title: "Moon & Trina - Wedding Series",
    category: "Muslim Wedding",
    src: "/images/wedding/covers/C7.jpg",
    coverSrc: "",
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
    id: "8",
    title: "Munim & Tasnim — Post Wedding",
    category: "Pre/Post Wedding",
    src: "/images/wedding/covers/PW4.jpg",
    coverSrc: "",
    count: "4 Photos",
    photos: ["", "", "", ""],
  },
  {
    id: "9",
    title: "Tanvir & Sanjida — Haldi Highlights",
    category: "Haldi",
    src: "/images/wedding/covers/H7.jpg",
    coverSrc: "",
    count: "4 Photos",
    photos: ["", "", "", ""],
  },
  {
    id: "10",
    title: "Arnob & Tarannum — Reception",
    category: "Reception",
    src: "/images/wedding/covers/R2.jpg",
    coverSrc: "",
    count: "4 Photos",
    photos: ["", "", "", ""],
  },
  {
    id: "11",
    title: "Samudro & Ananna — Wedding Highlights",
    category: "Hindu Wedding",
    src: "/images/wedding/covers/HN1.jpg",
    coverSrc: "",
    count: "4 Photos",
    photos: ["", "", "", ""],
  },
  {
    id: "12",
    title: "Tanha's Wedding Highlights",
    category: "Muslim Wedding",
    src: "/images/wedding/covers/C12.jpg",
    coverSrc: "",
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
    id: "13",
    title: "Tarmim's Akhd Highlights",
    category: "Muslim Wedding",
    src: "/images/wedding/covers/W10.jpg",
    coverSrc: "",
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
    id: "14",
    title: "Proma's Haldi Celebration",
    category: "Haldi",
    src: "/images/wedding/covers/H9.jpg",
    coverSrc: "",
    count: "4 Photos",
    photos: [
      "/images/wedding/weddingalbum14/P1.jpg",
      "/images/wedding/weddingalbum14/P2.jpg",
      "/images/wedding/weddingalbum14/P3.jpg",
      "/images/wedding/weddingalbum14/P4.jpg",
    ],
  },
  {
    id: "15",
    title: "Atik & Auhona - Intimate Wedding",
    category: "Muslim Wedding",
    src: "/images/wedding/weddingalbum15/C15.jpg",
    coverSrc: "/images/wedding/weddingalbum15/P2.jpg",
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
  {
    id: "16",
    title: "Arnob & Tarannum - Haldi Highlights",
    category: "Haldi",
    src: "/images/wedding/covers/H16.jpg",
    coverSrc: "/images/wedding/weddingalbum16/P2.jpg",
    count: "20 Photos",
    photos: [
      "/images/wedding/weddingalbum16/P1.jpg",
      "/images/wedding/weddingalbum16/P2.jpg",
      "/images/wedding/weddingalbum16/P3.jpg",
    ],
  },
  {
    id: "17",
    title: "Samudro & Ananna - Reception Highlights",
    category: "Reception",
    src: "/images/wedding/covers/R9.jpg",
    coverSrc: "/images/wedding/weddingalbum17/P2.jpg",
    count: "20 Photos",
    photos: [
      "/images/wedding/weddingalbum17/P1.jpg",
      "/images/wedding/weddingalbum17/P2.jpg",
      "/images/wedding/weddingalbum17/P3.jpg",
    ],
  },
  {
    id: "19",
    title: "Roshni's Haldi Celebration",
    category: "Haldi",
    src: "/images/wedding/covers/C13.jpg",
    coverSrc: "",
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
];

// --- Data for Wedding Films ---
const weddingFilms = [
  {
    id: 1,
    title: "Arnob & Tarannum's Haldi Trailer",
    category: "Haldi",
    youtubeEmbedUrl: "https://www.youtube.com/embed/iEJ73IuorfI",
  },
  {
    id: 2,
    title: "Tears of Joy: A Wedding Story",
    category: "Muslim Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Cu1jOBAAh5U",
  },
  {
    id: 3,
    title: "Rafi & Tazri's Wedding Highlights",
    category: "Muslim Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/_xvPWqeKVoA",
  },
  {
    id: 4,
    title: "Cinematic Bangali Gaye Holud || Samudro & Ananna",
    category: "Hindu Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/S2z1qfBUPRY",
  },
  {
    id: 5,
    title: "Wedding Moments || Sumaiya & Uday",
    category: "Muslim Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/k5OTlbekLj8",
  },
  {
    id: 6,
    title: "Cinematic Haldi Trailer || Sumaiya & Uday",
    category: "Haldi",
    youtubeEmbedUrl: "https://www.youtube.com/embed/HKe42qUTunI",
  },
  {
    id: 7,
    title: "Royal Wedding Trailer || Samir & Tulu",
    category: "Pre/Post Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/8CS0C6I7198",
  },
  {
    id: 8,
    title: "Royal Reception Highlights || Rahat & Nidhi",
    category: "Reception",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Th5iQ499OSU",
  },
];

const subCategories = [
  "All",
  "Muslim Wedding",
  "Haldi",
  "Pre/Post Wedding",
  "Hindu Wedding",
  "Reception",
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
  const [activeSubCategory, setActiveSubCategory] = useState<string>("All");

  const filteredAlbums =
    activeSubCategory === "All"
      ? weddingAlbums
      : weddingAlbums.filter((album) => album.category === activeSubCategory);

  const filteredFilms =
    activeSubCategory === "All"
      ? weddingFilms
      : weddingFilms.filter((film) => film.category === activeSubCategory);

  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[35vh] w-full overflow-hidden flex items-center justify-center pt-24">
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

        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[9px] uppercase tracking-[0.4em] text-[#cba677] block mb-1.5 font-light"
          >
            Curated Collections
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-4xl md:text-6xl text-white tracking-wide ${cormorant.className}`}
          >
            Wedding Stories
          </motion.h1>
        </div>
      </section>

      {/* ================= MAIN TAB SWITCHER ================= */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="flex justify-center items-center space-x-12 md:space-x-20 border-b border-white/15 pb-4">
          <button
            onClick={() => {
              setActiveTab("photography");
              setActiveSubCategory("All");
            }}
            className="relative group focus:outline-none"
          >
            <span
              className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${activeTab === "photography" ? "text-white italic font-medium" : "text-gray-400 hover:text-white"}`}
            >
              Photography
            </span>
            {activeTab === "photography" && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>

          <button
            onClick={() => {
              setActiveTab("cinematography");
              setActiveSubCategory("All");
            }}
            className="relative group focus:outline-none"
          >
            <span
              className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${activeTab === "cinematography" ? "text-white italic font-medium" : "text-gray-400 hover:text-white"}`}
            >
              Cinematography
            </span>
            {activeTab === "cinematography" && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#cba677]"
              />
            )}
          </button>
        </div>

        {/* ================= SUB-CATEGORIES FILTER BUTTONS ================= */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mt-6 mb-10">
          {subCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveSubCategory(cat)}
              className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-500 ${
                activeSubCategory === cat
                  ? "bg-[#cba677] text-[#3E141E] border-[#cba677] font-medium shadow-lg"
                  : "border-white/20 text-gray-300 hover:border-[#cba677] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= CONTENT DISPLAY AREA ================= */}
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {/* 1. PHOTOGRAPHY TAB CONTENT */}
            {activeTab === "photography" && (
              <motion.div
                key={`photography-${activeSubCategory}`}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredAlbums.map((album) => (
                  <Link
                    key={album.id}
                    href={`/wedding/${album.id}`}
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

                      {/* Premium Bottom Overlay with Explore Action */}
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
                          <span>Explore Album</span>
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
                key={`cinematography-${activeSubCategory}`}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto"
              >
                {filteredFilms.map((film) => (
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
    </div>
  );
}
