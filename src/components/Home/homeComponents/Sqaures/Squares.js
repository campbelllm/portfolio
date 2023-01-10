import React from "react";
import {
  SquareSection,
  SquareBody,
  StyledLink,
} from "./squaresStyledComponents";

const Squares = () => {
  return (
    <SquareSection>
      <SquareBody>
        <StyledLink to="/about">About</StyledLink>
      </SquareBody>

      <SquareBody>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </SquareBody>

      <SquareBody>
        <StyledLink to="/contact">Contact</StyledLink>
      </SquareBody>
    </SquareSection>
  );
};

// export default Squares;
