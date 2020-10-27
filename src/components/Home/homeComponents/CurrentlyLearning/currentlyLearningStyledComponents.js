import styled from "styled-components/macro";

export const CurrentlyLearningContainer = styled.div`
    display: flex;
    background-color: #F2E8CF;
    padding-bottom: 56px;
    height: 400px;
`;

export const CurrentlyBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #819C8B;
    padding:100px;
    color: #004356;
    font-size: 72px;
`;

export const LearningItems = styled.div`
    margin: 50px 0px;
    width: 100%;
    background-color: #004356;
    color: #C6B886;
    line-height: 2;
    font-size: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & ul {
      list-style: none;
    }
`;