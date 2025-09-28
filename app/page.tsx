import Header from "@/components/LadingPage/Header";
import HeroSection from "@/components/LadingPage/Pages/HeroSection";
import ValuePropsSection from "@/components/LadingPage/Pages/ValuePropsSection";
import HowItWorksSection from "@/components/LadingPage/Pages/HowItWorksSection";
import TravelsSection from "@/components/LadingPage/Pages/TravelsSection";
import TestimonialSection from "@/components/LadingPage/Pages/TestimonialSection";
import TravelersGroup from "@/components/LadingPage/Pages/TravelersGroup";
import ContactSection from "@/components/LadingPage/Pages/ContactSection";
import FaqSection from "@/components/LadingPage/Pages/FaqSection";
import Footer from "@/components/LadingPage/Footer";
import ScrollReveal from "@/components/LadingPage/ScrollReveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex-1">
        <ScrollReveal />
        <HeroSection />
        <ValuePropsSection />
        <HowItWorksSection />
        <TravelsSection />
        <TestimonialSection />
        <TravelersGroup />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
