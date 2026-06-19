"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

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
                  alt="GTR Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-black text-xl tracking-wider text-white">
                  GTR
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-gtr-off-white uppercase -mt-1">
                  Esports Cafe
                </span>
              </div>
            </Link>
            <p className="text-sm text-gtr-off-white leading-relaxed">
              Thane's ultimate gaming destination. Powered by bleeding-edge hardware, hyper-fast connections, and a passion for competitive esports.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/5 flex items-center justify-center border border-white/5 hover:border-gtr-neon-red hover:text-gtr-neon-red transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/5 flex items-center justify-center border border-white/5 hover:border-gtr-neon-red hover:text-gtr-neon-red transition-all duration-300"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/5 flex items-center justify-center border border-white/5 hover:border-gtr-neon-red hover:text-gtr-neon-red transition-all duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://wa.me/917208409448"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/5 flex items-center justify-center border border-white/5 hover:border-gtr-neon-red hover:text-gtr-neon-red transition-all duration-300"
              >
                <MessageSquare size={18} />
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
                  Competitive Leaderboards
                </Link>
              </li>
              <li>
                <Link href="/player-of-the-month" className="text-sm text-gtr-off-white hover:text-white transition-colors">
                  Player of the Month
                </Link>
              </li>
              <li>
                <Link href="/pc-builds" className="text-sm text-gtr-off-white hover:text-white transition-colors">
                  Custom PC Builds
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gtr-off-white hover:text-white transition-colors">
                  Media Gallery
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
                  Shop 3-4, High Street Mall, Kapurbawdi, Thane, Maharashtra 400607
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gtr-neon-red shrink-0" />
                <span className="text-sm text-gtr-off-white">+91 72084 09448</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gtr-neon-red shrink-0" />
                <span className="text-sm text-gtr-off-white">contact@gamerstech.in</span>
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
                <span className="text-gtr-off-white">Monday - Friday</span>
                <span className="text-white font-medium">10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gtr-off-white">Saturday - Sunday</span>
                <span className="text-white font-medium">09:00 AM - 01:00 AM</span>
              </li>
              <li className="pt-2 text-[11px] text-gtr-neon-red/80 font-medium tracking-wide">
                * Night LAN events require advance VIP slots booking.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gtr-off-white">
            &copy; {new Date().getFullYear()} GamersTech Republic. All rights reserved.
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
