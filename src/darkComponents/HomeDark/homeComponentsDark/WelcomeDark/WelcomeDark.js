import React from 'react';
import { Jumbotron, Hero, WelcomeText } from './welcomeStyledComponentsDark';

const Welcome = () =>{
  return(
    <Jumbotron>
      <Hero />
      <WelcomeText>WELCOME</WelcomeText>
    </Jumbotron>
  )
}

export default Welcome;