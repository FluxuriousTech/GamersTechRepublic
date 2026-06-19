export interface NewsArticle {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  excerpt: string;
  body: string;
  image?: string;
  featured?: boolean;
  trending?: boolean;
}

export interface PCBuild {
  _id: string;
  name: string;
  slug: { current: string };
  priceCategory: "under-1l" | "1l-2l" | "2l-4l" | "4l-6l" | "6l-plus";
  price: number;
  cpu: string;
  gpu: string;
  ram: string;
  motherboard: string;
  storage: string;
  psu: string;
  cooler: string;
  usage: string;
  image?: string;
}

export interface LeaderboardPlayer {
  _id: string;
  playerName: string;
  rank: number;
  game: "CS2" | "Valorant" | "Sim Racing";
  score: string;
  winRate: number;
  kdr: number;
  rankMovement: "up" | "down" | "stable";
  statValue: string; // e.g. "64.2% HS" or "1:14.352"
}

export interface PlayerOfMonth {
  _id: string;
  playerName: string;
  instagram: string;
  month: string;
  game: "CS2" | "Valorant" | "Sim Racing";
  rank: string;
  score: string;
  stats: { label: string; value: string }[];
  image?: string;
  featured?: boolean;
}

export interface GalleryMedia {
  _id: string;
  title: string;
  category: "Cafe" | "Events" | "Rigs" | "Sim Racing";
  image: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
}

export interface Sponsor {
  _id: string;
  name: string;
  logo: string;
  websiteUrl: string;
}

export const FALLBACK_NEWS: NewsArticle[] = [
  {
    _id: "news-1",
    title: "GTR Sim Racing League: Season 4 Registrations Open",
    slug: { current: "gtr-sim-racing-league-season-4" },
    category: "Sim Racing",
    publishedAt: "2026-06-15T10:00:00Z",
    excerpt: "Get ready to burn rubber on our professional triple-monitor simulators. Registrations for Season 4 are now live with a prize pool of 1.5 Lakhs.",
    body: "The premium simulator experience at GTR Thane gets even more competitive. Register with your team or as a solo racer. Top racers win exclusive GTR merchandise and custom PC peripherals.",
    featured: true,
    trending: true,
    image: "/images/sim-racing-news.jpg",
  },
  {
    _id: "news-2",
    title: "NVIDIA RTX 5090 Rig Showcase: Experience Peak Performance",
    slug: { current: "rtx-5090-rig-showcase-experience" },
    category: "PC Hardware",
    publishedAt: "2026-06-12T14:30:00Z",
    excerpt: "GTR becomes the first gaming cafe in Maharashtra to house the beastly RTX 5090. Book your premium slot now and feel the speed.",
    body: "We have upgraded our VIP zone with custom liquid-cooled rigs powered by the NVIDIA RTX 5090 and Intel Core Ultra 9. Prepare for buttery smooth 360Hz esports gaming.",
    featured: false,
    trending: true,
    image: "/images/rtx5090-showcase.jpg",
  },
  {
    _id: "news-3",
    title: "Valorant Community Cup: Thane's Champions Crowned",
    slug: { current: "valorant-community-cup-champions" },
    category: "Valorant",
    publishedAt: "2026-06-10T18:00:00Z",
    excerpt: "A thrilling grand finale concluded last night at GTR Cafe. Check out the tournament highlights and the MVP performance.",
    body: "Team 'Thane Overlords' secured their title victory in a nail-biting 3-2 match against 'Mumbai Titans'. With over 150 live spectators, it was our biggest Valorant event yet.",
    featured: false,
    trending: false,
    image: "/images/valorant-event.jpg",
  },
  {
    _id: "news-4",
    title: "CS2 Indian Championship Qualifiers: GTR Thane LAN Event",
    slug: { current: "cs2-indian-championship-qualifiers-lan" },
    category: "CS2",
    publishedAt: "2026-06-08T09:00:00Z",
    excerpt: "Watch the best CS2 players in India compete live at our cafe. Standard cafe operations will continue on Zone B.",
    body: "We are proud to host the Western Qualifiers for the upcoming CS2 Indian Championship. High-speed fiber connections, low-latency servers, and zero-compromise setups await the pros.",
    featured: false,
    trending: false,
    image: "/images/cs2-event.jpg",
  },
];

