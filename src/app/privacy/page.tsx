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

export default function PrivacyPolicyPage() {
  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop"
            alt="Privacy Policy Hero"
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
            Legal & Transparency
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-6xl md:text-8xl text-white tracking-wide ${cormorant.className}`}
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      {/* ================= POLICY CONTENT SECTION ================= */}
      <section className="py-28 px-6 lg:px-12 max-w-4xl mx-auto leading-relaxed">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 text-gray-300 font-light text-base md:text-lg"
        >
          {/* Effective Date */}
          <div className="border-b border-white/10 pb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#cba677]">
              Effective Date: January 1, 2026
            </p>
            <p className="mt-2 text-sm text-gray-400">
              At{" "}
              <strong className="text-white font-normal">
                Ocean of Orchid
              </strong>
              , accessible from our official platform, safeguarding your
              personal data is a matter of paramount importance. This Privacy
              Policy document outlines the types of information we collect and
              how we utilize it.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              1. Information We Collect
            </h2>
            <p className="mb-4 text-sm md:text-base leading-relaxed text-gray-300">
              When you interact with our website, inquire about our
              wedding/corporate packages, or book a session, we may collect
              personal details such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>Full name, email address, and phone number.</li>
              <li>
                Event details, dates, venue locations, and personal preferences.
              </li>
              <li>
                Communications and messages exchanged through our booking or
                inquiry forms.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-sm md:text-base leading-relaxed text-gray-300">
              The information we gather is exclusively utilized to enhance your
              experience and deliver our high-end visual production services:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                To coordinate event schedules, consultations, and production
                logistics.
              </li>
              <li>
                To send booking confirmations, project updates, and final
                deliverables.
              </li>
              <li>
                To improve our website functionality, portfolio layout, and
                client support workflows.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              3. Media Rights & Gallery Showcases
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              As a high-end visual production firm, Ocean of Orchid takes
              immense pride in showcasing our artistic endeavors. Unless
              explicitly requested otherwise in writing prior to an event,
              selected photographs and cinematic highlights captured during
              sessions may be featured in our online portfolio, social media
              channels, or promotional archives.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              4. Data Security
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              We implement stringent administrative, technical, and physical
              security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction. Your
              trust is our most valuable asset.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2
              className={`text-2xl md:text-3xl text-white mb-4 ${cormorant.className}`}
            >
              5. Contact Us
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              If you have any questions, concerns, or requests regarding our
              Privacy Policy or how your data is handled, please feel free to
              reach out to our team directly through our contact page or
              official studio email.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
