import React from "react";
import Welcome from './homeComponentsDark/WelcomeDark/WelcomeDark'
import Squares from './homeComponentsDark/SqauresDark/SquaresDark'
import CurrentlyLearning from './homeComponentsDark/CurrentlyLearningDark/CurrentlyLearningDark'
import NavbarDark from '../NavbarDark/NavbarDark'
import FooterDark from '../FooterDark/FooterDark'
const Home = () => {
  return (
    <>
    <NavbarDark/>
     <Welcome/>
     <Squares />
     <CurrentlyLearning />
     <FooterDark/>
    </>
  );
};


export default Home;