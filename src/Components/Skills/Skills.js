import { Footer } from "../Footer";
import { SkillContainer } from "../Skill-container";
import "./Skills.css";

export const Skills = () => {
    const skill = [
        {
           name : "HTML",
           text : "Markup Language",
          
        },
        {
            name : "CSS",
            text : "Styling Language",
          

         },
         {
            name : "Bootstrap",
            text : "Css Framework",
        
         },
         {
            name : "JavaScript",
            text : "Programming Language",
            
         },
         {
            name : "React js.",
            text : "Js. Library",
         
         },
         {
            name : "Node js.",
            text : "Server Enviroment",
        
         },
         {
            name:"Redux",
            text:"State Management Toolkit"
         },
         {
            name : "C++",
            text : "Programming Language",
            
         },

        
    ]
    
    return(
      <>
        <div className="heading1">
            <p>I Have Some</p>
            <h2>Technical Skills</h2>
         </div>
        <div className="container">
         <div className="skills">
            {skill.map((item) => <SkillContainer text={item.text} name={item.name} percentage={item.percentage}/>)}
         </div>
        </div>
        <hr/>
        <Footer/>
      </>
       )
};