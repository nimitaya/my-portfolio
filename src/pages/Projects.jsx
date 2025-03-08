import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="section-projects scroll-offset" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card project-card-grow">
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
        </div>
      </div>
    </section>
  );
};
export default Projects;
