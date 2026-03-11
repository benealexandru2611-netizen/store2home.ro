import { LangProvider } from "@/contexts/LangContext";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SignatureSection from "@/components/SignatureSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <ContactSection />
        <SignatureSection />
        <SiteFooter />
      </div>
    </LangProvider>
  );
};

export default Index;
