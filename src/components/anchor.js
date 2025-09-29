import "./anchor.css";

export const Anchor = ({text, link, fontSize}) => {
    return (
        <a style={{fontSize: fontSize}} className="anchor" href={link}>{text}</a>
    )
}