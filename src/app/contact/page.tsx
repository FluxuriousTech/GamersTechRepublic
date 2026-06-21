"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageSquare, Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "general",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        enquiryType: "general",
        message: "",
      });
      setSubmitted(false);
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
              Establish Connection
            </span>
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Contact <span className="text-gtr-neon-red text-glow">The Arena</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Connect with our arena booking desks, partner sponsorship team, custom PC specialists, or apply for open career roles at Brahmand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Map Details */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-gtr-charcoal border border-white/5 rounded-lg p-6 lg:p-8 space-y-6">
                <h3 className="font-orbitron font-black text-xl text-white uppercase tracking-tight border-l-2 border-gtr-neon-red pl-3">
                  Direct Lines
                </h3>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/919920426377?text=Hi%20GTR,%20I'd%20like%20to%20ask%20about%20the%20gaming%20cafe%20slots%20and%20pricing."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded bg-black/40 border border-white/5 hover:border-gtr-neon-red/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded bg-gtr-neon-red/10 flex items-center justify-center text-gtr-neon-red">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider">WhatsApp chat</span>
                      <span className="text-sm font-bold text-white group-hover:text-gtr-neon-red transition-colors">+91 99204 26377</span>
                    </div>
                  </a>

                  <a
                    href="mailto:gamerstechrepublic@gmail.com"
                    className="flex items-center gap-4 p-4 rounded bg-black/40 border border-white/5 hover:border-gtr-neon-red/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded bg-gtr-neon-red/10 flex items-center justify-center text-gtr-neon-red">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider">Email desk</span>
                      <span className="text-sm font-bold text-white group-hover:text-gtr-neon-red transition-colors">gamerstechrepublic@gmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded bg-black/40 border border-white/5">
                    <div className="w-10 h-10 rounded bg-gtr-neon-red/10 flex items-center justify-center text-gtr-neon-red">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-gtr-off-white block uppercase tracking-wider">Contact number</span>
                      <span className="text-sm font-bold text-white">+91 99204 26377</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maps Placeholder Graphic */}
              <div className="bg-gtr-charcoal border border-white/5 rounded-lg p-6 lg:p-8 space-y-4">
                <h3 className="font-orbitron font-black text-xl text-white uppercase tracking-tight border-l-2 border-gtr-neon-red pl-3">
                  Location Map
                </h3>
                <div className="aspect-video bg-black/60 rounded border border-white/10 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">
                  <MapPin size={24} className="text-gtr-neon-red animate-bounce mb-2" />
                  <span className="font-orbitron font-bold text-sm text-white uppercase">
                    Brahmand Azad Nagar
                  </span>
                  <span className="text-[11px] text-gtr-off-white max-w-xs mt-1">
                    703, C-1 Phase 4 Brahmand Opposite Orchids International School Azad Nagar Thane West 400607
                  </span>
                  {/* Neon frame lines */}
                  <div className="absolute inset-2 border border-dashed border-white/5 rounded pointer-events-none group-hover:border-gtr-neon-red/25 transition-colors" />
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-gtr-charcoal border border-white/5 rounded-lg p-6 lg:p-8 space-y-6">
              <h3 className="font-orbitron font-black text-xl text-white uppercase tracking-tight border-l-2 border-gtr-neon-red pl-3">
                Send Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Enquiry Type</label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60 font-semibold"
                  >
                    <option value="general">General Contact / booking slots</option>
                    <option value="pcbuild">Request Custom PC Build</option>
                    <option value="partnership">Sponsorship / Partner enquiry</option>
                    <option value="career">Career Application</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gtr-off-white uppercase tracking-wider block">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-gtr-neon-red/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded bg-gtr-neon-red text-white font-orbitron font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] flex items-center justify-center gap-2"
                >
                  Send Enquiry <Send size={14} />
                </button>
              </form>

              {submitted && (
                <div className="p-3 text-xs text-center border border-green-500/30 bg-green-500/5 text-green-500 rounded">
                  Enquiry submitted successfully! Our help desk will contact you within 24 hours.
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
