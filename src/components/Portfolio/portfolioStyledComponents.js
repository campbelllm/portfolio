import styled from 'styled-components/macro';

export const MainPortfolio = styled.div`
  padding: 50px 0px;
`;

export const SectionOne = styled.div`
   margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
    background-color: #F2E8CF;
    
    @media (max-width: 1000px){
      flex-direction: column;
      width: 50%;
      align-items: center:
  } 
`;

export const SectionTwo = styled.div`
     display: flex;
    justify-content: space-evenly;
    background-color: #F2E8CF;
`;

export const Card = styled.div`
   border: 1px solid #9c6c6c;
    margin-bottom: 20px;
  border-radius: 5px;
`;

export const CardImg = styled.div`

    & img {
      width: 300px;
      height: 300px;
      background-color: #F2E8CF;
    }
  
`;

export const CardText = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9c6c6c;

  & a{
    text-decoration: none;
    font-size: 36px;
    color: #F2E8CF;
  }

   & a:hover {
    color: #295151;
    text-decoration: none;
   }
`;
