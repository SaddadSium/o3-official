"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { corporateAlbums } from "@/data/corporateData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function CorporateAlbumDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const album = corporateAlbums.find((item) => item.id === id);
  const validPhotos = album
    ? album.photos.filter((photo) => photo && photo.trim() !== "")
    : [];

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % validPhotos.length,
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + validPhotos.length) % validPhotos.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, validPhotos.length]);

  if (!album) {
    return (
      <div
        className={`bg-[#3E141E] min-h-screen text-white flex flex-col items-center justify-center px-6 text-center ${jost.className}`}
      >
        <h2 className={`text-4xl mb-4 ${cormorant.className}`}>
          Project Not Found
        </h2>
        <Link
          href="/corporate"
          className="text-xs uppercase tracking-[0.25em] text-[#cba677] underline"
        >
          ← Back to All Corporate Projects
        </Link>
      </div>
    );
  }

  const heroImage =
    album.coverSrc && album.coverSrc.trim() !== "" ? album.coverSrc : album.src;

  const handlePrev = () => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + validPhotos.length) % validPhotos.length,
    );
  };

  const handleNext = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % validPhotos.length,
    );
  };

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white overflow-x-hidden ${jost.className}`}
    >
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[70vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center pt-24 sm:pt-28">
        <div className="absolute inset-0 w-full h-full">
          <Image
            key={heroImage}
            src={heroImage}
            alt={album.title}
            fill
            priority
            unoptimized={heroImage.startsWith("http")}
            sizes="100vw"
            className="object-cover object-[center_25%] lg:object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E141E] via-black/50 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-3 font-light"
          >
            {album.category.toUpperCase()} &bull; {album.count}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide italic leading-tight drop-shadow-2xl ${cormorant.className}`}
          >
            {album.title}
          </motion.h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h3
            className={`text-3xl md:text-4xl text-white tracking-wider ${cormorant.className}`}
          >
            Project Gallery
          </h3>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mt-4"></div>
        </div>

        {validPhotos.length === 0 ? (
          <div className="text-center py-16 border border-white/10 bg-black/20 rounded-sm">
            <p className="text-sm text-gray-300 font-light tracking-wide">
              Gallery photos for this project are coming soon.
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6 [column-fill:_balance] box-border">
            {validPhotos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="mb-5 sm:mb-6 break-inside-avoid relative overflow-hidden rounded-sm group cursor-pointer bg-black/40 border border-white/10 shadow-lg"
              >
                <img
                  src={photo}
                  alt={`${album.title} - Photo ${index + 1}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
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
        )}

        <div className="mt-14 sm:mt-20 flex justify-center">
          <Link
            href="/corporate"
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#cba677] bg-black/40 backdrop-blur-md px-6 py-3 border border-[#cba677]/40 hover:bg-[#cba677] hover:text-[#3E141E] transition-all duration-300 rounded-sm inline-flex items-center gap-2"
          >
            ← Back to All Corporate Projects
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && validPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative w-full max-w-5xl h-[82vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="absolute -top-11 left-0 text-xs uppercase tracking-[0.25em] text-[#cba677]/80">
                {lightboxIndex + 1} / {validPhotos.length}
              </span>

              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/10 hover:bg-[#cba677] text-white hover:text-[#3E141E] rounded-full flex items-center justify-center text-lg transition-all duration-300"
              >
                ✕
              </button>

              {validPhotos.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="absolute left-2 sm:-left-12 z-10 w-10 h-10 bg-black/60 hover:bg-[#cba677] text-white hover:text-[#3E141E] border border-white/15 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="absolute right-2 sm:-right-12 z-10 w-10 h-10 bg-black/60 hover:bg-[#cba677] text-white hover:text-[#3E141E] border border-white/15 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    →
                  </button>
                </>
              )}

              <div className="relative w-full h-full">
                <Image
                  src={validPhotos[lightboxIndex]}
                  alt={`${album.title} - Photo ${lightboxIndex + 1}`}
                  fill
                  unoptimized={validPhotos[lightboxIndex].startsWith("http")}
                  sizes="95vw"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}