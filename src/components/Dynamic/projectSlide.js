import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./projectSlide.css";

export const ProjectSlide = ({project, index}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const windowWidth = window.innerWidth;

    const initialX = index % 2 === 0 ? -windowWidth : windowWidth;      //alternate directions coming in from left or right
    const exitX = index % 2 === 0 ? windowWidth : -windowWidth;
    const x = useTransform(scrollYProgress, [0, 0.5, 1], [initialX, 0, exitX]);
    const opacity = useTransform(scrollYProgress, [0, 0.6, 0.7, 1], [0, 1, 1, 0]);
    const slideClass = "project-slide " + (index % 2 !== 0 ? "reverse" : "");       //if odd number then reverse order of image/text

    return (
        <motion.div
            ref={ref}
            style={{x, opacity}}
            className={slideClass}
        >
            <img src={project.image}></img>
            <div className="project-info-container">
                <h1>{project.title}</h1>
                <div className="project-buttons">
                    {project.gitLink && <a href={project.gitLink} target="_BLANK" className="git-button hover-mouse">Git</a>}
                    {project.deployLink && <a href={project.deployLink} target="_BLANK" className="live-button hover-mouse">Live</a>}
                </div>
                <div className="project-skills-container">
                    {project.skills.map((SkillComponent, i) => (
                    <div key={i} className="skill-icon"><SkillComponent></SkillComponent></div>
                    ))}
                </div>
            </div>
            
        </motion.div>
    )
}