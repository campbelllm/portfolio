import styled from "styled-components/macro";
import picture from '../../Images/famPic.JPG'


export const AboutMainComponent = styled.div`
    padding: 160px 0px;
    display: flex;
    justify-content: center;
    background-color: #212529;
`;

export const AboutContainer = styled.div`
    width: 80%; 
    background-color: #343A40;
    padding: 40px;
    margin: 60px 0px;
   color: white;
`;

export const AboutHeader = styled.div`
     border-bottom: 2px solid black;
    margin-bottom: 60px;
    font-size:40px;
`;

export const AboutBody = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px){
      display: flex;
      flex-direction: column;
}
 
`;

export const FamilyPic = styled.div`
    background-image: url(${picture});
    width: 45%;
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: 950px){
     height: 230px;
     width: auto;
     margin-bottom: 50px;
    }

`;

export const AboutText = styled.div`
    width: 50%;
     
    & p{
      
      margin-bottom: 20px;
    }
    @media (max-width: 950px){
     width: 90%;
}
`;
