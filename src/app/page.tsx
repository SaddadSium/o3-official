"use client";

import { useState, useEffect } from "react";
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

const heroImages = [
  "/images/hero/hero1.webp",
  "/images/hero/hero2.webp",
  "/images/hero/hero3.webp",
  "/images/hero/hero4.webp",
  "/images/hero/hero5.webp",
];

const featuredArchives = [
  {
    id: "1",
    title: "Deen & Laiba — Royal Wedding",
    category: "Muslim Wedding",
    src: "/images/home/card1.jpg",
    span: "col-span-1 md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-full",
  },
  {
    id: "2",
    title: "Tanvir & Sanjida — Reception Highlights",
    category: "Reception",
    src: "/images/home/card2.jpg",
    span: "col-span-1 aspect-[4/3]",
  },
  {
    id: "11",
    title: "Samudro & Ananna — Wedding Highlights",
    category: "Hindu Wedding",
    src: "/images/home/card3.jpg",
    span: "col-span-1 aspect-[4/3]",
  },
  {
    id: "8",
    title: "Munim & Tasnim — Post Wedding",
    category: "Pre/Post Wedding",
    src: "/images/wedding/covers/PW4.jpg",
    span: "col-span-1 md:col-span-2 aspect-[16/9] md:aspect-[21/10]",
  },
  {
    id: "5",
    title: "Prova's Mehendi Celebration",
    category: "Haldi",
    src: "/images/home/card5.jpg",
    span: "col-span-1 aspect-[4/3] md:aspect-auto md:h-full",
  },
  {
    id: "15",
    title: "Atik & Auhona — Intimate Wedding",
    category: "Muslim Wedding",
    src: "/images/home/card6.jpg",
    span: "col-span-1 aspect-[4/3] md:aspect-auto md:h-full",
  },
  {
    id: "16",
    title: "Arnob & Tarannum — Haldi Highlights",
    category: "Haldi",
    src: "/images/home/card7.jpg",
    span: "col-span-1 md:col-span-2 aspect-[16/9] md:aspect-[21/10]",
  },
];

const featuredFilms = [
  {
    id: 1,
    title: "Arnob & Tarannum's Haldi Trailer",
    category: "Haldi",
    youtubeEmbedUrl: "https://www.youtube.com/embed/iEJ73IuorfI",
  },
  {
    id: 2,
    title: "Tears of Joy: A Wedding Story",
    category: "Muslim Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Cu1jOBAAh5U",
  },
  {
    id: 3,
    title: "Rafi & Tazri's Wedding Highlights",
    category: "Muslim Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/_xvPWqeKVoA",
  },
  {
    id: 4,
    title: "Cinematic Bangali Gaye Holud || Samudro & Ananna",
    category: "Haldi",
    youtubeEmbedUrl: "https://www.youtube.com/embed/S2z1qfBUPRY",
  },
  {
    id: 5,
    title: "Wedding Moments || Sumaiya & Uday",
    category: "Muslim Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/k5OTlbekLj8",
  },
  {
    id: 6,
    title: "Cinematic Haldi Trailer || Sumaiya & Uday",
    category: "Haldi",
    youtubeEmbedUrl: "https://www.youtube.com/embed/HKe42qUTunI",
  },
  {
    id: 7,
    title: "Royal Wedding Trailer || Samir & Tulu",
    category: "Muslim Wedding",
    youtubeEmbedUrl: "https://www.youtube.com/embed/8CS0C6I7198",
  },
  {
    id: 8,
    title: "Royal Reception Highlights || Rahat & Nidhi",
    category: "Reception",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Th5iQ499OSU",
  },
];

