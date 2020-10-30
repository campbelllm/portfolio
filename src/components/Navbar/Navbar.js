import React, { useState }  from "react";
import {
  Logo,
  Nav,
  Menu,
  StyledLink,
  Dropdown,
  DropBtn,
  DropdownContent,
} from "./navbarStyledComponents";
// import "./navbar.css";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleClick =() => {
    if(toggle){
      setToggle(false);
    }else{
      setToggle(true);
    }
    
    console.log(toggle);
  }
  const toggleFunction =  toggle ? 'block' : 'none' ;

  return (
    <Nav>
      <Logo>
        {" "}
        <img src={logo} alt="logo" />
        <p>Lindsey Smith</p>
      </Logo>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </Menu>
      <Dropdown>
        <DropBtn onClick = {() => handleClick()} ><FontAwesomeIcon icon={faBars} /></DropBtn>
        <DropdownContent style={{display: `${toggleFunction}` }} >
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </DropdownContent>
      </Dropdown>
    </Nav>
  );
};

export default Navbar;
