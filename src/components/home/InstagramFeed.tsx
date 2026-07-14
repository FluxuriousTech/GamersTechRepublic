"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const CAFE_POSTS = [
  {
    url: "https://www.instagram.com/gamerstechrepublic/reel/DPT222-kvnd/",
    image: "/instagram/cafe-post-1.jpg",
    caption: "Premium gaming PCs without the premium price tag.",
  },
  {
    url: "https://www.instagram.com/gamerstechrepublic/reel/DPJl-EWEl8N/",
    image: "/instagram/cafe-post-2.jpg",
    caption: "What did you do this weekend?",
  },
  {
    url: "https://www.instagram.com/gamerstechrepublic/reel/DPCK9jSDSM6/",
    image: "/instagram/cafe-post-3.jpg",
    caption: "GamersTechRepublic is leveling up once again.",
  },
];

export function InstagramFeed() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gtr-charcoal py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <span className="font-orbitron text-[10px] font-bold uppercase tracking-[0.2em] text-gtr-neon-red">Live From The Arena</span>
          <h2 className="font-orbitron text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">Cafe On <span className="text-glow">Instagram</span></h2>
          <div className="mx-auto h-[2px] w-16 bg-gtr-neon-red shadow-[0_0_8px_#ff0000]" />
          <p className="text-sm font-light text-gtr-off-white sm:text-base">Recent posts from the official GamersTechRepublic Café account.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAFE_POSTS.map((post, index) => (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-black transition hover:border-gtr-neon-red/40"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image src={post.image} alt={post.caption} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-black/55 text-white backdrop-blur transition group-hover:scale-110 group-hover:border-gtr-neon-red group-hover:bg-gtr-neon-red">
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2 flex items-center gap-2 text-gtr-neon-red"><FaInstagram size={16} /><span className="text-[10px] font-bold uppercase tracking-wider">@gamerstechrepublic</span></div>
                  <p className="text-sm font-semibold text-white">{post.caption}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="https://www.instagram.com/gamerstechrepublic" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded border border-gtr-neon-red/40 bg-gtr-neon-red/10 px-6 py-3 font-orbitron text-xs font-bold uppercase tracking-widest text-white transition hover:border-gtr-neon-red hover:bg-gtr-neon-red">
            <FaInstagram size={17} /> View All Cafe Posts
          </a>
        </div>
      </div>
    </section>
  );
}
