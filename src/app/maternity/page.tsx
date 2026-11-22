"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { maternityAlbums } from "@/data/maternityData";

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

const tabs = [
  { key: "all", label: "All" },
  { key: "maternity", label: "Maternity" },
  { key: "birthday", label: "Birthday" },
] as const;

export default function MaternityBirthdayPage() {
  const [activeTab, setActiveTab] = useState<"all" | "maternity" | "birthday">(
    "all",
  );

  const filteredAlbums =
    activeTab === "all"
      ? maternityAlbums
      : maternityAlbums.filter((album) => album.type === activeTab);

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white relative overflow-x-hidden ${jost.className}`}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#cba677]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <section className="relative h-[38vh] min-h-[280px] w-full overflow-hidden flex items-center justify-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/birthday/Bcv.jpg"
            alt="Maternity and Birthday Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-85"
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
            Precious Memories & Milestones
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`text-4xl md:text-6xl text-white tracking-wide ${cormorant.className}`}
          >
            Maternity & Birthday
          </motion.h1>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-20 border-b border-white/15 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="relative group focus:outline-none"
            >
              <span
                className={`text-xl md:text-3xl tracking-widest transition-colors duration-500 ${cormorant.className} ${
                  activeTab === tab.key
                    ? "text-white italic font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </span>
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeMatBirthIndicator"
                  className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#cba677]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredAlbums.map((album, index) => (
                <Link
                  key={album.id}
                  href={`/maternity/${album.id}`}
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
                        <span>Explore Album</span>
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