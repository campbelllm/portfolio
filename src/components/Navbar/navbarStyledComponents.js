import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import Flexbox from "flexbox-react";

export const Navbar = styled.nav`
    background-color: #F2E8CF;
    color: #295151;
    border-width: thin;
    border-bottom-style: solid;
    border-bottom-color: #295151;
    position: fixed;
`;

export const Logo = styled.div`
  display: inline-block;
  & img{
    width: 30px;
  }
`;

export const Menu = styled.div`
  float: right;
`;

export const StyledLink = styled(NavLink)`
  color: #295151;
  margin-right: 20px;
  text-decoration: none;


  &:hover {
    color: #9c6c6c;
  }

  &.active {
    color: #805858;
  }
`;
