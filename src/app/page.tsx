"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  heroImages,
  featuredArchives,
  featuredFilms,
  reviews,
} from "@/data/homeData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const reviewTimer = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(reviewTimer);
  }, []);

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white overflow-x-hidden ${jost.className}`}
    >
      <section className="relative h-[85svh] sm:h-[92svh] lg:h-[100svh] min-h-[540px] w-full overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentSlide]}
              alt="Ocean of Orchid Visuals"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_25%] lg:object-center"
            />
            <div className="absolute inset-0 bg-black/45 bg-gradient-to-t from-[#3E141E] via-black/15 to-black/35"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto mt-12 md:mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 tracking-wide leading-[1.1] drop-shadow-lg ${cormorant.className}`}
          >
            The Art of <br />{" "}
            <span className="text-[#cba677] italic">Light & Motion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.22em] sm:tracking-[0.3em] font-light text-gray-200 drop-shadow-md leading-relaxed sm:leading-loose"
          >
            Prioritizing Your Dreams Through <br className="md:hidden" />{" "}
            Timeless Visual Storytelling
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] mb-2 sm:mb-3 text-gray-400">
            Scroll
          </span>
          <div className="w-[1px] h-9 sm:h-12 bg-gray-500/50 overflow-hidden">
            <motion.div
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/2 bg-[#cba677]"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
            Featured Stories
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
          >
            VISUAL ANTHOLOGY
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {featuredArchives.map((album, index) => (
            <motion.div
              key={album.id}
              variants={sectionVariants}
              className={`group relative overflow-hidden bg-black/30 rounded-sm border border-white/10 hover:border-[#cba677]/60 transition-all duration-500 shadow-xl ${album.span}`}
            >
              <Link
                href={`/wedding/${album.id}`}
                className="block relative w-full h-full"
              >
                <Image
                  src={album.src}
                  alt={album.title}
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes={
                    album.span.includes("lg:col-span-2")
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent group-hover:from-black/95 transition-all duration-500 flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-[#cba677] mb-1 font-light">
                    {album.category}
                  </span>
                  <div className="flex items-end justify-between gap-3">
                    <h3
                      className={`text-lg sm:text-xl lg:text-2xl text-white tracking-wide leading-snug group-hover:text-[#cba677] transition-colors duration-300 ${cormorant.className}`}
                    >
                      {album.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#cba677] opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 shrink-0">
                      Explore ↗
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link href="/wedding" className="group flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#cba677] group-hover:text-white transition-colors duration-300">
              Experience The Complete Chronicle
            </span>
            <span className="w-10 sm:w-12 h-[1px] bg-[#cba677] group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-black/20 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-10 sm:mb-14 lg:mb-16"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
              Cinematography Showcase
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
            >
              STORIES IN MOTION
            </h2>
            <div className="w-12 h-[1px] bg-[#cba677] mx-auto"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {featuredFilms.map((film) => (
              <motion.div
                key={film.id}
                variants={sectionVariants}
                className="group flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-black/50 mb-3 rounded-sm shadow-xl border border-white/10 group-hover:border-[#cba677]/50 transition-all duration-500">
                  <LiteYouTubePlayer
                    embedUrl={film.youtubeEmbedUrl}
                    title={film.title}
                  />
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#cba677] font-light mb-0.5">
                  {film.category}
                </span>
                <h3
                  className={`text-base md:text-lg text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 line-clamp-1 ${cormorant.className}`}
                >
                  {film.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 sm:mt-16 flex justify-center">
            <Link href="/wedding" className="group flex items-center space-x-4">
              <span className="text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#cba677] group-hover:text-white transition-colors duration-300">
                Watch The Stories Unfold
              </span>
              <span className="w-10 sm:w-12 h-[1px] bg-[#cba677] group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] md:w-[500px] h-[220px] sm:h-[300px] bg-[#cba677]/10 rounded-full blur-[110px] md:blur-[130px] pointer-events-none"></div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
            Client Testimonials
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
          >
            Words Of Grace
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mb-10 sm:mb-14"></div>

          <div className="relative bg-black/30 backdrop-blur-md border border-[#cba677]/20 rounded-sm px-5 py-9 sm:px-10 sm:py-12 md:px-16 md:py-16 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-[2px] bg-[#cba677]/70"></div>

            <span className="absolute top-4 right-4 sm:top-5 sm:right-6 text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-[#cba677]/60 font-light">
              0{currentReview + 1} / 0{reviews.length}
            </span>

            <div className="flex justify-center items-center gap-1.5 mb-4 sm:mb-5 text-[#cba677] text-xs tracking-widest">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <div className="min-h-[300px] sm:min-h-[240px] md:min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full"
                >
                  <span
                    className={`text-[#cba677]/40 text-4xl sm:text-5xl md:text-6xl leading-none block mb-2 select-none ${cormorant.className}`}
                  >
                    &ldquo;
                  </span>

                  <p className="text-gray-200 font-light text-[13px] sm:text-base md:text-[17px] tracking-wide leading-relaxed md:leading-loose mb-6 sm:mb-8 italic max-w-3xl mx-auto">
                    {reviews[currentReview].text}
                  </p>

                  <div className="w-10 h-[1px] bg-[#cba677]/40 mx-auto mb-4 sm:mb-5"></div>

                  <div className="flex flex-col items-center justify-center">
                    <h4
                      className={`text-lg sm:text-xl md:text-2xl text-[#cba677] tracking-wide mb-1 ${cormorant.className}`}
                    >
                      {reviews[currentReview].name}
                    </h4>
                    <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 tracking-[0.25em] sm:tracking-[0.28em] font-light">
                      {reviews[currentReview].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 sm:gap-6 mt-8 sm:mt-10">
            <button
              onClick={handlePrevReview}
              aria-label="Previous review"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:border-[#cba677] hover:bg-[#cba677] hover:text-[#3E141E] transition-all duration-300 text-sm"
            >
              ←
            </button>

            <div className="flex items-center space-x-2.5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentReview === index
                      ? "bg-[#cba677] w-7 sm:w-8"
                      : "bg-white/25 w-1.5 hover:bg-white/60"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextReview}
              aria-label="Next review"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:border-[#cba677] hover:bg-[#cba677] hover:text-[#3E141E] transition-all duration-300 text-sm"
            >
              →
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}