"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, TrendingUp, TrendingDown, ArrowRight, Shield } from "lucide-react";
import { FALLBACK_LEADERBOARD } from "@/data/fallback";

export function LeaderboardPreview() {
  // Extract CS2 top 3 for preview (or can mix)
  const topPlayers = FALLBACK_LEADERBOARD.filter((p) => p.game === "CS2").slice(0, 3);

  // Reorder for Podium layout: [2nd, 1st, 3rd]
  const podiumData = [
    topPlayers[1], // 2nd Place
    topPlayers[0], // 1st Place
    topPlayers[2], // 3rd Place
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Neon Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
              Championship Rankings
            </span>
            <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Arena <span className="text-gtr-neon-red">Leaderboards</span>
            </h2>
            <div className="w-16 h-[2px] bg-gtr-neon-red shadow-[0_0_8px_#ff0000]" />
          </div>

          <Link
            href="/leaderboards"
            className="flex items-center gap-2 font-orbitron font-bold text-xs tracking-wider uppercase text-white hover:text-gtr-neon-red transition-colors group"
          >
            View Full Leaderboards <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Podium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto mt-12">
          {podiumData.map((player, idx) => {
            if (!player) return null;

            const isFirst = player.rank === 1;
            const isSecond = player.rank === 2;
            const isThird = player.rank === 3;

            return (
              <motion.div
                key={player._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative rounded border transition-all duration-500 overflow-hidden ${
                  isFirst
                    ? "bg-gtr-neon-red/10 border-gtr-neon-red md:h-[450px] p-8 shadow-[0_0_30px_rgba(255,0,0,0.15)] order-1 md:order-2"
                    : isSecond
                    ? "bg-white/5 border-white/10 md:h-[390px] p-6 order-2 md:order-1"
                    : "bg-white/5 border-white/10 md:h-[350px] p-6 order-3"
                }`}
              >
                {/* Visual Rank Tag */}
                <div
                  className={`absolute top-4 right-4 font-orbitron font-black text-lg tracking-wider ${
                    isFirst
                      ? "text-gtr-neon-red"
                      : "text-gtr-off-white"
                  }`}
                >
                  #{player.rank}
                </div>

                {/* Card Content */}
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    {/* Podium Icon */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                        isFirst
                          ? "bg-gtr-neon-red/20 border-gtr-neon-red text-gtr-neon-red shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                          : "bg-white/5 border-white/10 text-white"
                      }`}
                    >
                      <Trophy size={20} />
                    </div>

                    <div className="space-y-1">
                      <span className="font-orbitron font-bold text-[10px] tracking-wider text-gtr-off-white uppercase">
                        {player.game}
                      </span>
                      <h3 className="font-orbitron font-black text-2xl text-white uppercase truncate">
                        {player.playerName}
                      </h3>
                    </div>
                  </div>

                  {/* Player Stats */}
                  <div className="space-y-4 my-8">
                    <div className="flex justify-between border-b border-white/5 pb-2 text-sm">
                      <span className="text-gtr-off-white">Win Rate</span>
                      <span className="font-semibold text-white">{player.winRate}%</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2 text-sm">
                      <span className="text-gtr-off-white">K/D Ratio</span>
                      <span className="font-semibold text-white">{player.kdr.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2 text-sm">
                      <span className="text-gtr-off-white">Accuracy</span>
                      <span className="font-semibold text-gtr-neon-red">{player.statValue}</span>
                    </div>
                  </div>

                  {/* Rank Movement */}
                  <div className="flex items-center gap-2 text-xs">
                    {player.rankMovement === "up" ? (
                      <span className="flex items-center gap-1 text-green-500 font-semibold">
                        <TrendingUp size={14} /> +Rank Up
                      </span>
                    ) : player.rankMovement === "down" ? (
                      <span className="flex items-center gap-1 text-red-500 font-semibold">
                        <TrendingDown size={14} /> -Rank Down
                      </span>
                    ) : (
                      <span className="text-gtr-off-white">Stable</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
