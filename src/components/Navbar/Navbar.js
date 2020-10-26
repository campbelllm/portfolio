import React from "react";
import { Logo, Nav, Menu, StyledLink } from "./navbarStyledComponents";
// import "./navbar.css";
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        {" "}
        <img src={logo} alt="logo" />
        <p>Lindsey Smith</p>
      </Logo>
      <Menu>
        <StyledLink to="/Home">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        </Menu>
    </Nav>
  );
};

export default Navbar;
