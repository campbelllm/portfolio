import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SquareSection = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #212529;
  padding: 60px 0;

  @media (max-width: 600px){
      flex-direction: column;
      align-items: center;
}
`;

export const SquareBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  background-color: #343A40;
  @media (max-width: 600px){
      margin-bottom: 30px;
      width: 50%;
}
`;

export const StyledLink = styled(Link)`
  font-size: 36px;
  color: white;
  text-decoration: none;

  &:hover {
    color: grey;
    text-decoration: none;
  }
`;
