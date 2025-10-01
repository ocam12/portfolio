import "./skill-btn.css";

export const SkillButton = ({icon: Icon}) => {
    return (
        <button className="skill-btn hover-mouse">
            <Icon></Icon>
        </button>
    )
}