import React from "react";
import {
  MainPortfolio,
  SectionOne,
  SectionTwo,
  Card,
  CardImg,
  CardText,
} from "./portfolioStyledComponents";
import

const Portfolio = () => {
  return (
    <MainPortfolio>
      <SectionOne>
        <Card>
          <CardImg>
          <img class="card-img-top" src={"../../Images//project1.png"} alt="Actor Search"/>
          </CardImg>
          <CardText>
            <a href="https://sean-marten.github.io/project-1/" target="_blank" class="card-text">Actor Search</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img class="card-img-top" src="../../Images/weatherDashboard.png" alt="Weather App"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/weatherApp/index.html" target="_blank" class="card-text">Weather App</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img class="card-img-top" src="../../Images/dayPlanner.png" alt="Day Planner"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/dayPlanner/Develop/" target="_blank" class="card-text">Day Planner</a>
          </CardText>
        </Card>
      </SectionOne>
      <SectionTwo>
        <Card>
          <CardImg>
          <img class="card-img-top" src="../../Images/quizGame.png" alt="Quiz Game"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/quizGame/" target="_blank" class="card-text">Quiz Game</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img class="card-img-top" src="../../Images/nytSearch.png" alt="NYT Search"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/NYT-search/NYTSearch/" target="_blank" class="card-text">NYT Search</a>
          </CardText>
        </Card>
        <Card>
          <CardImg>
          <img class="card-img-top" src="../../Images/passwordGenerator.png" alt="Password Generator"/>
          </CardImg>
          <CardText>
          <a href="https://campbelllm.github.io/passwordGenerator/Develop/index.html" target="_blank" class="card-text">Password Gen.</a>
          </CardText>
        </Card>
      </SectionTwo>
    </MainPortfolio>
  );
};

export default Portfolio;
