import React from "react";
import {
  MainPortfolio,
  SectionOne,
  SectionTwo,
  Card,
} from './portfolioStyledComponents'

const Portfolio = () => {
  return(
    <MainPortfolio>
    <SectionOne>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </SectionOne>
    <SectionTwo>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </SectionTwo>
    </MainPortfolio>
  )
};

export default Portfolio;
