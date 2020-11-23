import React from 'react';
import { Jumbotron, Hero, WelcomeText } from './welcomeStyledComponents';

const Welcome = () =>{
  return(
    <Jumbotron>
      <Hero />
      <WelcomeText>WELCOME</WelcomeText>
    </Jumbotron>

    // <div class="welcome jumbotron-fluid">
    //   <div class="hero"></div>
    //   <div class="welcome-text">WELCOME</div>
    // </div>
  )
}

export default Welcome;