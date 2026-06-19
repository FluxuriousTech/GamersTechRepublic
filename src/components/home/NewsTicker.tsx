"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FALLBACK_NEWS } from "@/data/fallback";

export function NewsTicker() {
  // We double the array to allow for smooth looping scroll
  const tickerItems = [...FALLBACK_NEWS, ...FALLBACK_NEWS, ...FALLBACK_NEWS];

  return (
    <div className="relative w-full bg-gtr-charcoal border-y border-white/5 py-4 overflow-hidden z-20">
      {/* Red accent borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gtr-neon-red/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gtr-neon-red/50 to-transparent" />

      {/* Side gradient overlays to fade out content */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-gtr-charcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-gtr-charcoal to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        {/* Ticker Category Label */}
        <div className="bg-gtr-neon-red text-white font-orbitron font-black text-xs tracking-wider uppercase px-4 py-1.5 shrink-0 select-none z-20 ml-4 rounded shadow-[0_0_15px_rgba(255,0,0,0.3)]">
          Live Updates
        </div>

        {/* Scrolling Ticker Box */}
        <div className="w-full overflow-hidden flex items-center">
          <motion.div
            className="flex gap-12 pl-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {tickerItems.map((article, idx) => (
              <Link
                href={`/news/${article.slug.current}`}
                key={`${article._id}-${idx}`}
                className="flex items-center gap-3 group shrink-0"
              >
                <span className="font-orbitron font-bold text-[10px] tracking-wider text-gtr-neon-red uppercase border border-gtr-neon-red/40 px-2 py-0.5 rounded bg-gtr-neon-red/5">
                  {article.category}
                </span>
                <span className="text-sm text-gtr-off-white group-hover:text-white transition-colors duration-300 font-medium font-inter">
                  {article.title}
                </span>
                <span className="text-gtr-neon-red font-orbitron font-bold text-xs select-none">
                  //
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
