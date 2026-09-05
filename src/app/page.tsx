"use client";

import { useState, useEffect } from "react";
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

const heroImages = [
  "/images/hero/hero1.webp",
  "/images/hero/hero2.webp",
  "/images/hero/hero3.webp",
  "/images/hero/hero4.webp",
  "/images/hero/hero5.webp",
];

const archives = [
  {
    id: 1,
    title: "ERA & EMRAN",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "AZFAR & SADIIA",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "HAMZA & RUKSAD",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "SAZZAD & NOWREEN",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 5,
    title: "SAMARA & ANIK",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 6,
    title: "TAHSIN & MIM",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1",
  },
  {
    id: 7,
    title: "RAYHAN & NISHI",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2",
  },
];

const videos = [
  {
    id: 1,
    title: "ARNOB & TARANNUM HALDI",
    thumb:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "TEARS OF JOY",
    thumb:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "RAFI & TAZRI HIGHLIGHTS",
    thumb:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "BANGALI GAYE HOLUD",
    thumb:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "WEDDING MOMENTS",
    thumb:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "ROYAL WEDDING",
    thumb:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "INTERIOR DESIGN PROMO",
    thumb:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "CORPORATE ODYSSEY",
    thumb:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=600&auto=format&fit=crop",
  },
];

const reviews = [
  {
    id: 1,
    name: "Era & Emran",
    role: "Wedding Client",
    text: "Ocean of Orchid captured the raw emotions of our wedding day perfectly. The cinematic video still makes us tear up. Truly timeless!",
  },
  {
    id: 2,
    name: "Crown Micro Global",
    role: "Corporate Event",
    text: "Professional, punctual, and incredibly creative. They elevated our corporate event's visual presence beyond our expectations.",
  },
  {
    id: 3,
    name: "Samara & Anik",
    role: "Wedding Client",
    text: "The team made us feel so comfortable. The photos look like they belong in a luxury magazine. Highly recommended!",
  },
  {
    id: 4,
    name: "JCX Architects",
    role: "Interior Shoot",
    text: "Their architectural and interior photography is unmatched. The attention to lighting and detail is exactly what we needed for our portfolio.",
  },
  {
    id: 5,
    name: "Tahsin & Mim",
    role: "Wedding Client",
    text: "Choosing Ocean of Orchid was the best decision for our special day. The candid moments they caught are our absolute favorites.",
  },
];

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Review Slider Logic
  useEffect(() => {
    const reviewTimer = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(reviewTimer);
  }, []);

  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-[#3E141E] via-transparent to-black/30"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide drop-shadow-lg ${cormorant.className}`}
          >
            The Art of <br />{" "}
            <span className="text-[#cba677] italic">Light & Motion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] font-light text-gray-200 drop-shadow-md leading-loose"
          >
            Prioritizing Your Dreams Through <br className="md:hidden" />{" "}
            Timeless Visual Storytelling
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] mb-3 text-gray-400">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gray-500/50 overflow-hidden">
            <motion.div
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/2 bg-[#cba677]"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= VISUAL ANTHOLOGY ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {archives.map((album) => (
            <motion.div
              key={album.id}
              variants={sectionVariants}
              className={`group relative overflow-hidden bg-black/20 aspect-[4/3] ${album.span}`}
            >
              <Image
                src={album.src}
                alt={album.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E141E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                  {album.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Link href="/wedding" className="group flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#cba677] group-hover:text-white transition-colors duration-300">
              Experience The Complete Chronicle
            </span>
            <span className="w-12 h-[1px] bg-[#cba677] group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
          </Link>
        </div>
      </section>

      {/* ================= STORIES IN MOTION ================= */}
      <section className="py-24 px-6 lg:px-12 bg-black/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
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
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={sectionVariants}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden bg-[#2a0e14] mb-4">
                  <Image
                    src={video.thumb}
                    alt={video.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-8 bg-red-600 rounded-lg flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 text-white fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-[9px] uppercase tracking-[0.2em] font-medium text-gray-300 group-hover:text-[#cba677] transition-colors duration-300">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/cinematography"
              className="group flex items-center space-x-4"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#cba677] group-hover:text-white transition-colors duration-300">
                Watch The Stories Unfold
              </span>
              <span className="w-12 h-[1px] bg-[#cba677] group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CLIENT REVIEWS ================= */}
      <section className="py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center overflow-hidden">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2
            className={`text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
          >
            Words Of Grace
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mb-16"></div>

          <div className="relative min-h-[250px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-full"
              >
                <span
                  className={`text-[#cba677] text-6xl md:text-7xl mb-4 leading-none block ${cormorant.className}`}
                >
                  "
                </span>
                <p className="text-gray-300 font-light text-base md:text-xl tracking-wide leading-relaxed mb-8 italic max-w-2xl mx-auto">
                  {reviews[currentReview].text}
                </p>
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-[12px] uppercase tracking-[0.2em] font-medium text-white mb-1">
                    {reviews[currentReview].name}
                  </h4>
                  <span className="text-[10px] text-gray-500 tracking-[0.1em] font-light">
                    {reviews[currentReview].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-3 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  currentReview === index
                    ? "bg-[#cba677] w-6"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
