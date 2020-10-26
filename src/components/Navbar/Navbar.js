import React from 'react';
import { Logo, StyledLink } from './navbarStyledComponents'
import './navbar.css';
import logo from '../../Images/logo.png'

const MainNavbar = () => {
  return(
    <>
    <Logo>  <img src={logo} alt="logo"/>Lindsey Smith</Logo>
     <StyledLink to="/about">Lindsey</StyledLink>
     <StyledLink to="/welcome">Lindsey</StyledLink>
     <StyledLink to="/home">Lindsey</StyledLink>
     <StyledLink to="/stuff">Lindsey</StyledLink>
    </>  

   )
};

export default MainNavbar;