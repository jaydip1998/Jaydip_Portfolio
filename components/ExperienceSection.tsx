"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, Award, CheckCircle2, Bot, Building2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  badge?: string;
  isCurrent?: boolean;
  bullets: string[];
  tags: string[];
  stats?: { label: string; value: string }[];
}

const experiences: ExperienceItem[] = [
  {
    id: "airobofusion",
    role: "Founder & Program Director",
    company: "AI-RoboFusion",
    period: "Sep 2024 – Present",
    location: "Bhavnagar, Gujarat, India",
    badge: "FOUNDER & VENTURE LEAD",
    isCurrent: true,
    bullets: [
      "Owned end-to-end venture strategy → took an AI/Robotics EdTech company from hardware prototyping and software builds through curriculum design and school delivery.",
      "Engineered a programmable humanoid robot and multi-DOF robotic arm on Arduino/ESP32 → built synchronized multi-servo motion control from concept through calibration and testing.",
      "Built the company website, an AI FAQ chatbot, and a multilingual (English/Hindi/Gujarati) AI voice agent → cut manual front-office workload for inbound school leads.",
      "Designed NEP 2020-aligned curriculum and implementation frameworks → closed school partnerships to deploy AI and Robotics labs."
    ],
    tags: ["Venture Strategy", "Humanoid Robotics", "Arduino/ESP32", "Multilingual Voice AI", "NEP 2020 Curriculum", "B2B School Sales"],
    stats: [
      { label: "Hardware Line", value: "Humanoid Robot" },
      { label: "AI Voice Support", value: "Eng / Guj / Hin" },
    ]
  },
  {
    id: "roboplus",
    role: "Robotics Head Manager",
    company: "Robo+ Edutech",
    period: "Feb 2022 – Sep 2024",
    location: "Gujarat, India",
    badge: "PROGRAM SCALE",
    bullets: [
      "Managed AI, Robotics, and STEM programs across 60+ schools and 10+ districts → reached 25,000+ students while holding technical and delivery quality consistent at scale.",
      "Designed K–12 robotics/embedded-systems curriculum, lesson plans, and educator resources → trained and mentored 70+ educators through structured PD programs.",
      "Delivered 100+ hands-on workshops → partnered with principals, ops, and business teams to track program KPIs and rollout quality."
    ],
    tags: ["Program Management", "60+ Partner Schools", "25,000+ Students", "70+ Educator Mentorship", "100+ Workshops", "KPI Tracking"],
    stats: [
      { label: "Schools Reached", value: "60+ Schools" },
      { label: "Students Impacted", value: "25,000+" },
      { label: "Workshops Facilitated", value: "100+" }
    ]
  },
  {
    id: "stembotix",
    role: "Robotics & STEM Mentor",
    company: "STEMbotix",
    period: "Feb 2022 – Mar 2023",
    location: "Part-time Concurrent",
    badge: "TECHNICAL MENTORSHIP",
    bullets: [
      "Delivered hands-on robotics, AI, and embedded-systems training via project-based learning.",
      "Provided hardware troubleshooting and embedded software debugging support to student teams."
    ],
    tags: ["Robotics Mentorship", "Embedded Debugging", "Hardware Troubleshooting", "Project-Based Learning"]
  },
  {
    id: "maahi",
    role: "Junior Executive",
    company: "Maahi Milk Producer Company Ltd.",
    period: "Mar 2021 – Jul 2021",
    location: "Gujarat, India",
    badge: "INDUSTRIAL ENGINEERING",
    bullets: [
      "Performed preventive maintenance and fault diagnosis on industrial electrical/mechanical systems → improved operational efficiency and equipment uptime."
    ],
    tags: ["Preventive Maintenance", "Electrical Systems", "Industrial Automation", "Fault Diagnosis", "Uptime Optimization"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full bg-[#050D18] py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brandAmber/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandAmber/10 border border-brandAmber/20 text-brandAmber text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY & IMPACT</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight">
            Professional <span className="text-gradient-amber">Experience</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg font-light">
            From industrial engineering roots to scaling EdTech robotics programs across tens of thousands of students.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brandTeal via-brandAmber to-navy-800 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brandTeal via-brandAmber to-navy-800 md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-navy-900 border-2 border-brandTeal flex items-center justify-center shadow-lg shadow-brandTeal/30 z-10">
                    {exp.isCurrent ? (
                      <span className="w-3 h-3 rounded-full bg-brandAmber animate-ping" />
                    ) : (
                      <Building2 className="w-4 h-4 text-brandTeal" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-brandTeal/30 transition-all shadow-xl hover:scale-[1.01] relative group">
                      {/* Top Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-brandTeal/10 border border-brandTeal/20 text-brandTeal text-[11px] font-mono font-semibold">
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-brandAmber" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-2xl text-white group-hover:text-brandTeal transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-base font-semibold text-brandAmber mt-0.5 mb-4">
                        {exp.company}
                        {exp.location && (
                          <span className="text-xs font-mono font-normal text-slate-400 ml-2">
                            • {exp.location}
                          </span>
                        )}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-3 mb-6">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-brandTeal shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Stats Highlight Bar if exists */}
                      {exp.stats && (
                        <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-navy-900/90 border border-white/10 mb-5">
                          {exp.stats.map((st, sIdx) => (
                            <div key={sIdx} className="text-center">
                              <p className="text-[10px] font-mono text-slate-400 uppercase">{st.label}</p>
                              <p className="font-heading font-bold text-sm text-brandTeal-300">{st.value}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tag list */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-navy-800 text-[11px] text-slate-300 border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
