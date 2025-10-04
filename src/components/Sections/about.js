import { useRef, useState, useEffect } from "react";
import { Anchor } from "../anchor";
import { Typewriter } from "../Dynamic/typewrite";
import { Header } from "../header";
import "./about.css";

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
    "/about_images/about_image25.jpg",
    "/about_images/about_image26.jpg",
    "/about_images/about_image27.jpg",
    "/about_images/about_image28.jpg",
    "/about_images/about_image29.jpg",
    "/about_images/about_image30.jpg",
    "/about_images/about_image31.jpg",
    "/about_images/about_image32.jpg",
    "/about_images/about_image33.jpg",
    "/about_images/about_image34.jpg",
    "/about_images/about_image35.jpg",
    "/about_images/about_image36.jpg",
    "/about_images/about_image37.jpg",
    "/about_images/about_image38.jpg",
    "/about_images/about_image39.jpg",
    "/about_images/about_image40.jpg",
    "/about_images/about_image41.jpg",
    "/about_images/about_image42.jpg",
    "/about_images/about_image43.jpg",
    "/about_images/about_image44.jpg",
    "/about_images/about_image45.jpg",
    "/about_images/about_image46.jpg",
    "/about_images/about_image47.jpg",
    "/about_images/about_image48.jpg",
];

export const AboutSection = () => {
    //const [mouseImages, setMouseImages] = useState([]);   - caused lag

    const overlayRef = useRef(null); 
    const lastPos = useRef({ x: null, y: null }); //track last image position
    const mouseThreshold = 100;         //threshold mouse needs to move to trigger new image   
    
    const handleMouseMove = (e) => {
        //Stop execution if the container is not yet referenced
        if (!overlayRef.current){return;}

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
        
        //Create a new image element
        const imgElement = document.createElement('img');
        //Set properties and styles
        imgElement.className = 'overlay-img';
        imgElement.src = src;
        imgElement.alt = "mouse trail";
        imgElement.style.top = `${y - 100}px`; //center image to cursor
        imgElement.style.left = `${x - 100}px`;
        overlayRef.current.appendChild(imgElement);

        //Timeout to trigger the fade out
        setTimeout(() => {
            imgElement.classList.add('exit');
        }, 800); //image lasts for 800ms

        //Timeout to remove the element
        setTimeout(() => {
            imgElement.remove();
        }, 800 + 300); //800ms life + 300ms fade-out
    };


    return (
        <section id="about">
            <Header text={"About"}></Header>
            <div className="profile-container">
                <div className="profile-main">
                    <div className="profile-info">
                        <h3 className="profile-caption">My name is Oliver Young (better known as Olly).</h3>
                        <h4 className="profile-subheader">Background</h4>
                        <p className="profile-text">I've been a student at the University of Birmingham since 2022, and in that time I have grown from a complete novice at software engineering into a competent programmer with a multitude of different skills.</p>
                        <h4 className="profile-subheader">Work Experience</h4>
                        <p className="profile-text">During my time off of my degree I have spent my summers working as a Duty Manager at my local open air pool, where I enjoy leading, and working alongside, a competent team of lifeguards. Together we deal with a variety of challenges (especially during those heatwaves!)</p>
                        <h4 className="profile-subheader">Beyond The Usual</h4>
                        <p className="profile-text">In my free time I like to keep fit at the gym or the pool, as well as learn new skills like playing Pickleball or speaking Italian - sempre impararo! I also love travelling and exploring new places - my favourite experience so far has definitley been sailing across Lake Como in Italy.</p>
                    </div>
                </div>
            </div>
            <div 
                className="overlay-container" 
                onMouseMove={handleMouseMove}
                ref={overlayRef} 
            >
            </div>
            <Anchor className="next-page-link" fontSize={'1.4rem'} link={"#contact"} text={<>Contact Me <span className="arrow">↓</span></>}></Anchor>
        </section>
    )
}