import React from "react";
import Welcome from './homeComponentsDark/WelcomeDark/WelcomeDark'
import Squares from './homeComponentsDark/SqauresDark/SquaresDark'
import CurrentlyLearning from './homeComponentsDark/CurrentlyLearningDark/CurrentlyLearningDark'
const Home = () => {
  return (
    <>
     <Welcome/>
     <Squares />
     <CurrentlyLearning />
    </>
  );
};


export default Home;