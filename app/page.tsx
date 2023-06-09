import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <main className="px-4 sm:px-20 overflow-x-clip">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
