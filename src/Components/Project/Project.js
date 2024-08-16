import { ProjectContainer } from "../Project-container";
import "./Project.css";
import contact from "../../assets/contact manager.png";
import sProvider from "../../assets/sProvider.png";
import newsApp from "../../assets/newsApp.png";
import { Footer } from "../Footer";

export const Project = () => {
    const project = [
        {
            image: sProvider,
            name: "Service Provider",
            git_url: "https://github.com/vishalpatil321/S-provider-forntend",
            live_url: "https://s-provider-forntend.vercel.app/",
        },
        {
            image: newsApp,
            name: "News App",
            git_url: "https://github.com/vishalpatil321/mernFront",
            live_url: "https://mern-front-nu.vercel.app/",
        },
        {
            image: contact,
            name:  "Contact Manager",
            git_url: "https://github.com/vishalpatil321/contact-manager",
            live_url: "https://contact-manager-rust.vercel.app/",
        },
    ];
   
    return(
        <>
        <div className="heading1">
                    <p>Browse My Recent</p>
                    <h2>Projects</h2>
                </div>
        <div className="project-container1">
            <div className="project-container2">
              {project.map((item) =>  <ProjectContainer name={item.name} image={item.image} gitUrl={item.git_url} liveUrl={item.live_url}/>)}
            </div>
        </div>
        <hr/>
        <Footer/>
        </>
    )
}