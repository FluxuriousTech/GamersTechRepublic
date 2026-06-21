"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Monitor, Cpu, Trophy, Clock } from "lucide-react";
import { FALLBACK_GALLERY } from "@/data/fallback";

export function CafeExperience() {
  const images = FALLBACK_GALLERY.slice(0, 4);

  return (
    <section className="py-24 bg-gtr-charcoal border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Interactive Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
                The Battle Station
              </span>
              <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                Premium Cafe <span className="text-glow">Experience</span>
              </h2>
              <div className="w-16 h-[2px] bg-gtr-neon-red shadow-[0_0_8px_#ff0000]" />
            </div>

            <p className="text-gtr-off-white text-sm sm:text-base leading-relaxed font-light">
              Step into Thane’s premier gaming arena, featuring dual-zone professional setups, high-refresh-rate esports monitors, and dedicated sim-racing cockpits designed for ultimate performance.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gtr-neon-red">
                  <Monitor size={18} />
                </div>
                <div>
                  <span className="text-xs text-gtr-off-white block font-medium">Screens</span>
                  <span className="text-sm font-bold text-white font-orbitron">240Hz Esports</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gtr-neon-red">
                  <Cpu size={18} />
                </div>
                <div>
                  <span className="text-xs text-gtr-off-white block font-medium">Graphics</span>
                  <span className="text-sm font-bold text-white font-orbitron">RTX 5060 Esports</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gtr-neon-red">
                  <Trophy size={18} />
                </div>
                <div>
                  <span className="text-xs text-gtr-off-white block font-medium">Zones</span>
                  <span className="text-sm font-bold text-white font-orbitron">Esports & Racing</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gtr-neon-red">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-xs text-gtr-off-white block font-medium">Fibers</span>
                  <span className="text-sm font-bold text-white font-orbitron">1 Gbps Dual ISP</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/cafe"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-gtr-neon-red text-white font-orbitron font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] group"
              >
                More Cafe Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Premium Media Showcase */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {images.map((item, idx) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative aspect-video rounded overflow-hidden border border-white/5 group ${
                    idx === 0 || idx === 3 ? "col-span-2 aspect-[21/9]" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Decorative corner tag */}
                  <div className="absolute bottom-3 left-3 z-20 font-orbitron font-bold text-[9px] tracking-wider text-white bg-black/80 px-2 py-0.5 rounded border border-white/10 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </div>

                  <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 bg-gtr-gray">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-white/20 font-orbitron">
                        [ {item.title} ]
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
