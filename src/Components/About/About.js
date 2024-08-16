import "./About.css";
import vishal from "../../assets/vishal.jpg";
import vishal_resume from "../../assets/vishal_resume.docx";
import { GiAchievement } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { RiVoiceprintLine } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { SiMinds } from "react-icons/si";
import { RiPresentationLine } from "react-icons/ri";
import { FaPeopleCarry } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { Footer } from "../Footer";


export const About = () => {
    

    return(
        <>
        <div className="about">
            <div className="profile">
           <div className="my-image">  
            <div className="image3">
               <img src={vishal} className="vishal"></img>
            </div>
            </div> 

            <div className="text3">
                <p>Hello,I'm</p>
                
                <h1>Vishal Dhone</h1>
                
                <h3>Mern Stack Developer</h3>
                <br/>
              <div className="buttons">
                 <a href={vishal_resume} download={vishal_resume}><button>download cv</button></a>
               
               </div>
                
            </div>
            </div>
            <br/><br/>
         </div>
         <br/>
        <div className="know-more">
                <div className="heading1">
                    <p>Get To Know More</p>
                    <h2>About Me</h2>
                </div>
                <div className="content1">
                    <div className="container1">

                    <h2><GiAchievement/></h2>
                    <h4 className="a">Experience</h4> 
                    <p>Fresher</p>
                       
                    </div>
                    <div className="container2">
                       <h2><IoPeople /></h2>

                       <h4 className="a">Education</h4>
                       <p>• B.Sc. Graduate from DAVV University,Indore.</p>

                      <p>• Persuing in Mca from sage University ,Indore.</p>
                        
                    </div>
                </div>
                <div className="container3">
                    <div className="text2">
                      <p>Logical and organised individual with a strong foundation in website development.proficient in programming language C++ | C and in web development HTML | CSS | JAVASCRIPT and framework BOOTSTRAP | REACT JS..Seeking to raise coding by providing error-free codes . Ability to translate business requirements into innovative solutions in web development. Excellent teamwork , interpersonal and communication skills.</p>
                    </div>
                </div>
        </div>
        <div className="heading2">
                    <p>This Is My</p>
                    <h2>Soft Skills</h2>
        </div>
        <div className="content3">
           
            <div className="soft-skills">
                <div className="skill1">
                    <h2><RiVoiceprintLine /></h2>
                    <br/>
                    <p>Communication</p>
                </div>
                <div className="skill2">
                    <h2><GoGoal /></h2>
                    <br/>
                    <p>Pricision</p>
                </div>
                <div className="skill3">
                    <h2><SiMinds /></h2>
                    <br/>
                   <p>Active learner</p> 
                </div>
                <div className="skill4">
                 <h2><FaPeopleCarry /></h2>
                    <br/>
                    <p>Collaboration</p>
                </div>
                <div className="skill5">
                <h2><RiPresentationLine /></h2>
                <br/>
                   <p>Presentaion</p> 
                </div>
            </div>

        </div>
        <div className="heading2">
                    <p>Something About</p>
                    <h2>My Interests</h2>
        </div>
        <div className="content4">
           
            <div className="interests">
                <div className="interest1">
                    <h2><MdOutlineSportsGymnastics /></h2>
                    <br/>
                    <p>Healthcare</p>
                </div>
                <div className="interest2">
                    <h2><FaCarSide /></h2>
                    <br/>
                    <p>Travelling</p>
                </div>
                <div className="interest3">
                    <h2><FaMusic /></h2>
                    <br/>
                   <p>Music</p> 
                </div>
                <div className="interest4">
                 <h2><FaCamera /></h2>
                    <br/>
                    <p>Photography</p>
                </div>
                <div className="interest5">
                <h2><IoFootball /></h2>
                <br/>
                   <p>Games</p> 
                </div>
            </div>

        </div>
        <hr></hr>
        <Footer/>
        
        </>
    );
};