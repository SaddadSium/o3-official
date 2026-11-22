export interface JournalImage {
  src: string;
  caption: string;
}

export interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  image: string;
  intro: string;
  quote: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  featureImage: JournalImage;
  diptychImages: [JournalImage, JournalImage];
  closingImage: JournalImage;
}

export const journalPosts: JournalPost[] = [
  {
    id: "1",
    title: "The Art of Candid Wedding Storytelling",
    excerpt:
      "Discover why capturing unscripted moments creates a more emotional and timeless wedding film than traditional posed photography.",
    date: "October 12, 2026",
    category: "Wedding Philosophy",
    readTime: "4 min read",
    author: "Ocean of Orchid Editorial",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    intro:
      "Long after the stage lights dim and the floral installations fade, what remains of a wedding day are the fleeting, unscripted glances—a father holding back tears during the Rukhsati, a burst of laughter between bridesmaids, or a quiet hand squeeze right before the grand entrance.",
    quote:
      "A posed portrait shows how a wedding looked; a candid frame preserves how the day truly felt.",
    sections: [
      {
        heading: "Why Unscripted Moments Age Better",
        paragraphs: [
          "Traditional wedding photography often relies heavily on rehearsed angles and rigid smiles. While formal portraits have their place in family archives, they rarely capture the pulse of a celebration. Candid storytelling allows couples to remain fully present in their own wedding rather than feeling like actors on a set.",
          "Our approach begins long before the shutter clicks. By blending seamlessly into the rhythm of the event, we anticipate emotional peaks—reading body language, light shifts, and family dynamics so the most authentic frames happen naturally.",
        ],
      },
      {
        heading: "Balancing Documentary Realism With Cinema",
        paragraphs: [
          "Candid does not mean careless. Every unscripted frame is still composed with deliberate attention to directional light, foreground depth, and architectural symmetry. Whether shooting a vibrant Dhaka Haldi or an intimate Nikah, we treat real life with the visual discipline of cinema.",
        ],
      },
      {
        heading: "Creating Space for Authentic Emotion",
        paragraphs: [
          "The secret to effortless wedding imagery is trust. When couples and families feel comfortable around the crew, guards drop and genuine warmth surfaces. That quiet comfort is what transforms a wedding gallery into an heirloom story passed down for generations.",
        ],
      },
    ],
    featureImage: {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1400&auto=format&fit=crop",
      caption:
        "Natural directional light elevates an unscripted couple moment between ceremonies.",
    },
    diptychImages: [
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
        caption: "Quiet details and textures captured before the grand entrance.",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
        caption: "Atmospheric venue lighting framing the evening reception.",
      },
    ],
    closingImage: {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1400&auto=format&fit=crop",
      caption:
        "Timeless visual storytelling rooted in genuine human connection.",
    },
  },
  {
    id: "2",
    title: "Lighting the Future: Commercial Spaces",
    excerpt:
      "An inside look at how we approach architectural and corporate interior lighting to elevate modern brand identities.",
    date: "September 28, 2026",
    category: "Corporate & Commercial",
    readTime: "5 min read",
    author: "Ocean of Orchid Studio",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    intro:
      "Modern architecture is designed around light. When photographing corporate headquarters, luxury showrooms, or architectural interiors, the difference between a flat snapshot and a flagship brand visual lies in how shadow, reflection, and ambient warmth are balanced.",
    quote:
      "Great commercial photography does not just document a workspace—it communicates the ambition of the brand inside it.",
    sections: [
      {
        heading: "Reading Natural & Artificial Light Together",
        paragraphs: [
          "Commercial interiors often mix cool daylight from glass facades with warm tungsten or LED architectural fixtures. Rather than overpowering the space with harsh studio strobes, we map the building's natural light cycle across the day to find the exact hour when lines and textures come alive.",
          "Subtle fill lighting is then introduced only where needed to preserve clean highlights on marble, wood grain, and brushed metal surfaces without stripping away depth.",
        ],
      },
      {
        heading: "Precision in Perspective & Composition",
        paragraphs: [
          "Vertical lines must remain razor-straight in architectural storytelling. Using calibrated wide-angle optics and deliberate framing, we emphasize spatial flow—guiding the viewer's eye from reception lounges into collaborative work zones seamlessly.",
        ],
      },
      {
        heading: "Visual Consistency Across Campaigns",
        paragraphs: [
          "From annual reports to digital showcases, cohesive color grading ensures every corporate image aligns with the client's brand guidelines. Clean contrast, controlled highlights, and authentic skin tones for executive portraits keep the final portfolio sharp and timeless.",
        ],
      },
    ],
    featureImage: {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop",
      caption:
        "Balanced ambient daylight highlighting clean architectural geometry.",
    },
    diptychImages: [
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
        caption: "Capturing authentic team collaboration in modern workspaces.",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1000&auto=format&fit=crop",
        caption: "Executive storytelling tailored for corporate brand identity.",
      },
    ],
    closingImage: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
      caption:
        "Architectural scale and reflection framed at golden hour for maximum impact.",
    },
  },
  {
    id: "3",
    title: "Aesthetic Blueprint: Choosing Your Wedding Palette",
    excerpt:
      "How our signature burgundy and gold color theory reflects luxury, warmth, and everlasting elegance in visual production.",
    date: "September 15, 2026",
    category: "Design & Style",
    readTime: "3 min read",
    author: "Ocean of Orchid Creative Desk",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    intro:
      "Every unforgettable celebration begins with a cohesive visual language. Before selecting floral arches, wardrobe embroidery, or stage lighting, defining a disciplined color palette ensures your wedding looks unified in person and cinematic on screen.",
    quote:
      "When decor, wardrobe, and lighting speak the same color language, every frame looks effortlessly editorial.",
    sections: [
      {
        heading: "The Psychology of Deep Burgundy & Warm Gold",
        paragraphs: [
          "Rich wine and burgundy tones create immediate visual depth, allowing warm gold accents and ivory florals to glow naturally under evening spotlights. Unlike overly bright neon washes that flatten skin tones on camera, deep jewel palettes flatter every complexion.",
          "Pairing matte velvet textures with soft candlelight introduces rich tonal contrast that translates beautifully into both photography and 4K wedding films.",
        ],
      },
      {
        heading: "Coordinating Lighting With Stage Design",
        paragraphs: [
          "One of the most overlooked elements in event styling is lighting temperature. Mixing harsh blue or magenta stage LEDs with warm traditional attire creates color casts that distract from the couple. Sticking to warm tungsten key lights preserves the true richness of zari work and floral arrangements.",
        ],
      },
      {
        heading: "From Venue Decor to Final Color Grade",
        paragraphs: [
          "When couples share their mood boards early in the planning process, our photography and cinematography teams align exposure and color grading profiles to honor those exact tones—ensuring your final gallery feels curated from the first frame to the last.",
        ],
      },
    ],
    featureImage: {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop",
      caption:
        "Warm candlelit tablescapes paired with deep architectural drapery.",
    },
    diptychImages: [
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
        caption: "Layered florals and muted gold accents elevate reception framing.",
      },
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
        caption: "Harmonious warm lighting ensures natural, flattering skin tones.",
      },
    ],
    closingImage: {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1400&auto=format&fit=crop",
      caption:
        "A cohesive palette turns a grand banquet hall into an intimate cinema set.",
    },
  },
  {
    id: "4",
    title: "Behind the Lens: Capturing High-End Expos",
    excerpt:
      "Navigating large-scale corporate summits and global exhibitions with agile execution and cinema-grade drone gear.",
    date: "August 30, 2026",
    category: "Behind The Scenes",
    readTime: "6 min read",
    author: "Ocean of Orchid Production Team",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    intro:
      "Covering international trade exhibitions and national summits across venues like ICCB Dhaka demands precision choreography. With thousands of visitors, VIP delegations, keynote panels, and brand pavilions operating simultaneously, there are no second takes.",
    quote:
      "In large-scale live production, preparation is what makes high-pressure execution look effortless.",
    sections: [
      {
        heading: "Multi-Unit Floor Coverage & Synchronization",
        paragraphs: [
          "Large expos cannot be documented by a single roving camera. We deploy synchronized photography, gimbal cinematography, and dedicated audio-interview units across key halls so opening ceremonies, ribbon cuttings, and stall walkthroughs are covered simultaneously.",
          "Clear radio communication and pre-mapped shot lists ensure our crew is always in position minutes before keynote speakers step onto the stage.",
        ],
      },
      {
        heading: "Rapid Turnaround for Same-Day Highlights",
        paragraphs: [
          "Corporate organizers rely on immediate digital momentum. Our on-site editing workflow ingests curated photography selects and Day 1 highlight reels directly during the event, allowing brands to publish polished recaps while the exhibition is still trending.",
        ],
      },
      {
        heading: "Aerial Scale & Closing Aftermovies",
        paragraphs: [
          "Combining sweeping drone establishing shots with tight macro details of products and attendee interactions creates an aftermovie that communicates both scale and human energy—serving as the flagship promotional asset for next year's edition.",
        ],
      },
    ],
    featureImage: {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop",
      caption:
        "Main auditorium coverage capturing keynote energy and audience scale.",
    },
    diptychImages: [
      {
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
        caption: "Dedicated stage units positioned for crisp speaker framing.",
      },
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
        caption: "High-energy closing galas and award night documentation.",
      },
    ],
    closingImage: {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop",
      caption:
        "Executive interviews and brand storytelling delivered with broadcast polish.",
    },
  },
];