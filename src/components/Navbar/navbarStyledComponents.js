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
 @media (max-width: 770px){
     display: none;
 } 
  
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
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.1);
    width: 50px;
    & :hover {
      cursor: pointer;
    }
`;

export const DropdownContent = styled.div`
    display: none;
    flex-direction: column;
  
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  & .switch, & input {
  opacity: 0;
  width: 0;
  height: 0;
}
 & input:checked, &.slider {
  background-color: #2196F3;
}

 & input:focus, &.slider {
  box-shadow: 0 0 1px #2196F3;
}

& input:checked, &.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
`;

/* Hide default HTML checkbox */
// .switch input {
//   opacity: 0;
//   width: 0;
//   height: 0;
// }

/* The slider */
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
   & :before{
    position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  }
`;

// .slider:before {
//   position: absolute;
//   content: "";
//   height: 26px;
//   width: 26px;
//   left: 4px;
//   bottom: 4px;
//   background-color: white;
//   -webkit-transition: .4s;
//   transition: .4s;
// }

// input:checked + .slider {
//   background-color: #2196F3;
// }

// input:focus + .slider {
//   box-shadow: 0 0 1px #2196F3;
// }

// input:checked + .slider:before {
//   -webkit-transform: translateX(26px);
//   -ms-transform: translateX(26px);
//   transform: translateX(26px);
// }

// /* Rounded sliders */
// .slider.round {
//   border-radius: 34px;
// }

// .slider.round:before {
//   border-radius: 50%;
// }
