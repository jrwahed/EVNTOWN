import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import ManifestoSection from "@/components/ManifestoSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen font-cairo overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <FeaturesSection />
    <HowItWorks />
    <ManifestoSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