export const FALLBACK_PC_BUILDS: PCBuild[] = [
  {
    _id: "build-1",
    name: "GTR Vanguard Elite",
    slug: { current: "gtr-vanguard-elite" },
    priceCategory: "under-1l",
    price: 85000,
    cpu: "AMD Ryzen 5 7600",
    gpu: "NVIDIA RTX 5060 8GB",
    ram: "16GB DDR5 5200MHz",
    motherboard: "B650M Wifi",
    storage: "1TB Gen4 NVMe SSD",
    psu: "650W 80+ Bronze Gold",
    cooler: "240mm Liquid AIO",
    usage: "1080p Ultra Gaming & High-FPS Esports",
    image: "/images/pc-build-vanguard.jpg",
  },
  {
    _id: "build-2",
    name: "GTR Overlord V2",
    slug: { current: "gtr-overlord-v2" },
    priceCategory: "1l-2l",
    price: 175000,
    cpu: "AMD Ryzen 7 7800X3D",
    gpu: "NVIDIA RTX 5070 Ti 16GB",
    ram: "32GB DDR5 6000MHz RGB",
    motherboard: "X670E Gaming Wifi",
    storage: "2TB Gen4 NVMe SSD",
    psu: "850W 80+ Gold Fully Modular",
    cooler: "360mm ARGB AIO Liquid Cooler",
    usage: "1440p Competitive & 4K Ray-Traced Gaming",
    image: "/images/pc-build-overlord.jpg",
  },
  {
    _id: "build-3",
    name: "GTR Apex Titan",
    slug: { current: "gtr-apex-titan" },
    priceCategory: "4l-6l",
    price: 480000,
    cpu: "Intel Core Ultra 9 285K",
    gpu: "NVIDIA RTX 5090 32GB",
    ram: "64GB DDR5 6400MHz Dominator",
    motherboard: "Z890 Maximus Hero",
    storage: "4TB Gen5 SSD RAID 0",
    psu: "1200W ATX 3.0 Titanium",
    cooler: "Custom Loop Dual-Radiator Liquid System",
    usage: "No-Compromise 4K High Refresh, AI Training & Workstation",
    image: "/images/pc-build-apex.jpg",
  },
];

export const FALLBACK_LEADERBOARD: LeaderboardPlayer[] = [
  {
    _id: "l-1",
    playerName: "Xenon_Gamer",
    rank: 1,
    game: "CS2",
    score: "24,520 pts",
    winRate: 72,
    kdr: 1.48,
    rankMovement: "up",
    statValue: "64.2% HS",
  },
  {
    _id: "l-2",
    playerName: "CyberPhoenix",
    rank: 2,
    game: "CS2",
    score: "23,980 pts",
    winRate: 68,
    kdr: 1.35,
    rankMovement: "down",
    statValue: "58.1% HS",
  },
  {
    _id: "l-3",
    playerName: "ShadowStriker",
    rank: 3,
    game: "CS2",
    score: "22,410 pts",
    winRate: 65,
    kdr: 1.29,
    rankMovement: "stable",
    statValue: "52.4% HS",
  },
  {
    _id: "l-4",
    playerName: "Viper_Thane",
    rank: 1,
    game: "Valorant",
    score: "Radiant #12",
    winRate: 74,
    kdr: 1.62,
    rankMovement: "up",
    statValue: "34.8% HS",
  },
  {
    _id: "l-5",
    playerName: "NeonGlow_99",
    rank: 2,
    game: "Valorant",
    score: "Radiant #45",
    winRate: 70,
    kdr: 1.41,
    rankMovement: "stable",
    statValue: "31.2% HS",
  },
  {
    _id: "l-6",
    playerName: "ApexRacer_IN",
    rank: 1,
    game: "Sim Racing",
    score: "1:14.352 (Monza)",
    winRate: 88,
    kdr: 0, // Not applicable for racing but defined
    rankMovement: "up",
    statValue: "18 Podiums",
  },
  {
    _id: "l-7",
    playerName: "OversteerPro",
    rank: 2,
    game: "Sim Racing",
    score: "1:14.598 (Monza)",
    winRate: 80,
    kdr: 0,
    rankMovement: "down",
    statValue: "15 Podiums",
  },
];

