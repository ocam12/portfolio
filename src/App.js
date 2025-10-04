import { AboutSection } from './components/Sections/about';
import { CustomCursor } from './components/Dynamic/customCursor';
import { ScrollProgressBar } from './components/Dynamic/scrollProgress';
import { HeroSection } from './components/Sections/hero';
import { Navbar } from './components/navbar';
import { ProjectsSection } from './components/Sections/projects';
import { SkillsSection } from './components/Sections/skills';
import { ContactSection } from './components/Sections/contact';
import './App.css';
import { FooterSection } from './components/Sections/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollProgressBar></ScrollProgressBar>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <SkillsSection></SkillsSection>
        <ProjectsSection></ProjectsSection>
        <AboutSection></AboutSection>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
      </header>
      <CustomCursor></CustomCursor>
    </div>
  );
}

export default App;
