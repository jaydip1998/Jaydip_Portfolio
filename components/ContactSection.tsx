"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Copy, Check, Send, Sparkles, ArrowUp, Cpu } from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", schoolOrOrg: "", message: "" });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", schoolOrOrg: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative w-full bg-[#050D18] pt-28 pb-16 px-6 md:px-12 lg:px-24">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brandTeal/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandTeal/10 border border-brandTeal/20 text-brandTeal text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>PARTNERSHIPS & INQUIRIES</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight">
            Let&apos;s Build <span className="text-gradient-dual">Together</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg font-light">
            Whether you are looking to set up AI/Robotics labs in your school district, discuss technical program management roles, or collaborate on hardware hardware line designs.
          </p>
        </motion.div>

        {/* Grid: Contact Cards + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Direct Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-brandTeal/30 transition-all flex items-center justify-between group shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-brandTeal/10 text-brandTeal border border-brandTeal/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase">Direct Email</p>
                  <a
                    href="mailto:makwanajaydip1998@gmail.com"
                    className="font-heading font-semibold text-white text-sm sm:text-base hover:text-brandTeal transition-colors"
                  >
                    makwanajaydip1998@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("makwanajaydip1998@gmail.com", "email")}
                className="p-2.5 rounded-xl bg-navy-800 text-slate-300 hover:text-white border border-white/10 hover:border-brandTeal/30 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-brandAmber/30 transition-all flex items-center justify-between group shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-brandAmber/10 text-brandAmber border border-brandAmber/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase">Phone & WhatsApp</p>
                  <a
                    href="tel:+918780646759"
                    className="font-heading font-semibold text-white text-sm sm:text-base hover:text-brandAmber transition-colors"
                  >
                    +91 87806 46759
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("+91 87806 46759", "phone")}
                className="p-2.5 rounded-xl bg-navy-800 text-slate-300 hover:text-white border border-white/10 hover:border-brandAmber/30 transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-blue-400/30 transition-all flex items-center justify-between group shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-400/20">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase">LinkedIn Profile</p>
                  <a
                    href="https://linkedin.com/in/jaydip-makwana-a40289135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-semibold text-white text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/jaydip-makwana
                  </a>
                </div>
              </div>
              <a
                href="https://linkedin.com/in/jaydip-makwana-a40289135"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-800 text-slate-300 hover:text-white border border-white/10 hover:border-blue-400/30 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase">Location & Base</p>
                <p className="font-heading font-semibold text-white text-sm sm:text-base">
                  Bhavnagar, Gujarat, India
                </p>
                <p className="text-xs text-slate-400 font-mono">Open to Remote & Global Technical Roles</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative shadow-2xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs text-slate-300 font-mono mb-6">
                Fill in your details below to discuss school AI lab implementations or technical program management opportunities.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Principal Sharma / Recruiter"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-brandTeal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-brandTeal transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">School / Institution / Company</label>
                  <input
                    type="text"
                    value={formData.schoolOrOrg}
                    onChange={(e) => setFormData({ ...formData, schoolOrOrg: e.target.value })}
                    placeholder="e.g. EdTech Organization / School Name"
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-brandTeal transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Message / Inquiry Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Jaydip about your robotics lab goals, program scale, or career opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-brandTeal transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brandTeal to-brandAmber text-navy-950 font-heading font-bold text-sm hover:brightness-110 shadow-lg shadow-brandTeal/20 transition-all flex items-center justify-center gap-2"
                >
                  {formStatus === "sending" ? (
                    <span>Dispatching Message...</span>
                  ) : formStatus === "sent" ? (
                    <span className="flex items-center gap-2 text-navy-950">
                      <Check className="w-4 h-4" /> Message Sent Successfully!
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Jaydip</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-brandTeal/10 border border-brandTeal/20 text-brandTeal flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <span>© {new Date().getFullYear()} Jaydip Makwana. AI-RoboFusion Founder & TPM.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
