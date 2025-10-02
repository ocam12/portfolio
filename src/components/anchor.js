import "./anchor.css";

export const Anchor = ({text, link, fontSize, className}) => {
    return (
        <a style={{fontSize: fontSize}} className={"hover-mouse anchor " + className} href={link}>{text}</a>
    )
}