import { Anchor } from "./anchor"
import "./navbar.css"

export const Navbar = () => {
    const fontSize = "1.3rem";
    return (
        <nav className="navbar">
            <Anchor fontSize={fontSize} link={"#skills"} text={"Skills"}></Anchor>
            <Anchor fontSize={fontSize} link={"#projects"} text={"Projects"}></Anchor>
            <Anchor fontSize={fontSize} link={"#about"} text={"About"}></Anchor>
            <Anchor fontSize={fontSize} link={""} text={"CV"}></Anchor>
            <Anchor fontSize={fontSize} link={""} text={"Contact"}></Anchor>
        </nav>
    )
}