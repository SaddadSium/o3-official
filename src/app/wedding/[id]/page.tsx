"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { weddingAlbums } from "../page";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function AlbumDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Find album strictly matching ID
  const album = weddingAlbums.find((item) => item.id === id);

  if (!album) {
    return (
      <div
        className={`bg-[#3E141E] min-h-screen text-white flex flex-col items-center justify-center ${jost.className}`}
      >
        <h2 className={`text-4xl mb-4 ${cormorant.className}`}>
          Album Not Found
        </h2>
        <Link
          href="/wedding"
          className="text-xs uppercase tracking-[0.25em] text-[#cba677] underline"
        >
          ← Back to Wedding Stories
        </Link>
      </div>
    );
  }

  // Explicitly check coverSrc, if valid and not empty string use it, else fallback to album.src
  const heroImage =
    album.coverSrc && album.coverSrc.trim() !== "" ? album.coverSrc : album.src;

  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* Back Button Overlay */}
      <div className="absolute top-28 left-6 lg:left-12 z-20">
        <Link
          href="/wedding"
          className="text-xs uppercase tracking-[0.25em] text-[#cba677] bg-black/60 backdrop-blur-md px-4 py-2 border border-[#cba677]/30 hover:bg-[#cba677] hover:text-[#3E141E] transition-all duration-300 rounded-sm inline-flex items-center gap-2"
        >
          ← Back to Albums
        </Link>
      </div>

      {/* ================= HERO SECTION (Using dedicated coverSrc) ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            key={heroImage}
            src={heroImage}
            alt={album.title}
            fill
            className="object-cover opacity-80"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E141E] via-black/50 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-3 font-light"
          >
            {album.category.toUpperCase()} &bull; {album.count}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-5xl md:text-8xl text-white tracking-wide italic drop-shadow-2xl ${cormorant.className}`}
          >
            {album.title}
          </motion.h1>
        </div>
      </section>

      {/* ================= SEQUENTIAL ALL PHOTOS (Pinterest Masonry Layout) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h3
            className={`text-3xl md:text-4xl text-white tracking-wider ${cormorant.className}`}
          >
            Complete Story Sequence
          </h3>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mt-4"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border">
          {album.photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setLightboxImage(photo)}
              className="mb-6 break-inside-avoid relative overflow-hidden rounded-sm group cursor-pointer bg-black/40 border border-white/10 shadow-lg"
            >
              <img
                src={photo}
                alt={`${album.title} - Photo ${index + 1}`}
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
