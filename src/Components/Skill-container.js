import './Skill-container.css';
import { TiTick } from "react-icons/ti";
export const SkillContainer = ({text,name,percentage}) => {
   

    return(
       <div className="skill-container">
            <h4><TiTick/></h4>
            <div className="text">
            <h3>{name}</h3>
            <p>{text}</p>
            </div>
        </div>
    );
};