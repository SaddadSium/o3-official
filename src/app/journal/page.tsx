"use client";

import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, Variants } from "framer-motion";

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
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// --- Mock Data for Journal / Blogs ---
const blogPosts = [
  {
    id: 1,
    title: "The Art of Candid Wedding Storytelling",
    excerpt:
      "Discover why capturing unscripted moments creates a more emotional and timeless wedding film than traditional posed photography.",
    date: "October 12, 2026",
    category: "Wedding Philosophy",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Lighting the Future: Commercial Spaces",
    excerpt:
      "An inside look at how we approach architectural and corporate interior lighting to elevate modern brand identities.",
    date: "September 28, 2026",
    category: "Corporate & Commercial",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Aesthetic Blueprint: Choosing Your Wedding Palette",
    excerpt:
      "How our signature burgundy and gold color theory reflects luxury, warmth, and everlasting elegance in visual production.",
    date: "September 15, 2026",
    category: "Design & Style",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Behind the Lens: Capturing High-End Expos",
    excerpt:
      "Navigating large-scale corporate summits and global exhibitions with agile execution and cinema-grade drone gear.",
    date: "August 30, 2026",
    category: "Behind The Scenes",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function JournalPage() {
  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
            alt="Journal Hero"
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
            Thoughts, Stories & Perspectives
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-6xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            The Journal
          </motion.h1>
        </div>
      </section>

      {/* ================= BLOG POSTS GRID ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40 mb-6 rounded-sm shadow-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    unoptimized
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
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
