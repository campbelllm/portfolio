import React from "react";
import {
  AllProjects,
  ProjectSection1,
  ProjectSection2,
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
} from "./projectsStyledComponent";

const Projects = () => {
  return (
    <AllProjects>
      <ProjectSection1>
        <ProjectOne>
          <a href="#">Project 1</a>
        </ProjectOne>
        <ProjectOne>
          <a href="#">Project 3</a>
        </ProjectOne>
      </ProjectSection1>
      <ProjectSection2>
      <ProjectOne>
          <a href="#">Project 2</a>
        </ProjectOne>
        <ProjectOne>
          <a href="#">Project 4</a>
        </ProjectOne>
      </ProjectSection2>
    </AllProjects>
  );
};

export default Projects;
