import "../styles/Projects.css";
// import { projects } from "../assets/data";
import { useState, useEffect } from "react";

const Projects = () => {
  const [githubProjects, setProjects] = useState([]);

  // Projects fetch from GitHub API
  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/nimitaya/repos"
      );
      const projectsData = await response.json();
      const filteredProjects = projectsData.filter(
        (project) =>
          project.name !== "nimitaya" &&
          project.name !== "my-portfolio" &&
          project.name !== "learning-typescript"
      );
      const sortedProjects = filteredProjects.sort(
        (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)
      );

      setProjects(sortedProjects);
    } catch (error) {
      console.error("Error fetching data from GitHub:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="section-projects scroll-offset" id="projects">
      <h2>My first Projects</h2>

      <div className="projects-container">
        {githubProjects.map((project) => {
          return (
            <div key={project.id} className={`project-card`}>
              <a
                href={`${project.homepage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="project-img-container">
                  <img
                    src={`./projects/${project.name}.png`}
                    alt=""
                    className="project-img"
                  />
                </figure>
              </a>
              <a
                href={`${project.homepage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-card-text">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
