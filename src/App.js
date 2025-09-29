import './App.css';
import { Button } from './components/button';
import { HeroSection } from './components/hero';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Button text="Hello There"></Button>
      </header>
    </div>
  );
}

export default App;
