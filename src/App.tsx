import { PrismaHero } from "@/components/ui/prisma-hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function App() {
  return (
    <div className="min-h-screen w-full bg-[#080807] text-[#E1E0CC]">
      <PrismaHero />
      <main>
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <ContactSection />
    </div>
  );
}

export default App;
