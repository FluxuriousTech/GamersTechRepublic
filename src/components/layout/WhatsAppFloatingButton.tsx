"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href="https://wa.me/919920426377?text=Hi%20GamersTechRepublic,%20I'd%20like%20to%20ask%20about%20the%20gaming%20cafe%20setups%20and%20pricing."
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] border border-white/10 group transition-all duration-300"
      aria-label="WhatsApp QA Chat"
    >
      {/* Premium tooltips */}
      <span className="absolute right-16 bg-black/90 border border-[#25D366]/40 text-white font-orbitron font-bold text-[10px] tracking-wider uppercase px-3.5 py-1.5 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-[0_0_15px_rgba(0,0,0,0.8)]">
        Ask Cafe & Prices
      </span>

      {/* Ripple Rings */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-25 pointer-events-none" />

      <FaWhatsapp size={28} className="text-white transform group-hover:rotate-12 transition-transform duration-300" />
    </motion.a>
  );
}
