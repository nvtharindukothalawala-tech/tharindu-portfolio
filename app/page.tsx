import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";
export default function Home() {
  return (
    <main className="bg-[#000000]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Leadership />
      <Contact />
      <Footer />
      <AccessibilityWidget />
    </main>
  );
}
