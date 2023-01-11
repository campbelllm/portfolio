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
  
`;

export const Title = styled.div`
  font-size: 20px;
  color: black;
  margin: 30px 0 ;
  text-align: left;
  width: 50%;
  font-weight: bold ;
`;

export const Contact = styled.div`
    font-size: 23.4px;
    margin: 30px 0 ;
    text-align: right;
    width: 50%;
    
     
    
    & a {
        color: black; 
        text-decoration: none;
    }
    & a:hover{
        color: pink;
        text-decoration: none; 
    }

`
