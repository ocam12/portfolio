import { Typewriter } from '../Dynamic/typewrite';
import './hero.css';

export const HeroSection = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-main">
                <h1><Typewriter text={"Oliver Young"}></Typewriter></h1>
                <p><Typewriter text={"Software Engineer | Student of the University of Birmingham"} startDelay={700}></Typewriter></p>
                <Typewriter isLink={true} link={"#skills"} className={"see-more"} text={"See My Projects ↓"} fontSize={"1.4rem"} startDelay={4000}></Typewriter>
            </div>
        </section>
    )
}