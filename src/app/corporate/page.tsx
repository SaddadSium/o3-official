"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  corporateAlbums,
  corporateFilms,
  corporateDocumentaries,
} from "@/data/corporateData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

function getYouTubeId(url: string): string {
  const match = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

function LiteYouTubePlayer({
  embedUrl,
  title,
}: {
  embedUrl: string;
  title: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(embedUrl);

  if (!videoId) return null;

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play ${title}`}
      className="relative w-full h-full group cursor-pointer block overflow-hidden bg-black focus:outline-none"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3E141E]/85 border border-[#cba677] flex items-center justify-center text-[#cba677] group-hover:bg-[#cba677] group-hover:text-[#3E141E] group-hover:scale-110 transition-all duration-300 shadow-2xl">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function CorporatePage() {
  const [activeTab, setActiveTab] = useState<
    "photography" | "cinematography" | "documentary"
  >("photography");

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white overflow-x-hidden ${jost.className}`}
    >
      <section className="relative h-[35vh] min-h-[260px] w-full overflow-hidden flex items-center justify-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/corporate/cover.jpg"
            alt="Corporate Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[9px] uppercase tracking-[0.4em] text-[#cba677] block mb-1.5 font-light"
          >
            Commercial Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`text-4xl md:text-6xl text-white tracking-wide ${cormorant.className}`}
          >
            Corporate Solutions
          </motion.h1>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("photography")}
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
              className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${
                activeTab === "documentary"
                  ? "text-white italic font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
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

        <div className="mt-10 pb-16">
          <AnimatePresence mode="wait">
            {activeTab === "photography" && (
              <motion.div
                key="corporate-photo"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {corporateAlbums.map((album, index) => (
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
                        priority={index < 3}
                        loading={index < 3 ? "eager" : "lazy"}
                        unoptimized={album.src.startsWith("http")}
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
                          <span>Explore Project</span>
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
                      <LiteYouTubePlayer
                        embedUrl={film.youtubeEmbedUrl}
                        title={film.title}
                      />
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
                      <LiteYouTubePlayer
                        embedUrl={doc.youtubeEmbedUrl}
                        title={doc.title}
                      />
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