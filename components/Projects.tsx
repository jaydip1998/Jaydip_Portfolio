"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Eye, Cloud, Sparkles, X, CheckCircle2, Code2, Bot } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  fullDetails: string[];
  tools: string[];
  gradient: string;
  borderColor: string;
  icon: any;
  highlightTag: string;
}

const projects: Project[] = [
  {
    id: "humanoid-robot",
    title: "Humanoid Robot Development",
    subtitle: "Programmable Multi-DOF Humanoid Platform",
    category: "Hardware & Robotics",
    description: "Synchronized multi-servo motion control with wireless communication and optimized power management — built from scratch as part of AI-RoboFusion's hardware line.",
    fullDetails: [
      "Designed and calibrated multi-DOF servo kinematics for synchronized limb and gait motion.",
      "Utilized PCA9685 16-channel PWM drivers interfaced with ESP32/Arduino microcontrollers.",
      "Engineered low-latency wireless remote control protocol for real-time motion command execution.",
      "Optimized power distribution architecture to prevent voltage dips during peak multi-servo draws."
    ],
    tools: ["Arduino", "ESP32", "PCA9685", "Embedded C", "Python", "Kinematics"],
    gradient: "from-brandTeal/20 via-navy-800 to-navy-900",
    borderColor: "border-brandTeal/30",
    icon: Bot,
    highlightTag: "AI-RoboFusion Core Hardware",
  },
  {
    id: "gesture-recognition",
    title: "AI Hand Gesture Recognition",
    subtitle: "Computer Vision STEM Gamification Engine",
    category: "AI & Computer Vision",
    description: "Real-time gesture-controlled educational games designed for STEM gamification in K-12 classrooms.",
    fullDetails: [
      "Built high-accuracy hand landmark detection pipeline using Python, OpenCV, and MediaPipe.",
      "Mapped spatial hand gestures to interactive game controls for intuitive student engagement.",
      "Optimized frame processing to achieve low-latency performance on standard classroom laptop hardware.",
      "Deployed in workshop environments to demonstrate computer vision concepts to over 1,000+ students."
    ],
    tools: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "STEM Gamification"],
    gradient: "from-brandAmber/20 via-navy-800 to-navy-900",
    borderColor: "border-brandAmber/30",
    icon: Eye,
    highlightTag: "Interactive Vision Tech",
  },
  {
    id: "iot-automation",
    title: "IoT Home Automation & Monitoring",
    subtitle: "End-to-End Sensor-to-Cloud Pipeline",
    category: "IoT & Cloud Connectivity",
    description: "Cloud-connected environmental monitoring with automated control — full pipeline from sensor node to live cloud dashboard.",
    fullDetails: [
      "Interfaced multi-sensor telemetry nodes with low-power ESP8266 microcontrollers.",
      "Implemented MQTT messaging protocols for resilient data transmission over local Wi-Fi networks.",
      "Integrated ThingSpeak IoT analytics platform for real-time visualization and alert triggering.",
      "Designed automated relay actuation logic based on environmental threshold parameters."
    ],
    tools: ["ESP8266", "MQTT", "ThingSpeak", "Embedded C", "Cloud Analytics"],
    gradient: "from-blue-500/20 via-navy-800 to-navy-900",
    borderColor: "border-blue-400/30",
    icon: Cloud,
    highlightTag: "Cloud IoT Pipeline",
  },
  {
    id: "digital-suite",
    title: "AI-RoboFusion Digital Suite",
    subtitle: "Multilingual Voice AI & Inbound Automation",
    category: "Conversational AI & Web",
    description: "Company web platform, AI-powered FAQ chatbot, and multilingual (English/Hindi/Gujarati) AI voice agent for inbound school-lead capture.",
    fullDetails: [
      "Architected company web presences built on high-performance HTML/CSS/JS frontend standards.",
      "Integrated automated AI FAQ chatbot trained on NEP 2020 curriculum & pricing models.",
      "Configured multilingual voice AI agent capable of handling inbound calls in English, Hindi, and Gujarati.",
      "Reduced manual front-office administrative burden for school partnership inquiries by over 40%."
    ],
    tools: ["HTML/CSS/JS", "Omni Dimension", "Voice AI Agents", "Chatbots", "Multilingual NLP"],
    gradient: "from-emerald-500/20 via-navy-800 to-navy-900",
    borderColor: "border-emerald-400/30",
    icon: Code2,
    highlightTag: "Voice AI & Automation",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full bg-[#050D18] py-28 px-6 md:px-12 lg:px-24">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED HARDWARE & SOFTWARE BUILDS</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight">
            Engineered <span className="text-gradient-teal">Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg font-light">
            Real-world systems spanning embedded robotics hardware, computer vision algorithms, and voice AI platforms.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden rounded-3xl border ${project.borderColor} bg-gradient-to-br ${project.gradient} p-8 md:p-10 cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-2xl glass-panel`}
              >
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[320px]">
                  {/* Top info */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-2">
                        <div className="p-2.5 rounded-xl bg-white/10 text-brandTeal backdrop-blur-md">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-300">
                          {project.category}
                        </span>
                      </div>
                      <div className="p-3 rounded-full bg-brandTeal text-navy-950 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brandAmber text-[11px] font-mono mb-3">
                      {project.highlightTag}
                    </span>

                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-brandTeal transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-4">{project.subtitle}</p>

                    <p className="text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tool Pills */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-navy-950/80 text-[11px] font-mono text-slate-300 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-panel p-6 sm:p-10 rounded-3xl border border-brandTeal/30 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-brandTeal/10 text-brandTeal border border-brandTeal/20 text-xs font-mono">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">Project Blueprint</span>
              </div>

              <h3 className="font-heading text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-sm font-mono text-brandAmber mb-6">{selectedProject.subtitle}</p>

              <p className="text-base text-slate-300 leading-relaxed font-light mb-6">
                {selectedProject.description}
              </p>

              <h4 className="font-heading font-bold text-white text-base mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandTeal" /> Key Technical Architecture Highlights
              </h4>
              <ul className="space-y-3 mb-6">
                {selectedProject.fullDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brandAmber mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-heading font-bold text-white text-base mb-3">Toolstack & Environment</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-navy-800 text-xs font-mono text-brandTeal-300 border border-brandTeal/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-3 rounded-xl bg-brandTeal text-navy-950 font-semibold text-sm hover:bg-brandTeal-400 transition-colors"
              >
                Close Blueprint
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
