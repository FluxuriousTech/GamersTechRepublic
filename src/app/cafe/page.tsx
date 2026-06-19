"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Monitor, Cpu, MapPin, Clock, Award, Shield, Check } from "lucide-react";
import Image from "next/image";
import { FALLBACK_GALLERY } from "@/data/fallback";

const EQUIPMENT = [
  { category: "VIP Stations", detail: "Intel Ultra 9, RTX 5090, 64GB DDR5, 4K OLED 240Hz screen" },
  { category: "Pro Stations", detail: "Ryzen 7800X3D, RTX 5070 Ti, 32GB DDR5, 360Hz Esports screen" },
  { category: "Sim Stations", detail: "Fanatec DD2 wheel, loadcell pedals, 4-axis motion rig, triple screen" },
  { category: "Peripherals", detail: "Razer mechanical keyboards, Logitech G Pro superlight mice, Pro headsets" },
  { category: "Furniture", detail: "AutoFull mechanical ergonomic chairs, anti-fatigue layouts" },
  { category: "Connectivity", detail: "1 Gbps dual fiber ISP connection with local caching and backup routes" },
];

export default function CafePage() {
  const images = FALLBACK_GALLERY;

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
              The Ultimate Arena
            </span>
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              The Cafe <span className="text-gtr-neon-red text-glow">Experience</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Explore Maharashtra's leading gaming cafe. High capacity setups, premium zones, operating hours, location details, and comprehensive technical equipment checklists.
            </p>
          </div>

          {/* Section 1: Overview, Hours & Location */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
            {/* Overview */}
            <div className="lg:col-span-8 bg-gtr-charcoal border border-white/5 rounded-lg p-8 space-y-6">
              <h2 className="font-orbitron font-black text-2xl text-white uppercase tracking-wider">
                Arena details & Operations
              </h2>
              <p className="text-gtr-off-white text-sm leading-relaxed font-light">
                GTR Thane features over 85+ high-end gaming stations divided into general esports zones, private team rooms, and dedicated direct drive Sim Racing rigs. Built for casual gaming sessions, LAN tournaments, bootcamps, and professional training.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3 text-sm">
                  <MapPin className="text-gtr-neon-red shrink-0" size={20} />
                  <div>
                    <strong className="text-white block">Location</strong>
                    <span className="text-gtr-off-white">Shop 3-4, High Street Mall, Kapurbawdi, Thane, Maharashtra</span>
                  </div>
                </div>
                <div className="flex gap-3 text-sm">
                  <Clock className="text-gtr-neon-red shrink-0" size={20} />
                  <div>
                    <strong className="text-white block">Operating Hours</strong>
                    <span className="text-gtr-off-white">Weekdays: 10AM - 11PM <br />Weekends: 9AM - 1AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Capacity Stats Card */}
            <div className="lg:col-span-4 bg-gtr-neon-red/5 border border-gtr-neon-red/30 rounded-lg p-8 flex flex-col justify-center text-center space-y-4">
              <span className="font-orbitron font-black text-6xl text-white text-glow">85+</span>
              <h3 className="font-orbitron font-bold text-xs tracking-widest text-gtr-neon-red uppercase">
                Active Gaming Stations
              </h3>
              <p className="text-xs text-gtr-off-white max-w-xs mx-auto leading-relaxed">
                High-capacity LAN layout capable of hosting massive multiplayer lobbies and esports tournament qualifiers.
              </p>
            </div>
          </div>

          {/* Section 2: Equipment Checklist */}
          <div className="mb-24">
            <h2 className="font-orbitron font-black text-2xl text-white uppercase tracking-wider border-l-2 border-gtr-neon-red pl-3 mb-12">
              Technical Equipment Checklist
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EQUIPMENT.map((item, idx) => (
                <div key={idx} className="bg-gtr-charcoal border border-white/5 rounded p-6 hover:border-gtr-neon-red/25 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded bg-gtr-neon-red/10 flex items-center justify-center text-gtr-neon-red">
                      <Check size={16} />
                    </div>
                    <h3 className="font-orbitron font-bold text-sm text-white uppercase">
                      {item.category}
                    </h3>
                  </div>
                  <p className="text-xs text-gtr-off-white leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Gallery Grid */}
          <div>
            <h2 className="font-orbitron font-black text-2xl text-white uppercase tracking-wider border-l-2 border-gtr-neon-red pl-3 mb-12">
              Arena Media Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((item) => (
                <div key={item._id} className="relative aspect-video rounded overflow-hidden border border-white/5 bg-gtr-charcoal group">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                  
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="font-orbitron font-bold text-[9px] tracking-wider text-gtr-neon-red uppercase block mb-1">
                      {item.category}
                    </span>
                    <span className="font-orbitron font-bold text-sm text-white uppercase">
                      {item.title}
                    </span>
                  </div>

                  <div className="w-full h-full relative transform group-hover:scale-105 transition-transform duration-500 bg-gtr-gray">
                    {/* Placeholder content text */}
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-orbitron text-white/10 uppercase tracking-widest">
                      [ Media Preview ]
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
