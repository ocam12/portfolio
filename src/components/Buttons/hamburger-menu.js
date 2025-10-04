import { useEffect, useRef } from "react";
import { Anchor } from "../anchor";
import "./hamburger-menu.css"

//Hamburger menu that holds the 3 menu/header buttons that link to internal/external pages
export const HamburgerMenu = ({isOpen, closeMenu}) => {
    const fontSize = "1.5rem";
    const menuRef = useRef(null);

    useEffect(() => {
        if (!isOpen){return;}

        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)){
                if(e.target.closest('.hamburger-button')){return;}
                closeMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen, closeMenu]);

    return (
        <div ref={menuRef} className={`hamburger-menu ${isOpen ? "open" : ""}`}> {/*if isOpen is true then sets the .open attribute which opens the menu via css*/}
            <div className="hamburger-menu-inner">
                <Anchor fontSize={fontSize} link={"#skills"} text={"Skills"} onClick={closeMenu}></Anchor>
                <Anchor fontSize={fontSize} link={"#projects"} text={"Projects"} onClick={closeMenu}></Anchor>
                <Anchor fontSize={fontSize} link={"#about"} text={"About"} onClick={closeMenu}></Anchor>
                <Anchor 
                    fontSize={fontSize} 
                    link={"/CV_Oliver_Young.pdf"} 
                    text={"CV"} 
                    target="_BLANK"
                    rel="noreferrer"
                ></Anchor>
                <Anchor fontSize={fontSize} link={"#contact"} text={"Contact Me"} onClick={closeMenu}></Anchor>
            </div>
        </div>
    );

};