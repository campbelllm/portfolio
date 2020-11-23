import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";


export const Nav = styled.nav`
    background-color: black;
    color: white;
    border-width: thin;
    border-bottom-style: solid;
    border-bottom-color: #295151;
    position: fixed;
    width: 100%;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  filter: grayscale(100%);

  & img{
    width: 30px;
  }

  & p{
    margin: 0;
    padding: 5px 10px;
    font-size: 20px;
  }
`;

export const Menu = styled.div`
 @media (max-width: 770px){
     display: none;
 } 
  
`;

export const StyledLink = styled(NavLink)`
  color: white;
  margin: 20px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: grey;
  }

  &.active {
    color: grey;
  }
`;



export const Dropdown = styled.div`
   position: relative;
  display: none;
  text-align: -webkit-right;
  @media (max-width: 770px){
     display: inline-block;
 } 
 
`;

export const DropBtn = styled.div`
    padding: 4px 12px;
    font-weight: lighter;
    font-size: 30px;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: rgba(white);
    border-color: rgba(white);
    width: 50px;
    & :hover {
      cursor: pointer;
    }
`;

export const DropdownContent = styled.div`
    display: none;
    flex-direction: column;
  
`;