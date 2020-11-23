import React from "react";
import {
  MainPortfolio,
  SectionOne,
  SectionTwo,
  Card,
  CardImg,
  CardText,
} from "./portfolioStyledComponentsDark";
import actorSearchImg from "../../Images//project1.png";
import weatherAppImg from "../../Images/weatherDashboard.png";
import dayPlannerImg from "../../Images/dayPlanner.png";
import quizGameImg from "../../Images/quizGame.png";
import passwordGeneratorImg from "../../Images/passwordGenerator.png";
import issUse from "../../Images/issUse.png";

const Portfolio = () => {
  return (
    <MainPortfolio>
      <SectionOne>
        <Card>
          <a
            href="https://iss-use.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CardImg>
              <img src={issUse} alt="issUse" />
            </CardImg>
            <CardText>issUse</CardText>
          </a>
        </Card>
        <Card>
          <a
            href="https://sean-marten.github.io/project-1/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CardImg>
              <img src={actorSearchImg} alt="Actor Search" />
            </CardImg>
            <CardText>Actor Search</CardText>
          </a>
        </Card>
        <Card>
          <a
            href="https://campbelllm.github.io/weatherApp/index.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CardImg>
              <img src={weatherAppImg} alt="Weather App" />
            </CardImg>
            <CardText>Weather App</CardText>
          </a>
        </Card>
      </SectionOne>
      <SectionTwo>
        <Card>
          <a
            href="https://campbelllm.github.io/quizGame/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CardImg>
              <img src={quizGameImg} alt="Quiz Game" />
            </CardImg>
            <CardText>Quiz Game</CardText>
          </a>
        </Card>
        <Card>
          <a
            href="https://campbelllm.github.io/dayPlanner/Develop/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CardImg>
              <img src={dayPlannerImg} alt="Day Planner" />
            </CardImg>
            <CardText>Day Planner</CardText>
          </a>
        </Card>
        <Card>
          <a
            href="https://campbelllm.github.io/passwordGenerator/Develop/index.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CardImg>
              <img src={passwordGeneratorImg} alt="Password Generator" />
            </CardImg>
            <CardText>Password Gen.</CardText>
          </a>
        </Card>
      </SectionTwo>
    </MainPortfolio>
  );
};

export default Portfolio;
