"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FALLBACK_TESTIMONIALS } from "@/data/fallback";

export function Testimonials() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gtr-neon-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-orbitron font-bold text-[10px] tracking-[0.2em] text-gtr-neon-red uppercase">
            Community Voices
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Loved By <span className="text-gtr-neon-red">Gamers</span>
          </h2>
          <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
          <p className="text-gtr-off-white text-sm sm:text-base font-light">
            Check out what Thane's competitive gaming community and our build clients have to say about GTR.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FALLBACK_TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gtr-charcoal rounded border border-white/5 p-8 relative overflow-hidden flex flex-col justify-between group hover:border-gtr-neon-red/20 transition-all duration-300"
            >
              {/* Quote icon decoration */}
              <div className="absolute top-4 right-4 text-white/5 group-hover:text-gtr-neon-red/10 transition-colors">
                <Quote size={56} />
              </div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, sIdx) => (
                    <Star key={sIdx} size={14} className="text-gtr-neon-red fill-gtr-neon-red" />
                  ))}
                </div>

                <p className="text-sm text-gtr-off-white leading-relaxed font-light italic">
                  "{item.feedback}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-1">
                <h4 className="font-orbitron font-bold text-sm text-white uppercase">
                  {item.name}
                </h4>
                <span className="text-[10px] text-gtr-neon-red font-semibold uppercase tracking-wider">
                  {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
