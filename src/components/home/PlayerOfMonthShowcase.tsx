"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldAlert, Crosshair, Zap } from "lucide-react";
import { FALLBACK_PLAYER_OF_MONTH } from "@/data/fallback";

const GAME_CATEGORIES = ["Valorant", "CS2", "Sim Racing"] as const;

export function PlayerOfMonthShowcase() {
  const [activeTab, setActiveTab] = useState<typeof GAME_CATEGORIES[number]>("Valorant");

  const activePlayer = FALLBACK_PLAYER_OF_MONTH.find(
    (p) => p.game === activeTab
  ) || FALLBACK_PLAYER_OF_MONTH[0];

  return (
    <section className="py-24 bg-gtr-charcoal border-y border-white/5 relative overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gtr-neon-red/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-left space-y-3">
            <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
              Hall of Fame
            </span>
            <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Player of <span className="text-glow">the Month</span>
            </h2>
            <div className="w-16 h-[2px] bg-gtr-neon-red shadow-[0_0_8px_#ff0000]" />
          </div>

          {/* Custom Navigation Tabs */}
          <div className="flex bg-black p-1 rounded border border-white/5 font-orbitron text-[11px] font-bold tracking-wider uppercase">
            {GAME_CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded transition-colors duration-300 ${
                  activeTab === tab ? "text-white" : "text-gtr-off-white hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-potm-tab"
                    className="absolute inset-0 bg-gtr-neon-red rounded shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Side: Stats and Info */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gtr-neon-red/10 border border-gtr-neon-red/30 flex items-center justify-center text-gtr-neon-red">
                    <Award size={16} />
                  </div>
                  <span className="font-orbitron font-bold text-xs tracking-widest text-gtr-neon-red uppercase">
                    {activePlayer.month} Champion
                  </span>
                </div>
                <h3 className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
                  {activePlayer.playerName}
                </h3>
                <a
                  href={`https://instagram.com/${activePlayer.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gtr-off-white hover:text-white transition-colors group"
                >
                  
                </a>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activePlayer.stats.map((stat, idx) => (
                  <div key={idx} className="bg-black/40 border border-white/5 p-4 rounded text-center relative overflow-hidden group">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gtr-neon-red/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block mb-2 font-inter">
                      {stat.label}
                    </span>
                    <span className="font-orbitron font-black text-lg sm:text-xl text-gtr-neon-red text-glow">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bio Details */}
              <div className="p-6 rounded bg-black/40 border-l-2 border-gtr-neon-red text-sm text-gtr-off-white leading-relaxed">
                Ranked <strong className="text-white">{activePlayer.rank}</strong>. Viper_Thane dominated Kapurbawdi LAN Cup qualifiers scoring the highest average combat score of the tournament.
              </div>
            </div>

            {/* Right Side: Visual Artwork Wrapper */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <div className="relative w-full aspect-[4/5] max-w-[380px] bg-black rounded border border-white/10 overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                {/* Neon outlines */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gtr-neon-red/60 to-transparent animate-pulse" />
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-gtr-neon-red/30 to-transparent" />

                {/* Cyberpunk Silhoutte Placeholder or Render */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/40 to-transparent z-10">
                  <span className="font-orbitron font-black text-xs text-gtr-neon-red uppercase tracking-widest block mb-1">
                    {activePlayer.game}
                  </span>
                  <span className="font-orbitron font-black text-2xl text-white uppercase tracking-tight">
                    {activePlayer.playerName}
                  </span>
                </div>

                {/* Glowing red accent ring in background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-dashed border-gtr-neon-red/10 animate-[spin_40s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-gtr-neon-red/5 blur-[40px]" />

                {/* Crosshair graphic decoration */}
                <div className="absolute top-8 right-8 text-white/10">
                  <Crosshair size={120} />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
