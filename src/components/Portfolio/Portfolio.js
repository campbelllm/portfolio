import React from "react";
import {
  MainPortfolio,
  SectionOne,
  SectionTwo,
  Card,
  CardImg,
  CardText,
} from "./portfolioStyledComponents";
import actorSearchImg from "../../Images//project1.png";
import weatherAppImg from "../../Images/weatherDashboard.png";
import dayPlannerImg from "../../Images/dayPlanner.png" ;
import quizGameImg from "../../Images/quizGame.png";
import passwordGeneratorImg from "../../Images/passwordGenerator.png" ;
import issUse from "../../Images/issUse.png" ;

const Portfolio = () => {
  return (
    <MainPortfolio>
      <SectionOne>
      <Card>
          <CardImg>
          <img src={issUse} alt="issUse"/>
          </CardImg>
          <CardText>
            <a href="https://iss-use.herokuapp.com/" target="_blank" rel="noreferrer noopener">issUse</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img src={actorSearchImg} alt="Actor Search"/>
          </CardImg>
          <CardText>
            <a href="https://sean-marten.github.io/project-1/" target="_blank" rel="noreferrer noopener">Actor Search</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img src={weatherAppImg} alt="Weather App"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/weatherApp/index.html" target="_blank" rel="noreferrer noopener">Weather App</a>
          </CardText>
        </Card>
      </SectionOne>
      <SectionTwo>
        <Card>
          <CardImg>
          <img src={quizGameImg} alt="Quiz Game"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/quizGame/" target="_blank" rel="noreferrer noopener">Quiz Game</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img src={dayPlannerImg} alt="Day Planner"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/dayPlanner/Develop/" target="_blank" rel="noreferrer noopener">Day Planner</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img src={passwordGeneratorImg} alt="Password Generator"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/passwordGenerator/Develop/index.html" target="_blank" rel="noreferrer noopener">Password Gen.</a>
          </CardText>
        </Card>
      </SectionTwo>
    </MainPortfolio>
  );
};

export default Portfolio;
