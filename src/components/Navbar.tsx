"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

interface NavLink {
  name: string;
  path: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const leftLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Wedding", path: "/wedding" },
    { name: "Corporate", path: "/corporate" },
  ];

  const rightLinks: NavLink[] = [
    { name: "Packages", path: "/packages" },
    { name: "About", path: "/about" },
    { name: "Journal", path: "/journal" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 24 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out text-white ${jost.className} ${
          isScrolled
            ? "bg-[#3E141E]/95 backdrop-blur-xl border-b border-white/10 py-3.5 lg:py-4 shadow-2xl"
            : "bg-[#0A0A0A] py-4 lg:py-6 border-b border-white/10 shadow-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="lg:hidden flex-1" />

            <div className="hidden lg:flex items-center space-x-10 w-1/3">
              {leftLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="relative group text-[10px] uppercase tracking-[0.2em] font-light text-gray-300 hover:text-white transition-colors duration-500"
                  >
                    <span
                      className={
                        isActive
                          ? "text-[#cba677] font-medium"
                          : "text-gray-300"
                      }
                    >
                      {link.name}
                    </span>
                    <span
                      className={`absolute -bottom-2 left-0 h-[1px] bg-[#cba677] transition-all duration-500 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </Link>
                );
              })}
            </div>

            <div className="flex-shrink-0 lg:w-1/3 flex justify-center z-50">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center group"
              >
                <span
                  className={`text-3xl sm:text-4xl text-white tracking-[0.1em] leading-none transition-transform duration-700 group-hover:scale-105 ${cormorant.className}`}
                >
                  O<span className="text-[#cba677] italic">3</span>
                </span>
                <motion.span
                  className="text-[7px] sm:text-[8px] text-gray-400 tracking-[0.35em] sm:tracking-[0.5em] font-light uppercase whitespace-nowrap overflow-hidden"
                  animate={{
                    opacity: isScrolled ? 0 : 1,
                    height: isScrolled ? 0 : "auto",
                    marginTop: isScrolled ? 0 : 4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Ocean of Orchid
                </motion.span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-end space-x-10 w-1/3">
              {rightLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="relative group text-[10px] uppercase tracking-[0.2em] font-light text-gray-300 hover:text-white transition-colors duration-500"
                  >
                    <span
                      className={
                        isActive
                          ? "text-[#cba677] font-medium"
                          : "text-gray-300"
                      }
                    >
                      {link.name}
                    </span>
                    <span
                      className={`absolute -bottom-2 right-0 h-[1px] bg-[#cba677] transition-all duration-500 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="relative overflow-hidden px-8 py-3 border border-[#cba677]/60 text-[10px] uppercase tracking-[0.25em] text-white group transition-all duration-500 hover:border-[#cba677]"
              >
                <span className="relative z-10 text-white group-hover:text-[#0A0A0A] transition-colors duration-500">
                  Inquire
                </span>
                <span className="absolute inset-0 bg-[#cba677] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></span>
              </Link>
            </div>

            <div className="lg:hidden flex-1 flex items-center justify-end z-50">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="text-white p-2 focus:outline-none relative w-9 h-9 flex justify-center items-center"
              >
                <span
                  className={`absolute h-[1px] bg-white transition-all duration-500 ease-in-out ${
                    isOpen ? "w-6 rotate-45" : "w-6 -translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute h-[1px] bg-white transition-all duration-500 ease-in-out ${
                    isOpen ? "w-0 opacity-0" : "w-6"
                  }`}
                ></span>
                <span
                  className={`absolute h-[1px] bg-white transition-all duration-500 ease-in-out ${
                    isOpen ? "w-6 -rotate-45" : "w-4 translate-y-2 right-1.5"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`lg:hidden fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl text-white flex flex-col justify-center items-center overflow-y-auto pt-24 pb-10 px-6 ${jost.className}`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#cba677]/20 to-transparent pointer-events-none"></div>

            <motion.div
              className="flex flex-col items-center space-y-5 sm:space-y-7 z-10 w-full max-w-sm text-center"
              initial="closed"
              animate="open"
              transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}
            >
              {allLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div key={link.name} variants={linkVariants}>
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl sm:text-4xl tracking-[0.12em] transition-colors duration-500 ${cormorant.className} ${
                        isActive
                          ? "text-[#cba677] italic"
                          : "text-white hover:text-[#cba677]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div variants={linkVariants} className="pt-6 sm:pt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-10 sm:px-12 py-3.5 sm:py-4 border border-[#cba677] text-[#cba677] text-[10px] tracking-[0.3em] uppercase hover:bg-[#cba677] hover:text-[#0A0A0A] transition-all duration-500"
                >
                  Book the Studio
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}