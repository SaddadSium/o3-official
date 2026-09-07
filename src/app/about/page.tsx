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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const corePillars = [
  {
    id: 1,
    title: "Visionary Creative Direction",
    desc: "A dedicated collective of photographers, cinematographers, and production designers curating every detail with precision.",
  },
  {
    id: 2,
    title: "Flawless Communication",
    desc: "Rigorous pre-event consultations and structured timelines that eliminate ambiguity from day one.",
  },
  {
    id: 3,
    title: "Agile & Resilient Execution",
    desc: "Seasoned professionals equipped to navigate fast-paced environments, unpredictable lighting, and complex logistics effortlessly.",
  },
  {
    id: 4,
    title: "Enduring Care & Warranty",
    desc: "Our partnership extends beyond the final curtain. We provide ongoing post-delivery support, archival security, and refined client care.",
  },
];

const coFounders = [
  {
    id: 1,
    name: "Md. Nakib Nizam",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    fb: "#",
    insta: "#",
    web: "#",
  },
  {
    id: 2,
    name: "A.S.M. Sium",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    fb: "#",
    insta: "#",
    web: "#",
  },
];

const teamMembers = [
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Senior Production Designer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    fb: "#",
    insta: "#",
    web: "#",
  },
  {
    id: 4,
    name: "Rahim Chowdhury",
    role: "Lead Event Architect",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    fb: "#",
    insta: "#",
    web: "#",
  },
  {
    id: 5,
    name: "Sadia Islam",
    role: "Creative Brand Storyteller",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    fb: "#",
    insta: "#",
    web: "#",
  },
  {
    id: 6,
    name: "Fahim Hasan",
    role: "Senior Lead Photographer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    fb: "#",
    insta: "#",
    web: "#",
  },
  {
    id: 7,
    name: "Mehnaz Tabassum",
    role: "Post-Production Head",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    fb: "#",
    insta: "#",
    web: "#",
  },
];

const capabilities = [
  {
    title: "Weddings & Life Milestones",
    desc: "Fine-art portraiture, traditional ceremony documentation (Haldi, Mehendi, Reception), editorial couple sessions, and bespoke cinematic films.",
  },
  {
    title: "Corporate Summits & Brand Docs",
    desc: "High-impact conference coverage, AGMs, expos, award galas, executive visualization, and after-movies.",
  },
  {
    title: "Commercial Campaigns & Aerial",
    desc: "Product showcases, architectural and interior visuals, and 4K aerial drone cinematography.",
  },
  {
    title: "Full-Scale Event Production",
    desc: "Stage and set design, 3D theme visualization, LED wall and truss engineering, sound design, and guest logistics management.",
  },
];

