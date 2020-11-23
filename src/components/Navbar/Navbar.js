import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

import {
  Logo,
  Nav,
  Menu,
  StyledLink,
  Dropdown,
  DropBtn,
  DropdownContent,
  Slider,
  Switch
} from "./navbarStyledComponents";
// import "./navbar.css";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [switchState, setSwitchState] = useState(true);
  const history = useHistory();
  
  const handleClick = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  const handleChange= (event) => {
    if (switchState) {
      history.push('/dark');
      setSwitchState(false);
    } else {
      setSwitchState(true);
      history.push('/');
    }
  };
  const toggleFunction = toggle ? "flex" : "none";

  return (
    <Nav>
      <Logo>
        {" "}
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <p>Lindsey Smith</p>
      </Logo>
      <Switch className='switch' onChange={handleChange}>
       
       <input type="checkbox" />
        <Slider className = "slider"></Slider>
        
      </Switch>
      dark
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </Menu>
      <Dropdown>
        <DropBtn onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faBars} />
        </DropBtn>
        <DropdownContent style={{ display: `${toggleFunction}` }}>
          <StyledLink onClick={() => handleClick()} to="/">
            Home
          </StyledLink>
          <StyledLink onClick={() => handleClick()} to="/about">
            About
          </StyledLink>
          <StyledLink onClick={() => handleClick()} to="/contact">
            Contact
          </StyledLink>
          <StyledLink onClick={() => handleClick()} to="/portfolio">
            Portfolio
          </StyledLink>
        </DropdownContent>
      </Dropdown>
    </Nav>
  );
};

export default Navbar;
