import styled from "styled-components/macro";
import picture from '../../Images/famPic.JPG'

export const AboutMainComponent = styled.div`
    padding: 100px 0px;
    display: flex;
    justify-content: center;
`;

export const AboutContainer = styled.div`
    width: 80%; 
    background-color: #819C8B;
    padding: 40px;
    margin: 60px 0px;
`;

export const AboutHeader = styled.div`
     border-bottom: 2px solid black;
    margin-bottom: 60px;
    font-size:40px;
`;

export const AboutBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FamilyPic = styled.div`
    background-image: url(/static/media/famPic.15ca867c.JPG);
    width: 45%;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const AboutText = styled.div`
    width: 50%;
     
    & p{
      
      margin-bottom: 20px;
    }
`;
