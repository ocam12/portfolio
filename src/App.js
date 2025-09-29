import './App.css';
import { AboutSection } from './components/about';
import { Button } from './components/button';
import { HeroSection } from './components/hero';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
      </header>
    </div>
  );
}

export default App;
