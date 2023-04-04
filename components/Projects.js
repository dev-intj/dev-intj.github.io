import React from "react";
import data from "@data/index";
import { ProjectEntry } from "./Projects/item";

const Projects = () => {
  return (
    <div className="portfolio-projects">
      <div className="container">
        <div className="projects-list">
          {data.projects.map((project, index) => (
            <ProjectEntry project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
