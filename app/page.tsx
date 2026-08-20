import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Projects from "@/components/Projects";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#050D18] selection:bg-brandTeal/30 selection:text-white">
      <Navbar />
      <ScrollyCanvas />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <Projects />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
