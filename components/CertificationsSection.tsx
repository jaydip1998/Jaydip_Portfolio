"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, ExternalLink, X, CheckCircle, ShieldCheck, Calendar, Filter } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  image?: string;
  category: string;
  skills: string[];
  date?: string;
  verifyUrl?: string;
  certId?: string;
  isVerified?: boolean;
}

const certifications: Certification[] = [
  {
    id: "gemini-faculty",
    title: "Gemini Certified Faculty",
    issuer: "Google for Education",
    image: "/images/cert-gemini-faculty.jpg",
    category: "Google AI",
    date: "Issued Mar 2026 • Valid thru Mar 2029",
    skills: ["Google AI in Higher Ed", "Gemini AI", "Educational Prompting", "Pedagogical AI"],
    isVerified: true,
  },
  {
    id: "gemini-educator",
    title: "Gemini Certified Educator",
    issuer: "Google for Education",
    image: "/images/cert-gemini-educator.jpg",
    category: "Google AI",
    date: "Issued Mar 2026 • Valid thru Mar 2029",
    skills: ["Google AI in Education", "Gemini AI Integration", "AI Educator Workflows"],
    isVerified: true,
  },
  {
    id: "google-intro-to-ai",
    title: "Introduction to AI",
    issuer: "Google (via Coursera)",
    image: "/images/cert-intro-to-ai.jpg",
    category: "Google AI",
    date: "May 27, 2026",
    verifyUrl: "https://coursera.org/verify/1LRCXX6D05KP",
    skills: ["Artificial Intelligence Fundamentals", "Machine Learning Basics", "AI Ethics", "Google AI"],
    isVerified: true,
  },
  {
    id: "google-maximize-productivity-ai",
    title: "Maximize Productivity With AI Tools",
    issuer: "Google (via Coursera)",
    image: "/images/cert-maximize-productivity-ai.jpg",
    category: "Google AI",
    date: "June 19, 2026",
    verifyUrl: "https://coursera.org/verify/UFKNG6TMPQDL",
    skills: ["AI Productivity Tools", "Google AI Tools", "Workflow Optimization", "Generative AI"],
    isVerified: true,
  },
  {
    id: "ai-literacy-everyone",
    title: "Your Top AI Questions Answered: AI Literacy for Everyone",
    issuer: "LinkedIn Learning",
    image: "/images/cert-ai-literacy.jpg",
    category: "AI Literacy",
    date: "May 02, 2026",
    certId: "86a6d5ddaae3d9fd63fb5a376e70115231726b311fcce89571f03d77d3feff6d",
    skills: ["AI Literacy", "Artificial Intelligence (AI)", "AI Concepts for Teams"],
    isVerified: true,
  },
  {
    id: "gen-ai-microsoft",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    image: "/images/cert-generative-ai.jpg",
    category: "Generative AI",
    date: "2026",
    skills: ["Microsoft Copilot", "Generative AI", "Responsible AI Governance"],
    isVerified: true,
  },
  {
    id: "m365-copilot",
    title: "Learning Microsoft 365 Copilot for Work",
    issuer: "Microsoft & LinkedIn Learning",
    image: "/images/cert-m365-copilot.jpg",
    category: "Productivity AI",
    date: "2026",
    skills: ["Microsoft 365 Copilot", "Prompt Engineering", "Enterprise Productivity"],
    isVerified: true,
  },
  {
    id: "google-educator-l1-l2",
    title: "Google Certified Educator Level 1 & Level 2",
    issuer: "Google for Education",
    image: "/images/cert-google-educator-l1.jpg",
    category: "EdTech & Leadership",
    date: "Verified Credentials",
    skills: ["Google Workspace for Education", "Digital Pedagogy", "Classroom Tech Integration"],
    isVerified: true,
  },
  {
    id: "ethics-gen-ai-pmi",
    title: "Ethics in the Age of Generative AI (PMI & NASBA CPE)",
    issuer: "LinkedIn Learning, PMI & NASBA",
    image: "/images/cert-ethics-ai-pmi.jpg",
    category: "AI Governance",
    date: "Verified Credentials",
    skills: ["Computer Ethics", "Behavioral Ethics", "Responsible AI Deployment"],
    isVerified: true,
  },
];

const categories = ["All", "Google AI", "Generative AI", "AI Literacy", "Productivity AI", "EdTech & Leadership", "AI Governance"];

