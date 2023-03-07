import React from "react";
import {
  AllProjects,
  ProjectSection1,
  ProjectSection2,
  Project,
} from "./projectsStyledComponent";

const Projects = () => {
  return (
    <AllProjects>
      <ProjectSection1>
        <Project>
          <a href="https://lindseysmithtetris.netlify.app/">Tetris</a>
        </Project>
        <Project>
          <a href="#">Project 3</a>
        </Project>
      </ProjectSection1>
      <ProjectSection2>
      <Project>
          <a href="#">Project 2</a>
        </Project>
        <Project>
          <a href="#">Project 4</a>
        </Project>
      </ProjectSection2>
    </AllProjects>
  );
};

export default Projects;
