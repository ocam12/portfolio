import { useEffect, useRef, useState } from "react";
import "./customCursor.css";

export const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [hoveredElem, setHoveredElem] = useState(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            if (!hoveredElem){
                cursor.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
                cursor.style.width = `30px`;
                cursor.style.height = `30px`;
                cursor.style.borderRadius = '50%';
            }
        };

        const handleMouseEnter = (e) => {
            setHoveredElem(e.currentTarget)
        }

        const handleMouseLeave = () => {
            setHoveredElem(null)
        }
        
        const hoverItems = document.querySelectorAll('.hover-mouse');

        hoverItems.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            hoverItems.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        }
    }, [hoveredElem]);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (hoveredElem) {
            cursor.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
            const rect = hoveredElem.getBoundingClientRect();
            const width = rect.width + 20;
            const height = rect.height + 10;
            cursor.style.width = width + "px";
            cursor.style.height = height + "px";
            cursor.style.borderRadius = "20px";
            cursor.style.transform = `translate3d(${rect.left + rect.width / 2 - width / 2}px, ${rect.top + rect.height / 2 - height / 2}px, 0)`;
        }
    }, [hoveredElem]);

    return <div ref={cursorRef} className="custom-cursor"></div>;
};