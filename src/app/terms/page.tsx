"use client";

import Image from "next/image";
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

export default function TermsConditionsPage() {
  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop"
            alt="Terms and Conditions Hero"
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
            Agreement & Guidelines
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-6xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            Terms & Conditions
          </motion.h1>
        </div>
      </section>

      {/* ================= TERMS CONTENT SECTION ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-4xl mx-auto leading-relaxed">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 text-gray-300 font-light text-base md:text-lg"
        >
          {/* Introduction */}
          <div className="border-b border-white/10 pb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#cba677]">
              Last Updated: January 1, 2026
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Welcome to{" "}
              <strong className="text-white font-normal">
                Ocean of Orchid
              </strong>
              . By booking our visual production services or navigating our
              website, you agree to comply with and be bound by the following
              terms and conditions. Please review them carefully.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              1. Services & Bookings
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              Ocean of Orchid provides professional photography, cinematography,
              commercial branding, and full-scale event production services. All
              bookings are officially confirmed only upon the execution of an
              agreement and the receipt of the designated advance
              retainer/deposit.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              2. Payments & Retainers
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                A non-refundable booking retainer is required to lock in your
                event date.
              </li>
              <li>
                The remaining balance must be cleared as specified in your
                individual project invoice or contract terms prior to final
                media delivery.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              3. Deliverables & Post-Production
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              Standard turnaround times for editing and delivery will be
              communicated during your project consultation. While we maintain
              rigorous archiving standards, clients are advised to secure
              personal backup copies of all final deliverables upon receipt.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              4. Intellectual Property & Copyright
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              All photographs, cinematic films, visual assets, and designs
              created by Ocean of Orchid remain protected under copyright laws.
              Clients receive personal or commercial usage rights as outlined in
              their contract, but raw/unedited files remain the exclusive
              property of the studio unless explicitly agreed otherwise.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              5. Limitation of Liability
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              In the unlikely event of severe technical failure, equipment
              malfunction, or acts of God beyond our control, Ocean of Orchid’s
              liability is strictly limited to a full refund of all payments
              received for the specific event or session.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
