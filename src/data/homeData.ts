export interface FeaturedArchive {
  id: string;
  title: string;
  category: string;
  src: string;
  span: string;
}

export interface FeaturedFilm {
  id: number;
  title: string;
  category: string;
  youtubeEmbedUrl: string;
}

export interface ClientReview {
  id: number;
  name: string;
  role: string;
  text: string;
}

export const heroImages: string[] = [
  "/images/hero/hero1.webp",
  "/images/hero/hero2.webp",
  "/images/hero/hero3.webp",
  "/images/hero/hero4.webp",
  "/images/hero/hero5.webp",
];

export const featuredArchives: FeaturedArchive[] = [
  {
    id: "1",
    title: "Deen & Laiba — Royal Wedding",
    category: "Muslim Wedding",
    src: "/images/home/card1.jpg",
    span: "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-full",
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
    span: "col-span-1 sm:col-span-2 lg:col-span-2 aspect-[16/9] lg:aspect-[21/10]",
  },
  {
    id: "5",
    title: "Prova's Mehendi Celebration",
    category: "Haldi",
    src: "/images/home/card5.jpg",
    span: "col-span-1 aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-full",
  },
  {
    id: "15",
    title: "Atik & Auhona — Intimate Wedding",
    category: "Muslim Wedding",
    src: "/images/home/card6.jpg",
    span: "col-span-1 aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-full",
  },
  {
    id: "16",
    title: "Arnob & Tarannum — Haldi Highlights",
    category: "Haldi",
    src: "/images/home/card7.jpg",
    span: "col-span-1 sm:col-span-2 lg:col-span-2 aspect-[16/9] lg:aspect-[21/10]",
  },
];

export const featuredFilms: FeaturedFilm[] = [
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

export const reviews: ClientReview[] = [
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