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
        padding: 10px 20px ;
    }
    & a:before{
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        border: 1px solid transparent;
        box-sizing: border-box;
       
    }
    & a:hover:before{
        color: black;
        text-decoration: none; 
        border: 1px solid black;
        transition: height 0.5s linear,
                    width 0.5s linear 0.5s;
        border-right: none;
        border-bottom: none;
    }
    & a:after{
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        border: 1px solid transparent;
        box-sizing: border-box;
       
    }
    & a:hover:after{
        color: black;
        text-decoration: none; 
        border: 1px solid black;
        transition: height 0.5s linear,
                    width 0.5s linear 0.5s;
        border-left: none;
        border-top: none;
    }

`
