import { useState } from "react";
import { Anchor } from "./anchor"
import { HamburgerMenu } from "./Buttons/hamburger-menu";
import "./navbar.css"

export const Navbar = () => {
    const fontSize = "1.3rem";

    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);      //state to control whether hamburger menu shown or not

    const toggleHamburgerMenu = () => {         //toggles hamburger menu off or on
        setShowHamburgerMenu(!showHamburgerMenu);
    }

    return (
        <nav className="navbar">
            <div className="navbar-btn-container">
                <Anchor fontSize={fontSize} link={"#skills"} text={"Skills"}></Anchor>
                <Anchor fontSize={fontSize} link={"#projects"} text={"Projects"}></Anchor>
                <Anchor fontSize={fontSize} link={"#about"} text={"About"}></Anchor>
                <Anchor 
                    fontSize={fontSize} 
                    link={"/CV_Oliver_Young.pdf"} 
                    text={"CV"} 
                    target="_BLANK"
                    rel="noreferrer"
                ></Anchor>
                <Anchor fontSize={fontSize} link={"#contact"} text={"Contact"}></Anchor>
            </div>
            <button className="hamburger-button hover-mouse" onClick={toggleHamburgerMenu} tabIndex="0">
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>
            <HamburgerMenu isOpen={showHamburgerMenu} closeMenu={() => setShowHamburgerMenu(false)}></HamburgerMenu>
        </nav>
    )
}