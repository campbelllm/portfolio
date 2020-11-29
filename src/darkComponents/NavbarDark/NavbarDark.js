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
  Button,
  Slider,
  Switch,
} from "./navbarStyledComponentsDark";
// import "./navbar.css";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ToggleSwitch from './ToggleSwitch'

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
  
        history.push('/');
   
  };
   
  

  const toggleFunction = toggle ? "flex" : "none";

  return (
    <Nav>
      <Logo>
        {" "}
        <a href="/dark">
          <img src={logo} alt="logo" />
        </a>
        <p>Lindsey Smith</p>
      </Logo>
      {/* <ToggleSwitch onChange={handleChange}></ToggleSwitch> */}
     {/* <Switch className='switch' onClick={handleChange}>
       
      <input type="checkbox" />
       <Slider className = "slider"></Slider>
       
     </Switch>
     dark */}
     <Button onClick={() => handleChange()}>
       Light Mode
     </Button>
      <Menu>
        <StyledLink to="/dark">Home</StyledLink>
        <StyledLink to="/aboutdark">About</StyledLink>
        <StyledLink to="/contactdark">Contact</StyledLink>
        <StyledLink to="/portfoliodark">Portfolio</StyledLink>
      </Menu>
      <Dropdown>
        <DropBtn onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faBars} />
        </DropBtn>
        <DropdownContent style={{ display: `${toggleFunction}` }}>
          <StyledLink onClick={() => handleClick()} to="/dark">
            Home
          </StyledLink>
          <StyledLink onClick={() => handleClick()} to="/aboutdark">
            About
          </StyledLink>
          <StyledLink onClick={() => handleClick()} to="/contactdark">
            Contact
          </StyledLink>
          <StyledLink onClick={() => handleClick()} to="/portfoliodark">
            Portfolio
          </StyledLink>
        </DropdownContent>
      </Dropdown>
    </Nav>
  );
};

export default Navbar;
