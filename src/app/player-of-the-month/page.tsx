"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Flame, ShieldAlert, Crosshair } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FALLBACK_PLAYER_OF_MONTH } from "@/data/fallback";

export default function PlayerOfMonthPage() {
  const activePOTM = FALLBACK_PLAYER_OF_MONTH.filter((p) => p.featured) || [FALLBACK_PLAYER_OF_MONTH[0]];
  const pastPOTM = FALLBACK_PLAYER_OF_MONTH.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-gtr-neon-red selection:text-white">
        
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gtr-neon-red/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="font-orbitron font-bold text-xs tracking-[0.2em] text-gtr-neon-red uppercase">
              Hall of Excellence
            </span>
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Player of <span className="text-gtr-neon-red text-glow">the Month</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Celebrating the elite performers who dominate our arenas and set the records. Check out this month's featured players and past legends.
            </p>
          </div>

          {/* Active Featured Players Showcase */}
          <div className="space-y-12 mb-24">
            <h2 className="font-orbitron font-black text-xl text-white uppercase tracking-wider border-l-2 border-gtr-neon-red pl-3 mb-8">
              Current Champions
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activePOTM.map((player) => (
                <div
                  key={player._id}
                  className="bg-gtr-charcoal border border-white/5 rounded-lg p-8 relative overflow-hidden flex flex-col justify-between group hover:border-gtr-neon-red/20 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 bg-gtr-neon-red text-white font-orbitron font-black text-[9px] tracking-wider uppercase px-3 py-1 shadow-[0_0_10px_rgba(255,0,0,0.3)]">
                    {player.game}
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs text-gtr-neon-red font-semibold uppercase tracking-wider block font-orbitron">
                        {player.month}
                      </span>
                      <h3 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                        {player.playerName}
                      </h3>
                      <a
                        href={`https://instagram.com/${player.instagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-gtr-off-white hover:text-white transition-colors"
                      >
                        <FaInstagram size={14} className="text-gtr-neon-red" />
                        <span>@{player.instagram}</span>
                      </a>
                    </div>

                    {/* Stats List */}
                    <div className="grid grid-cols-2 gap-4">
                      {player.stats.map((stat, idx) => (
                        <div key={idx} className="bg-black/40 border border-white/5 p-4 rounded text-center">
                          <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider mb-1">
                            {stat.label}
                          </span>
                          <span className="font-orbitron font-black text-lg text-gtr-neon-red text-glow">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gtr-off-white">
                    <span>Arena Rank: <strong className="text-white font-semibold">{player.rank}</strong></span>
                    <span className="flex items-center gap-1 text-gtr-neon-red font-semibold">
                      <Flame size={14} /> Peak Performance
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hall of Fame Timeline */}
          <div className="space-y-12">
            <h2 className="font-orbitron font-black text-xl text-white uppercase tracking-wider border-l-2 border-gtr-neon-red pl-3 mb-12">
              Hall of Fame Timeline
            </h2>

            <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 py-4">
              {pastPOTM.map((player, idx) => (
                <div key={player._id} className="relative pl-8 md:pl-12 group">
                  
                  {/* Timeline bullet tag */}
                  <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-gtr-neon-red ring-4 ring-black shadow-[0_0_8px_#ff0000]" />

                  {/* Left aligned Month Label on desktop */}
                  <div className="hidden md:block absolute left-[-150px] top-1 text-right w-28 font-orbitron font-black text-xs text-gtr-neon-red uppercase tracking-wider">
                    {player.month}
                  </div>

                  {/* Mobile Month Label */}
                  <div className="md:hidden font-orbitron font-black text-xs text-gtr-neon-red uppercase tracking-wider mb-2">
                    {player.month}
                  </div>

                  {/* Timeline Card */}
                  <div className="bg-gtr-charcoal border border-white/5 rounded p-6 max-w-2xl hover:border-white/10 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="font-orbitron font-bold text-[9px] tracking-wider text-gtr-off-white border border-white/10 px-2 py-0.5 rounded uppercase mr-3">
                          {player.game}
                        </span>
                        <span className="font-orbitron font-bold text-lg text-white group-hover:text-gtr-neon-red transition-colors">
                          {player.playerName}
                        </span>
                      </div>
                      <a
                        href={`https://instagram.com/${player.instagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-gtr-off-white hover:text-white transition-colors"
                      >
                        <FaInstagram size={12} />
                        <span>@{player.instagram}</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-black/30 p-2.5 rounded">
                        <span className="text-[9px] text-gtr-off-white block uppercase tracking-wider">KD Ratio</span>
                        <span className="font-orbitron font-bold text-sm text-white">{player.score}</span>
                      </div>
                      {player.stats.slice(0, 2).map((stat, sIdx) => (
                        <div key={sIdx} className="bg-black/30 p-2.5 rounded">
                          <span className="text-[9px] text-gtr-off-white block uppercase tracking-wider">{stat.label}</span>
                          <span className="font-orbitron font-bold text-sm text-white">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
