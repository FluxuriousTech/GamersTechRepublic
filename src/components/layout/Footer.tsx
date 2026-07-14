"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative bg-gtr-black border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gtr-neon-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-md border border-gtr-neon-red/30">
                <Image
                  src="/GTR Logo png.png"
                  alt="GamersTechRepublic Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-black text-xl tracking-wider text-white">
                  GamersTechRepublic
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-gtr-off-white uppercase -mt-1">
                  Esports Cafe
                </span>
              </div>
            </Link>
            <p className="text-sm text-gtr-off-white leading-relaxed">
              Thane's ultimate gaming destination. Powered by bleeding-edge hardware, hyper-fast connections, and a passion for competitive esports.
            </p>
            {/* Official Social Links */}
            <div className="space-y-2">
              <a
                href="https://instagram.com/gamerstechrepublic"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded border border-white/5 bg-white/5 p-3 text-gtr-off-white transition hover:border-gtr-neon-red/40 hover:text-white"
                aria-label="Cafe Instagram @gamerstechrepublic"
              >
                <FaInstagram size={18} className="shrink-0 text-gtr-neon-red" />
                <span><strong className="block text-[10px] uppercase tracking-wider text-white">Cafe Instagram</strong><span className="text-[11px]">@gamerstechrepublic</span></span>
              </a>
              <a
                href="https://www.instagram.com/gtrpcbuilds?igsh=OXByam1janU2a2M1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded border border-white/5 bg-white/5 p-3 text-gtr-off-white transition hover:border-gtr-neon-red/40 hover:text-white"
                aria-label="PC Builds Instagram @gtrpcbuilds"
              >
                <FaInstagram size={18} className="shrink-0 text-gtr-neon-red" />
                <span><strong className="block text-[10px] uppercase tracking-wider text-white">PC Builds Instagram</strong><span className="text-[11px]">@gtrpcbuilds</span></span>
              </a>
              <a
                href="https://linktr.ee/gamerstechrepublic"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded border border-white/5 bg-white/5 p-3 text-gtr-off-white transition hover:border-gtr-neon-red/40 hover:text-white"
                aria-label="Linktree Socials"
              >
                <SiLinktree size={18} className="shrink-0 text-[#43E660]" />
                <span><strong className="block text-[10px] uppercase tracking-wider text-white">All Social Links</strong><span className="text-[11px]">GamersTechRepublic Linktree</span></span>
              </a>
              <a
                href="https://wa.me/919920426377?text=Hi%20GamersTechRepublic,%20I'd%20like%20to%20ask%20about%20the%20gaming%20cafe%20slots%20and%20pricing."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded border border-white/5 bg-white/5 p-3 text-gtr-off-white transition hover:border-[#25D366]/50 hover:text-white"
                aria-label="WhatsApp Cafe Chat"
              >
                <FaWhatsapp size={19} className="shrink-0 text-[#25D366]" />
                <span><strong className="block text-[10px] uppercase tracking-wider text-white">WhatsApp</strong><span className="text-[11px]">Cafe bookings & enquiries</span></span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-xs font-bold tracking-widest text-white uppercase mb-6 border-l-2 border-gtr-neon-red pl-3">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/cafe" className="text-sm text-gtr-off-white hover:text-white transition-colors">
                  The Cafe Experience
                </Link>
              </li>
              <li>
                <Link href="/leaderboards" className="text-sm text-gtr-off-white hover:text-white transition-colors">
                  Leaderboards & POTM
                </Link>
              </li>
              <li>
                <Link href="/pc-builds" className="text-sm text-gtr-off-white hover:text-white transition-colors">
                  Custom PC Builds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-orbitron text-xs font-bold tracking-widest text-white uppercase mb-6 border-l-2 border-gtr-neon-red pl-3">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gtr-neon-red shrink-0 mt-0.5" />
                <span className="text-sm text-gtr-off-white leading-relaxed">
                  703, C-1 Phase 4 Brahmand Opposite Orchids International School Azad Nagar Thane West 400607
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gtr-neon-red shrink-0" />
                <span className="text-sm text-gtr-off-white">+91 99204 26377</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gtr-neon-red shrink-0" />
                <span className="text-sm text-gtr-off-white">gamerstechrepublic@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Cafe Hours */}
          <div>
            <h4 className="font-orbitron text-xs font-bold tracking-widest text-white uppercase mb-6 border-l-2 border-gtr-neon-red pl-3">
              Operating Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-gtr-off-white">Monday - Sunday</span>
                <span className="text-white font-medium">10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gtr-off-white">
            &copy; {new Date().getFullYear()} GamersTechRepublic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gtr-off-white hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gtr-off-white hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
