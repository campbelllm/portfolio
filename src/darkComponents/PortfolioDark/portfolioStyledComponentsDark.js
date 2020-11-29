import styled from 'styled-components/macro';

export const MainPortfolio = styled.div`
  padding: 50px 0px;
  background-color: #212529;
`;

export const SectionOne = styled.div`
   margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
    background-color: #212529;
    
    @media (max-width: 1000px){
      flex-direction: column;
      width: 100%;
      align-items: center;
  } 
`;

export const SectionTwo = styled.div`
     display: flex;
    justify-content: space-evenly;
    background-color: #212529;
    @media (max-width: 1000px){
      flex-direction: column;
      width: 100%;
      align-items: center;
  } 
`;

export const Card = styled.div`
   border: 1px solid #343A40;
    margin-bottom: 50px;
  border-radius: 5px;
  width: 25%;
  & a{
    text-decoration: none;
    font-size: 36px;
    color: white;
  }
  & a:hover {
    color: black;
    text-decoration: none;
   }
  @media (max-width: 1000px){
     width: 50%;
  } 

  @media (max-width: 650px){
     
     width: 80%;
 } 
`;

export const CardImg = styled.div`

    & img {
      width: 100%;
      height: 300px;
      background-color: #343A40;
    }
  
`;

export const CardText = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #343A40;
`;
