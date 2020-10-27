import React from "react";
import Welcome from './homeComponents/Welcome/Welcome'
import Squares from './homeComponents/Sqaures/Squares'
import CurrentlyLearning from './homeComponents/CurrentlyLearning/CurrentlyLearning'
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