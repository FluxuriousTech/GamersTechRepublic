"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, Trophy, ChevronRight, TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { FALLBACK_LEADERBOARD } from "@/data/fallback";

const GAMES = ["All", "CS2", "Valorant", "Sim Racing"] as const;

export default function LeaderboardsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGame, setActiveGame] = useState<typeof GAMES[number]>("All");

  const filteredLeaderboard = FALLBACK_LEADERBOARD.filter((player) => {
    const matchesSearch = player.playerName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGame = activeGame === "All" || player.game === activeGame;
    return matchesSearch && matchesGame;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-gtr-neon-red selection:text-white">
        
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gtr-neon-red/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-orbitron font-bold text-xs tracking-[0.2em] text-gtr-neon-red uppercase">
              Hall of Achievements
            </span>
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Arena <span className="text-gtr-neon-red text-glow">Leaderboards</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Compete, log hours, and secure your spot among Thane's elite. Rankings refresh weekly based on tournament results and arena stats.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-gtr-charcoal border border-white/5 p-6 rounded">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gtr-off-white" size={18} />
              <input
                type="text"
                placeholder="Search Player Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-gtr-neon-red/70 transition-colors"
              />
            </div>

            {/* Game Filters */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {GAMES.map((game) => (
                <button
                  key={game}
                  onClick={() => setActiveGame(game)}
                  className={`font-orbitron font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded border transition-all duration-300 ${
                    activeGame === game
                      ? "bg-gtr-neon-red border-gtr-neon-red text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                      : "bg-black/60 border-white/10 text-gtr-off-white hover:text-white"
                  }`}
                >
                  {game}
                </button>
              ))}
            </div>

          </div>

          {/* Leaderboard Table */}
          <div className="bg-gtr-charcoal border border-white/5 rounded overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                
                <thead>
                  <tr className="border-b border-white/5 bg-black/40 font-orbitron font-bold text-[11px] tracking-widest text-gtr-off-white uppercase">
                    <th className="py-4 px-6">Rank</th>
                    <th className="py-4 px-6">Player</th>
                    <th className="py-4 px-6">Game</th>
                    <th className="py-4 px-6">Score/Rating</th>
                    <th className="py-4 px-6">Win Rate</th>
                    <th className="py-4 px-6">K/D Ratio</th>
                    <th className="py-4 px-6 text-right">Stat Highlight</th>
                  </tr>
                </thead>

                <tbody>
                  <AnimatePresence>
                    {filteredLeaderboard.map((player) => (
                      <motion.tr
                        key={player._id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                      >
                        {/* Rank */}
                        <td className="py-5 px-6 font-orbitron font-black text-sm">
                          <span
                            className={`${
                              player.rank === 1
                                ? "text-gtr-neon-red text-glow"
                                : player.rank === 2
                                ? "text-white/80"
                                : player.rank === 3
                                ? "text-white/60"
                                : "text-gtr-off-white"
                            }`}
                          >
                            #{player.rank}
                          </span>
                        </td>

                        {/* Player */}
                        <td className="py-5 px-6">
                          <span className="font-orbitron font-bold text-white group-hover:text-gtr-neon-red transition-colors">
                            {player.playerName}
                          </span>
                        </td>

                        {/* Game */}
                        <td className="py-5 px-6">
                          <span className="font-orbitron font-bold text-[10px] tracking-wider uppercase text-gtr-off-white border border-white/10 px-2.5 py-0.5 rounded bg-black/40">
                            {player.game}
                          </span>
                        </td>

                        {/* Score */}
                        <td className="py-5 px-6">
                          <span className="font-semibold text-white">{player.score}</span>
                        </td>

                        {/* Win Rate */}
                        <td className="py-5 px-6">
                          <span className="text-sm text-gtr-off-white">{player.winRate}%</span>
                        </td>

                        {/* K/D */}
                        <td className="py-5 px-6">
                          <span className="text-sm text-gtr-off-white">
                            {player.kdr > 0 ? player.kdr.toFixed(2) : "N/A"}
                          </span>
                        </td>

                        {/* Stat Value */}
                        <td className="py-5 px-6 text-right">
                          <span className="font-orbitron font-bold text-xs text-gtr-neon-red text-glow">
                            {player.statValue}
                          </span>
                        </td>

                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>

              </table>
            </div>

            {/* Empty State */}
            {filteredLeaderboard.length === 0 && (
              <div className="py-12 text-center text-gtr-off-white text-sm">
                No rankings found matching your filter criteria.
              </div>
            )}

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
