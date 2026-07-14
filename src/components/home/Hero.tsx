"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Cpu, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const canvasEl = canvas;

    // Particle class
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset();
        // Distribute initially
        this.y = Math.random() * canvasEl.height;
      }

      reset() {
        this.x = Math.random() * canvasEl.width;
        this.y = canvasEl.height + 10;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = -(Math.random() * 1 + 0.5);
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y < -10) {
          this.reset();
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
        context.shadowBlur = 10;
        context.shadowColor = "#ff0000";
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0; // reset
      }
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => new Particle());

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-20">
      {/* Canvas Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      />

      {/* Cyberpunk Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gtr-neon-red/10 blur-[180px] rounded-full pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gtr-neon-red/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Corner Cyberpunk Accents */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-gtr-neon-red/30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-12 right-8 w-16 h-16 border-b-2 border-r-2 border-gtr-neon-red/30 pointer-events-none hidden md:block" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 mt-10">
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gtr-neon-red/30 bg-gtr-neon-red/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-gtr-neon-red animate-pulse shadow-[0_0_8px_#ff0000]" />
          <span className="font-orbitron text-[10px] font-bold tracking-[0.2em] text-white uppercase">
            Thane&apos;s Premier Gaming Arena
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48"
        >
          <Image
            src="/gamerstechrepublic-hero-logo.png"
            alt="GamersTechRepublic"
            fill
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            priority
            className="object-contain drop-shadow-[0_0_35px_rgba(255,0,0,0.35)]"
          />
        </motion.div>

        {/* Headlines */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-orbitron font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-tight uppercase"
          >
            Gaming For The People, <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gtr-neon-red via-red-500 to-gtr-crimson text-glow">
              By The People
            </span>
          </motion.h1>

        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/cafe"
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded bg-gtr-neon-red text-white font-orbitron font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_35px_rgba(255,0,0,0.6)] flex items-center justify-center gap-2"
          >
            Explore Cafe <Play size={16} fill="white" className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/pc-builds"
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded border border-white/20 hover:border-gtr-neon-red/80 bg-white/5 hover:bg-gtr-neon-red/5 text-white font-orbitron font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            Build Your Dream PC <Cpu size={16} className="text-gtr-off-white group-hover:text-gtr-neon-red transition-colors" />
          </Link>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gtr-neon-red to-transparent animate-bounce" />
      </div>
    </section>
  );
}
