import React from "react";
import {
  CurrentlyLearningContainer,
  CurrentlyBox,
  LearningItems,
} from "./currentlyLearningStyledComponents";
const CurrentlyLearning = () => {
  return (
    <CurrentlyLearningContainer>
      <CurrentlyBox>Currently <br/>Learning...</CurrentlyBox>
      <LearningItems>
        <ul>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
          <li>JS</li>
          <li>JQuery</li>
          </ul>
          <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
        </ul>
      </LearningItems>
    </CurrentlyLearningContainer>
  );
};

export default CurrentlyLearning;
