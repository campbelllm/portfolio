import React from "react";
import Welcome from './homeComponentsDark/WelcomeDark/WelcomeDark'
import Squares from './homeComponentsDark/SqauresDark/SquaresDark'
import CurrentlyLearning from './homeComponentsDark/CurrentlyLearningDark/CurrentlyLearningDark'
import NavbarDark from '../NavbarDark/NavbarDark'
const Home = () => {
  return (
    <>
    <NavbarDark/>
     <Welcome/>
     <Squares />
     <CurrentlyLearning />
    </>
  );
};


export default Home;