export default function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; verifyUrl?: string; date?: string } | null>(null);

  const filteredCerts = activeCategory === "All" 
    ? certifications 
    : certifications.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="relative w-full bg-[#050D18] py-28 px-6 md:px-12 lg:px-24">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brandTeal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brandAmber/5 rounded-full blur-3xl pointer-events-none" />

      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brandAmber/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandAmber/10 border border-brandAmber/20 text-brandAmber text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS & ACADEMICS</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight">
            Education & <span className="text-gradient-amber">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg font-light">
            Verified qualifications across Google AI, Generative AI, Microsoft Copilot, and EdTech Leadership, backed by a B.E. in Electronics & Communication.
          </p>
        </motion.div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 glass-panel p-8 md:p-10 rounded-3xl border border-brandTeal/30 relative overflow-hidden bg-gradient-to-br from-brandTeal/15 via-navy-900 to-navy-950 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-brandTeal/20 text-brandTeal border border-brandTeal/30 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-brandTeal/10 text-brandTeal text-xs font-mono font-semibold border border-brandTeal/20">
                  BACHELOR OF ENGINEERING (B.E.)
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mt-2">
                  Electronics & Communication Engineering
                </h3>
                <p className="text-base text-brandAmber font-semibold mt-1">
                  Gujarat Technological University (GTU)
                </p>
                <p className="text-xs text-slate-300 font-mono mt-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brandAmber/80" />
                  <span>Aug 2016 – Sep 2020 • Gujarat, India</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-1 p-4 rounded-2xl bg-navy-950/80 border border-white/10 shrink-0 w-full md:w-auto">
              <span className="text-xs font-mono text-slate-400">ACADEMIC SCORE</span>
              <span className="font-heading text-3xl font-extrabold text-brandTeal-300">CGPA 7.48 / 10</span>
              <span className="text-[11px] text-slate-400">Core: Circuit Design, Embedded Microcontrollers, Signals</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-brandAmber" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-brandAmber text-navy-950 font-bold shadow-lg shadow-brandAmber/20 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-3xl border border-white/10 hover:border-brandAmber/40 transition-all flex flex-col justify-between overflow-hidden group shadow-xl hover:scale-[1.02] bg-navy-900/60"
              >
                {/* Certificate Image Thumbnail */}
                {cert.image && (
                  <div
                    onClick={() => setLightboxImage({ src: cert.image!, title: cert.title, verifyUrl: cert.verifyUrl, date: cert.date })}
                    className="relative w-full h-48 bg-navy-950 cursor-pointer overflow-hidden group/img border-b border-white/10"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs">
                      <ExternalLink className="w-4 h-4 text-brandAmber" />
                      <span>View Full Credential</span>
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-navy-950/85 backdrop-blur-md text-[10px] font-mono text-brandTeal border border-brandTeal/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verified Document</span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-brandAmber/10 border border-brandAmber/20 text-brandAmber text-[11px] font-mono font-medium">
                        {cert.category}
                      </span>
                      {cert.isVerified && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          <CheckCircle className="w-3 h-3" /> Verified
                        </span>
                      )}
                    </div>

                    <h4 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-brandTeal transition-colors line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-300 mb-2">{cert.issuer}</p>

                    {cert.date && (
                      <p className="text-[11px] font-mono text-slate-400 mb-4 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-brandAmber/80" />
                        <span>{cert.date}</span>
                      </p>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-navy-950/80 text-[10px] font-mono text-slate-300 border border-white/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-white/5">
                    {cert.image && (
                      <button
                        onClick={() => setLightboxImage({ src: cert.image!, title: cert.title, verifyUrl: cert.verifyUrl, date: cert.date })}
                        className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-brandAmber/10 border border-white/10 hover:border-brandAmber/30 text-xs font-semibold text-brandAmber transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Inspect</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-brandTeal/10 hover:bg-brandTeal/20 border border-brandTeal/30 text-xs font-semibold text-brandTeal transition-colors flex items-center justify-center gap-1"
                        title="Verify on Coursera"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full glass-panel p-5 rounded-3xl border border-brandTeal/30 shadow-2xl bg-navy-950"
            >
              <div className="flex items-center justify-between p-2 border-b border-white/10 mb-4">
                <div>
                  <h4 className="font-heading font-bold text-white text-base md:text-lg">{lightboxImage.title}</h4>
                  {lightboxImage.date && <p className="text-xs text-slate-400 font-mono mt-0.5">{lightboxImage.date}</p>}
                </div>
                <div className="flex items-center gap-3">
                  {lightboxImage.verifyUrl && (
                    <a
                      href={lightboxImage.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-brandTeal/20 hover:bg-brandTeal/30 text-brandTeal text-xs font-mono flex items-center gap-1.5 border border-brandTeal/30"
                    >
                      <span>Verify Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden bg-black/40">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

