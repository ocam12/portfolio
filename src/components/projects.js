import { Anchor } from './anchor';
import { Header } from './header';
import './projects.css';

export const ProjectsSection = () => {
    return (
        <section id="projects">
            <Header text={"Projects"}></Header>
            {/*<Anchor className="skills-link" fontSize={'1.4rem'} link={""} text={"Skills ↓"}></Anchor>*/}
        </section>
    )
}