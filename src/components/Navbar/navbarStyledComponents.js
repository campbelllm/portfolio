import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";


export const Nav = styled.nav`
    background-color: #F2E8CF;
    color: #295151;
    border-width: thin;
    border-bottom-style: solid;
    border-bottom-color: #295151;
    position: fixed;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

export const Logo = styled.div`
  display: flex;

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
  
`;

export const StyledLink = styled(NavLink)`
  color: #295151;
  margin: 20px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #9c6c6c;
  }

  &.active {
    color: #805858;
  }
`;
