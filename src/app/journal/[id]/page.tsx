"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { journalPosts } from "@/data/journalData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function JournalDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const post = journalPosts.find((item) => item.id === id);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  if (!post) {
    return (
      <div
        className={`bg-[#3E141E] min-h-screen text-white flex flex-col items-center justify-center px-6 text-center ${jost.className}`}
      >
        <h2 className={`text-4xl mb-4 ${cormorant.className}`}>
          Article Not Found
        </h2>
        <Link
          href="/journal"
          className="text-xs uppercase tracking-[0.25em] text-[#cba677] underline"
        >
          ← Back to The Journal
        </Link>
      </div>
    );
  }

  const relatedPosts = journalPosts.filter((item) => item.id !== post.id).slice(0, 2);

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white overflow-x-hidden ${jost.className}`}
    >
      <div className="absolute top-24 sm:top-28 left-4 sm:left-6 lg:left-12 z-20">
        <Link
          href="/journal"
          className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#cba677] bg-black/60 backdrop-blur-md px-3.5 py-2 border border-[#cba677]/30 hover:bg-[#cba677] hover:text-[#3E141E] transition-all duration-300 rounded-sm inline-flex items-center gap-2"
        >
          ← Back to Journal
        </Link>
      </div>

      <section className="relative h-[60vh] sm:h-[68vh] lg:h-[74vh] min-h-[420px] w-full overflow-hidden flex items-end justify-center pb-14 sm:pb-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            unoptimized={post.image.startsWith("http")}
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E141E] via-black/55 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#cba677] mb-4 font-light"
          >
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className={`text-4xl sm:text-5xl md:text-7xl text-white tracking-wide leading-[1.12] drop-shadow-2xl mb-5 ${cormorant.className}`}
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[11px] uppercase tracking-[0.28em] text-gray-300 font-light"
          >
            By {post.author}
          </motion.p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light leading-relaxed sm:leading-loose mb-12 border-l-2 border-[#cba677] pl-5 sm:pl-7">
          {post.intro}
        </p>

        {post.sections[0] && (
          <div className="mb-14">
            <h2
              className={`text-3xl sm:text-4xl text-[#cba677] tracking-wide mb-5 ${cormorant.className}`}
            >
              {post.sections[0].heading}
            </h2>
            <div className="space-y-5 text-gray-200 font-light text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-loose">
              {post.sections[0].paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        )}

        <figure className="my-14">
          <div
            onClick={() => setLightboxImage(post.featureImage.src)}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10 bg-black/40 shadow-2xl cursor-pointer group"
          >
            <Image
              src={post.featureImage.src}
              alt={post.featureImage.caption}
              fill
              loading="lazy"
              unoptimized={post.featureImage.src.startsWith("http")}
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <figcaption className="text-center text-xs text-gray-400 tracking-wide italic mt-3.5 font-light">
            {post.featureImage.caption}
          </figcaption>
        </figure>

        <blockquote className="my-14 py-8 px-6 sm:px-10 bg-black/25 border-y border-[#cba677]/30 text-center">
          <span
            className={`text-[#cba677]/50 text-5xl leading-none block mb-2 select-none ${cormorant.className}`}
          >
            &ldquo;
          </span>
          <p
            className={`text-2xl sm:text-3xl md:text-4xl text-white italic tracking-wide leading-snug ${cormorant.className}`}
          >
            {post.quote}
          </p>
        </blockquote>

        {post.sections[1] && (
          <div className="mb-14">
            <h2
              className={`text-3xl sm:text-4xl text-[#cba677] tracking-wide mb-5 ${cormorant.className}`}
            >
              {post.sections[1].heading}
            </h2>
            <div className="space-y-5 text-gray-200 font-light text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-loose">
              {post.sections[1].paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-14">
          {post.diptychImages.map((img, idx) => (
            <figure key={idx}>
              <div
                onClick={() => setLightboxImage(img.src)}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 bg-black/40 shadow-xl cursor-pointer group"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  loading="lazy"
                  unoptimized={img.src.startsWith("http")}
                  sizes="(max-width: 640px) 100vw, 440px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="text-center text-xs text-gray-400 tracking-wide italic mt-3 font-light">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {post.sections[2] && (
          <div className="mb-14">
            <h2
              className={`text-3xl sm:text-4xl text-[#cba677] tracking-wide mb-5 ${cormorant.className}`}
            >
              {post.sections[2].heading}
            </h2>
            <div className="space-y-5 text-gray-200 font-light text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-loose">
              {post.sections[2].paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        )}

        <figure className="my-14">
          <div
            onClick={() => setLightboxImage(post.closingImage.src)}
            className="relative aspect-[21/10] w-full overflow-hidden rounded-sm border border-white/10 bg-black/40 shadow-2xl cursor-pointer group"
          >
            <Image
              src={post.closingImage.src}
              alt={post.closingImage.caption}
              fill
              loading="lazy"
              unoptimized={post.closingImage.src.startsWith("http")}
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <figcaption className="text-center text-xs text-gray-400 tracking-wide italic mt-3.5 font-light">
            {post.closingImage.caption}
          </figcaption>
        </figure>
      </article>

      <section className="border-t border-white/10 bg-black/20 py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
              Continue Reading
            </span>
            <h3
              className={`text-3xl sm:text-4xl text-white tracking-wider ${cormorant.className}`}
            >
              More From The Journal
            </h3>
            <div className="w-12 h-[1px] bg-[#cba677] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/journal/${related.id}`}
                className="group block bg-black/30 border border-white/10 hover:border-[#cba677]/50 rounded-sm overflow-hidden transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    loading="lazy"
                    unoptimized={related.image.startsWith("http")}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#cba677] block mb-2">
                    {related.category} • {related.readTime}
                  </span>
                  <h4
                    className={`text-xl sm:text-2xl text-white group-hover:text-[#cba677] transition-colors duration-300 ${cormorant.className}`}
                  >
                    {related.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              className="relative w-full max-w-5xl h-[82vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                aria-label="Close image"
                className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/10 hover:bg-[#cba677] text-white hover:text-[#3E141E] rounded-full flex items-center justify-center text-lg transition-all duration-300"
              >
                ✕
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={lightboxImage}
                  alt="Expanded journal photo"
                  fill
                  unoptimized={lightboxImage.startsWith("http")}
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