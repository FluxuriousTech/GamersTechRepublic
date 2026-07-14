"use client";

import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

export function LeaderboardPreview() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <Trophy className="mb-5 text-gtr-neon-red" size={34} />
        <span className="font-orbitron text-[10px] font-bold uppercase tracking-[0.25em] text-gtr-neon-red">Championship Rankings</span>
        <h2 className="mt-3 font-orbitron text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          Arena <span className="text-gtr-neon-red">Leaderboards</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm font-light text-gtr-off-white">See the latest rankings across CS2, Valorant, and sim racing.</p>
        <Link href="/leaderboards" className="group mt-8 inline-flex items-center gap-2 rounded bg-gtr-neon-red px-7 py-4 font-orbitron text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(255,0,0,0.35)] transition hover:shadow-[0_0_30px_rgba(255,0,0,0.55)]">
          View Leaderboards <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
