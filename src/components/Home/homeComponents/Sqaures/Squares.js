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

export default Squares;
{
  /* <div class="squareSection row">
<div class="square col-md-4 ">
  <div class="squareBody">
    <a href="about.html" class="card-text">
      About
    </a>
  </div>
</div>
<div class="square col-md-4">
  <div class="squareBody">
    <a href="portfolio.html" class="card-text">
      Portfolio
    </a>
  </div>
</div>
<div class="square col-md-4">
  <div class="squareBody">
    <a href="contact.html" class="card-text">
      Contact
    </a>
  </div>
</div>
</div> */
}
