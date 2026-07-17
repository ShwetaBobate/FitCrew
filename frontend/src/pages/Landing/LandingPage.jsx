  import Navbar from "../../components/layout/Navbar";
  import Footer from "../../components/layout/Footer";
  import Hero from "./sections/Hero";
  import Problem from "./sections/Problem";
  import Features from "./sections/Features";
  import HowItWorks from "./sections/HowItWorks";
  import PlatformPreview from "./sections/PlatformPreview";
  import Goals from "./sections/Goals";
  import Community from "./sections/Community";
  import Analytics from "./sections/Analytics";
  import AICoach from "./sections/AICoach";
  import Testimonials from "./sections/Testimonials";
  import Pricing from "./sections/Pricing";
  import FAQ from "./sections/FAQ";
  import FinalCTA from "./sections/FinalCTA";

  export default function LandingPage() {
    return (
      <div className="font-sans">
        <Navbar />
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <PlatformPreview />
        <Goals />
        <Community />
        <Analytics />
        <AICoach />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    );
  }
