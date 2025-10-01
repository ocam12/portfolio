import './App.css';
import { AboutSection } from './components/about';
import { Button } from './components/button';
import { CustomCursor } from './components/Dynamic/customCursor';
import { ScrollProgressBar } from './components/Dynamic/scrollProgress';
import { HeroSection } from './components/hero';
import { Navbar } from './components/navbar';
import { ProjectsSection } from './components/projects';
import { SkillsSection } from './components/skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollProgressBar></ScrollProgressBar>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <ProjectsSection></ProjectsSection>
      </header>
      <CustomCursor></CustomCursor>
    </div>
  );
}

export default App;
