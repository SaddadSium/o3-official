"use client";

import { useState, FormEvent } from "react";
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

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9NxyoJvzIbm98d_O36fZY235KlVs8OD-cABAC4nVDNiwBmnEfD941oWpG7MN3cCA_RA/exec";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const packageOptions = [
  "Essential — Tender Moments (৳ 7,000)",
  "Essential — Classic Essential (৳ 8,000)",
  "Essential — Graceful Portraits (৳ 15,000)",
  "Combo — Intimate Canvas (৳ 14,000)",
  "Combo — Festive Spark (৳ 16,000)",
  "Combo — Vibrant Tale (৳ 18,000)",
  "Lead by A.S.M. Sium — Timeless Blend (৳ 23,000)",
  "Lead by A.S.M. Sium — Elegant Harmony (৳ 36,000)",
  "Lead by A.S.M. Sium — Elite Grandeur (৳ 58,000)",
  "Nakib Nizam Classic — Orchid Mist (৳ 42,000)",
  "Nakib Nizam Classic — Orchid Pearl (৳ 84,000)",
  "Nakib Nizam Classic — Orchid Velvet (৳ 1,00,000)",
  "Nakib Nizam Classic — Orchid Bridal (৳ 1,35,000)",
  "Corporate Summit (Custom Quote)",
  "Commercial / Product Shoot (Custom Quote)",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    packageName: "",
    eventDate: "",
    venue: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "Wedding",
        packageName: "",
        eventDate: "",
        venue: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className={`bg-[#3E141E] min-h-screen text-white relative overflow-hidden ${jost.className}`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#cba677]/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden flex items-center justify-center pt-28 pb-10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Ocean of Orchid"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/65 bg-gradient-to-t from-[#3E141E] via-black/45 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[9px] uppercase tracking-[0.45em] text-[#cba677] block mb-2 font-light"
          >
            Inquire & Reserve Your Date
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`text-4xl md:text-6xl text-white tracking-wide ${cormorant.className}`}
          >
            Let&apos;s Craft Your{" "}
            <span className="text-[#cba677] italic">Story</span>
          </motion.h1>
        </div>
      </section>

      {/* ================= MAIN CONTACT SECTION ================= */}
      <section className="py-14 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: Studio Details */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#cba677] block mb-2 font-light">
                Direct Consultation
              </span>
              <h2
                className={`text-3xl md:text-4xl text-white tracking-wide mb-4 ${cormorant.className}`}
              >
                Begin The Conversation
              </h2>
              <div className="w-12 h-[1px] bg-[#cba677] mb-6"></div>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Share your event dates, vision, and preferred collection. Our
                team responds to all inquiries within 24 hours to check
                availability and schedule a personalized consultation.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="bg-black/25 border border-white/10 p-5 rounded-sm hover:border-[#cba677]/40 transition-colors duration-300">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#cba677] block mb-1">
                  Studio Location
                </span>
                <p className="text-sm text-white font-light">
                  Dhaka, Bangladesh (Available Nationwide & Destination Events)
                </p>
              </div>

              <div className="bg-black/25 border border-white/10 p-5 rounded-sm hover:border-[#cba677]/40 transition-colors duration-300">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#cba677] block mb-1">
                  Phone / WhatsApp
                </span>
                <a
                  href="tel:+8801703526488"
                  className="text-sm text-white font-light hover:text-[#cba677] transition-colors"
                >
                  +880 1703-526488
                </a>
              </div>

              <div className="bg-black/25 border border-white/10 p-5 rounded-sm hover:border-[#cba677]/40 transition-colors duration-300">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#cba677] block mb-1">
                  Email
                </span>
                <a
                  href="mailto:oceanoforchid@gmail.com"
                  className="text-sm text-white font-light hover:text-[#cba677] transition-colors"
                >
                  oceanoforchid@gmail.com
                </a>
              </div>

              <div className="bg-black/25 border border-white/10 p-5 rounded-sm hover:border-[#cba677]/40 transition-colors duration-300">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#cba677] block mb-1">
                  Consultation Hours
                </span>
                <p className="text-sm text-white font-light">
                  Saturday – Friday: 10:00 AM – 8:00 PM (BST)
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Inquiry Form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 bg-black/35 border border-white/10 p-8 md:p-10 rounded-sm shadow-2xl"
          >
            <h3
              className={`text-2xl md:text-3xl text-white italic mb-2 ${cormorant.className}`}
            >
              Booking & Inquiry Form
            </h3>
            <p className="text-xs text-gray-400 font-light tracking-wide mb-8">
              Fields marked with <span className="text-[#cba677]">*</span> are
              required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#cba677] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cba677] transition-colors rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#cba677] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cba677] transition-colors rounded-sm"
                  />
                </div>
              </div>

              {/* Phone & Event Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#cba677] mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cba677] transition-colors rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#cba677] mb-2">
                    Event Category *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className="w-full bg-[#2a0d14] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cba677] transition-colors rounded-sm"
                  >
                    <option value="Wedding">Wedding / Reception</option>
                    <option value="Haldi / Mehendi">Haldi / Mehendi</option>
                    <option value="Pre/Post Wedding">
                      Pre / Post Wedding Shoot
                    </option>
                    <option value="Corporate Event">
                      Corporate Summit / Event
                    </option>
                    <option value="Commercial / Product">
                      Commercial / Product Shoot
                    </option>
                    <option value="Other">Other Celebration</option>
                  </select>
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#cba677] mb-2">
                  Preferred Package
                </label>
                <select
                  value={formData.packageName}
                  onChange={(e) =>
                    setFormData({ ...formData, packageName: e.target.value })
                  }
                  className="w-full bg-[#2a0d14] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cba677] transition-colors rounded-sm"
                >
                  <option value="">Select a package (Optional)</option>
                  {packageOptions.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event Date & Venue */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#cba677] mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDate: e.target.value })
                    }
                    className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cba677] transition-colors rounded-sm [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#cba677] mb-2">
                    Venue / Location
                  </label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) =>
                      setFormData({ ...formData, venue: e.target.value })
                    }
                    placeholder="e.g., ICCB, Radisson, or Dhaka"
                    className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cba677] transition-colors rounded-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#cba677] mb-2">
                  Tell Us About Your Event *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share your vision, estimated guest count, or any special requests..."
                  className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cba677] transition-colors rounded-sm resize-none"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 bg-[#cba677]/15 border border-[#cba677]/50 text-[#cba677] text-xs tracking-wide rounded-sm">
                  Thank you! Your inquiry has been received. Our team will reach
                  out to you shortly.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-900/30 border border-red-400/50 text-red-200 text-xs tracking-wide rounded-sm">
                  Something went wrong. Please try again or contact us directly
                  via WhatsApp.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-[#cba677] text-[#3E141E] text-xs uppercase tracking-[0.28em] font-medium hover:bg-white transition-all duration-500 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Sending Inquiry..."
                  : "Send Inquiry ↗"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}