import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WorkflowSection from './components/WorkflowSection';
import ArchitectureSection from './components/ArchitectureSection';
import DiagramsSection from './components/DiagramsSection';
import UIShowcaseSection from './components/UIShowcaseSection';
import ModulesSection from './components/ModulesSection';
import TechStackSection from './components/TechStackSection';
import MethodologySection from './components/MethodologySection';
import TimelineSection from './components/TimelineSection';
// import CostAnalysisSection from './components/CostAnalysisSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import AnimatedFooter from './components/AnimatedFooter';

function App() {
  return (
    <div className="bg-charcoal min-h-screen font-sans selection:bg-jungle selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <WorkflowSection />
      <ArchitectureSection />
      <DiagramsSection />
      <UIShowcaseSection />
      <ModulesSection />
      <TechStackSection />
      <MethodologySection />
      <TimelineSection />
      {/* <CostAnalysisSection /> */}
      <GallerySection />
      <ContactSection />
      <AnimatedFooter />
    </div>
  );
}

export default App;
