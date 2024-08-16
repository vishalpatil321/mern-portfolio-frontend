import "./Project-container.css"
export const ProjectContainer = ({name,image,gitUrl,liveUrl}) => {
    return (
        <div className="project-container">
            <div className="image1">
                <img src={image} width="100%" height="100%"></img>
               
            </div>
            <h4 className="project-no">{name}</h4>
            <div className="buttons">
               <a href={gitUrl}><button className="button1">
                    Github
                </button></a>
                <a href={liveUrl}><button className="button1">
                    Live demo
                </button></a>
            </div>
        </div>
    );
};