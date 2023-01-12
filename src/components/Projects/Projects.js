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
      <ProjectOne />
      <ProjectTwo/>
    </ProjectSection1>
    <ProjectSection2>
        <ProjectThree/>
      <ProjectFour/>
    </ProjectSection2>
    </AllProjects>
  );
};

export default Projects;
