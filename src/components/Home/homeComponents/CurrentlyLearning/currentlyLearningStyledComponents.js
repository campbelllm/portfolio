import styled from "styled-components/macro";

export const CurrentlyLearningContainer = styled.div`
  display: flex;
  background-color: #f2e8cf;
  padding-bottom: 56px;
  height: 400px;
  @media (max-width: 890px) {
    flex-direction: column;
    margin-bottom: 56px;
  }
`;

export const CurrentlyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #819c8b;
  padding: 100px;
  color: #004356;
  font-size: 50px;
  @media (max-width: 890px) {
    height: 30%;
  }
`;

export const LearningItems = styled.div`
  margin: 40px 0px;
  padding: 10px 0;
  width: 100%;
  background-color: #004356;
  color: #c6b886;
  line-height: 2;
  font-size: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  & i {
    font-size: 100px;
    margin: 0 50px 0 50px;
    @media (max-width: 1425px) {
      font-size: 75px;
      margin: 0 40px;
    }
    @media (max-width: 1200px) {
      font-size: 75px;
      margin: 0 20px;
    }
  }
  @media (max-width: 890px) {
    margin-top: 0px;
  }
`;
