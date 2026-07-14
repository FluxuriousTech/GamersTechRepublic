"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";

const CAFE_VIDEOS = ["2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4"];

const GAMES = [
  ["Valorant", "Riot", true],
  ["Counter-Strike 2", "Steam", true],
  ["Dota 2", "Steam", true],
  ["Fortnite", "Epic", true],
  ["Apex Legends", "Steam", true],
  ["CS 1.6", "Offline", true],
  ["Roblox", "Roblox", true],
  ["Call of Duty", "Offline", true],
  ["Minecraft", "TLauncher", true],
  ["Rocket League", "Epic", true],
  ["Fall Guys", "Epic", true],
  ["Paladins", "Steam", true],
  ["PUBG", "Steam", true],
  ["Cyberpunk", "Offline", false],
  ["DX-Ball 2", "Offline", false],
  ["GTA V", "Offline", false],
  ["God of War Ragnarök", "Offline", false],
  ["Shadow of the Tomb Raider", "Offline", false],
  ["The Last of Us Part II", "Offline", false],
  ["World of Tanks Blitz", "Steam", true],
  ["Wuchang", "Offline", false],
  ["Spider-Man 2", "Offline", false],
  ["Doom Eternal", "Offline", false],
  ["Uncharted", "Offline", false],
  ["Rainbow Six", "Steam", true],
  ["Chained Together", "Steam", true],
  ["Forza Horizon 4 (Racing Sim Only)", "Offline", false],
  ["Forza Horizon 5 (Racing Sim Only)", "Offline", false],
  ["Forza Motorsport 7 (Racing Sim Only)", "Offline", false],
  ["F1 22 (Racing Sim Only)", "Offline", false],
  ["Assetto Corsa Competizione (Racing Sim Only)", "Offline", false],
  ["WRC Generations (Racing Sim Only)", "Offline", false],
  ["Dirt 5 (Racing Sim Only)", "Offline", false],
  ["CarX Street (Racing Sim Only)", "Offline", false],
  ["Japanese Drift Master (JDM) (Racing Sim Only)", "Offline", false],
] as const;

