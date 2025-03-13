import "../styles/Projects.css";
import { projects } from "../assets/data";

const Projects = () => {
  return (
    <section className="section-projects scroll-offset" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">

      {projects.map((project, index)=> {
        // Determine if the index matches the pattern
        const isGrowCard = ((index+1) % 4 === 0 || (index+1) % 4 === 1);
        return (
        <div key={index+project.title} className={`project-card ${isGrowCard ? "project-card-grow" : ""}`}>
        <figure className="project-img-container">
          <img src={project.image} alt="" className="project-img" />
        </figure>
        <div className="project-card-text">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
      )})}

        {/* <div className="project-card project-card-grow">
          <figure className="project-img-container">
            <img src="./dragon6.png" alt="" className="project-img" />
          </figure>
          <div className="project-card-text">
            <h3>Project Name 1</h3>
            <p>Short information about the project or what was done...</p>
          </div>
        </div>

        <div className="project-card">
          <figure className="project-img-container">
            <img src="./DragonAvatar.jpeg" alt="" className="project-img" />
          </figure>
          <div className="project-card-text">
            <h3>Project Name 2</h3>
            <p>Short information about the project or what was done...</p>
          </div>
        </div>

        <div className="project-card">
          <figure className="project-img-container">
            <img src="./dragon1.jpg" alt="" className="project-img" />
          </figure>
          <div className="project-card-text">
            <h3>Project Name 3</h3>
            <p>Short information about the project or what was done...</p>
          </div>
        </div>

        <div className="project-card project-card-grow">
          <figure className="project-img-container">
            <img src="./dragon7.jpg" alt="" className="project-img" />
          </figure>
          <div className="project-card-text">
            <h3>Project Name 4</h3>
            <p>Short information about the project or what was done...</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Projects;
