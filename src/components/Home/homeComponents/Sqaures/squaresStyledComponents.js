import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SquareSection = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f2e8cf;
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
  background-color: #9c6c6c;
  border-radius: 1.5rem;
  @media (max-width: 600px){
      margin-bottom: 30px;
      width: 50%;
}
`;

export const StyledLink = styled(Link)`
  font-size: 36px;
  color: #f2e8cf;
  text-decoration: none;

  &:hover {
    color: #295151;
    text-decoration: none;
  }
`;
