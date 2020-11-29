import styled from "styled-components/macro";
import welcomeImg from '../../../../Images/Welcome.png'

export const Jumbotron = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.div`
  background: linear-gradient(45deg,#171614, #66717E, #212529 , #343A40,#495057, #6C757D);
  background-size: 600% 100%;
  background-repeat: no-repeat;
  animation: gradient 16s linear infinite;
  animation-direction: alternate;
  height: 600px;
  width: 100%;
  @keyframes gradient {
    0% {background-position: 0%}
    100% {background-position: 100%}
}
`;

export const WelcomeText = styled.div`
    position: absolute;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    animation-duration: 5s;
    animation-name: opacity;
    font-size: 150px;
    opacity: 0.7;
    color: white;

   @keyframes opacity {
    0% {
      opacity: 0;
      color: black;
    }

    100% {
      opacity: 1;
      color: white;
    }
  }

 @media (max-width: 800px){
      
          font-size: 100px;
      
  }

  
`;