import styled from "styled-components/macro";

export const CurrentlyLearningContainer = styled.div`
    display: flex;
    background-color: #212529;
    padding-bottom: 56px;
    height: 400px;
    @media (max-width: 820px){
     flex-direction: column;
     margin-bottom: 56px;
}
  
`;

export const CurrentlyBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding:100px;
    color: white;
    font-size: 72px;
    @media (max-width: 820px){
      height: 30%;
     
}
`;

export const LearningItems = styled.div`
    margin: 50px 0px;
    width: 100%;
    background-color: #343A40;
    color: white;
    line-height: 2;
    font-size: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    & i {
      font-size: 80px;
    margin: 0 50px 0 50px;
    }
    @media (max-width: 820px){
      margin-top: 0px;
}
`;