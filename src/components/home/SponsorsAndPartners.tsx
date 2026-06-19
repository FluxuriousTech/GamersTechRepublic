"use client";

import { motion } from "framer-motion";
import { FALLBACK_SPONSORS } from "@/data/fallback";

export function SponsorsAndPartners() {
  return (
    <section className="py-16 bg-gtr-charcoal border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple Label */}
        <span className="font-orbitron font-bold text-[9px] tracking-[0.3em] text-gtr-off-white uppercase text-center block mb-8">
          Official Gear Partners & Sponsors
        </span>

        {/* Sponsor Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {FALLBACK_SPONSORS.map((sponsor, idx) => (
            <motion.a
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noreferrer"
              key={sponsor._id}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="font-orbitron font-black text-lg sm:text-xl tracking-widest text-white uppercase text-center hover:text-gtr-neon-red transition-all"
            >
              // {sponsor.name}
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
