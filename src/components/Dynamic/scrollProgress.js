import { useState, useEffect } from "react";
import "./scrollProgress.css";

export const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);        //use state to track scroll progress    (0-100)

    const updateScrollProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;        //takes total page height (including off screen) and subtarcts the visible part of page = total srollable distance
        const scrollPosition = window.scrollY;      //current scroll position
        const progress = (scrollPosition/scrollHeight) * 100;       //percentage scrolled
        setScrollProgress(progress);            //updates scroll progress state
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScrollProgress);        //called everytime user scrolls
        return () => {      //cleans up event listener
            window.removeEventListener("scroll", updateScrollProgress);
        };
    }, []);

    return (        //renders actual scroll bar as a horizontal bar
        <div className="scroll-bar" style={{width: `${scrollProgress}%`}}></div>
    )
}