export const FALLBACK_PLAYER_OF_MONTH: PlayerOfMonth[] = [
  {
    _id: "potm-1",
    playerName: "Viper_Thane",
    instagram: "viper_thane_gaming",
    month: "June 2026",
    game: "Valorant",
    rank: "Radiant #12",
    score: "1.62 K/D",
    stats: [
      { label: "Win Rate", value: "74%" },
      { label: "Headshot Rate", value: "34.8%" },
      { label: "Average Combat Score", value: "284" },
      { label: "Clutch Win Rate", value: "62%" },
    ],
    image: "/images/potm-valorant.jpg",
    featured: true,
  },
  {
    _id: "potm-2",
    playerName: "Xenon_Gamer",
    instagram: "xenon_cs",
    month: "May 2026",
    game: "CS2",
    rank: "Global Elite / Faceit Level 10",
    score: "1.48 K/D",
    stats: [
      { label: "Headshot %", value: "64.2%" },
      { label: "Kills / Round", value: "0.92" },
      { label: "Damage / Round", value: "94.8" },
      { label: "MVPs", value: "48" },
    ],
    image: "/images/potm-cs2.jpg",
    featured: false,
  },
  {
    _id: "potm-3",
    playerName: "ApexRacer_IN",
    instagram: "apex_racer_mumbai",
    month: "April 2026",
    game: "Sim Racing",
    rank: "A-Class Simulator Pro",
    score: "1:14.352 (Monza)",
    stats: [
      { label: "Total Podiums", value: "18" },
      { label: "Pole Positions", value: "12" },
      { label: "Average Lap Time", value: "1:14.780" },
      { label: "Championship Wins", value: "2" },
    ],
    image: "/images/potm-racing.jpg",
    featured: false,
  },
];

export const FALLBACK_GALLERY: GalleryMedia[] = [
  {
    _id: "gal-1",
    title: "Premium PC Rigs Zone A",
    category: "Rigs",
    image: "/images/gallery-rigs-1.jpg",
  },
  {
    _id: "gal-2",
    title: "Sim Racing Experience Center",
    category: "Sim Racing",
    image: "/images/gallery-sim-1.jpg",
  },
  {
    _id: "gal-3",
    title: "VIP Esports Lounge",
    category: "Cafe",
    image: "/images/gallery-vip-1.jpg",
  },
  {
    _id: "gal-4",
    title: "CS2 Lan Tournament Night",
    category: "Events",
    image: "/images/gallery-event-1.jpg",
  },
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "t-1",
    name: "Rohan Shinde",
    role: "Semi-Pro Valorant Player",
    feedback: "The low latency fibers and 360Hz monitors here are game-changers. GTR Thane is the only place in Maharashtra that offers true esports grade setups.",
    rating: 5,
  },
  {
    _id: "t-2",
    name: "Aditi Kulkarni",
    role: "Sim Racer & Content Creator",
    feedback: "The triple OLED direct drive simulators at GTR are as close to real racing as it gets. Unmatched torque force feedback and visual immersion.",
    rating: 5,
  },
  {
    _id: "t-3",
    name: "Kunal Shah",
    role: "Tech Enthusiast",
    feedback: "Ordered my RTX 5080 build through their custom PC configurator. Exceptionally neat cable management, high-end thermal performance, and fast delivery.",
    rating: 5,
  },
];

export const FALLBACK_SPONSORS: Sponsor[] = [
  { _id: "s-1", name: "Razer", logo: "/images/sponsors/razer.svg", websiteUrl: "https://razer.com" },
  { _id: "s-2", name: "ASUS ROG", logo: "/images/sponsors/rog.svg", websiteUrl: "https://rog.asus.com" },
  { _id: "s-3", name: "Corsair", logo: "/images/sponsors/corsair.svg", websiteUrl: "https://corsair.com" },
  { _id: "s-4", name: "Intel", logo: "/images/sponsors/intel.svg", websiteUrl: "https://intel.com" },
];
