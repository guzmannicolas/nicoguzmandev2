import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
