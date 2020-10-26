import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Logo = styled.div`
  & img{
    width: 30px;
  }
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
