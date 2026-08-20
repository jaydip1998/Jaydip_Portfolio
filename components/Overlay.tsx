"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Bot, Cpu, Sparkles, GraduationCap, Award, ChevronDown } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Stage 1: 0% to 28% - Hero Intro & Tagline
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [1, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.28], [0, -80]);
  const scale1 = useTransform(scrollYProgress, [0, 0.28], [1, 0.95]);

  // Stage 2: 32% to 60% - Mission Statement & Vision
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.38, 0.54, 0.62], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.62], [60, -60]);

  // Stage 3: 65% to 95% - Key Metrics & Pillars
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.72, 0.9, 0.98], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.98], [60, -40]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10">
      {/* Background vignette overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050D18]/90 via-transparent to-[#050D18]/50 pointer-events-none" />

      {/* STAGE 1: Hero Main Intro */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandTeal/10 border border-brandTeal/20 text-brandTeal text-xs font-mono mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TECHNICAL PROGRAM MANAGER & FOUNDER</span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl max-w-5xl leading-none">
          Jaydip <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandTeal-300 via-brandTeal to-brandAmber">Makwana</span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-brandAmber font-heading font-medium max-w-3xl drop-shadow-lg leading-relaxed">
          &ldquo;I build robots, code, and classrooms —<br className="hidden sm:inline" /> sometimes in the same afternoon.&rdquo;
        </p>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl leading-relaxed drop-shadow-md">
          Designing humanoid robots and embedded hardware by day, and building the software, curriculum, and school partnerships to bring them into classrooms by night.
        </p>

        <div className="mt-10 flex items-center gap-2 text-slate-400 text-xs font-mono animate-bounce">
          <span>SCROLL TO EXPLORE ARCHITECTURE & JOURNEY</span>
          <ChevronDown className="w-4 h-4 text-brandTeal" />
        </div>
      </motion.div>

      {/* STAGE 2: Mission Quote */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-[5%] md:pl-[12%] pr-[5%]"
      >
        <div className="max-w-3xl glass-panel p-8 sm:p-10 rounded-3xl border border-brandTeal/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brandTeal/10 rounded-full blur-3xl -z-10" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandAmber/10 border border-brandAmber/20 text-brandAmber text-xs font-mono mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>AI-ROBOFUSION VISION</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Transforming students into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandTeal-300 to-brandTeal">active creators</span>.
          </h2>

          <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed font-light">
            A gesture-recognition system is fun, but getting 70 teachers confident enough to run it in a classroom is the actual hard part.
          </p>
        </div>
      </motion.div>

      {/* STAGE 3: Impact Counter Cards */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center pr-[5%] md:pr-[12%] pl-[5%]"
      >
        <div className="max-w-2xl w-full flex flex-col items-end gap-6 text-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandTeal/10 border border-brandTeal/20 text-brandTeal text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>PROVEN SCALE & DELIVERABLE IMPACT</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Empowering schools with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandTeal to-brandAmber font-extrabold">Humanoid Robotics</span> & Edge AI.
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full mt-4 text-left pointer-events-auto">
            <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-brandTeal/30 transition-colors">
              <div className="flex items-center gap-2 text-brandTeal mb-1">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono uppercase text-slate-400">Schools Scale</span>
              </div>
              <p className="font-heading text-3xl font-extrabold text-white">60+</p>
              <p className="text-xs text-slate-400 mt-1">Partner schools across 10+ districts</p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-brandAmber/30 transition-colors">
              <div className="flex items-center gap-2 text-brandAmber mb-1">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-mono uppercase text-slate-400">Students Reached</span>
              </div>
              <p className="font-heading text-3xl font-extrabold text-white">25,000+</p>
              <p className="text-xs text-slate-400 mt-1">K-12 students trained in AI & STEM</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
