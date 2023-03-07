import React from "react";
import {
  AllProjects,
  ProjectSection1,
  ProjectSection2,
  Project1,
  Project2,
  Project3,
  Project4,
} from "./projectsStyledComponent";

const Projects = () => {
  return (
    <AllProjects>
      <ProjectSection1>
        <Project1 >
          <a href="https://lindseysmithtetris.netlify.app/">Tetris</a>
          
        </Project1>
        <Project3>
          <a href="#">Project 3</a>
        </Project3>
      </ProjectSection1>
      <ProjectSection2>
      <Project2>
          <a href="#">Project 2</a>
        </Project2>
        <Project4>
          <a href="#">Project 4</a>
        </Project4>
      </ProjectSection2>
    </AllProjects>
  );
};

export default Projects;
