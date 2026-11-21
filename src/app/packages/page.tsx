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
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

type PackageTierKey =
  | "Essential Tier"
  | "Combo Tier"
  | "Lead by A.S.M. Sium"
  | "Nakib Nizam Classic Series";

interface WeddingPackage {
  id: number;
  tier: PackageTierKey;
  crewBadge: string;
  title: string;
  tagline: string;
  subtitle: string;
  price: string;
  image: string;
  features: string[];
  quote?: string;
  popular?: boolean;
}

// --- All 13 Wedding Packages Organized by Tier ---
const weddingPackages: WeddingPackage[] = [
  // ================= 1. ESSENTIAL TIER =================
  {
    id: 1,
    tier: "Essential Tier",
    crewBadge: "1P",
    title: "Tender Moments",
    tagline: "Outdoors Only",
    subtitle: "Perfect for focused outdoor moments",
    price: "Starting at ৳ 7,000",
    image: "/images/wedding/covers/R2.jpg",
    features: [
      "1 Lead Photographer (Sium / Sajib / Bipul)",
      "3 hours coverage of focused moments",
      "All images color corrected",
      "High-resolution online gallery",
      "Delivered through Google Drive",
    ],
  },
  {
    id: 2,
    tier: "Essential Tier",
    crewBadge: "1P",
    title: "Classic Essential",
    tagline: "Crafted to Capture Time",
    subtitle: "Perfect for small indoor/outdoor gathering",
    price: "Starting at ৳ 8,000",
    image: "/images/wedding/covers/W1.jpg",
    features: [
      "1 Lead Photographer (Sium / Sajib / Bipul)",
      "5 hours of coverage with unlimited clicks (12:30PM – 5:30PM or 6:30PM – 11:30PM)",
      "All images color corrected",
      "High-resolution online gallery",
      "Delivered through Google Drive",
    ],
  },
  {
    id: 3,
    tier: "Essential Tier",
    crewBadge: "2P",
    title: "Graceful Portraits",
    tagline: "Candid Meets Timeless Memories",
    subtitle: "Perfect for getting staged and candid shots",
    price: "Starting at ৳ 15,000",
    image: "/images/wedding/covers/PW3.jpg",
    features: [
      "2 Lead Photographers (Sium / Sajib / Bipul)",
      "5 hours of coverage with unlimited clicks (12:30PM – 5:30PM or 6:30PM – 11:30PM)",
      "All images color corrected",
      "High-resolution online gallery",
      "Delivered through Google Drive",
    ],
  },

  // ================= 2. COMBO TIER =================
  {
    id: 4,
    tier: "Combo Tier",
    crewBadge: "1P 1C",
    title: "Intimate Canvas",
    tagline: "Intimacy, Captured Timelessly",
    subtitle: "Perfect for pre/post wedding / maternity outdoor sessions",
    price: "Starting at ৳ 14,000",
    image: "/images/wedding/covers/PW4.jpg",
    features: [
      "1 Lead Photographer (Sium / Sajib / Bipul)",
      "1 Lead Cinematographer (Alamgir / Farid)",
      "3 hours of coverage with unlimited clicks",
      "1 Outdoor Location",
      "All images color corrected",
      "1 Short reel & 1 Story Film (2–5 minute)",
      "Online Proofing gallery & Google Drive delivery",
    ],
  },
  {
    id: 5,
    tier: "Combo Tier",
    crewBadge: "1P 1C",
    title: "Vibrant Tale",
    tagline: "Festive Traditions, Preserved in Rich Tones",
    subtitle:
      "Perfect for Standard Intimate Haldi / Mehendi / Wedding / Reception / Akdh",
    price: "Starting at ৳ 18,000",
    image: "/images/wedding/covers/H4.jpg",
    popular: true,
    features: [
      "1 Lead Photographer (Sium / Sajib / Bipul)",
      "1 Lead Cinematographer (Farid / Sajal / Alamgir)",
      "5 hours of coverage with unlimited clicks (12:30PM – 5:30PM or 6:30PM – 11:30PM)",
      "All Vibrant graded photos delivered",
      "1 Short reel, 2 Min Highlight Film & Full Event Chronicle",
      "High-resolution online gallery",
      "50 Copy 4R Print, Album & 1 Pendrive",
    ],
  },
  {
    id: 6,
    tier: "Combo Tier",
    crewBadge: "1P 1C",
    title: "Festive Spark",
    tagline: "Moments Made to be Celebrated",
    subtitle: "Perfect for Birthdays & Anniversaries",
    price: "Starting at ৳ 16,000",
    image: "/images/wedding/covers/H5.jpg",
    features: [
      "1 Lead Photographer — A.S.M. Sium",
      "1 Lead Cinematographer — Sheikh Farid",
      "5 hours of dedicated event coverage (12:30PM – 5:30PM or 6:30PM – 11:30PM)",
      "All professionally edited photos",
      "1 Cinematic Trailer & 1 Full Event Film",
      "Secure Google Drive delivery (20 Days)",
    ],
  },

  // ================= 3. LEAD BY A.S.M. SIUM =================
  {
    id: 7,
    tier: "Lead by A.S.M. Sium",
    crewBadge: "2P 1C",
    title: "Timeless Blend",
    tagline: "The Visual Trio",
    subtitle:
      "Perfect for medium gatherings 100–300 Guests (Haldi / Mehendi / Wedding / Reception / Akdh)",
    price: "Starting at ৳ 23,000",
    image: "/images/wedding/covers/W6.jpg",
    features: [
      "Supervised & Photographed by Lead Photographer A.S.M. Sium",
      "1 Lead Photographer (Sajib / Bipul) dedicated for capturing moments",
      "1 Lead Cinematographer (Alamgir / Farid)",
      "5 hours of coverage with unlimited clicks (12:30PM – 5:30PM or 6:30PM – 11:30PM)",
      "All images color corrected",
      "1 Cinematic Trailer & 1 Full Feature Film",
      "Presentation Box with USB Drive & Customized Magazine",
      "Delivery deadline: 30 working days",
    ],
  },
  {
    id: 8,
    tier: "Lead by A.S.M. Sium",
    crewBadge: "2P 2C",
    title: "Elegant Harmony",
    tagline: "The Dual Perspective",
    subtitle:
      "Perfect for 200–500+ Guests (Haldi / Mehendi / Wedding / Reception / Akdh)",
    price: "Starting at ৳ 36,000",
    image: "/images/wedding/covers/C7.jpg",
    popular: true,
    features: [
      "Supervised & Photographed by Lead Photographer A.S.M. Sium",
      "1 Lead Photographer (Sajib / Bipul) & 2 Lead Cinematographers (Alamgir / Farid / Sajal)",
      "5 hours of coverage with unlimited clicks (12:30PM – 5:30PM or 6:30PM – 11:30PM)",
      "1 Photographer & 1 Cinematographer dedicated for guests' candids & moments",
      "All retouched photos delivered (Specialized Decor, Candid Focus & Guest Portraits)",
      "1 Reel, 1 Cinematic Trailer & 1 Full Film",
      "1 Customized Magazine & Exclusive Presentation Box with USB Drive (30 working days)",
    ],
  },
  {
    id: 9,
    tier: "Lead by A.S.M. Sium",
    crewBadge: "3P 2C 1D",
    title: "Elite Grandeur",
    tagline: "The Complete Symphony",
    subtitle:
      "Perfect for 400+ Guests / Mid–Large Scale Venue (Haldi / Mehendi / Wedding / Reception / Akdh)",
    price: "Starting at ৳ 58,000",
    image: "/images/wedding/covers/H16.jpg",
    features: [
      "Directed & Photographed by Lead Photographer A.S.M. Sium",
      "2 Lead Photographers (Shishir / Sajib / Bipul) & 2 Lead Cinematographers (Alamgir / Farid / Sajal)",
      "5 hours of coverage with unlimited clicks (12:30PM – 5:30PM or 6:30PM – 11:30PM)",
      "Cinematic Drone Coverage for Aerial Shots",
      "All professionally graded photos delivered (Outdoor, Decor, Moments & Aerial Portraits)",
      "2 Reels, 1 Cinematic Trailer & 1 Full Feature Film",
      "1 Customized Photobook & Exclusive Presentation Box with USB Drive (30 working days)",
    ],
  },

  // ================= 4. NAKIB NIZAM CLASSIC SERIES =================
  {
    id: 10,
    tier: "Nakib Nizam Classic Series",
    crewBadge: "1P 1C + 2 Asst.",
    title: "Orchid Mist",
    tagline: "The Curated Classic — Intimate Gatherings",
    subtitle:
      "Best suited for Intimate Home Akdh, Intimate Mehendi, Engagement, or Private Gatherings",
    price: "৳ 42,000",
    image: "/images/wedding/covers/W10.jpg",
    quote:
      "An intimate canvas of light and legacy—where your quietest moments are held forever still.",
    features: [
      "Creative Direction: Chief Photographer Md. Nakib Nizam",
      "1 Lead Photographer (Shahirar Shishir / Saddad Sium), 1 Lead Cinematographer (Milba / Farid / Sajal / Alamgir) & 2 Assistant Visualizers",
      "1-on-1 Virtual Pre-Wedding Styling, Palette Consultation & Lighting Mood Board",
      "Dedicated Prop Set: 1 curated styling element for ring/detail flatlays",
      "Complete couple storytelling coverage with retouched & color-graded high-res photos",
      "1 Short Reel + 1 Cinematic Event Highlight + 1 Full Narrative Film",
      "10–15 Preview Photos delivered within 48 hours",
      "Curated Storytelling Magazine, Exclusive Presentation Box with Pendrive & Lifetime Cloud Gallery",
    ],
  },
  {
    id: 11,
    tier: "Nakib Nizam Classic Series",
    crewBadge: "2P 2C",
    title: "Orchid Pearl",
    tagline: "The Editorial & Dynamic Narrative",
    subtitle:
      "Best suited for Mid-Sized Weddings, Vibrant Holud Celebrations, or Grand Receptions (Up to 500 Guests)",
    price: "৳ 84,000",
    image: "/images/wedding/covers/R1.jpg",
    quote:
      "Life in bold motion, beauty stilled in time—an editorial celebration crafted into an everlasting publication.",
    features: [
      "Creative Direction: Guided & art-directed by Chief Photographer Md. Nakib Nizam",
      "1 Lead Photographer (Editorial) + 1 Core Photographer (Candids, Family & Stage)",
      "2 Lead Cinematographers (Multi-angle narrative flow, fluid gimbal & emotive framing)",
      "Pre-Production Creative Session, Dedicated Editorial Portrait Window & Curated Vintage Styling Suite",
      "Complete high-res master collection with signature grading & magazine-grade retouching",
      "1 Signature Cinematic Highlight Film + 1 Full-Length Feature Narrative",
      "2 Fast-Track Social Media Reels (Delivered within 5 days)",
      "Custom Fine-Art Printed Magazine & Private Online Proofing & Archival Gallery",
    ],
  },
  {
    id: 12,
    tier: "Nakib Nizam Classic Series",
    crewBadge: "3P 3C • 6-Lens",
    title: "Orchid Velvet",
    tagline: "The Directorial Showcase",
    subtitle:
      "Best suited for Flagship Weddings, Grand Receptions & Heritage Celebrations",
    price: "৳ 1,00,000",
    image: "/images/wedding/covers/HN1.jpg",
    popular: true,
    quote:
      "Not just an event capture—it is a visual narrative directed on the ground by Nakib Nizam himself.",
    features: [
      "On-Site Creative Director: Md. Nakib Nizam (Chief Photographer)",
      "6-Lens Ground Architecture: 1 Senior Lead Photographer, 1 Core Photographer & 3 Cinematographers (Lead Narrative, Fluid Motion, Guest & Ambient)",
      "1-on-1 Pre-Production Vision & Moodboard Session with Nakib Nizam",
      "Signature Editorial Couple Session, Concierge Buffer Protocol & Heirloom Detail Curation",
      "Complete full-event high-resolution digital master gallery with signature color grading",
      "1 Signature 2–5 Min Director's Cut Highlight Film + 1 Full-Length Multi-Cam Documentary",
      "3–4 Curated Vertical Reels formatted for high-impact social releases",
      "Hardbound Heirloom Photo-Book, Custom Engraved Drive in Presentation Box & Permanent Cloud Vault",
    ],
  },
];

