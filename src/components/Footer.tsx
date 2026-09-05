"use client";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/o3orchid",
      path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/o3_official_/",
      path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ocean-of-orchid",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@OceanOfOrchid",
      path: "M21.582 6.186a2.506 2.506 0 00-1.762-1.766C18.265 4 12 4 12 4s-6.264 0-7.82.42a2.505 2.505 0 00-1.761 1.766C2 7.752 2 12 2 12s0 4.248.419 5.814a2.505 2.505 0 001.761 1.766C5.736 20 12 20 12 20s6.265 0 7.82-.42a2.506 2.506 0 001.762-1.766C22 16.248 22 12 22 12s0-4.248-.418-5.814zM9.8 15.5v-7l6.2 3.5-6.2 3.5z",
    },
  ];

  return (
    <footer
      className={`bg-[#3E141E] text-white relative overflow-hidden ${jost.className}`}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#cba677]/60 to-transparent origin-center"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block group mb-8">
              <div className="flex flex-col">
                <span
                  className={`text-5xl text-white tracking-[0.1em] transition-transform duration-700 ease-out group-hover:scale-105 origin-left ${cormorant.className}`}
                >
                  O<span className="text-[#cba677] italic">3</span>
                </span>
                <span className="text-[10px] text-gray-400 tracking-[0.5em] mt-3 font-light uppercase">
                  Ocean of Orchid
                </span>
              </div>
            </Link>
            <p className="text-gray-400 font-light tracking-wider text-xs max-w-[260px] leading-loose">
              Crafting visual legacies. Exclusive production for weddings,
              corporate events, and bespoke campaigns.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4
              className={`text-[#cba677] text-xs tracking-[0.3em] uppercase mb-10 ${cormorant.className} italic`}
            >
              Portfolios
            </h4>
            <ul className="space-y-6">
              {[
                { name: "Wedding", path: "/wedding" },
                { name: "Corporate", path: "/corporate" },
                { name: "Product", path: "/product" },
                { name: "Maternity & Birthday", path: "/maternity" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-white text-sm tracking-[0.15em] transition-all duration-500 flex items-center group font-light hover:tracking-[0.2em]"
                  >
                    <span className="w-0 h-[1px] bg-white mr-0 group-hover:w-6 group-hover:mr-4 transition-all duration-500 ease-in-out"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4
              className={`text-[#cba677] text-xs tracking-[0.3em] uppercase mb-10 ${cormorant.className} italic`}
            >
              The Studio
            </h4>
            <ul className="space-y-6">
              {["About", "Packages", "Journal", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-white text-sm tracking-[0.15em] transition-all duration-500 font-light hover:tracking-[0.2em]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4
              className={`text-[#cba677] text-xs tracking-[0.3em] uppercase mb-10 ${cormorant.className} italic`}
            >
              Reach Us
            </h4>
            <div className="space-y-5 text-sm text-gray-300 font-light tracking-wider">
              <p className="hover:text-white transition-colors duration-500">
                Dhaka, Bangladesh
              </p>
              <p>
                <a
                  href="mailto:oceanoforchid@gmail.com"
                  className="hover:text-white transition-colors duration-500 relative group pb-1"
                >
                  oceanoforchid@gmail.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                </a>
              </p>
              <p>
                <a
                  href="tel:+8801703526488"
                  className="hover:text-white transition-colors duration-500"
                >
                  +880 17 0352 6488
                </a>
              </p>
              <p>
                <a
                  href="tel:+8801795771000"
                  className="hover:text-white transition-colors duration-500"
                >
                  +880 17 9577 1000
                </a>
              </p>
            </div>

            <div className="flex space-x-6 mt-10">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 group transition-all duration-500"
                >
                  <svg
                    className="w-[18px] h-[18px] transform group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-white transition-all duration-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d={social.path}
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[9px] text-gray-500 font-light tracking-[0.3em] uppercase">
            © {currentYear}{" "}
            <span
              className={`text-[#cba677] text-xs ml-1 ${cormorant.className} italic`}
            >
              Ocean of Orchid
            </span>
            <a
              href="https://sium-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cba677] text-xs ml-1 hover:text-white transition-colors duration-500"
            >
              . Code By A.S.M. Sium .
            </a>
          </p>
          <div className="flex space-x-10">
            <Link
              href="/privacy"
              className="text-[9px] text-gray-500 hover:text-white tracking-[0.3em] uppercase transition-colors duration-500"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[9px] text-gray-500 hover:text-white tracking-[0.3em] uppercase transition-colors duration-500"
            >
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
