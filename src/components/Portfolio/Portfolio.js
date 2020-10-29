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
import nytSearchImg from "../../Images/nytSearch.png";
import passwordGeneratorImg from "../../Images/passwordGenerator.png" ;

const Portfolio = () => {
  return (
    <MainPortfolio>
      <SectionOne>
        <Card>
          <CardImg>
          <img src={actorSearchImg} alt="Actor Search"/>
          </CardImg>
          <CardText>
            <a href="https://sean-marten.github.io/project-1/" target="_blank" rel="noreferrer noopener" class="card-text">Actor Search</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img src={weatherAppImg} alt="Weather App"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/weatherApp/index.html" target="_blank" rel="noreferrer noopener" class="card-text">Weather App</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img src={dayPlannerImg} alt="Day Planner"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/dayPlanner/Develop/" target="_blank" rel="noreferrer noopener" class="card-text">Day Planner</a>
          </CardText>
        </Card>
      </SectionOne>
      <SectionTwo>
        <Card>
          <CardImg>
          <img src={quizGameImg} alt="Quiz Game"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/quizGame/" target="_blank" rel="noreferrer noopener" class="card-text">Quiz Game</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img src={nytSearchImg} alt="NYT Search"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/NYT-search/NYTSearch/" target="_blank" rel="noreferrer noopener" class="card-text">NYT Search</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img src={passwordGeneratorImg} alt="Password Generator"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/passwordGenerator/Develop/index.html" target="_blank" rel="noreferrer noopener" class="card-text">Password Gen.</a>
          </CardText>
        </Card>
      </SectionTwo>
    </MainPortfolio>
  );
};

export default Portfolio;