const reviews = [
  {
    id: 1,
    name: "Tanvir & Sanjida",
    role: "Wedding Client",
    text: "Had a wonderful experience with Ocean of Orchid! From capturing all three of our special events to handling every little detail, their team was professional, patient, and incredibly supportive. The crew's behavior was 10/10, and the quality of work was equally amazing. They truly listen, understand a bride's perspective, and know how to capture the most beautiful emotions and delicate moments. Their creativity, attention to detail, and ability to handle unexpected situations made everything so much easier. Couldn't have asked for a better team! Highly recommended to everyone looking for photographers they can genuinely trust. ❤️",
  },
  {
    id: 2,
    name: "Tonmoy Saha — Tech Care",
    role: "Corporate Event",
    text: "Working with Md. Nakib Nizam and the Ocean of Orchid team has always been a great experience. Their photography perfectly captures the energy and important moments of our corporate events. What I appreciate most is their professionalism, creative approach, and attention to detail. They are always cooperative, punctual, and committed to delivering quality work. Truly a reliable team for corporate photography and event coverage. Highly recommended!",
  },
  {
    id: 3,
    name: "Nahid & Tasnim",
    role: "Wedding Client",
    text: "We had an amazing experience with Ocean of Orchid! Their team was incredibly professional, friendly, and made us feel comfortable throughout every event. We absolutely loved our wedding photographs; every picture beautifully captures the emotions, little moments, and memories that made our day so special. A big thank you to the entire Ocean of Orchid team for their dedication and hard work, and special thanks to Nakib Bhaiya for making the whole experience even more memorable. Couldn't have asked for a better team to capture our special day! ❤️",
  },
  {
    id: 4,
    name: "Iqbal Mahmud — FTL",
    role: "Corporate Client",
    text: "I've had a wonderful experience working with Md. Nakib Nizam on several occasions. His passion for photography and ability to capture meaningful moments really stand out. From understanding our requirements to delivering the final photographs, everything was handled with professionalism and care. His creative vision, dedication, and timely delivery make him someone you can genuinely rely on. Wishing Nakib and the entire Ocean of Orchid team continued success!",
  },
  {
    id: 5,
    name: "Munia Islam",
    role: "Wedding Client",
    text: "I had a wonderful experience with Ocean of Orchid! Booked them for all three of my events, and I would happily choose them again, InshaAllah. Their team was professional, friendly, and incredibly cooperative, making everyone feel comfortable throughout the sessions. Their respectful behavior and attention to clients truly stood out. The photographs turned out absolutely beautiful, with every special moment captured so perfectly. Thank you for turning our precious memories into something we can cherish forever. Highly recommended! ❤️",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const reviewTimer = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(reviewTimer);
  }, []);

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`bg-[#3E141E] min-h-screen text-white ${jost.className}`}>
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentSlide]}
              alt="Ocean of Orchid Visuals"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-[#3E141E] via-transparent to-black/30"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide drop-shadow-lg ${cormorant.className}`}
          >
            The Art of <br />{" "}
            <span className="text-[#cba677] italic">Light & Motion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] font-light text-gray-200 drop-shadow-md leading-loose"
          >
            Prioritizing Your Dreams Through <br className="md:hidden" />{" "}
            Timeless Visual Storytelling
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] mb-3 text-gray-400">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gray-500/50 overflow-hidden">
            <motion.div
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/2 bg-[#cba677]"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
            Featured Stories
          </span>
          <h2
            className={`text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
          >
            VISUAL ANTHOLOGY
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredArchives.map((album) => (
            <motion.div
              key={album.id}
              variants={sectionVariants}
              className={`group relative overflow-hidden bg-black/30 rounded-sm border border-white/10 hover:border-[#cba677]/60 transition-all duration-500 shadow-xl ${album.span}`}
            >
              <Link href={`/wedding/${album.id}`} className="block w-full h-full">
                <Image
                  src={album.src}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500 flex flex-col justify-end p-6">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#cba677] mb-1 font-light">
                    {album.category}
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <h3
                      className={`text-xl md:text-2xl text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 ${cormorant.className}`}
                    >
                      {album.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#cba677] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shrink-0">
                      Explore ↗
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Link href="/wedding" className="group flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#cba677] group-hover:text-white transition-colors duration-300">
              Experience The Complete Chronicle
            </span>
            <span className="w-12 h-[1px] bg-[#cba677] group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-black/20 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
              Cinematography Showcase
            </span>
            <h2
              className={`text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
            >
              STORIES IN MOTION
            </h2>
            <div className="w-12 h-[1px] bg-[#cba677] mx-auto"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {featuredFilms.map((film) => (
              <motion.div
                key={film.id}
                variants={sectionVariants}
                className="group flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-black/50 mb-3 rounded-sm shadow-xl border border-white/10 group-hover:border-[#cba677]/50 transition-all duration-500">
                  <iframe
                    src={film.youtubeEmbedUrl}
                    title={film.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#cba677] font-light mb-0.5">
                  {film.category}
                </span>
                <h3
                  className={`text-base md:text-lg text-white tracking-wide group-hover:text-[#cba677] transition-colors duration-300 line-clamp-1 ${cormorant.className}`}
                >
                  {film.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 flex justify-center">
            <Link href="/wedding" className="group flex items-center space-x-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#cba677] group-hover:text-white transition-colors duration-300">
                Watch The Stories Unfold
              </span>
              <span className="w-12 h-[1px] bg-[#cba677] group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-12 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#cba677]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#cba677] block mb-2 font-light">
            Client Testimonials
          </span>
          <h2
            className={`text-4xl md:text-5xl text-white tracking-wider mb-4 ${cormorant.className}`}
          >
            Words Of Grace
          </h2>
          <div className="w-12 h-[1px] bg-[#cba677] mx-auto mb-14"></div>

          <div className="relative bg-black/30 backdrop-blur-md border border-[#cba677]/20 rounded-sm px-6 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#cba677]/70"></div>

            <span className="absolute top-5 right-6 text-[10px] tracking-[0.3em] text-[#cba677]/60 font-light">
              0{currentReview + 1} / 0{reviews.length}
            </span>

            <div className="flex justify-center items-center gap-1.5 mb-5 text-[#cba677] text-xs tracking-widest">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <div className="min-h-[220px] md:min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full"
                >
                  <span
                    className={`text-[#cba677]/40 text-5xl md:text-6xl leading-none block mb-2 select-none ${cormorant.className}`}
                  >
                    &ldquo;
                  </span>

                  <p className="text-gray-200 font-light text-sm sm:text-base md:text-[17px] tracking-wide leading-relaxed md:leading-loose mb-8 italic max-w-3xl mx-auto">
                    {reviews[currentReview].text}
                  </p>

                  <div className="w-10 h-[1px] bg-[#cba677]/40 mx-auto mb-5"></div>

                  <div className="flex flex-col items-center justify-center">
                    <h4
                      className={`text-xl md:text-2xl text-[#cba677] tracking-wide mb-1 ${cormorant.className}`}
                    >
                      {reviews[currentReview].name}
                    </h4>
                    <span className="text-[10px] uppercase text-gray-400 tracking-[0.28em] font-light">
                      {reviews[currentReview].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={handlePrevReview}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:border-[#cba677] hover:bg-[#cba677] hover:text-[#3E141E] transition-all duration-300 text-sm"
            >
              ←
            </button>

            <div className="flex items-center space-x-2.5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentReview === index
                      ? "bg-[#cba677] w-8"
                      : "bg-white/25 w-1.5 hover:bg-white/60"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextReview}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:border-[#cba677] hover:bg-[#cba677] hover:text-[#3E141E] transition-all duration-300 text-sm"
            >
              →
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}