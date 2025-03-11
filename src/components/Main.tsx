
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ResearchSection } from "./ResearchSection";
import { TeamSection } from "./TeamSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};
