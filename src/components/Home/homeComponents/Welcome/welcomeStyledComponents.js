import styled from "styled-components/macro";
import welcomeImg from '../../../../Images/Welcome.png'

export const Jumbotron = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.div`
  background: url('${welcomeImg}');
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 100%;
`;

export const WelcomeText = styled.div`
    position: absolute;
    font-weight: bold;
    font-family: 'Indie Flower', cursive;
    animation-duration: 5s;
    animation-name: opacity;
    font-size: 200px;
    opacity: 0.7;

   @keyframes opacity {
    0% {
      opacity: 0;
      color: #F2E8CF;
    }

    100% {
      opacity: 1;
      color: black;
    }
  }

  @media screen and (min-width: 760px){
      .welcome-text{
          font-size: 200px;
      }
  }

  @media screen and (max-width: 759px){
      .welcome-text{
          font-size: 25vw;
      }
  };
`;