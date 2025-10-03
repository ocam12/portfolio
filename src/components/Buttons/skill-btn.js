import "./skill-btn.css";

export const SkillButton = ({icon: Icon, onMouseEnter, onMouseLeave}) => {
    return (
        <button className="skill-btn hover-mouse" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} tabIndex="0">
            <Icon></Icon>
        </button>
    )
}