import React from "react";
import { Logo, Menu, StyledLink } from "./navbarStyledComponents";
import "./navbar.css";
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <Logo>
        {" "}
        <img src={logo} alt="logo" />
        Lindsey Smith
      </Logo>
      <Menu>
        <StyledLink to="/Home">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </Menu>
    </nav>
  );
};

export default Navbar;
