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

// --- Mock Data for Product Photography Categories ---
const productGalleries = {
  all: [
    {
      id: 1,
      title: "Luxury Timepiece Collection",
      category: "Watch & Jewelry",
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Artisan Skincare Line",
      category: "Beauty",
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "High-End Fashion Editorial",
      category: "Fashion",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Gourmet Culinary Art",
      category: "Food & Beverage",
      src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Designer Perfume Flacon",
      category: "Fragrance",
      src: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Minimalist Footwear Showcase",
      category: "Fashion",
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    },
  ],
  commercial: [
    {
      id: 1,
      title: "Luxury Timepiece Collection",
      category: "Watch & Jewelry",
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Designer Perfume Flacon",
      category: "Fragrance",
      src: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop",
    },
  ],
  fashion: [
    {
      id: 3,
      title: "High-End Fashion Editorial",
      category: "Fashion",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Minimalist Footwear Showcase",
      category: "Fashion",
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    },
  ],
  lifestyle: [
    {
      id: 2,
      title: "Artisan Skincare Line",
      category: "Beauty",
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Gourmet Culinary Art",
      category: "Food & Beverage",
      src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
    },
  ],
};

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function ProductPhotographyPage() {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof productGalleries>("all");

  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop"
            alt="Product Photography Hero"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 mt-16 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-3 font-light"
          >
            Commercial & Brand Mastery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-6xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            Product Photography
          </motion.h1>
        </div>
      </section>

      {/* ================= CATEGORY FILTER TABS ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 border-b border-white/10 pb-8">
          {[
            { key: "all", label: "All Collections" },
            { key: "commercial", label: "Commercial" },
            { key: "fashion", label: "Fashion & Apparel" },
            { key: "lifestyle", label: "Beauty & Lifestyle" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className="relative group focus:outline-none px-4 py-2"
            >
              <span
                className={`text-sm md:text-lg uppercase tracking-[0.2em] transition-colors duration-500 font-light ${activeCategory === cat.key ? "text-[#cba677] font-medium" : "text-gray-400 hover:text-white"}`}
              >
                {cat.label}
              </span>
              {activeCategory === cat.key && (
                <motion.div
                  layoutId="activeProductIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cba677]"
                />
              )}
            </button>
          ))}
        </div>

        {/* ================= GALLERY GRID ================= */}
        <div className="mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {productGalleries[activeCategory].map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black/40 rounded-sm shadow-xl mb-4">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E141E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[#cba677] mb-1">
                        {item.category}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-white font-light">
                        View Showcase
                      </span>
                    </div>
                  </div>
                  <h3
                    className={`text-xl text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 ${cormorant.className}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-1 font-light">
                    {item.category}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
