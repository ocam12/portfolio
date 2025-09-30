import "./anchor.css";

export const Anchor = ({text, link, fontSize, className}) => {
    return (
        <a style={{fontSize: fontSize}} className={"anchor " + className} href={link}>{text}</a>
    )
}