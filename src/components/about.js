import { useEffect, useRef, useState } from "react"
import "./about.css"
import { Anchor } from "./anchor"
import { Typewriter } from "./Dynamic/typewrite"
import { Header } from "./header";

//array of all image sources
const images = [
    "/about_images/about_image.jpg",
    "/about_images/about_image2.jpg",
    "/about_images/about_image3.jpg",
    "/about_images/about_image4.jpg",
    "/about_images/about_image5.jpg",
    "/about_images/about_image6.jpg",
    "/about_images/about_image7.jpg",
    "/about_images/about_image8.jpg",
    "/about_images/about_image9.jpg",
    "/about_images/about_image10.jpg",
    "/about_images/about_image11.jpg",
    "/about_images/about_image12.jpg",
    "/about_images/about_image13.jpg",
    "/about_images/about_image14.jpg",
    "/about_images/about_image15.jpg",
    "/about_images/about_image16.jpg",
    "/about_images/about_image17.jpg",
    "/about_images/about_image18.jpg",
    "/about_images/about_image19.jpg",
    "/about_images/about_image20.jpg",
    "/about_images/about_image21.jpg",
    "/about_images/about_image22.jpg",
    "/about_images/about_image23.jpg",
    "/about_images/about_image24.jpg",
];

export const AboutSection = () => {
    const [mouseImages, setMouseImages] = useState([]);     //state to handle current show images  
    const lastPos = useRef({ x: null, y: null }); //track last image position
    const mouseThreshold = 100;         //threshold mouse needs to move to trigger new image   
    const handleMouseMove = (e) => {
        const overlay = e.currentTarget;        //overlay area where images can show
        const rect = overlay.getBoundingClientRect();

        const x = e.clientX - rect.left;        //mouse positions
        const y = e.clientY - rect.top;

        //check distance from last spawn
        if (lastPos.current.x !== null && lastPos.current.y !== null) {
            const dx = x - lastPos.current.x;       //x distance
            const dy = y - lastPos.current.y;       //y distance
            const distance = Math.sqrt(dx * dx + dy * dy);       //total distance

            if (distance < mouseThreshold) return; //don't spawn if too doesn't pass threshold
        }

        lastPos.current = { x, y };     //update last position image was spawned

        const src = images[Math.floor(Math.random() * images.length)];      //gets random image
        const id = Date.now() + Math.random();      //create unique id for each image to easily find it again

        setMouseImages(prev => [...prev, { x, y, src, id }]);       //updates shown images

        setTimeout(() => {
            setMouseImages(prev =>
                prev.map(img => img.id === id ? { ...img, exit: true } : img)       //add exit class to image to show it is exiting
            );

            setTimeout(() => {
                setMouseImages(prev => prev.filter(img => img.id !== id));      //sets timeout for images and then filters them out of show images when timer up
            }, 300);        //exit time === fade out time in css
        }, 800)     //image lasts for 800ms
    };


    return (
        <section id="about">
            <Header text={"About"}></Header>
            
            <div className="profile-container">
                <div className="profile-main">
                    <div className="profile-info">
                        <Typewriter className="profile-caption" text={"Hello there! My name is Oliver Young (better known as Olly)."} speed={30}></Typewriter>
                        <Typewriter className={"profile-subheader"} text={"Background"} speed={10} startDelay={2800}></Typewriter>
                        <Typewriter className={"profile-text"} speed={10} startDelay={3300} text={"I've been a student at the University of Birmingham since 2022, and in that time I have grown from a complete novice at software engineering into a competent programmer with a multitude of different skills."}></Typewriter>
                        <Typewriter className={"profile-subheader"} text={"Work Experience"} speed={10} startDelay={5700}></Typewriter>
                        <Typewriter className={"profile-text"} speed={10} startDelay={6100} text={"During my time off of my degree I have spent my summers working as a Duty Manager at my local pool - Cirencester Open Air, where I enjoy leading, and working alongside, a competent team of lifeguards. Together we deal with a variety of challenges (especially during those heatwaves!)."}></Typewriter>
                        <Typewriter className={"profile-subheader"} text={"Beyond The Usual"} speed={10} startDelay={9300}></Typewriter>
                        <Typewriter className={"profile-text"} speed={10} startDelay={9700} text={"In my free time I like to keep fit at the gym or the pool, as well as learn new skills like playing Pickleball or speaking Italian - sempre impararo!"}></Typewriter>
                    </div>
                </div>
            </div>
            <div className="overlay-container" onMouseMove={handleMouseMove}>
                {mouseImages.map((img) => (
                    <img
                        className={`overlay-img ${img.exit ? "exit" : ""}`}     //class += exit if exiting
                        key={img.id}
                        src={img.src}
                        alt="mouse trail"
                        style={{
                            top: img.y - 100 + "px", //center image to cursor
                            left: img.x - 100 + "px",
                        }}
                    />
                ))}
            </div>
            <Anchor className="skills-link" fontSize={'1.4rem'} link={"#skills"} text={"Skills ↓"}></Anchor>
        </section>
    )
}