export default function AboutPage() {
  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white overflow-hidden ${jost.className}`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#cba677]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-3/4 left-1/4 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[150px] pointer-events-none"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
            alt="The House of Ocean of Orchid"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#3E141E] via-black/40 to-black/30"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 mt-16 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#cba677] block mb-4 font-light"
          >
            Prioritizing Your Dreams Through Inspired Storytelling & Flawless
            Execution
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className={`text-5xl md:text-8xl text-white tracking-wide drop-shadow-2xl ${cormorant.className}`}
          >
            The House of{" "}
            <span className="text-[#cba677] italic">Ocean of Orchid</span>
          </motion.h1>
        </div>
      </section>

      {/* ================= INTRO STATEMENT ================= */}
      <section className="py-32 px-6 lg:px-12 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            className={`text-3xl md:text-5xl text-white tracking-wider mb-8 leading-tight ${cormorant.className}`}
          >
            Turning Fleeting Emotion Into{" "}
            <span className="text-[#cba677] italic">Timeless Art</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#cba677] mx-auto mb-12 origin-center"
          ></motion.div>

          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-300 font-light text-base md:text-lg tracking-wide leading-relaxed max-w-3xl mx-auto"
          >
            Founded in 2020,{" "}
            <strong className="text-white font-normal">Ocean of Orchid</strong>{" "}
            began with a singular devotion: turning fleeting human emotion and
            monumental milestones into timeless art. What started through the
            lens of fine-art photography and cinematography has evolved into a
            premier full-service creative firm—harmonizing visual media, brand
            storytelling, and end-to-end event execution across Bangladesh and
            beyond.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= LEADERSHIP (CO-FOUNDERS) ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-6xl mx-auto bg-black/25 border-y border-white/10 relative">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
            Leadership
          </span>
          <h2
            className={`text-4xl md:text-5xl text-white tracking-wider ${cormorant.className}`}
          >
            The Co-Founders
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {coFounders.map((founder) => (
            <motion.div
              key={founder.id}
              variants={sectionVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group text-center"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-black/40 shadow-2xl rounded-sm">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  unoptimized
                />

                <div className="absolute inset-0 bg-[#3E141E]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
                  <a
                    href={founder.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#cba677] hover:text-[#3E141E] hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href={founder.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#cba677] hover:text-[#3E141E] hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={founder.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#cba677] hover:text-[#3E141E] hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </a>
                </div>
              </div>
              <h3
                className={`text-2xl text-white tracking-wide ${cormorant.className}`}
              >
                {founder.name}
              </h3>
              <p className="text-[11px] text-[#cba677] tracking-[0.2em] uppercase mt-1 font-light">
                {founder.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CREATIVE COLLECTIVE (TEAM MEMBERS) ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
            The Experts
          </span>
          <h2
            className={`text-4xl md:text-5xl text-white tracking-wider ${cormorant.className}`}
          >
            Creative Team Members
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={sectionVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group text-center"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-black/40 rounded-sm shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />

                <div className="absolute inset-0 bg-[#3E141E]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-3">
                  <a
                    href={member.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#cba677] hover:text-[#3E141E] hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href={member.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#cba677] hover:text-[#3E141E] hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={member.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#cba677] hover:text-[#3E141E] hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </a>
                </div>
              </div>
              <h3
                className={`text-xl text-white tracking-wide ${cormorant.className}`}
              >
                {member.name}
              </h3>
              <p className="text-[10px] text-[#cba677] tracking-[0.2em] uppercase mt-1 font-light">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 p-10 border border-white/10 rounded-sm relative overflow-hidden group hover:border-[#cba677]/50 transition-colors duration-500 shadow-xl"
        >
          <h3 className={`text-3xl text-[#cba677] mb-6 ${cormorant.className}`}>
            Our Mission
          </h3>
          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
            To immortalize life’s profound moments through soulful imagery,
            cinematic narratives, and masterfully managed live
            experiences—delivering not just services, but heirlooms that endure.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 p-10 border border-white/10 rounded-sm relative overflow-hidden group hover:border-[#cba677]/50 transition-colors duration-500 shadow-xl"
        >
          <h3 className={`text-3xl text-[#cba677] mb-6 ${cormorant.className}`}>
            Our Vision
          </h3>
          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
            To stand as the nation’s benchmark for creative trust, elegance, and
            aesthetic distinction across weddings, commercial campaigns, and
            large-scale corporate summits.
          </p>
        </motion.div>
      </section>

      {/* ================= THE OCEAN OF ORCHID EXPERIENCE ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
            Why Choose Us
          </span>
          <h2
            className={`text-4xl md:text-5xl text-white tracking-wider ${cormorant.className}`}
          >
            The Ocean of Orchid Experience
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {corePillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={sectionVariants}
              whileHover={{ y: -5 }}
              className="p-8 border border-white/10 bg-black/20 flex flex-col justify-between hover:border-[#cba677]/40 transition-all duration-500 shadow-lg"
            >
              <div>
                <span
                  className={`text-3xl text-[#cba677] block mb-4 ${cormorant.className}`}
                >
                  0{pillar.id}
                </span>
                <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-white mb-3">
                  {pillar.title}
                </h4>
                <p className="text-gray-400 text-xs font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SCOPE OF CAPABILITIES ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto bg-black/25 border-t border-white/5">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
            Expertise
          </span>
          <h2
            className={`text-4xl md:text-5xl text-white tracking-wider ${cormorant.className}`}
          >
            Scope of Capabilities
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              whileHover={{ scale: 1.01 }}
              className="p-8 border border-white/10 bg-[#3E141E] hover:border-[#cba677]/50 transition-all duration-500 shadow-xl"
            >
              <h3 className={`text-2xl text-white mb-3 ${cormorant.className}`}>
                {cap.title}
              </h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= MILESTONE COUNTER ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-6xl mx-auto text-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-8 border-b md:border-b-0 md:border-r border-white/10"
          >
            <h3
              className={`text-5xl md:text-7xl text-[#cba677] mb-3 ${cormorant.className}`}
            >
              600+
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-300 font-light">
              Celebrations & Corporate Experiences
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-8 border-b md:border-b-0 md:border-r border-white/10"
          >
            <h3
              className={`text-5xl md:text-7xl text-[#cba677] mb-3 ${cormorant.className}`}
            >
              Cinema
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-300 font-light">
              Curated Aerial & Cinema-Grade Visual Standards
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-8"
          >
            <h3
              className={`text-5xl md:text-7xl text-[#cba677] mb-3 ${cormorant.className}`}
            >
              15+
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-300 font-light">
              National & Multinational Corporate Partners Entrusted
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CLOSING CALL TO ACTION ================= */}
      <section className="py-32 px-6 text-center border-t border-white/10 bg-black/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#cba677]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2
            className={`text-4xl md:text-6xl text-white mb-6 ${cormorant.className}`}
          >
            Let&apos;s Bring Your{" "}
            <span className="text-[#cba677] italic">Vision to Life.</span>
          </h2>
          <p className="text-gray-300 font-light text-sm md:text-base tracking-wide leading-relaxed mb-12 max-w-xl mx-auto">
            Whether framing an intimate union or engineering a grand corporate
            activation, our team is ready.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="relative group overflow-hidden px-10 py-4 bg-[#cba677] text-[#3E141E] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Inquire Availability</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
            </Link>

            <Link
              href="/wedding"
              className="relative group overflow-hidden px-10 py-4 border border-[#cba677]/60 text-white text-xs uppercase tracking-[0.25em] font-light transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2 group-hover:text-[#3E141E] transition-colors duration-500">
                <span>Explore Our Portfolio</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </span>
              <div className="absolute inset-0 bg-[#cba677] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
