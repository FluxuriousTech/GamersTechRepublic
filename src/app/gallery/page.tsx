"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { X, Play, Image as ImageIcon, ZoomIn } from "lucide-react";
import { FALLBACK_GALLERY } from "@/data/fallback";

const CATEGORIES = ["All", "Cafe", "Events", "Rigs", "Sim Racing"] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const filteredMedia = FALLBACK_GALLERY.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  const lightboxItem = FALLBACK_GALLERY.find((item) => item._id === activeLightbox);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-gtr-neon-red selection:text-white">
        
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gtr-neon-red/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-orbitron font-bold text-xs tracking-[0.2em] text-gtr-neon-red uppercase">
              Visual Chronicles
            </span>
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Media <span className="text-gtr-neon-red text-glow">Gallery</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Step inside Thane's finest esports arena. View setups, esports tournament battle stages, direct drive simulator cockpits, and private VIP suites.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-white/5 pb-8 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-orbitron font-bold text-[10px] tracking-wider uppercase px-5 py-2.5 rounded border transition-colors ${
                  activeCategory === cat
                    ? "bg-gtr-neon-red border-gtr-neon-red text-white shadow-[0_0_10px_rgba(255,0,0,0.3)]"
                    : "bg-gtr-charcoal border-white/5 text-gtr-off-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((item) => (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveLightbox(item._id)}
                  className="relative aspect-video rounded overflow-hidden border border-white/5 bg-gtr-charcoal group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  
                  {/* Top-Right Icon */}
                  <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={16} />
                  </div>

                  {/* Left bottom Details */}
                  <div className="absolute bottom-4 left-4 z-20 space-y-1">
                    <span className="font-orbitron font-bold text-[9px] tracking-wider text-gtr-neon-red uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-orbitron font-bold text-sm text-white uppercase">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-full h-full relative transform group-hover:scale-105 transition-transform duration-500 bg-gtr-gray">
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-orbitron text-white/10 tracking-widest uppercase select-none">
                      [ Media Preview ]
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Lightbox / Overlay Media Enlarger */}
          <AnimatePresence>
            {activeLightbox && lightboxItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveLightbox(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
              >
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-6 right-6 text-white hover:text-gtr-neon-red transition-colors p-2"
                >
                  <X size={24} />
                </button>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-4xl bg-gtr-charcoal border border-white/10 rounded overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.1)]"
                >
                  {/* Large visual placeholder details */}
                  <div className="relative aspect-video w-full bg-gtr-gray flex flex-col items-center justify-center">
                    <ImageIcon size={48} className="text-gtr-neon-red animate-pulse mb-3" />
                    <span className="font-orbitron font-black text-xl text-white uppercase tracking-wider">
                      {lightboxItem.title}
                    </span>
                    <span className="font-orbitron font-bold text-xs text-gtr-neon-red uppercase tracking-widest mt-1">
                      {lightboxItem.category} Arena media
                    </span>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>
      <Footer />
    </>
  );
}
