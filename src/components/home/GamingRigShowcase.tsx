"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, HardDrive, Gamepad2, ArrowRight } from "lucide-react";
import Link from "next/link";

const STATION_TIERS = [
  {
    tier: "Esports Zone",
    specs: {
      cpu: "Ryzen 5 7600",
      gpu: "RTX 5060 8GB",
      ram: "16GB DDR5 Dual Channel",
      monitor: "240Hz 1ms IPS Esports Screen",
      keyboard: "Razer BlackWidow V4",
    },
    price: "₹70 / hr",
    happyHours: [
      "₹50/hr (10AM - 2PM, Working Days)",
      "₹60/hr (10AM - 2PM, Weekends & Public Holidays)"
    ],
    isFeatured: false,
  },
  {
    tier: "Sim Racing Zone",
    specs: {
      cpu: "Fanatec DD2 Direct Drive (25Nm)",
      gpu: "Panoramic Triple 32\" QD-OLED Screens",
      ram: "Heusinkveld Ultimate+ Hydraulic Pedals",
      monitor: "4-axis D-BOX Haptic Motion Rig",
      keyboard: "Assetto Corsa Competizione Calibration",
    },
    price: "₹150 / hr",
    happyHours: null,
    isFeatured: true,
  },
];

export function GamingRigShowcase() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Red ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gtr-neon-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
            Reserve Your Station
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Cafe <span className="text-gtr-neon-red">Booking</span>
          </h2>
          <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
          <p className="text-gtr-off-white text-sm sm:text-base font-light">
            Engineered for elite esports and ultra-smooth graphics rendering. No delays, no performance drops.
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {STATION_TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded border transition-all duration-500 flex flex-col justify-between overflow-hidden group ${
                tier.isFeatured
                  ? "bg-gtr-neon-red/10 border-gtr-neon-red/80 p-8 shadow-[0_0_40px_rgba(255,0,0,0.15)] ring-1 ring-gtr-neon-red/30"
                  : "bg-white/5 border-white/10 p-8 hover:border-white/20"
              }`}
            >
              {/* Corner tech lines for featured card */}
              {tier.isFeatured && (
                <>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gtr-neon-red" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gtr-neon-red" />
                </>
              )}

              {/* Card Title & Pricing */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-orbitron font-black text-lg tracking-wider text-white uppercase">
                    {tier.tier}
                  </span>
                  {tier.isFeatured && (
                    <span className="text-[9px] font-bold tracking-widest text-white bg-gtr-neon-red px-2.5 py-1 rounded uppercase shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                      VIP Elite
                    </span>
                  )}
                </div>

                {/* Specs List */}
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Cpu size={18} className="text-gtr-neon-red shrink-0" />
                    <div>
                      <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider">Processor</span>
                      <span className="text-sm font-semibold text-white">{tier.specs.cpu}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Cpu size={18} className="text-gtr-neon-red shrink-0" />
                    <div>
                      <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider">Graphics / Controls</span>
                      <span className="text-sm font-semibold text-white">{tier.specs.gpu}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <HardDrive size={18} className="text-gtr-neon-red shrink-0" />
                    <div>
                      <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider">Memory / Pedals</span>
                      <span className="text-sm font-semibold text-white">{tier.specs.ram}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Monitor size={18} className="text-gtr-neon-red shrink-0" />
                    <div>
                      <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider">Display / Motion</span>
                      <span className="text-sm font-semibold text-white">{tier.specs.monitor}</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Price & Book slot */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider">Pricing</span>
                  <span className="font-orbitron font-black text-xl text-white">{tier.price}</span>
                  {tier.happyHours && (
                    <div className="mt-2 space-y-1">
                      {tier.happyHours.map((hh, hhIdx) => (
                        <span key={hhIdx} className="text-[10px] text-gtr-neon-red font-medium block">
                          * {hh}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href={`https://wa.me/919920426377?text=Hi%20GamersTechRepublic,%20I'd%20like%20to%20book%20a%20slot%20for%20the%20${encodeURIComponent(tier.tier)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-1.5 font-orbitron font-bold text-xs tracking-wider uppercase transition-all duration-300 px-5 py-3 rounded bg-gtr-neon-red/10 border border-gtr-neon-red/30 ${
                    tier.isFeatured
                      ? "text-white hover:text-gtr-neon-red hover:bg-gtr-neon-red/20"
                      : "text-gtr-neon-red hover:text-white hover:bg-gtr-neon-red"
                  }`}
                >
                  Book Slot <ArrowRight size={14} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
