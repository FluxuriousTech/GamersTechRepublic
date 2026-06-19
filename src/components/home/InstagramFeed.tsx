"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

const INSTA_POSTS = [
  { id: 1, likes: 245, comments: 18, category: "Arena Setup" },
  { id: 2, likes: 412, comments: 32, category: "Sim Racing Rig" },
  { id: 3, likes: 189, comments: 12, category: "CS2 LAN Tournament" },
  { id: 4, likes: 310, comments: 24, category: "RTX 5090 Showcase" },
  { id: 5, likes: 278, comments: 15, category: "Community Meetup" },
  { id: 6, likes: 520, comments: 45, category: "Custom Liquid Build" },
];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-gtr-charcoal border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
            Social Feed
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Connect On <span className="text-glow">Instagram</span>
          </h2>
          <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
          <p className="text-gtr-off-white text-sm sm:text-base font-light">
            Follow us <a href="https://instagram.com" className="text-white font-semibold hover:text-gtr-neon-red underline decoration-gtr-neon-red decoration-2 underline-offset-4 transition-colors">@GTR_Thane</a> for daily arena news, setups, and clip showcases.
          </p>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTA_POSTS.map((post, idx) => (
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative aspect-square rounded overflow-hidden border border-white/5 bg-gtr-gray group block"
            >
              {/* Overlay hover details */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center space-y-3">
                
                <div className="flex items-center gap-4 text-xs font-bold text-white">
                  <span className="flex items-center gap-1">
                    <Heart size={14} fill="white" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} fill="white" /> {post.comments}
                  </span>
                </div>
              </div>

              {/* Graphic decoration placeholder */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-0 bg-gradient-to-t from-black/80 to-transparent">
                <span className="font-orbitron font-bold text-[9px] tracking-wider text-gtr-neon-red uppercase">
                  {post.category}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