const tierOrder: PackageTierKey[] = [
  "Essential Tier",
  "Combo Tier",
  "Lead by A.S.M. Sium",
  "Nakib Nizam Classic Series",
];

const tierDescriptions: Record<PackageTierKey, string> = {
  "Essential Tier":
    "Refined photography-only collections tailored for intimate ceremonies, outdoor sessions, and candid storytelling.",
  "Combo Tier":
    "Balanced photography & cinematography duos crafted for outdoor shoots, vibrant haldis, and milestone celebrations.",
  "Lead by A.S.M. Sium":
    "Signature multi-lens productions supervised and photographed by Creative Director A.S.M. Sium.",
  "Nakib Nizam Classic Series":
    "Our flagship haute-editorial collections art-directed by Chief Photographer Md. Nakib Nizam.",
};

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<
    "wedding" | "corporate" | "commercial"
  >("wedding");
  const [activeTier, setActiveTier] = useState<"All" | PackageTierKey>("All");

  const visibleTiers =
    activeTier === "All" ? tierOrder : tierOrder.filter((t) => t === activeTier);

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white relative overflow-hidden ${jost.className}`}
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#cba677]/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ================= HERO SECTION (Ultra Compact) ================= */}
      <section className="relative w-full overflow-hidden flex items-center justify-center pt-28 pb-8">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/about/cv.jpg"
            alt="Investment & Packages"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[9px] uppercase tracking-[0.4em] text-[#cba677] block mb-1.5 font-light"
          >
            Transparent Investment & Bespoke Tiers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-4xl md:text-6xl text-white tracking-wide ${cormorant.className}`}
          >
            Packages & Pricing
          </motion.h1>
        </div>
      </section>

      {/* ================= CATEGORY TABS ================= */}
      <section className="pt-4 pb-10 px-6 max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 border-b border-white/10 pb-6">
          {(
            [
              { key: "wedding", label: "Weddings (13 Tiers)" },
              { key: "corporate", label: "Corporate Summits" },
              { key: "commercial", label: "Commercial & Products" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="relative group focus:outline-none px-4 py-2"
            >
              <span
                className={`text-sm md:text-lg uppercase tracking-[0.2em] transition-colors duration-500 font-light ${
                  activeTab === tab.key
                    ? "text-white italic font-normal"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </span>
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activePackageIndicator"
                  className="absolute -bottom-6 left-0 w-full h-[2px] bg-[#cba677]"
                />
              )}
            </button>
          ))}
        </div>

        {/* ================= CONTENT AREA ================= */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {/* 1. WEDDING TAB */}
            {activeTab === "wedding" && (
              <motion.div
                key="wedding"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Sub-Tier Filter Pills */}
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16">
                  {(["All", ...tierOrder] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setActiveTier(tier)}
                      className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-400 ${
                        activeTier === tier
                          ? "bg-[#cba677] text-[#3E141E] border-[#cba677] font-medium shadow-lg"
                          : "border-white/20 text-gray-300 hover:border-[#cba677] hover:text-white"
                      }`}
                    >
                      {tier === "All" ? "All Tiers" : tier}
                    </button>
                  ))}
                </div>

                {/* Tiered Package Sections */}
                <div className="space-y-24 pb-20">
                  {visibleTiers.map((tierName) => {
                    const tierPackages = weddingPackages.filter(
                      (pkg) => pkg.tier === tierName
                    );
                    const isClassicSeries =
                      tierName === "Nakib Nizam Classic Series";

                    return (
                      <div key={tierName}>
                        {/* Tier Section Header */}
                        <div className="text-center mb-12 max-w-2xl mx-auto">
                          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
                            Ocean of Orchid Collection
                          </span>
                          <h2
                            className={`text-3xl md:text-5xl text-white tracking-wider ${cormorant.className}`}
                          >
                            {tierName}
                          </h2>
                          <div className="w-12 h-[1px] bg-[#cba677] mx-auto my-4"></div>
                          <p className="text-gray-300 text-xs md:text-sm font-light tracking-wide leading-relaxed">
                            {tierDescriptions[tierName]}
                          </p>
                        </div>

                        {/* Cards Grid: 2 Columns for Nakib Nizam Classic Series, 3 Columns for other Tiers */}
                        <div
                          className={`grid grid-cols-1 ${
                            isClassicSeries
                              ? "lg:grid-cols-2 gap-10"
                              : "md:grid-cols-2 lg:grid-cols-3 gap-8"
                          }`}
                        >
                          {tierPackages.map((pkg) => (
                            <motion.div
                              key={pkg.id}
                              whileHover={{ y: -6 }}
                              transition={{ duration: 0.3 }}
                              className={`relative bg-black/40 border overflow-hidden rounded-sm flex flex-col justify-between transition-all duration-500 shadow-2xl ${
                                pkg.popular
                                  ? "border-[#cba677] shadow-[#cba677]/15"
                                  : "border-white/10 hover:border-[#cba677]/50"
                              }`}
                            >
                              {/* Card Image Header */}
                              <div
                                className={`relative w-full overflow-hidden bg-black/50 ${
                                  isClassicSeries
                                    ? "aspect-[16/10]"
                                    : "aspect-[4/5]"
                                }`}
                              >
                                <Image
                                  src={pkg.image}
                                  alt={pkg.title}
                                  fill
                                  className="object-cover transition-transform duration-1000 hover:scale-105 opacity-90"
                                  unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20"></div>

                                {/* Crew Setup Badge */}
                                <span className="absolute top-4 left-4 bg-black/65 backdrop-blur-md border border-white/15 text-gray-200 px-3 py-1 text-[9px] uppercase tracking-[0.2em]">
                                  {pkg.crewBadge}
                                </span>

                                {/* Popular / Signature Badge */}
                                {pkg.popular && (
                                  <span className="absolute top-4 right-4 bg-[#cba677] text-[#3E141E] px-3 py-1 text-[8px] uppercase tracking-[0.25em] font-semibold shadow-md">
                                    Signature Choice
                                  </span>
                                )}

                                {/* Price Overlay */}
                                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                                  <div>
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#cba677] block mb-0.5">
                                      Investment
                                    </span>
                                    <div className="text-xl md:text-2xl text-white font-normal tracking-wider drop-shadow-md">
                                      {pkg.price}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Card Body */}
                              <div className="p-7 flex flex-col justify-between flex-grow">
                                <div>
                                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#cba677] block mb-1.5 font-light">
                                    {pkg.tagline}
                                  </span>
                                  <h3
                                    className={`text-2xl md:text-3xl text-white italic mb-2 ${cormorant.className}`}
                                  >
                                    {pkg.title}
                                  </h3>
                                  <p className="text-gray-400 text-xs font-light tracking-wide leading-relaxed mb-5">
                                    {pkg.subtitle}
                                  </p>

                                  <div className="w-full h-[1px] bg-white/10 mb-5"></div>

                                  <ul className="space-y-2.5 mb-6 text-gray-300 font-light text-xs md:text-[13px] leading-relaxed">
                                    {pkg.features.map((feature, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start space-x-2.5"
                                      >
                                        <span className="text-[#cba677] mt-0.5 shrink-0">
                                          ✦
                                        </span>
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  {pkg.quote && (
                                    <blockquote
                                      className={`border-l border-[#cba677]/50 pl-4 py-1 mb-6 text-sm md:text-base text-gray-300 italic ${cormorant.className}`}
                                    >
                                      &ldquo;{pkg.quote}&rdquo;
                                    </blockquote>
                                  )}
                                </div>

                                <Link
                                  href="/contact"
                                  className={`w-full py-3.5 text-center text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500 block shadow-md ${
                                    pkg.popular
                                      ? "bg-[#cba677] text-[#3E141E] hover:bg-white"
                                      : "bg-transparent border border-[#cba677] text-[#cba677] hover:bg-[#cba677] hover:text-[#3E141E]"
                                  }`}
                                >
                                  Book {pkg.title} ↗
                                </Link>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
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
                className="max-w-3xl mx-auto text-center p-12 my-12 bg-black/40 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden"
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
                className="max-w-3xl mx-auto text-center p-12 my-12 bg-black/40 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden"
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