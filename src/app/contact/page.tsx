"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, Mail, MapPin, Send } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function ContactPage() {
  const cafeAddress =
    "703 C-1, Brahmand Phase 4, opposite Orchids International School, Brahmand, Azad Nagar, Thane, Maharashtra 400607";
  const encodedCafeAddress = encodeURIComponent(`Gamers Tech Republic, ${cafeAddress}`);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedCafeAddress}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodedCafeAddress}&output=embed`;

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
              Contact <span className="text-gtr-neon-red text-glow">The Cafe</span>
            </h1>
            <div className="w-16 h-[2px] bg-gtr-neon-red mx-auto shadow-[0_0_8px_#ff0000]" />
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              At Gamers Tech Republic
            </p>
            <p className="text-gtr-off-white text-sm sm:text-base font-light">
              Connect with Mission Control, partner sponsorship team, custom PC specialists, or apply for open career roles at Brahmand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Map Details */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-gtr-charcoal border border-white/5 rounded-lg p-6 lg:p-8 space-y-6">
                <h3 className="font-orbitron font-black text-xl text-white uppercase tracking-tight border-l-2 border-gtr-neon-red pl-3">
                  Contact &amp; Official Socials
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://www.instagram.com/gamerstechrepublic" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded border border-white/5 bg-black/40 p-4 text-gtr-off-white transition hover:border-gtr-neon-red/30 hover:text-white">
                    <FaInstagram className="text-gtr-neon-red" size={20} />
                    <span><strong className="block text-xs text-white">Cafe Instagram</strong><span className="text-[10px]">@gamerstechrepublic</span></span>
                  </a>
                  <a href="https://www.instagram.com/gtrpcbuilds?igsh=OXByam1janU2a2M1" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded border border-white/5 bg-black/40 p-4 text-gtr-off-white transition hover:border-gtr-neon-red/30 hover:text-white">
                    <FaInstagram className="text-gtr-neon-red" size={20} />
                    <span><strong className="block text-xs text-white">PC Builds Instagram</strong><span className="text-[10px]">@gtrpcbuilds</span></span>
                  </a>
                  <a href="https://linktr.ee/gamerstechrepublic" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded border border-white/5 bg-black/40 p-4 text-gtr-off-white transition hover:border-[#43E660]/40 hover:text-white">
                    <SiLinktree className="text-[#43E660]" size={20} />
                    <span><strong className="block text-xs text-white">Linktree</strong><span className="text-[10px]">All official links</span></span>
                  </a>
                  <a href="https://wa.me/919920426377" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded border border-white/5 bg-black/40 p-4 text-gtr-off-white transition hover:border-gtr-neon-red/30 hover:text-white">
                    <FaWhatsapp className="text-[#25D366]" size={20} />
                    <span><strong className="block text-xs text-white">WhatsApp / Contact</strong><span className="text-[10px]">+91 99204 26377</span></span>
                  </a>
                  <a href="mailto:gamerstechrepublic@gmail.com" className="flex items-center gap-3 rounded border border-white/5 bg-black/40 p-4 text-gtr-off-white transition hover:border-gtr-neon-red/30 hover:text-white">
                    <Mail className="text-gtr-neon-red" size={20} />
                    <span><strong className="block text-xs text-white">Email</strong><span className="text-[10px]">gamerstechrepublic@gmail.com</span></span>
                  </a>
                </div>
              </div>

              {/* Google Maps location */}
              <div className="bg-gtr-charcoal border border-white/5 rounded-lg p-6 lg:p-8 space-y-4">
                <h3 className="font-orbitron font-black text-xl text-white uppercase tracking-tight border-l-2 border-gtr-neon-red pl-3">
                  Location Map
                </h3>
                <div className="aspect-video overflow-hidden rounded border border-white/10 bg-black/60">
                  <iframe
                    src={googleMapsEmbedUrl}
                    title="Gamers Tech Republic location on Google Maps"
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-start gap-3 rounded border border-white/5 bg-black/40 p-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-gtr-neon-red" />
                  <div>
                    <strong className="font-orbitron text-xs uppercase text-white">Gamers Tech Republic</strong>
                    <p className="mt-1 text-[11px] leading-relaxed text-gtr-off-white">{cafeAddress}</p>
                  </div>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-no-page-transition="true"
                  className="flex w-full items-center justify-center gap-2 rounded bg-gtr-neon-red px-4 py-3 font-orbitron text-xs font-bold uppercase tracking-wider text-white transition hover:shadow-[0_0_20px_rgba(255,0,0,0.45)]"
                >
                  Open in Google Maps <ExternalLink size={14} />
                </a>
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
                    <option value="pcbuild">Enquire About a Custom PC Build</option>
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
