import ChatBot from '@/components/ChatBot';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import DesignGallery from '@/components/DesignGallery';
import VideoPortfolio from '@/components/VideoPortfolio';
import YoutubeSection from '@/components/YoutubeSection';
import SkillsTools from '@/components/SkillsTools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-[#08080b] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <DesignGallery />
        <VideoPortfolio />
        <YoutubeSection />
        <SkillsTools />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
