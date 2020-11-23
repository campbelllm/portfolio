import React from "react";
import {
  CurrentlyLearningContainer,
  CurrentlyBox,
  LearningItems,
} from "./currentlyLearningStyledComponentsDark";
const CurrentlyLearning = () => {
  return (
    <CurrentlyLearningContainer>
      <CurrentlyBox>Currently <br/>Learning...</CurrentlyBox>
      <LearningItems>
          <i class="devicon-html5-plain-wordmark"></i>
          <i class="devicon-css3-plain-wordmark"></i>
          <i class="devicon-bootstrap-plain-wordmark"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-jquery-plain-wordmark"></i>
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-nodejs-plain-wordmark"></i>
          <i class="devicon-express-original-wordmark"></i>
          <i class="devicon-mysql-plain-wordmark"></i>
          <i class="devicon-mongodb-plain-wordmark"></i>
      </LearningItems>
    </CurrentlyLearningContainer>
  );
};

export default CurrentlyLearning;
