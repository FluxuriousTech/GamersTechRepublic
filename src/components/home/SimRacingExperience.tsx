"use client";

import { motion } from "framer-motion";
import { Gauge, Milestone, Monitor, Compass, ShieldAlert } from "lucide-react";
import Link from "next/link";

export function SimRacingExperience() {
  return (
    <section className="py-24 bg-gtr-charcoal border-y border-white/5 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Interactive Details */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
                Zero Compromise Realism
              </span>
              <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                Sim Racing <span className="text-glow">Experience</span>
              </h2>
              <div className="w-16 h-[2px] bg-gtr-neon-red shadow-[0_0_8px_#ff0000]" />
            </div>

            <p className="text-gtr-off-white text-sm sm:text-base leading-relaxed font-light">
              Experience G-forces, force feedback, and laser-scanned tracks like never before. Our custom-engineered racing rigs feature high-end hardware calibrated for competitive virtual motorsport.
            </p>

            {/* Hardware highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Gauge className="text-gtr-neon-red shrink-0" size={24} />
                <div>
                  <h4 className="font-orbitron font-bold text-sm text-white uppercase">Direct Drive</h4>
                  <p className="text-xs text-gtr-off-white mt-1">Fanatec DD2 wheelbase with 25Nm torque feedback.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Monitor className="text-gtr-neon-red shrink-0" size={24} />
                <div>
                  <h4 className="font-orbitron font-bold text-sm text-white uppercase">Triple OLED</h4>
                  <p className="text-xs text-gtr-off-white mt-1">Panoramic 3x 32" QD-OLED displays with 180° field of view.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Milestone className="text-gtr-neon-red shrink-0" size={24} />
                <div>
                  <h4 className="font-orbitron font-bold text-sm text-white uppercase">Loadcell Pedals</h4>
                  <p className="text-xs text-gtr-off-white mt-1">Heusinkveld Ultimate+ hydraulic brake and throttle.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Compass className="text-gtr-neon-red shrink-0" size={24} />
                <div>
                  <h4 className="font-orbitron font-bold text-sm text-white uppercase">Motion Actuators</h4>
                  <p className="text-xs text-gtr-off-white mt-1">4-axis D-BOX haptic systems simulating bumps and slip angles.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact?enquiry=partnership"
                className="relative group overflow-hidden px-6 py-3 rounded border border-gtr-neon-red/50 hover:border-gtr-neon-red bg-gtr-neon-red/5 text-white font-orbitron font-bold text-xs tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2"
              >
                Book Racing Slot
              </Link>
            </div>
          </div>

          {/* Right: Triple Monitor Presentation Layout */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[16/9] flex items-center justify-center">
              
              {/* Outer boundary decorative container */}
              <div className="absolute inset-0 border border-white/5 rounded-lg flex items-center justify-center p-6 bg-black/40">
                
                {/* Visual Representation of Triple Monitor Layout */}
                <div className="flex items-center gap-1.5 w-full">
                  {/* Left Screen */}
                  <motion.div
                    initial={{ rotateY: 30, scale: 0.95 }}
                    whileInView={{ rotateY: 20, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 aspect-[4/3] bg-gtr-gray rounded border border-white/10 relative overflow-hidden origin-right"
                  >
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-[10px] font-orbitron font-bold text-white/20 select-none">
                      LEFT VIEW
                    </div>
                  </motion.div>

                  {/* Center Screen */}
                  <motion.div
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-[1.5] aspect-[16/9] bg-gtr-gray rounded border-2 border-gtr-neon-red/50 relative overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.1)] z-10"
                  >
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                      <span className="font-orbitron font-black text-xs text-gtr-neon-red tracking-widest uppercase mb-1">
                        Live Cockpit
                      </span>
                      <span className="font-inter text-[9px] text-gtr-off-white uppercase tracking-wider">
                        Assetto Corsa Competizione
                      </span>
                    </div>
                  </motion.div>

                  {/* Right Screen */}
                  <motion.div
                    initial={{ rotateY: -30, scale: 0.95 }}
                    whileInView={{ rotateY: -20, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 aspect-[4/3] bg-gtr-gray rounded border border-white/10 relative overflow-hidden origin-left"
                  >
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-[10px] font-orbitron font-bold text-white/20 select-none">
                      RIGHT VIEW
                    </div>
                  </motion.div>
                </div>

              </div>

              {/* Glowing ring background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gtr-neon-red/5 blur-[50px] rounded-full -z-10 pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
