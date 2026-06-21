"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cpu, HardDrive, ShieldAlert, Check, ArrowRight, Layers } from "lucide-react";
import Image from "next/image";
import { FALLBACK_PC_BUILDS } from "@/data/fallback";

const CATEGORIES = [
  { id: "all", label: "All Builds" },
  { id: "under-1l", label: "Under 1 Lakh" },
  { id: "1l-2l", label: "1L to 2L" },
  { id: "2l-4l", label: "2L to 4L" },
  { id: "4l-6l", label: "4L to 6L" },
  { id: "6l-plus", label: "6L+" },
];

export default function PCBuildsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Custom Build Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "1l-2l",
    purpose: "gaming",
    brands: "",
    notes: "",
  });

  const filteredBuilds = FALLBACK_PC_BUILDS.filter((build) => {
    return activeCategory === "all" || build.priceCategory === activeCategory;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API or mail submit
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        budget: "1l-2l",
        purpose: "gaming",
        brands: "",
        notes: "",
      });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-gtr-neon-red selection:text-white">
        
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gtr-neon-red/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="font-orbitron font-bold text-xs tracking-[0.2em] text-gtr-neon-red uppercase">
              Dream Station Configurator
            </span>
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Custom PC <span className="text-gtr-neon-red text-glow">Builds</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Choose from our pre-configured battle rigs or request a bespoke custom gaming workstation tailored to your exact budget and specifications.
            </p>
          </div>

          {/* Catalog Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            
            {/* Left: Custom Catalog & Categories */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Categories TABS */}
              <div className="flex flex-wrap gap-2 border-b border-white/5 pb-6">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`font-orbitron font-bold text-[10px] tracking-wider uppercase px-4 py-2.5 rounded border transition-colors ${
                      activeCategory === cat.id
                        ? "bg-gtr-neon-red border-gtr-neon-red text-white shadow-[0_0_10px_rgba(255,0,0,0.3)]"
                        : "bg-gtr-charcoal border-white/5 text-gtr-off-white hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Builds Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredBuilds.map((build) => (
                    <motion.div
                      key={build._id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="bg-gtr-charcoal border border-white/5 rounded-lg p-6 flex flex-col justify-between hover:border-gtr-neon-red/25 transition-colors relative overflow-hidden group"
                    >
                      <div className="space-y-4">
                        {/* Image Box */}
                        <div className="relative aspect-[16/10] w-full bg-black/40 rounded overflow-hidden border border-white/5 mb-4">
                          {build.image ? (
                            <Image
                              src={build.image}
                              alt={build.name}
                              fill
                              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-orbitron text-white/20 uppercase tracking-widest">
                              [ Build Preview ]
                            </div>
                          )}
                        </div>

                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-orbitron font-black text-lg text-white uppercase group-hover:text-gtr-neon-red transition-colors">
                            {build.name}
                          </h3>
                          <span className="font-orbitron font-black text-sm text-gtr-neon-red text-glow">
                            ₹{build.price.toLocaleString("en-IN")}
                          </span>
                        </div>

                        {/* Specs */}
                        <ul className="space-y-2.5 text-xs text-gtr-off-white">
                          <li className="flex gap-2">
                            <Cpu size={14} className="text-gtr-neon-red shrink-0 mt-0.5" />
                            <span><strong className="text-white">CPU:</strong> {build.cpu}</span>
                          </li>
                          <li className="flex gap-2">
                            <Cpu size={14} className="text-gtr-neon-red shrink-0 mt-0.5" />
                            <span><strong className="text-white">GPU:</strong> {build.gpu}</span>
                          </li>
                          <li className="flex gap-2">
                            <Cpu size={14} className="text-gtr-neon-red shrink-0 mt-0.5" />
                            <span><strong className="text-white">RAM:</strong> {build.ram}</span>
                          </li>
                          <li className="flex gap-2">
                            <HardDrive size={14} className="text-gtr-neon-red shrink-0 mt-0.5" />
                            <span><strong className="text-white">Cooler:</strong> {build.cooler}</span>
                          </li>
                          <li className="flex gap-2">
                            <HardDrive size={14} className="text-gtr-neon-red shrink-0 mt-0.5" />
                            <span><strong className="text-white">Storage:</strong> {build.storage}</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-8 pt-4 border-t border-white/5">
                        <button
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              notes: `Inquiry for pre-configured build: ${build.name} (₹${build.price.toLocaleString("en-IN")})`,
                              budget: build.priceCategory,
                            }));
                            document.getElementById("custom-build-form")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="w-full text-center py-3 rounded bg-gtr-neon-red/10 border border-gtr-neon-red/30 hover:border-gtr-neon-red hover:bg-gtr-neon-red text-white font-orbitron font-bold text-[10px] tracking-widest uppercase transition-all duration-300"
                        >
                          Request This Build
                        </button>
                      </div>

                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredBuilds.length === 0 && (
                <div className="py-12 text-center text-gtr-off-white text-sm bg-gtr-charcoal border border-white/5 rounded">
                  No builds config found for this price category. Please use the request form to submit your custom specifications.
                </div>
              )}

            </div>

            {/* Right: Custom Build Form */}
            <div id="custom-build-form" className="lg:col-span-4 bg-gtr-charcoal border border-white/5 rounded-lg p-6 lg:p-8 space-y-6">
              <div className="space-y-2">
                <span className="font-orbitron font-bold text-[10px] tracking-wider text-gtr-neon-red uppercase">
                  Bespoke Rig Form
                </span>
                <h3 className="font-orbitron font-black text-xl text-white uppercase tracking-tight">
                  Custom Build Request
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Budget Category</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60 font-semibold"
                  >
                    <option value="under-1l">Under 1 Lakh</option>
                    <option value="1l-2l">1L to 2L</option>
                    <option value="2l-4l">2L to 4L</option>
                    <option value="4l-6l">4L to 6L</option>
                    <option value="6l-plus">6L+</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Purpose</label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60 font-semibold"
                  >
                    <option value="gaming">Pure Competitive Gaming</option>
                    <option value="streaming">Streaming & Content Creation</option>
                    <option value="rendering">3D Rendering & AI Workloads</option>
                    <option value="general">Office/General Workstation</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Preferred Brands (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. ASUS ROG, Intel, Razer"
                    value={formData.brands}
                    onChange={(e) => setFormData({ ...formData, brands: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Notes / Custom Requirements</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-gtr-neon-red text-white font-orbitron font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] flex items-center justify-center gap-2"
                >
                  Submit Request
                </button>
              </form>

              {formSubmitted && (
                <div className="p-3 text-xs text-center border border-green-500/30 bg-green-500/5 text-green-500 rounded">
                  Request registered successfully! Our hardware specialist will call you shortly.
                </div>
              )}
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
