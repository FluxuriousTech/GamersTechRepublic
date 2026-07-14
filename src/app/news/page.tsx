"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, Calendar, User, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { FALLBACK_NEWS } from "@/data/fallback";

const CATEGORIES = ["All", "CS2", "Valorant", "Sim Racing", "PC Hardware", "Community Updates", "Product Launches"] as const;

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");

  const featuredStory = FALLBACK_NEWS.find((n) => n.featured) || FALLBACK_NEWS[0];
  const trendingNews = FALLBACK_NEWS.filter((n) => n.trending && n._id !== featuredStory._id);

  const filteredNews = FALLBACK_NEWS.filter((article) => {
    // Exclude featured story from main list to avoid duplication
    if (article._id === featuredStory._id && activeCategory === "All" && searchTerm === "") {
      return false;
    }
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-gtr-neon-red selection:text-white">
        
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gtr-neon-red/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-orbitron font-bold text-xs tracking-[0.2em] text-gtr-neon-red uppercase">
              GamersTechRepublic Chronicles
            </span>
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              News & <span className="text-gtr-neon-red text-glow">Updates</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Get the latest coverage on local esports tournaments, PC hardware upgrades, simulation racing events, and brand releases.
            </p>
          </div>

          {/* Featured Story Showcase (Only visible when no search/filter active) */}
          {searchTerm === "" && activeCategory === "All" && featuredStory && (
            <div className="mb-24">
              <h2 className="font-orbitron font-black text-xl text-white uppercase tracking-wider border-l-2 border-gtr-neon-red pl-3 mb-8">
                Featured Story
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gtr-charcoal border border-white/5 rounded-lg overflow-hidden p-6 lg:p-8 relative">
                
                {/* Visual Category Label */}
                <div className="absolute top-4 right-4 bg-gtr-neon-red text-white font-orbitron font-black text-[9px] tracking-wider uppercase px-3 py-1 shadow-[0_0_10px_rgba(255,0,0,0.3)]">
                  {featuredStory.category}
                </div>

                {/* Left Side: Graphic Placeholder */}
                <div className="lg:col-span-6 flex justify-center items-center relative aspect-video bg-gtr-gray rounded border border-white/5 overflow-hidden">
                  <span className="font-orbitron font-bold text-xs text-white/25 uppercase tracking-widest">[ Featured Image ]</span>
                </div>

                {/* Right Side: details */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="font-orbitron font-bold text-[10px] tracking-wider text-gtr-neon-red uppercase">
                      Featured Release
                    </span>
                    <h3 className="font-orbitron font-black text-2xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
                      {featuredStory.title}
                    </h3>
                    <p className="text-sm text-gtr-off-white font-light leading-relaxed">
                      {featuredStory.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4 text-xs text-gtr-off-white">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {new Date(featuredStory.publishedAt).toLocaleDateString("en-IN")}
                      </span>
                    </div>
                    <Link
                      href={`/news/${featuredStory.slug.current}`}
                      className="inline-flex items-center gap-2 font-orbitron font-bold text-xs tracking-wider uppercase text-gtr-neon-red hover:text-white transition-colors group"
                    >
                      Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Main Grid: Filters & Search Left, Articles Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar: Controls & Trending */}
            <div className="lg:col-span-4 space-y-10">
              
              {/* Search */}
              <div className="bg-gtr-charcoal border border-white/5 rounded p-6 space-y-4">
                <h3 className="font-orbitron font-bold text-xs tracking-widest text-white uppercase border-l-2 border-gtr-neon-red pl-3">
                  Search
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gtr-off-white" size={16} />
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-gtr-neon-red/70"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gtr-charcoal border border-white/5 rounded p-6 space-y-4">
                <h3 className="font-orbitron font-bold text-xs tracking-widest text-white uppercase border-l-2 border-gtr-neon-red pl-3">
                  Categories
                </h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`text-left text-xs font-semibold uppercase tracking-wider py-2 px-3 rounded border transition-colors ${
                        activeCategory === category
                          ? "bg-gtr-neon-red border-gtr-neon-red text-white"
                          : "bg-black/40 border-white/5 text-gtr-off-white hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending News */}
              {trendingNews.length > 0 && (
                <div className="bg-gtr-charcoal border border-white/5 rounded p-6 space-y-4">
                  <h3 className="font-orbitron font-bold text-xs tracking-widest text-white uppercase border-l-2 border-gtr-neon-red pl-3">
                    Trending Stories
                  </h3>
                  <div className="space-y-4">
                    {trendingNews.map((article) => (
                      <Link
                        href={`/news/${article.slug.current}`}
                        key={article._id}
                        className="block group space-y-1"
                      >
                        <span className="font-orbitron font-bold text-[9px] tracking-wider text-gtr-neon-red uppercase">
                          {article.category}
                        </span>
                        <h4 className="font-orbitron font-bold text-xs text-white group-hover:text-gtr-neon-red transition-colors leading-snug">
                          {article.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Side: Articles Listing */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="font-orbitron font-black text-xl text-white uppercase tracking-wider border-l-2 border-gtr-neon-red pl-3 mb-8">
                {searchTerm || activeCategory !== "All" ? "Search Results" : "Latest Articles"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence>
                  {filteredNews.map((article) => (
                    <motion.div
                      key={article._id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-gtr-charcoal border border-white/5 rounded p-6 flex flex-col justify-between hover:border-gtr-neon-red/25 transition-colors group relative overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <span className="font-orbitron font-bold text-[9px] tracking-wider text-gtr-neon-red border border-gtr-neon-red/40 px-2 py-0.5 rounded bg-gtr-neon-red/5 uppercase">
                            {article.category}
                          </span>
                          <span className="text-[10px] text-gtr-off-white">
                            {new Date(article.publishedAt).toLocaleDateString("en-IN")}
                          </span>
                        </div>
                        <h3 className="font-orbitron font-bold text-base text-white group-hover:text-gtr-neon-red transition-colors uppercase leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gtr-off-white font-light leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="mt-8 pt-4 border-t border-white/5 text-right">
                        <Link
                          href={`/news/${article.slug.current}`}
                          className="inline-flex items-center gap-1.5 font-orbitron font-bold text-[10px] tracking-wider uppercase text-white hover:text-gtr-neon-red transition-colors group"
                        >
                          Read More <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Empty state */}
              {filteredNews.length === 0 && (
                <div className="py-12 text-center text-gtr-off-white text-sm bg-gtr-charcoal border border-white/5 rounded">
                  No articles found matching your criteria.
                </div>
              )}

            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
