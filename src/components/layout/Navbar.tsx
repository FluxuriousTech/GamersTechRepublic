"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Cafe", href: "/cafe" },
  { name: "Leaderboards", href: "/leaderboards" },
  { name: "News", href: "/news" },
  { name: "PC Builds", href: "/pc-builds" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-md border border-gtr-neon-red/30 group-hover:border-gtr-neon-red transition-colors duration-300">
              <Image
                src="/GTR Logo png.png"
                alt="GTR Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-lg tracking-wider text-white group-hover:text-gtr-neon-red transition-colors duration-300">
                GTR
              </span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-gtr-off-white uppercase -mt-1">
                Esports Cafe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-gtr-neon-red font-semibold"
                        : "text-gtr-off-white hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gtr-neon-red shadow-[0_0_8px_#ff0000]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="/pc-builds"
              className="relative group overflow-hidden px-5 py-2.5 rounded border border-gtr-neon-red/50 hover:border-gtr-neon-red bg-gtr-neon-red/5 text-white font-orbitron font-semibold text-xs tracking-wider uppercase transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Configure PC <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gtr-neon-red opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gtr-neon-red transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-base font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "text-gtr-neon-red" : "text-gtr-off-white hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/pc-builds"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded border border-gtr-neon-red bg-gtr-neon-red/10 text-white font-orbitron font-bold text-sm tracking-widest uppercase"
              >
                Configure PC <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
