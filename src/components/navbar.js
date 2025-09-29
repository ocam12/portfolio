import { Anchor } from "./anchor"
import "./navbar.css"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Anchor fontSize={"1.1rem"} link={"#about"} text={"About"}></Anchor>
            <Anchor fontSize={"1.1rem"} link={""} text={"Skills"}></Anchor>
            <Anchor fontSize={"1.1rem"} link={""} text={"Projects"}></Anchor>
            <Anchor fontSize={"1.1rem"} link={""} text={"Contact"}></Anchor>
        </nav>
    )
}