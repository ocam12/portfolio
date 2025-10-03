import { Anchor } from '../anchor';
import { ProjectSlide } from '../Dynamic/projectSlide';
import { Typewriter } from '../Dynamic/typewrite';
import { Header } from '../header';
import './projects.css';
import { icons } from './skills';

const projectSkills = Object.fromEntries(icons.map(obj => [obj.name, obj.icon]));

const projects = [
    {
        title: "Automatic Rota Generator",
        description: "Generates rotas duh",
        image: "/project_images/Rota1.png",
        skills: [projectSkills["HTML"], projectSkills["CSS"], projectSkills["JavaScript"], projectSkills["Git"], projectSkills["FireBase API"], projectSkills["VSCode"], projectSkills["Netlify"]],
        gitLink: "https://github.com/ocam12/rota",
        deployLink: "http://rotagenerator.netlify.app/"
    },
    {
        title: "Recipe Generator Using Spoonacular API",
        description: "Generates recipes duh",
        image: "/project_images/Recipe1.png",
        skills: [projectSkills["React"], projectSkills["HTML"], projectSkills["CSS"], projectSkills["Git"], projectSkills["VSCode"], projectSkills["Netlify"]],
        gitLink: "https://github.com/ocam12/Recipe-Generator",
        deployLink: "https://generator-recipe.netlify.app"
    },
    {
        title: "Kanban-Style To Do List Creator",
        description: "To Do List duh",
        image: "/project_images/ToDo1.png",
        skills: [projectSkills["HTML"], projectSkills["CSS"], projectSkills["JavaScript"], projectSkills["Git"], projectSkills["Netlify"]],
        gitLink: "https://github.com/ocam12/todo-list",
        deployLink: "https://createyourtodoboard.netlify.app"
    },
    {
        title: "Weather Tracker Using OpenWeatherMap API",
        description: "Weather duh",
        image: "/project_images/Weather1.png",
        skills: [projectSkills["HTML"], projectSkills["CSS"], projectSkills["JavaScript"], projectSkills["Git"], projectSkills["Netlify"]],
        gitLink: "https://github.com/ocam12/weather-finder",
        deployLink: "https://weatherdiscover.netlify.app"
    },
    {
        title: "IDE For HTML, CSS, And JavaScriptCode",
        description: "Code Editor duh",
        image: "/project_images/CodeEditor1.png",
        skills: [projectSkills["HTML"], projectSkills["CSS"], projectSkills["JavaScript"], projectSkills["Git"]],
        gitLink: "https://github.com/ocam12/code-editor",
        deployLink: ""
    },
    {
        title: "SuperZero - Open World Superhero Sandbox Videogame",
        description: "Superhero sandbox duh",
        image: "/project_images/Superzero1.png",
        skills: [projectSkills["C Sharp"], projectSkills["Unity"], projectSkills["Visual Studios"], projectSkills["Blender"]],
        gitLink: "",
        deployLink: "https://youngstudios.itch.io/superzero"
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects">
            <Header text={"Projects"}></Header>
            <div className="projects-intro">
                <Typewriter text={"Here is a collection of some of my favourite projects that demonstrates my skills in software development, data handling and design. Each project has had its own challenges, but learning how to tackle them has been incredibly rewarding. Take a look!"} speed={20}></Typewriter>
            </div>
            <div className="projects-container">
                {projects.map((project, i) => (
                    <ProjectSlide key={i} project={project} index={i}></ProjectSlide>
                ))}
            </div>
            <Anchor className="next-page-link" fontSize={'1.4rem'} link={"#about"} text={<>About Me <span className="arrow">↓</span></>}></Anchor>
        </section>
    )
}