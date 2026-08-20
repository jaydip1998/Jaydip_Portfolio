"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Wrench, Users, Rocket, Quote, MapPin, Mail, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Wrench,
      title: "Hands-On Engineer",
      desc: "Still solder, write C/C++ firmware, and calibrate multi-servo kinematics myself.",
      color: "from-brandTeal/20 to-brandTeal/5",
      borderColor: "border-brandTeal/30",
      textColor: "text-brandTeal",
    },
    {
      icon: Users,
      title: "Teacher Mentor",
      desc: "Trained & mentored 70+ educators to deliver high-quality STEM & AI curricula.",
      color: "from-brandAmber/20 to-brandAmber/5",
      borderColor: "border-brandAmber/30",
      textColor: "text-brandAmber",
    },
    {
      icon: Rocket,
      title: "Venture Builder",
      desc: "Founded AI-RoboFusion from initial hardware prototype to school partnerships.",
      color: "from-navy-700 to-navy-800",
      borderColor: "border-white/20",
      textColor: "text-white",
    },
    {
      icon: Cpu,
      title: "Full-Stack Prototyper",
      desc: "Bridging hardware (Arduino/ESP32) with software (Python, OpenCV, Voice AI).",
      color: "from-brandTeal/20 to-brandAmber/20",
      borderColor: "border-brandTeal/30",
      textColor: "text-brandTeal-300",
    },
  ];

  return (
    <section id="about" className="relative w-full bg-[#050D18] py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brandTeal/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brandAmber/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandTeal/10 border border-brandTeal/20 text-brandTeal text-xs font-mono mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white">
            About <span className="text-gradient-teal">Jaydip Makwana</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brandTeal to-brandAmber rounded-full mt-4" />
        </motion.div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background frame glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brandTeal/30 via-navy-800 to-brandAmber/30 blur-xl opacity-70" />

              <div className="relative glass-panel rounded-3xl p-4 border border-white/15 overflow-hidden group shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy-900">
                  <Image
                    src="/images/jaydip-portrait.jpg"
                    alt="Jaydip Makwana - Technical Program Manager & Founder"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                  {/* Badges on image */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                    <div className="glass-panel p-3 rounded-xl border border-white/20 flex items-center gap-3 backdrop-blur-md">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      <div>
                        <p className="text-xs font-semibold text-white">Bhavnagar, Gujarat, India</p>
                        <p className="text-[11px] text-slate-300">Open for Strategic & Technical Program Roles</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <MapPin className="w-4 h-4 text-brandTeal" />
                    <span>Gujarat, India</span>
                  </div>
                  <a
                    href="mailto:makwanajaydip1998@gmail.com"
                    className="flex items-center gap-1.5 text-xs font-semibold text-brandAmber hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Get in Touch</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 pointer-events-none" />

              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white leading-snug">
                &ldquo;I&apos;m an engineer who ended up running programs, not the other way around.&rdquo;
              </h3>

              <div className="mt-6 space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-light">
                <p>
                  I still solder, code, and calibrate servos myself. I founded <strong className="text-white font-medium">AI-RoboFusion</strong> to put real AI and robotics labs into Indian schools, and before that I helped scale similar programs to <span className="text-brandTeal font-medium">60+ schools and 25,000+ students</span>.
                </p>
                <p>
                  I like projects where hardware, software, and people all have to work together — a gesture-recognition system is fun, but getting 70 teachers confident enough to run it in a classroom is the actual hard part.
                </p>
                <p className="text-brandAmber font-medium">
                  If it involves Arduino, Python, or a room full of curious kids, I&apos;m probably already building it.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brandTeal shrink-0" />
                  <span className="text-sm font-medium text-slate-200">5+ Years Technical Program Scale</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brandTeal shrink-0" />
                  <span className="text-sm font-medium text-slate-200">NEP 2020 Aligned EdTech Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brandTeal shrink-0" />
                  <span className="text-sm font-medium text-slate-200">B.E. Electronics & Comms</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brandTeal shrink-0" />
                  <span className="text-sm font-medium text-slate-200">Google & Microsoft Certified</span>
                </div>
              </div>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className={`glass-panel p-5 rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.color} hover:scale-[1.02] transition-transform`}
                >
                  <item.icon className={`w-6 h-6 ${item.textColor} mb-3`} />
                  <h4 className="font-heading font-bold text-white text-base mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
