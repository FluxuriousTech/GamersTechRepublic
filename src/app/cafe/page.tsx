"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Monitor, Cpu, MapPin, Clock, Award, Shield, Check } from "lucide-react";
import Image from "next/image";
import { FALLBACK_GALLERY } from "@/data/fallback";

const EQUIPMENT = [
  { category: "Esports Stations", detail: "Ryzen 5 7600, RTX 5060 8GB, 16GB DDR5, 240Hz Esports screen" },
  { category: "Sim Racing Stations", detail: "Fanatec DD2 wheel, loadcell pedals, 4-axis motion rig, triple screen" },
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
            <div className="lg:col-span-8 bg-gtr-charcoal border border-white/5 rounded-lg p-8 space-y-6 flex flex-col justify-between">
              <div>
                <h2 className="font-orbitron font-black text-2xl text-white uppercase tracking-wider mb-4">
                  Arena details & Operations
                </h2>
                <p className="text-gtr-off-white text-sm leading-relaxed font-light">
                  GTR Thane features high-end gaming stations divided into a general esports zone and dedicated direct drive Sim Racing rigs. Built for casual gaming sessions, LAN tournaments, bootcamps, and professional training.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div className="flex gap-3 text-sm">
                  <MapPin className="text-gtr-neon-red shrink-0" size={20} />
                  <div>
                    <strong className="text-white block">Location</strong>
                    <span className="text-gtr-off-white">703, C-1 Phase 4 Brahmand Opposite Orchids International School Azad Nagar Thane West 400607</span>
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

            {/* Pricing & Slots Card */}
            <div className="lg:col-span-4 bg-gtr-neon-red/5 border border-gtr-neon-red/30 rounded-lg p-8 flex flex-col justify-between text-center space-y-6">
              <div className="space-y-4">
                <h3 className="font-orbitron font-black text-xl text-white uppercase tracking-widest text-glow">
                  Cafe Pricing
                </h3>
                <div className="w-16 h-[1px] bg-gtr-neon-red/30 mx-auto" />
                
                <div className="space-y-4 text-left pt-2">
                  <div>
                    <span className="font-orbitron font-bold text-[10px] text-gtr-neon-red uppercase tracking-wider block mb-1">Esports PC Zone</span>
                    <span className="font-bold text-white text-base">₹70 / hour</span>
                    <span className="text-xs text-gtr-off-white block mt-1">* Happy Hours (Working Days 10AM-2PM): <strong className="text-white font-semibold">₹50 / hr</strong></span>
                    <span className="text-xs text-gtr-off-white block mt-0.5">* Happy Hours (Weekends & Holidays 10AM-2PM): <strong className="text-white font-semibold">₹60 / hr</strong></span>
                  </div>
                  <div className="pt-2">
                    <span className="font-orbitron font-bold text-[10px] text-gtr-neon-red uppercase tracking-wider block mb-1">Sim Racing Zone</span>
                    <span className="font-bold text-white text-base">₹150 / hour</span>
                    <span className="text-xs text-gtr-off-white block mt-1">* Direct Drive Wheelbase, loadcell pedals, D-BOX motion rig</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919920426377?text=Hi%20GTR,%20I'd%20like%20to%20ask%20about%20the%20gaming%20cafe%20slots%20and%20pricing."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3.5 rounded bg-gtr-neon-red hover:bg-gtr-neon-red/90 text-white font-orbitron font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]"
              >
                Book Slot via WhatsApp
              </a>
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
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-orbitron text-white/10 uppercase tracking-widest">
                        [ Media Preview ]
                      </div>
                    )}
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
