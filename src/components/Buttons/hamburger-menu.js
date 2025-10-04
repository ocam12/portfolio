import { Anchor } from "../anchor";
import "./hamburger-menu.css"

//Hamburger menu that holds the 3 menu/header buttons that link to internal/external pages
export const HamburgerMenu = ({isOpen, closeMenu}) => {
    const fontSize = "1.5rem";

    return (
        <div className={`hamburger-menu ${isOpen ? "open" : ""}`}> {/*if isOpen is true then sets the .open attribute which opens the menu via css*/}
            <div className="hamburger-menu-inner">
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
        </div>
    );

};