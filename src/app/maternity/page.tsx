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

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

// --- Mock Data for Maternity & Birthday Collections ---
const combinedGalleries = {
  maternity: [
    {
      id: 1,
      title: "The Expecting Glow",
      category: "Outdoor Portraiture",
      src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Ethereal Motherhood",
      category: "Studio Fine Art",
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Waiting for You",
      category: "Couple Maternity",
      src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop",
    },
  ],
  birthday: [
    {
      id: 4,
      title: "First Birthday Milestone",
      category: "Baby Cake Smash",
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Grand Birthday Galas",
      category: "Event Celebration",
      src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Joyful Childhood Moments",
      category: "Portraiture",
      src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000&auto=format&fit=crop",
    },
  ],
};

export default function MaternityBirthdayPage() {
  const [activeTab, setActiveTab] = useState<"maternity" | "birthday">(
    "maternity",
  );

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white relative overflow-hidden ${jost.className}`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#cba677]/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2070&auto=format&fit=crop"
            alt="Maternity and Birthday Hero"
            fill
            className="object-cover opacity-75"
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
            Precious Memories & Milestones
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-5xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            Maternity & Birthday
          </motion.h1>
        </div>
      </section>

      {/* ================= CATEGORY SWITCHER TABS ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center items-center gap-10 md:gap-16 border-b border-white/10 pb-8">
          {[
            { key: "maternity", label: "Maternity Stories" },
            { key: "birthday", label: "Birthday Celebrations" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className="relative group focus:outline-none px-4 py-2"
            >
              <span
                className={`text-lg md:text-2xl uppercase tracking-[0.2em] transition-colors duration-500 font-light ${activeTab === tab.key ? "text-white italic" : "text-gray-400 hover:text-white"}`}
              >
                {tab.label}
              </span>
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeMatBirthIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#cba677]"
                />
              )}
            </button>
          ))}
        </div>

        {/* ================= GALLERY GRID ================= */}
        <div className="mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {combinedGalleries[activeTab].map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-black/40 rounded-sm shadow-xl mb-4 border border-white/10 group-hover:border-[#cba677]/50 transition-all duration-500">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-[0.3em] text-[#cba677]">
                        Explore Showcase
                      </span>
                    </div>
                  </div>
                  <h3
                    className={`text-2xl text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 ${cormorant.className}`}
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
