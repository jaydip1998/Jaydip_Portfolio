"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Eye, LayoutGrid, Target, Sparkles, Layers } from "lucide-react";

interface SkillCategory {
  id: string;
  label: string;
  icon: any;
  color: string;
  skills: { name: string; tag: string; level?: string }[];
}

const categories: SkillCategory[] = [
  {
    id: "engineering",
    label: "Engineering & Hardware",
    icon: Cpu,
    color: "from-brandTeal/30 to-brandTeal-600/10 border-brandTeal/40 text-brandTeal",
    skills: [
      { name: "Python", tag: "Software", level: "Advanced" },
      { name: "C", tag: "Firmware", level: "Proficient" },
      { name: "C++", tag: "Firmware", level: "Proficient" },
      { name: "Embedded C", tag: "Firmware", level: "Advanced" },
      { name: "Arduino", tag: "Microcontrollers", level: "Expert" },
      { name: "ESP32", tag: "Microcontrollers", level: "Expert" },
      { name: "ESP8266", tag: "Microcontrollers", level: "Advanced" },
      { name: "Raspberry Pi", tag: "SBC", level: "Advanced" },
      { name: "Sensor Integration", tag: "Hardware", level: "Expert" },
      { name: "PCB Prototyping", tag: "Hardware", level: "Advanced" },
      { name: "MQTT", tag: "Protocols", level: "Proficient" },
      { name: "Cloud Connectivity", tag: "IoT", level: "Advanced" },
    ],
  },
  {
    id: "ai",
    label: "AI & Computer Vision",
    icon: Eye,
    color: "from-brandAmber/30 to-brandAmber-600/10 border-brandAmber/40 text-brandAmber",
    skills: [
      { name: "OpenCV", tag: "Vision", level: "Advanced" },
      { name: "MediaPipe", tag: "Gesture Tracking", level: "Advanced" },
      { name: "Machine Learning Fundamentals", tag: "AI", level: "Proficient" },
      { name: "Generative AI", tag: "LLMs / Prompting", level: "Advanced" },
      { name: "Edge AI", tag: "Embedded ML", level: "Advanced" },
      { name: "Conversational AI Voice Agents", tag: "Voice Tech", level: "Advanced" },
      { name: "AI FAQ Chatbots", tag: "Conversational", level: "Advanced" },
    ],
  },
  {
    id: "program",
    label: "Program & Tools",
    icon: LayoutGrid,
    color: "from-blue-500/30 to-cyan-500/10 border-blue-400/40 text-blue-400",
    skills: [
      { name: "Program Management", tag: "Leadership", level: "Expert" },
      { name: "Stakeholder Management", tag: "Leadership", level: "Expert" },
      { name: "Partner Management", tag: "Partnerships", level: "Expert" },
      { name: "KPI Reporting & Metrics", tag: "Operations", level: "Expert" },
      { name: "Google Workspace for Education", tag: "EdTech Tools", level: "Certified L1/L2" },
      { name: "Website Development (HTML/CSS/JS)", tag: "Web", level: "Proficient" },
    ],
  },
  {
    id: "competencies",
    label: "Core Competencies",
    icon: Target,
    color: "from-emerald-500/30 to-teal-500/10 border-emerald-400/40 text-emerald-400",
    skills: [
      { name: "Technical Program Management", tag: "Strategy", level: "Core Pillar" },
      { name: "AI & Robotics Product Development", tag: "Hardware + Software", level: "Core Pillar" },
      { name: "Embedded Systems & IoT", tag: "Electronics", level: "Core Pillar" },
      { name: "Education Partnerships", tag: "EdTech", level: "Core Pillar" },
      { name: "Curriculum Development (NEP 2020)", tag: "Pedagogy", level: "Core Pillar" },
      { name: "Workshop Facilitation", tag: "Training", level: "Core Pillar" },
      { name: "Strategic Planning", tag: "Leadership", level: "Core Pillar" },
      { name: "Full-Stack Prototyping", tag: "Engineering", level: "Core Pillar" },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories = activeTab === "all"
    ? categories
    : categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative w-full bg-[#050D18] py-28 px-6 md:px-12 lg:px-24">
      {/* Background divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brandTeal/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandTeal/10 border border-brandTeal/20 text-brandTeal text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES & TOOLSTACK</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight">
            Skills & <span className="text-gradient-dual">Technical Expertise</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg font-light">
            Combining embedded systems engineering with program management and AI/Vision frameworks to deliver end-to-end robotics education platforms.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-gradient-to-r from-brandTeal to-brandAmber text-navy-950 shadow-lg shadow-brandTeal/20"
                : "glass-panel text-slate-300 hover:text-white border border-white/10"
            }`}
          >
            All Skill Areas
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === cat.id
                  ? "bg-brandTeal text-navy-950 shadow-lg shadow-brandTeal/25"
                  : "glass-panel text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Categories Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-brandTeal/30 transition-colors shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${cat.color}`}>
                        <cat.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-white">{cat.label}</h3>
                        <p className="text-xs text-slate-400 font-mono">{cat.skills.length} Technical Modules</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="group relative px-4 py-2 rounded-xl bg-navy-800/80 border border-white/10 hover:border-brandTeal/40 transition-all hover:scale-[1.03] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brandTeal group-hover:bg-brandAmber transition-colors" />
                        <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-brandAmber" /> Hands-on Prototyped & Deployed
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
