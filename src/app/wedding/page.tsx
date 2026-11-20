"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { weddingAlbums, weddingFilms } from "@/data/weddingData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
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
    <div
      className={`bg-[#3E141E] min-h-screen text-white overflow-x-hidden ${jost.className}`}
    >
      <section className="relative h-[35vh] min-h-[260px] w-full overflow-hidden flex items-center justify-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/about/cv.jpg"
            alt="Wedding Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[9px] uppercase tracking-[0.4em] text-[#cba677] block mb-1.5 font-light"
          >
            Curated Collections
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`text-4xl md:text-6xl text-white tracking-wide ${cormorant.className}`}
          >
            Wedding Stories
          </motion.h1>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex justify-center items-center space-x-10 sm:space-x-14 md:space-x-20 border-b border-white/15 pb-4">
          <button
            onClick={() => {
              setActiveTab("photography");
              setActiveSubCategory("All");
            }}
            className="relative group focus:outline-none"
          >
            <span
              className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${
                activeTab === "photography"
                  ? "text-white italic font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
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
              className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${
                activeTab === "cinematography"
                  ? "text-white italic font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
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

        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-5 mt-6 mb-10">
          {subCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveSubCategory(cat)}
              className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                activeSubCategory === cat
                  ? "bg-[#cba677] text-[#3E141E] border-[#cba677] font-medium shadow-lg"
                  : "border-white/20 text-gray-300 hover:border-[#cba677] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-4 pb-16">
          <AnimatePresence mode="wait">
            {activeTab === "photography" && (
              <motion.div
                key={`photography-${activeSubCategory}`}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredAlbums.map((album, index) => (
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
                        priority={index < 3}
                        loading={index < 3 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />

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
                        loading="lazy"
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