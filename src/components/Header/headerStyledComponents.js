import styled from "styled-components/macro";

export const HeaderSection = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: row ;
  flex-wrap: wrap;
`;

export const Name = styled.div`
  font-size: 30px;
  color: black;
  margin: 20px 0;
  width: 100%;
  

  &:h1 {
    margin-top: 0;
    padding-top: 0;
    line-height: 1;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  color: black;
  margin: 30px 0 ;
  text-align: left;
  width: 50%;

 
`;

export const Contact = styled.div`
    font-size: 20px;
    color: black; 
    margin: 30px 0 ;
    text-align: right;
    width: 50%;


`
