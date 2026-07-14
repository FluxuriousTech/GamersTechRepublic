"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FALLBACK_PC_BUILDS, type PCBuild } from "@/data/fallback";

const CATEGORIES = [
  { id: "all", label: "All Builds" },
  { id: "under-1l", label: "Under 1 Lakh" },
  { id: "1l-2l", label: "1L to 2L" },
  { id: "2l-4l", label: "2L to 4L" },
  { id: "4l-6l", label: "4L to 6L" },
  { id: "6l-plus", label: "6L+" },
];

const PC_BUILD_VIDEOS = ["2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4", "7.mp4"];

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  city: "",
  zipCode: "",
  budget: "1l-2l",
  purpose: "",
  brands: "",
  notes: "",
};

const getPriceBracket = (category: PCBuild["priceCategory"]) =>
  CATEGORIES.find((item) => item.id === category)?.label ?? category;

export default function PCBuildsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeHero, setActiveHero] = useState(0);
  const [selectedBuild, setSelectedBuild] = useState<PCBuild | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const filteredBuilds = FALLBACK_PC_BUILDS
    .filter((build) => activeCategory === "all" || build.priceCategory === activeCategory)
    .sort((a, b) => b.price - a.price);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormSubmitted(true);
    window.setTimeout(() => {
      setFormData(EMPTY_FORM);
      setFormSubmitted(false);
    }, 4000);
  };

  const enquireAboutBuild = (build: PCBuild) => {
    setSelectedBuild(null);
    setFormData((current) => ({
      ...current,
      notes: `Enquiry for pre-configured build: ${build.name} (₹${build.price.toLocaleString("en-IN")})`,
      budget: build.priceCategory,
    }));
    window.setTimeout(() => document.getElementById("custom-build-enquiry")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pb-24 pt-32 text-white selection:bg-gtr-neon-red selection:text-white">
        <div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[600px] rounded-full bg-gtr-neon-red/5 blur-[180px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="relative mb-16 overflow-hidden rounded-xl border border-white/10 bg-gtr-charcoal">
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[21/9]">
              <video key={PC_BUILD_VIDEOS[activeHero]} src={`/pc-build-carousel/${PC_BUILD_VIDEOS[activeHero]}`} className="h-full w-full object-cover" autoPlay muted playsInline preload="metadata" onEnded={() => setActiveHero((current) => (current + 1) % PC_BUILD_VIDEOS.length)} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/30" />
              <div className="pointer-events-none absolute bottom-10 left-6 sm:bottom-12 sm:left-12">
                <span className="font-orbitron text-[10px] font-bold uppercase tracking-[0.25em] text-gtr-neon-red">Built by GamersTechRepublic</span>
                <h1 className="mt-2 font-orbitron text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">Custom PC <span className="text-gtr-neon-red text-glow">Builds</span></h1>
              </div>
              <button type="button" onClick={() => setActiveHero((current) => (current - 1 + PC_BUILD_VIDEOS.length) % PC_BUILD_VIDEOS.length)} className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:border-gtr-neon-red hover:bg-gtr-neon-red/20" aria-label="Previous PC build video"><ChevronLeft size={22} /></button>
              <button type="button" onClick={() => setActiveHero((current) => (current + 1) % PC_BUILD_VIDEOS.length)} className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:border-gtr-neon-red hover:bg-gtr-neon-red/20" aria-label="Next PC build video"><ChevronRight size={22} /></button>
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {PC_BUILD_VIDEOS.map((video, index) => <button key={video} type="button" onClick={() => setActiveHero(index)} aria-label={`Show PC build video ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === activeHero ? "w-9 bg-gtr-neon-red" : "w-4 bg-white/40 hover:bg-white/70"}`} />)}
              </div>
            </div>
          </section>

          <header className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <span className="font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-gtr-neon-red">Dream Station Configurator</span>
            <h2 className="font-orbitron text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">Choose Your <span className="text-gtr-neon-red text-glow">Build</span></h2>
            <div className="mx-auto h-[2px] w-16 bg-gtr-neon-red shadow-[0_0_8px_#ff0000]" />
            <p className="text-sm font-light text-gtr-off-white sm:text-base">Choose a pre-configured battle rig or enquire about a custom workstation tailored to your budget, location, and exact specifications.</p>
            <a href="https://www.instagram.com/gtrpcbuilds?igsh=OXByam1janU2a2M1" target="_blank" rel="noreferrer" className="inline-block text-xs font-bold text-white underline decoration-gtr-neon-red decoration-2 underline-offset-4">Follow @gtrpcbuilds</a>
          </header>

          <section className="mb-24 space-y-8">
            <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-6">
              {CATEGORIES.map((category) => (
                <button key={category.id} type="button" onClick={() => setActiveCategory(category.id)} className={`rounded border px-4 py-2.5 font-orbitron text-[10px] font-bold uppercase tracking-wider transition ${activeCategory === category.id ? "border-gtr-neon-red bg-gtr-neon-red text-white shadow-[0_0_10px_rgba(255,0,0,0.3)]" : "border-white/5 bg-gtr-charcoal text-gtr-off-white hover:text-white"}`}>
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
              <AnimatePresence mode="popLayout">
                {filteredBuilds.map((build, index) => {
                  const isFirstOfFinalPair = filteredBuilds.length % 3 === 2 && index === filteredBuilds.length - 2;
                  const isOnlyCard = filteredBuilds.length === 1;
                  return (
                    <motion.article
                      key={build._id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      onClick={() => setSelectedBuild(build)}
                      className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-white/5 bg-gtr-charcoal p-6 transition hover:border-gtr-neon-red/35 lg:col-span-2 ${isFirstOfFinalPair ? "lg:col-start-2" : ""} ${isOnlyCard ? "lg:col-start-3" : ""}`}
                    >
                      <div className="space-y-4">
                        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded border border-white/5 bg-black/40">
                          {build.image ? <Image src={build.image} alt={build.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="absolute inset-0 grid place-items-center font-orbitron text-[10px] uppercase tracking-widest text-white/20">Build Preview</div>}
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <h2 className="font-orbitron text-base font-black uppercase text-white transition group-hover:text-gtr-neon-red">{build.name}</h2>
                          <span className="shrink-0 font-orbitron text-sm font-black text-gtr-neon-red">₹{build.price.toLocaleString("en-IN")}</span>
                        </div>
                        <div className="grid grid-cols-1 gap-3 text-xs">
                          <div className="rounded border border-white/5 bg-black/30 p-3">
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-gtr-neon-red">Price Bracket</span>
                            <span className="mt-1 block font-semibold text-white">{getPriceBracket(build.priceCategory)}</span>
                          </div>
                          <div className="rounded border border-white/5 bg-black/30 p-3">
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-gtr-neon-red">Purpose</span>
                            <span className="mt-1 block leading-relaxed text-gtr-off-white">{build.usage}</span>
                          </div>
                        </div>
                      </div>
                      <button type="button" onClick={(event) => { event.stopPropagation(); enquireAboutBuild(build); }} className="mt-8 w-full rounded border border-gtr-neon-red/30 bg-gtr-neon-red/10 py-3 font-orbitron text-[10px] font-bold uppercase tracking-widest text-white transition hover:border-gtr-neon-red hover:bg-gtr-neon-red">Enquire About This Build</button>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>

            {filteredBuilds.length === 0 && <div className="rounded border border-white/5 bg-gtr-charcoal py-12 text-center text-sm text-gtr-off-white">No builds found in this category. Use the enquiry form below for your custom specifications.</div>}
          </section>

          <section id="custom-build-enquiry" className="mx-auto max-w-4xl rounded-xl border border-white/5 bg-gtr-charcoal p-6 lg:p-10">
            <div className="mb-8 text-center">
              <span className="font-orbitron text-[10px] font-bold uppercase tracking-wider text-gtr-neon-red">Bespoke Rig Form</span>
              <h2 className="mt-2 font-orbitron text-2xl font-black uppercase tracking-tight text-white">Custom Build Enquiry</h2>
            </div>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name"><input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-input" /></Field>
              <Field label="Phone Number"><input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input" /></Field>
              <Field label="Email Address"><input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-input" /></Field>
              <Field label="City"><input required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="form-input" /></Field>
              <Field label="ZIP / Postal Code"><input required inputMode="numeric" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} className="form-input" /></Field>
              <Field label="Budget Category"><select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="form-input"><option value="under-1l">Under 1 Lakh</option><option value="1l-2l">1L to 2L</option><option value="2l-4l">2L to 4L</option><option value="4l-6l">4L to 6L</option><option value="6l-plus">6L+</option></select></Field>
              <Field label="Purpose" wide><textarea required rows={3} placeholder="Tell us what you will use the PC for" value={formData.purpose} onChange={(e) => setFormData({ ...formData, purpose: e.target.value })} className="form-input resize-none" /></Field>
              <Field label="Preferred Brands (Optional)" wide><input placeholder="e.g. ASUS ROG, Intel, AMD" value={formData.brands} onChange={(e) => setFormData({ ...formData, brands: e.target.value })} className="form-input" /></Field>
              <Field label="Notes / Custom Requirements" wide><textarea rows={4} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="form-input resize-none" /></Field>
              <button type="submit" className="rounded bg-gtr-neon-red py-4 font-orbitron text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_15px_rgba(255,0,0,0.3)] transition hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] sm:col-span-2">Submit Enquiry</button>
            </form>
            {formSubmitted && <div className="mt-5 rounded border border-green-500/30 bg-green-500/5 p-3 text-center text-xs text-green-500">Enquiry submitted successfully! Our hardware specialist will contact you shortly.</div>}
          </section>
        </div>
      </main>
      <Footer />

      <AnimatePresence>
        {selectedBuild && (
          <motion.div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedBuild(null)}>
            <motion.div initial={{ opacity: 0, y: 25, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.97 }} onClick={(event) => event.stopPropagation()} className="relative grid max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl border border-white/10 bg-gtr-charcoal lg:grid-cols-2">
              <button type="button" onClick={() => setSelectedBuild(null)} className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/70 text-white transition hover:border-gtr-neon-red" aria-label="Close build details"><X size={18} /></button>
              <div className="relative min-h-[320px] bg-black lg:min-h-[560px]">
                {selectedBuild.image ? <Image src={selectedBuild.image} alt={selectedBuild.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /> : <div className="absolute inset-0 grid place-items-center font-orbitron text-xs uppercase tracking-widest text-white/20">Build image coming soon</div>}
              </div>
              <div className="flex flex-col justify-center p-7 lg:p-10">
                <span className="font-orbitron text-xs font-bold uppercase tracking-widest text-gtr-neon-red">₹{selectedBuild.price.toLocaleString("en-IN")}</span>
                <h2 className="mt-3 font-orbitron text-3xl font-black uppercase text-white">{selectedBuild.name}</h2>
                <div className="mt-7 space-y-3">
                  <div className="rounded border border-white/5 bg-black/30 p-4">
                    <strong className="block text-[10px] uppercase tracking-wider text-gtr-neon-red">Price Bracket</strong>
                    <span className="mt-1 block text-sm font-semibold text-white">{getPriceBracket(selectedBuild.priceCategory)}</span>
                  </div>
                  <div className="rounded border border-white/5 bg-black/30 p-4">
                    <strong className="block text-[10px] uppercase tracking-wider text-gtr-neon-red">Purpose</strong>
                    <span className="mt-1 block text-sm leading-relaxed text-gtr-off-white">{selectedBuild.usage}</span>
                  </div>
                </div>
                <button type="button" onClick={() => enquireAboutBuild(selectedBuild)} className="mt-8 rounded bg-gtr-neon-red py-4 font-orbitron text-xs font-bold uppercase tracking-widest text-white">Enquire About This Build</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Field({ label, wide = false, children }: { label: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={`space-y-1.5 ${wide ? "sm:col-span-2" : ""}`}><span className="block text-[10px] font-bold uppercase tracking-wider text-gtr-off-white">{label}</span>{children}</label>;
}
