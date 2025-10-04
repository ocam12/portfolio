import "./anchor.css";

export const Anchor = ({text, link, fontSize, className, ...rest}) => {
    return (
        <a style={{fontSize: fontSize}} className={"hover-mouse anchor " + className} href={link} tabIndex="0" {...rest}>{text}</a>
    )
}