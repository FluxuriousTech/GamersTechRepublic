"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, Trophy, ChevronRight, TrendingUp, TrendingDown, RefreshCw, Award, Flame, Crosshair } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FALLBACK_LEADERBOARD, FALLBACK_PLAYER_OF_MONTH } from "@/data/fallback";

const GAMES = ["All", "CS2", "Valorant", "Sim Racing"] as const;

export default function LeaderboardsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGame, setActiveGame] = useState<typeof GAMES[number]>("All");
  const [tab, setTab] = useState<"rankings" | "timeline">("rankings");

  const filteredLeaderboard = FALLBACK_LEADERBOARD.filter((player) => {
    const matchesSearch = player.playerName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGame = activeGame === "All" || player.game === activeGame;
    return matchesSearch && matchesGame;
  });

  const activePOTM = FALLBACK_PLAYER_OF_MONTH.filter((p) => p.featured) || [FALLBACK_PLAYER_OF_MONTH[0]];
  const pastPOTM = FALLBACK_PLAYER_OF_MONTH.filter((p) => !p.featured);

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
              Hall of Achievements & Stars
            </span>
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Leaderboards & <span className="text-gtr-neon-red text-glow">POTM</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Compete, log hours, and secure your spot among Thane's elite. Rankings refresh weekly based on tournament results, arena stats, and monthly MVPs.
            </p>
          </div>

          {/* Active Featured Players Showcase */}
          <div className="space-y-8 mb-16 bg-gtr-charcoal/30 border border-white/5 p-6 lg:p-8 rounded-lg">
            <div className="space-y-2 mb-6">
              <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
                Hall of Excellence
              </span>
              <h2 className="font-orbitron font-black text-xl text-white uppercase tracking-wider border-l-2 border-gtr-neon-red pl-3">
                Current Players of the Month
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePOTM.map((player) => (
                <div
                  key={player._id}
                  className="bg-gtr-charcoal border border-white/5 rounded-lg p-6 relative overflow-hidden flex flex-col justify-between group hover:border-gtr-neon-red/20 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 bg-gtr-neon-red text-white font-orbitron font-black text-[9px] tracking-wider uppercase px-3 py-1 shadow-[0_0_10px_rgba(255,0,0,0.3)]">
                    {player.game}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-gtr-neon-red font-semibold uppercase tracking-wider block font-orbitron">
                        {player.month}
                      </span>
                      <h3 className="font-orbitron font-black text-xl text-white uppercase truncate">
                        {player.playerName}
                      </h3>
                      <a
                        href={`https://instagram.com/${player.instagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] text-gtr-off-white hover:text-white transition-colors"
                      >
                        <FaInstagram size={12} className="text-gtr-neon-red" />
                        <span>@{player.instagram}</span>
                      </a>
                    </div>

                    {/* Stats List */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {player.stats.map((stat, idx) => (
                        <div key={idx} className="bg-black/40 border border-white/5 p-2.5 rounded text-center">
                          <span className="text-[9px] text-gtr-off-white block uppercase tracking-wider mb-0.5">
                            {stat.label}
                          </span>
                          <span className="font-orbitron font-bold text-sm text-gtr-neon-red text-glow">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gtr-off-white">
                    <span>Arena Rank: <strong className="text-white font-semibold">{player.rank}</strong></span>
                    <span className="flex items-center gap-1 text-gtr-neon-red font-semibold">
                      <Flame size={12} /> Peak Performance
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Controls - Tab Selector */}
          <div className="flex justify-center mb-10">
            <div className="flex bg-gtr-charcoal border border-white/5 p-1 rounded font-orbitron text-xs font-bold tracking-wider uppercase shadow-lg">
              <button
                onClick={() => setTab("rankings")}
                className={`px-8 py-3 rounded transition-all duration-300 ${
                  tab === "rankings"
                    ? "bg-gtr-neon-red text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                    : "text-gtr-off-white hover:text-white"
                }`}
              >
                Weekly Rankings
              </button>
              <button
                onClick={() => setTab("timeline")}
                className={`px-8 py-3 rounded transition-all duration-300 ${
                  tab === "timeline"
                    ? "bg-gtr-neon-red text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                    : "text-gtr-off-white hover:text-white"
                }`}
              >
                POTM Hall of Fame
              </button>
            </div>
          </div>

          {/* Tab 1: Rankings Table */}
          {tab === "rankings" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gtr-charcoal border border-white/5 p-6 rounded">
                
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
                            <td className="py-5 px-6">
                              <span className="font-orbitron font-bold text-white group-hover:text-gtr-neon-red transition-colors">
                                {player.playerName}
                              </span>
                            </td>
                            <td className="py-5 px-6">
                              <span className="font-orbitron font-bold text-[10px] tracking-wider uppercase text-gtr-off-white border border-white/10 px-2.5 py-0.5 rounded bg-black/40">
                                {player.game}
                              </span>
                            </td>
                            <td className="py-5 px-6">
                              <span className="font-semibold text-white">{player.score}</span>
                            </td>
                            <td className="py-5 px-6">
                              <span className="text-sm text-gtr-off-white">{player.winRate}%</span>
                            </td>
                            <td className="py-5 px-6">
                              <span className="text-sm text-gtr-off-white">
                                {player.kdr > 0 ? player.kdr.toFixed(2) : "N/A"}
                              </span>
                            </td>
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
                {filteredLeaderboard.length === 0 && (
                  <div className="py-12 text-center text-gtr-off-white text-sm">
                    No rankings found matching your filter criteria.
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Tab 2: Timeline */}
          {tab === "timeline" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 py-4">
                {pastPOTM.map((player) => (
                  <div key={player._id} className="relative pl-8 md:pl-12 group">
                    <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-gtr-neon-red ring-4 ring-black shadow-[0_0_8px_#ff0000]" />
                    <div className="hidden md:block absolute left-[-150px] top-1 text-right w-28 font-orbitron font-black text-xs text-gtr-neon-red uppercase tracking-wider">
                      {player.month}
                    </div>
                    <div className="md:hidden font-orbitron font-black text-xs text-gtr-neon-red uppercase tracking-wider mb-2">
                      {player.month}
                    </div>
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
            </motion.div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
