"use client";

import { useState } from "react";
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

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

// --- Mock Data: 12 Wedding Packages with Portrait Luxury Images ---
const weddingPackages = [
  {
    id: 1,
    title: "The Royal Dynasty (3 Days)",
    subtitle: "Complete Holdi, Mehendi & Grand Reception Coverage",
    price: "৳ 1,50,000",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    features: [
      "3 Days Full Coverage",
      "4 Lead Photographers & 4 Cinematographers",
      "Cinematic Feature Film (5-7 Mins)",
      "Drone Aerial Coverage",
      "2 Premium Hardcover Photobooks",
      "Same Day Teaser Reels",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "The Imperial Union (2 Days)",
    subtitle: "Haldi/Mehendi & Main Wedding Day",
    price: "৳ 1,15,000",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    features: [
      "2 Days Comprehensive Coverage",
      "3 Lead Photographers & 3 Cinematographers",
      "Cinematic Highlights (4-5 Mins)",
      "Drone Footage",
      "1 Premium Photobook",
      "All Soft Copies Delivered",
    ],
    popular: false,
  },
  {
    id: 3,
    title: "The Grand Reception",
    subtitle: "Exclusive Single-Day Reception Gala",
    price: "৳ 75,000",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop",
    features: [
      "1 Day Full Coverage (Up to 6 Hours)",
      "2 Lead Photographers & 2 Cinematographers",
      "Cinematic Trailer (3 Mins)",
      "Full Event Documentary Edit",
      "Custom USB & Digital Delivery",
    ],
    popular: false,
  },
  {
    id: 4,
    title: "Intimate Biye & Vivah",
    subtitle: "Traditional Wedding Ceremony Specialist",
    price: "৳ 65,000",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Single Day Main Wedding Coverage",
      "2 Photographers & 2 Cinematographers",
      "Cinematic Highlight Reel",
      "High-Resolution Edited Photos",
      "Online Private Gallery",
    ],
    popular: false,
  },
  {
    id: 5,
    title: "Gaye Holud Special",
    subtitle: "Vibrant & Colorful Cultural Night Coverage",
    price: "৳ 45,000",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Dedicated Holdi Night Coverage",
      "2 Photographers & 1 Cinematographer",
      "Teaser Video for Social Media",
      "All Edited Soft Copies",
    ],
    popular: false,
  },
  {
    id: 6,
    title: "Valima Celebration",
    subtitle: "Elegant Post-Wedding Reception",
    price: "৳ 55,000",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Single Day Valima Event",
      "2 Photographers & 2 Cinematographers",
      "Cinematic Trailer",
      "High-Res Edited Photo Collection",
    ],
    popular: false,
  },
  {
    id: 7,
    title: "Cinematic Storyteller Tier 1",
    subtitle: "Heavy Focus on Film & Documentary",
    price: "৳ 90,000",
    image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop",
    features: [
      "2 Days Coverage",
      "Specialized Cinema Rig & Gimbals",
      "Extended Cinematic Story Film (10 Mins)",
      "3 Lead Cinematographers & 2 Photographers",
      "Drone Operator",
    ],
    popular: false,
  },
  {
    id: 8,
    title: "Minimalist Elegance",
    subtitle: "Simple, Clean & Professional Documentation",
    price: "৳ 35,000",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Single Day Coverage (Up to 4 Hours)",
      "1 Lead Photographer & 1 Videographer",
      "Highlight Reel (1-2 Mins)",
      "Edited Soft Copies",
    ],
    popular: false,
  },
  {
    id: 9,
    title: "Bridal Portraiture Special",
    subtitle: "Solo Portrait & Couple Shoot Session",
    price: "৳ 25,000",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Half Day Dedicated Shoot",
      "1 Master Photographer",
      "High-End Retouching (30 Masterpiece Frames)",
      "Outdoor Scenic Location in Dhaka",
    ],
    popular: false,
  },
  {
    id: 10,
    title: "Engagement & Roka",
    subtitle: "Pre-Wedding Ring Ceremony",
    price: "৳ 30,000",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Up to 4 Hours Coverage",
      "1 Photographer & 1 Cinematographer",
      "Short Social Media Teaser",
      "All Edited Photos",
    ],
    popular: false,
  },
  {
    id: 11,
    title: "Bespoke Elite Wedding",
    subtitle: "Custom Tailored for Destination & Luxury Venues",
    price: "Custom Quote",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    features: [
      "End-to-End Multi-Day Coverage",
      "Full Crew (6+ Members)",
      "Pre-Wedding & Post-Wedding Sessions",
      "Multiple Cinematic Edits & Albums",
      "Dedicated Project Manager",
    ],
    popular: false,
  },
  {
    id: 12,
    title: "Micro-Wedding Package",
    subtitle: "For Small Family Gatherings & Home Events",
    price: "৳ 28,000",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Up to 3 Hours Coverage",
      "1 Photographer & 1 Videographer",
      "Quick Delivery (Within 7 Days)",
      "All Edited Digital Copies",
    ],
    popular: false,
  },
];

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<
    "wedding" | "corporate" | "commercial"
  >("wedding");

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white relative overflow-hidden ${jost.className}`}
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#cba677]/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Investment & Packages"
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
            Transparent Investment & Bespoke Tiers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-6xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            Packages & Pricing
          </motion.h1>
        </div>
      </section>

      {/* ================= CATEGORY TABS ================= */}
      <section className="py-16 px-6 max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 border-b border-white/10 pb-8">
          {[
            { key: "wedding", label: "Weddings (12 Tiers)" },
            { key: "corporate", label: "Corporate Summits (Get a Quote)" },
            { key: "commercial", label: "Commercial & Products (Get a Quote)" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className="relative group focus:outline-none px-4 py-2"
            >
              <span
                className={`text-base md:text-xl uppercase tracking-[0.2em] transition-colors duration-500 font-light ${activeTab === tab.key ? "text-white italic" : "text-gray-400 hover:text-white"}`}
              >
                {tab.label}
              </span>
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activePackageIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#cba677]"
                />
              )}
            </button>
          ))}
        </div>

        {/* ================= CONTENT AREA ================= */}
        <div className="mt-20">
          <AnimatePresence mode="wait">
            {/* 1. WEDDING TAB (4 COLUMNS & PORTRAIT IMAGES) */}
            {activeTab === "wedding" && (
              <motion.div
                key="wedding"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto"
              >
                {weddingPackages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className={`relative bg-black/40 border overflow-hidden rounded-sm flex flex-col justify-between transition-all duration-500 shadow-xl ${pkg.popular ? "border-[#cba677] shadow-[#cba677]/20" : "border-white/10 hover:border-[#cba677]/50"}`}
                  >
                    {/* Portrait Image Header */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/50">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-1000 hover:scale-105 opacity-90"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {pkg.popular && (
                        <span className="absolute top-3 right-3 bg-[#cba677] text-[#3E141E] px-2.5 py-1 text-[7px] uppercase tracking-[0.25em] font-medium shadow-md">
                          Most Popular
                        </span>
                      )}

                      <div className="absolute bottom-3 left-4 text-lg md:text-xl text-[#cba677] font-medium tracking-wider drop-shadow-md">
                        {pkg.price}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3
                          className={`text-xl text-white mb-1 ${cormorant.className}`}
                        >
                          {pkg.title}
                        </h3>
                        <p className="text-gray-400 text-[11px] font-light tracking-wide mb-4">
                          {pkg.subtitle}
                        </p>

                        <div className="w-full h-[1px] bg-white/10 mb-4"></div>

                        <ul className="space-y-2.5 mb-6 text-gray-300 font-light text-xs">
                          {pkg.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-[#cba677] mt-0.5">✦</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="w-full py-3 bg-transparent border border-[#cba677] text-[#cba677] text-center text-[9px] uppercase tracking-[0.2em] font-medium hover:bg-[#cba677] hover:text-[#3E141E] transition-all duration-500 block shadow-md"
                      >
                        Book This Package ↗
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* 2. CORPORATE TAB (GET A QUOTE) */}
            {activeTab === "corporate" && (
              <motion.div
                key="corporate"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-3xl mx-auto text-center p-12 bg-black/40 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-3 font-light">
                  Tailored Corporate Solutions
                </span>
                <h2
                  className={`text-4xl md:text-5xl text-white mb-6 ${cormorant.className}`}
                >
                  Corporate Summits & Brand Activations
                </h2>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
                  Every corporate event, AGM, or international expo has unique
                  logistical and scale requirements. We offer custom-tailored
                  media coverage packages designed around your exact enterprise
                  goals.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-4 bg-[#cba677] text-[#3E141E] text-xs uppercase tracking-[0.25em] font-medium hover:bg-white transition-all duration-500 shadow-xl"
                >
                  Get a Custom Quote ↗
                </Link>
              </motion.div>
            )}

            {/* 3. COMMERCIAL TAB (GET A QUOTE) */}
            {activeTab === "commercial" && (
              <motion.div
                key="commercial"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-3xl mx-auto text-center p-12 bg-black/40 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-3 font-light">
                  Commercial Excellence
                </span>
                <h2
                  className={`text-4xl md:text-5xl text-white mb-6 ${cormorant.className}`}
                >
                  Commercial Campaigns & Product Showcases
                </h2>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
                  From high-end fashion editorials and luxury product catalogs
                  to 4K aerial drone productions—tell us about your commercial
                  scope and get a specialized price estimate.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-4 bg-[#cba677] text-[#3E141E] text-xs uppercase tracking-[0.25em] font-medium hover:bg-white transition-all duration-500 shadow-xl"
                >
                  Get a Custom Quote ↗
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
