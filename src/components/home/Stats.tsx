"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Clock, Monitor } from "lucide-react";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

function StatItem({ label, value, suffix = "", icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(end / (duration / 16)); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative group p-8 rounded bg-gtr-charcoal border border-white/5 hover:border-gtr-neon-red/30 transition-all duration-500 overflow-hidden"
    >
      {/* Background Red Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gtr-neon-red/5 blur-[30px] rounded-full pointer-events-none group-hover:bg-gtr-neon-red/10 transition-colors duration-500" />
      
      {/* Corner Tech Accent */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gtr-neon-red/30 group-hover:border-gtr-neon-red transition-colors duration-500" />

      <div className="flex flex-col space-y-4">
        <div className="w-12 h-12 rounded bg-gtr-neon-red/5 border border-gtr-neon-red/25 flex items-center justify-center text-gtr-neon-red shadow-[0_0_15px_rgba(255,0,0,0.1)] group-hover:shadow-[0_0_20px_rgba(255,0,0,0.25)] transition-all duration-500">
          {icon}
        </div>
        <div className="space-y-1">
          <span className="font-orbitron font-black text-4xl sm:text-5xl text-white tracking-tight">
            {count.toLocaleString()}{suffix}
          </span>
          <p className="font-inter text-xs font-semibold tracking-wider text-gtr-off-white uppercase">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function CommunityStats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section ref={containerRef} className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-orbitron font-black text-3xl sm:text-4xl text-white uppercase tracking-tight"
          >
            The Battleground <span className="text-gtr-neon-red">By The Numbers</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gtr-off-white text-sm sm:text-base font-light"
          >
            Join Maharashtra's most active and competitive local gaming community.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            label="Registered Players"
            value={5200}
            suffix="+"
            icon={<Users size={20} />}
          />
          <StatItem
            label="Active Members"
            value={1850}
            suffix="+"
            icon={<Award size={20} />}
          />
          <StatItem
            label="Hours Logged"
            value={120000}
            suffix="+"
            icon={<Clock size={20} />}
          />
          <StatItem
            label="Pro Gaming Stations"
            value={85}
            suffix="+"
            icon={<Monitor size={20} />}
          />
        </div>
      </div>
    </section>
  );
}
