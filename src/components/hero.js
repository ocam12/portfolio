import { Anchor } from './anchor';
import './hero.css';

export const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-main">
                <h1>Oliver Young</h1>
                <p>Software Engineer | Student of the University of Birmingham</p>
                <Anchor fontSize={'1.3rem'} link={"#about"} text={"See More ↓"}></Anchor>
            </div>
        </section>
    )
}