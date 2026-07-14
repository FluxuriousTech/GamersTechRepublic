"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, HardDrive, Check, ArrowRight } from "lucide-react";
import { FALLBACK_PC_BUILDS } from "@/data/fallback";

export function FeaturedPCBuild() {
  // Pull the flagship build (Apex Titan)
  const build = FALLBACK_PC_BUILDS.find((b) => b.priceCategory === "4l-6l") || FALLBACK_PC_BUILDS[0];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gtr-neon-red/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
              Showcase Rig
            </span>
            <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Featured <span className="text-gtr-neon-red">PC Build</span>
            </h2>
            <div className="w-16 h-[2px] bg-gtr-neon-red shadow-[0_0_8px_#ff0000]" />
          </div>

          <Link
            href="/pc-builds"
            className="flex items-center gap-2 font-orbitron font-bold text-xs tracking-wider uppercase text-white hover:text-gtr-neon-red transition-colors group"
          >
            View All Builds <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Build Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gtr-charcoal rounded border border-white/5 p-8 lg:p-12 relative overflow-hidden">
          
          {/* Cyberpunk corner tag */}
          <div className="absolute top-0 right-0 bg-gtr-neon-red text-white font-orbitron font-black text-[10px] tracking-wider uppercase px-4 py-1.5 shadow-[0_0_12px_rgba(255,0,0,0.3)]">
            Flagship Custom
          </div>

          {/* Left: Graphic representation of PC build */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-square max-w-[350px] bg-black rounded border border-white/10 overflow-hidden flex items-center justify-center group">
              {/* Internal neon wirelines */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gtr-neon-red/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gtr-neon-red/30" />

              {/* Glowing red accent rings */}
              <div className="absolute w-48 h-48 rounded-full border border-gtr-neon-red/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-36 h-36 rounded-full border border-dashed border-gtr-neon-red/25 animate-[spin_20s_linear_infinite]" />
              
              <div className="relative z-10 text-center space-y-4">
                <Cpu size={48} className="text-gtr-neon-red mx-auto animate-pulse" />
                <span className="font-orbitron font-black text-lg text-white block uppercase tracking-wider">
                  {build.name}
                </span>
                <span className="font-orbitron font-black text-2xl text-gtr-neon-red block text-glow">
                  ₹{build.price.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Technical specifications list */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-orbitron font-bold text-xs text-gtr-neon-red tracking-widest uppercase block">
                Specifications Checklist
              </span>
              <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                No-Compromise Performance
              </h3>
            </div>

            <p className="text-sm text-gtr-off-white font-light leading-relaxed">
              Designed for professional esports athletes, creators, and simulation enthusiasts. Powered by a custom dual-radiator liquid cooling loop and high-performance components.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-sm text-gtr-off-white">
                <Check size={16} className="text-gtr-neon-red shrink-0 mt-0.5" />
                <span><strong className="text-white">CPU:</strong> {build.cpu}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gtr-off-white">
                <Check size={16} className="text-gtr-neon-red shrink-0 mt-0.5" />
                <span><strong className="text-white">GPU:</strong> {build.gpu}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gtr-off-white">
                <Check size={16} className="text-gtr-neon-red shrink-0 mt-0.5" />
                <span><strong className="text-white">RAM:</strong> {build.ram}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gtr-off-white">
                <Check size={16} className="text-gtr-neon-red shrink-0 mt-0.5" />
                <span><strong className="text-white">Cooler:</strong> {build.cooler}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gtr-off-white">
                <Check size={16} className="text-gtr-neon-red shrink-0 mt-0.5" />
                <span><strong className="text-white">Storage:</strong> {build.storage}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gtr-off-white">
                <Check size={16} className="text-gtr-neon-red shrink-0 mt-0.5" />
                <span><strong className="text-white">Usage:</strong> {build.usage}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={`/contact?enquiry=pcbuild&build=${build.slug.current}`}
                className="w-full sm:w-auto text-center px-8 py-4 rounded bg-gtr-neon-red text-white font-orbitron font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]"
              >
                Enquire About This Build
              </Link>
              <Link
                href="/pc-builds"
                className="w-full sm:w-auto text-center px-8 py-4 rounded border border-white/10 hover:border-white/20 bg-white/5 text-white font-orbitron font-bold text-xs tracking-widest uppercase transition-colors"
              >
                Configure Custom Build
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
