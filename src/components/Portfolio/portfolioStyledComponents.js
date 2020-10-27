import styled from 'styled-components/macro';

export const MainPortfolio = styled.div`

`;

export const SectionOne = styled.div`
   margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
    background-color: #F2E8CF;
`;

export const SectionTwo = styled.div`
     display: flex;
    justify-content: space-evenly;
    background-color: #F2E8CF;
`;

export const Card = styled.div`
   border: 1px solid #9c6c6c;
    margin-bottom: 20px;

`;

export const CardImg = styled.div`
  width: 300px;
    height: 300px;
    background-color: #F2E8CF;
`;

export const CardText = styled.div`
font-size: 36px;
   color: #F2E8CF;

   & :hover {
    color: #295151;
    text-decoration: none;
   }
`;
