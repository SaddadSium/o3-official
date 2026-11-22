"use client";

import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, Variants } from "framer-motion";
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

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function JournalPage() {
  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white overflow-x-hidden ${jost.className}`}
    >
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[70vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
            alt="Journal Hero"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 mt-14 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-3 font-light"
          >
            Thoughts, Stories & Perspectives
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`text-5xl sm:text-6xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            The Journal
          </motion.h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {journalPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group flex flex-col justify-between"
            >
              <Link
                href={`/journal/${post.id}`}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40 mb-6 rounded-sm shadow-xl border border-white/10 group-hover:border-[#cba677]/50 transition-all duration-500">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      unoptimized={post.image.startsWith("http")}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 bg-[#3E141E]/90 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#cba677] border border-[#cba677]/30">
                      {post.category}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-3 font-light">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2
                    className={`text-2xl md:text-3xl text-white tracking-wide mb-4 group-hover:text-[#cba677] transition-colors duration-300 ${cormorant.className}`}
                  >
                    {post.title}
                  </h2>

                  <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-[#cba677] group-hover:text-white transition-colors duration-300">
                    <span>Read Article</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                  <div className="w-full h-[1px] bg-white/10 mt-6 group-hover:bg-[#cba677]/60 transition-colors duration-500"></div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}