export default function CafePage() {
  const [activeVideo, setActiveVideo] = useState(0);

  const showPrevious = () =>
    setActiveVideo((current) => (current - 1 + CAFE_VIDEOS.length) % CAFE_VIDEOS.length);
  const showNext = () => setActiveVideo((current) => (current + 1) % CAFE_VIDEOS.length);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pb-24 pt-24 text-white selection:bg-gtr-neon-red selection:text-white">
        <div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[600px] rounded-full bg-gtr-neon-red/5 blur-[180px]" />

        <section className="relative mx-auto mb-20 max-w-[1600px] overflow-hidden border-y border-white/10 bg-gtr-charcoal sm:mx-4 sm:rounded-xl sm:border lg:mx-auto">
          <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[21/9]">
            <video
              key={CAFE_VIDEOS[activeVideo]}
              className="h-full w-full object-cover"
              src={`/cafe-carousel/${CAFE_VIDEOS[activeVideo]}`}
              autoPlay
              muted
              playsInline
              preload="metadata"
              onEnded={showNext}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/30" />

            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {CAFE_VIDEOS.map((video, index) => (
                <button
                  key={video}
                  type="button"
                  onClick={() => setActiveVideo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeVideo ? "w-9 bg-gtr-neon-red" : "w-4 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Show cafe video ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:border-gtr-neon-red hover:bg-gtr-neon-red/20"
              aria-label="Previous cafe video"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:border-gtr-neon-red hover:bg-gtr-neon-red/20"
              aria-label="Next cafe video"
            >
              <ChevronRight size={22} />
            </button>

            <div className="pointer-events-none absolute bottom-10 left-6 sm:bottom-12 sm:left-12">
              <span className="font-orbitron text-[10px] font-bold uppercase tracking-[0.25em] text-gtr-neon-red">
                Inside the arena
              </span>
              <h1 className="mt-2 font-orbitron text-3xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
                The Cafe <span className="text-gtr-neon-red text-glow">Experience</span>
              </h1>
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
            <span className="font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-gtr-neon-red">
              The Ultimate Arena
            </span>
            <h2 className="font-orbitron text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Built For <span className="text-gtr-neon-red text-glow">Every Player</span>
            </h2>
            <div className="mx-auto h-[2px] w-16 bg-gtr-neon-red shadow-[0_0_8px_#ff0000]" />
            <p className="text-sm font-light text-gtr-off-white sm:text-base">
              Explore Thane&apos;s premier gaming arena—premium PC stations, dedicated racing simulators, and a game library built for every kind of session.
            </p>
          </div>

          <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="order-2 flex flex-col justify-between space-y-6 rounded-lg border border-white/5 bg-gtr-charcoal p-8 lg:col-span-12">
              <div>
                <h2 className="mb-4 font-orbitron text-2xl font-black uppercase tracking-wider text-white">
                  Arena Details & Operations
                </h2>
                <p className="text-sm font-light leading-relaxed text-gtr-off-white">
                  GamersTechRepublic Thane features high-end gaming stations divided into a general esports zone and dedicated direct-drive sim racing rigs. Built for casual sessions, tournaments, bootcamps, and professional training.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 border-t border-white/5 pt-6 sm:grid-cols-2">
                <div className="flex gap-3 text-sm">
                  <MapPin className="shrink-0 text-gtr-neon-red" size={20} />
                  <div>
                    <strong className="block text-white">Location</strong>
                    <span className="text-gtr-off-white">703, C-1 Phase 4, Brahmand, opposite Orchids International School, Azad Nagar, Thane West 400607</span>
                  </div>
                </div>
                <div className="flex gap-3 text-sm">
                  <Clock className="shrink-0 text-gtr-neon-red" size={20} />
                  <div>
                    <strong className="block text-white">Operating Hours</strong>
                    <span className="text-gtr-off-white">Monday – Sunday<br />10:00 AM – 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-between space-y-6 rounded-lg border border-gtr-neon-red/30 bg-gtr-neon-red/5 p-8 text-center lg:col-span-12 lg:flex-row lg:items-center lg:gap-12 lg:text-left">
              <div className="space-y-4">
                <h3 className="font-orbitron text-xl font-black uppercase tracking-widest text-white text-glow">Cafe Pricing</h3>
                <div className="mx-auto h-px w-16 bg-gtr-neon-red/30" />
                <div className="space-y-4 pt-2 text-left">
                  <div>
                    <span className="mb-1 block font-orbitron text-[10px] font-bold uppercase tracking-wider text-gtr-neon-red">Esports PC Zone</span>
                    <span className="text-base font-bold text-white">₹70 / hour</span>
                    <span className="mt-1 block text-xs text-gtr-off-white">Happy hours (working days, 10 AM–2 PM): <strong className="font-semibold text-white">₹50 / hr</strong></span>
                    <span className="mt-0.5 block text-xs text-gtr-off-white">Weekends & holidays, 10 AM–2 PM: <strong className="font-semibold text-white">₹60 / hr</strong></span>
                  </div>
                  <div className="pt-2">
                    <span className="mb-1 block font-orbitron text-[10px] font-bold uppercase tracking-wider text-gtr-neon-red">Sim Racing Zone</span>
                    <span className="text-base font-bold text-white">₹150 / hour</span>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/919920426377?text=Hi%20GamersTechRepublic,%20I'd%20like%20to%20ask%20about%20the%20gaming%20cafe%20slots%20and%20pricing."
                target="_blank"
                rel="noreferrer"
                className="w-full rounded bg-gtr-neon-red py-3.5 text-center font-orbitron text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all hover:bg-gtr-neon-red/90 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]"
              >
                Book Slot via WhatsApp
              </a>
            </div>
          </div>

          <section>
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="font-orbitron text-[10px] font-bold uppercase tracking-[0.25em] text-gtr-neon-red">GamersTechRepublic</span>
                <h2 className="mt-2 border-l-2 border-gtr-neon-red pl-3 font-orbitron text-2xl font-black uppercase tracking-wider text-white">Game List</h2>
              </div>
              <p className="text-xs text-gtr-off-white">35 titles available across PC and racing sim stations</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-gtr-charcoal shadow-2xl">
              <div className="hidden grid-cols-[80px_1fr_160px_180px] gap-4 border-b border-gtr-neon-red/30 bg-gtr-neon-red/10 px-6 py-4 font-orbitron text-[10px] font-bold uppercase tracking-wider text-gtr-off-white md:grid">
                <span>Sr. No.</span><span>Game Name</span><span>Platform</span><span>Own Account Needed</span>
              </div>
              <div className="divide-y divide-white/5">
                {GAMES.map(([name, platform, accountNeeded], index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25 }}
                    className="grid gap-3 px-5 py-4 transition-colors hover:bg-white/[0.035] md:grid-cols-[80px_1fr_160px_180px] md:items-center md:gap-4 md:px-6"
                  >
                    <span className="font-orbitron text-xs font-bold text-gtr-neon-red">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-orbitron text-sm font-bold uppercase tracking-wide text-white">{name}</span>
                    <span className="text-xs font-medium text-gtr-off-white">{platform}</span>
                    <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${accountNeeded ? "bg-gtr-neon-red/10 text-gtr-neon-red" : "bg-white/5 text-gtr-off-white"}`}>
                      {accountNeeded ? <Check size={12} /> : <X size={12} />}
                      {accountNeeded ? "Yes" : "No"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
