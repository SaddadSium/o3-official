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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// --- Mock Data for Event Management Showcase ---
const eventGalleries = [
  {
    id: 1,
    title: "Grand Stage & Set Design",
    category: "Production Architecture",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    desc: "Bespoke stage engineering, thematic 3D visualizations, and immersive floral or structural backdrops tailored for elite gatherings.",
  },
  {
    id: 2,
    title: "Corporate Summits & Galas",
    category: "Live Experience",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    desc: "Flawless execution of international conferences, award ceremonies, and high-profile corporate product launches.",
  },
  {
    id: 3,
    title: "Lighting & Acoustic Engineering",
    category: "Atmosphere Control",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    desc: "State-of-the-art truss setups, dynamic LED walls, and pristine sound design to elevate every second of the live event.",
  },
  {
    id: 4,
    title: "Luxury Wedding Receptions",
    category: "Celebration Management",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
    desc: "End-to-end coordination ensuring seamless guest hospitality, artist management, and breathtaking ceremonial environments.",
  },
  {
    id: 5,
    title: "Brand Activations & Exhibitions",
    category: "Experiential Marketing",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
    desc: "Engaging spatial designs and interactive booths crafted to captivate audiences and maximize brand resonance.",
  },
  {
    id: 6,
    title: "Intimate Social Gatherings",
    category: "Bespoke Curation",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
    desc: "Meticulously curated private celebrations, anniversaries, and milestones executed with absolute elegance and discretion.",
  },
];

export default function EventManagementPage() {
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
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
            alt="Event Management Hero"
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
            Orchestrating Extraordinary Experiences
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-5xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            Event Management
          </motion.h1>
        </div>
      </section>

      {/* ================= INTRO DESCRIPTION SECTION ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            className={`text-3xl md:text-5xl text-white tracking-wider mb-6 leading-tight ${cormorant.className}`}
          >
            Mastery in{" "}
            <span className="text-[#cba677] italic">Live Production</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mb-8"></div>
          <p className="text-gray-300 font-light text-base md:text-lg tracking-wide leading-relaxed max-w-3xl mx-auto">
            At{" "}
            <strong className="text-white font-normal">Ocean of Orchid</strong>,
            we transcend traditional event planning. We architect live
            environments where aesthetics, technical precision, and seamless
            logistics converge. From grand corporate summits to intimate luxury
            celebrations, our full-scale production ensures every moment unfolds
            flawlessly.
          </p>
        </motion.div>
      </section>

      {/* ================= GALLERY & DESCRIPTION GRID ================= */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventGalleries.map((item) => (
            <motion.div
              key={item.id}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer bg-black/20 border border-white/10 p-5 rounded-sm hover:border-[#cba677]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40 rounded-sm mb-6 shadow-xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#cba677]">
                      Explore Production
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-[#cba677] tracking-[0.25em] uppercase font-light block mb-2">
                  {item.category}
                </span>
                <h3
                  className={`text-2xl text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 mb-3 ${cormorant.className}`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="py-24 px-6 text-center border-t border-white/10 bg-black/40 relative">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-5xl text-white mb-6 ${cormorant.className}`}
          >
            Ready to Plan Your{" "}
            <span className="text-[#cba677] italic">Next Grand Event?</span>
          </h2>
          <p className="text-gray-300 font-light text-sm md:text-base tracking-wide mb-10 max-w-lg mx-auto">
            Let our experienced production team bring your blueprint to life
            with unmatched elegance and structural perfection.
          </p>
          <Link
            href="/contact"
            className="inline-block relative overflow-hidden px-10 py-4 bg-[#cba677] text-[#3E141E] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 shadow-2xl hover:scale-105"
          >
            <span className="relative z-10">Consult Our Producers</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
