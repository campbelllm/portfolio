import styled from "styled-components/macro";

export const HeaderSection = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: row ;
  flex-wrap: wrap;
  margin: 0;
`;

export const Name = styled.div`
  font-size: 30px;
  color: black;
  margin: 20px 0;
  width: 100%;
  
`;

export const Title = styled.div`
  font-size: 18px;
  margin: 30px 0 ;
  text-align: left;
  width: 50%;
  font-weight: bold ;
`;

export const Contact = styled.div`
    font-size: 18px;
    margin: 30px 0 ;
    text-align: right;
    width: 50%;
    
     
    
    & a {
        color: black; 
        text-decoration: none;
        background-image: linear-gradient(black, black);
        background-size: 0 1px, auto;
        background-repeat: no-repeat;
        background-position: center bottom;
        transition: all .2s ease-out;
    }
    & a:hover{
        background-size: 100% 1px, auto;
    }

`
