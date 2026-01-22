import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TaglineStrip from "@/components/TaglineStrip";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TaglineStrip />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
