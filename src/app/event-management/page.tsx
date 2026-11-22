"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { eventAlbums } from "@/data/eventData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const eventCategories = [
  "All",
  "Wedding Production",
  "Corporate Activation",
  "Stage & Decor",
  "Sound & Lighting",
];

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

export default function EventManagementPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredAlbums =
    activeCategory === "All"
      ? eventAlbums
      : eventAlbums.filter((album) => album.category === activeCategory);

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white relative overflow-x-hidden ${jost.className}`}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#cba677]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <section className="relative h-[38vh] min-h-[280px] w-full overflow-hidden flex items-center justify-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1920&auto=format&fit=crop"
            alt="Event Management Hero"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[9px] uppercase tracking-[0.4em] text-[#cba677] block mb-1.5 font-light"
          >
            End-to-End Production & Design
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`text-4xl md:text-6xl text-white tracking-wide ${cormorant.className}`}
          >
            Event Management
          </motion.h1>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-5 border-b border-white/15 pb-6 mb-10">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#cba677] text-[#3E141E] border-[#cba677] font-medium shadow-lg"
                  : "border-white/20 text-gray-300 hover:border-[#cba677] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredAlbums.map((album, index) => (
                <Link
                  key={album.id}
                  href={`/event-management/${album.id}`}
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
                        <span>Explore Event</span>
                        <span>↗</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}