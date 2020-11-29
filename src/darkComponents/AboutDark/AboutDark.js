import React from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutBody,
  FamilyPic,
  AboutText,
  AboutMainComponent
} from "./aboutStyledComponentsDark";
import NavbarDark from '../../darkComponents/NavbarDark/NavbarDark'
import FooterDark from '../../darkComponents/FooterDark/FooterDark'

const About = () => {
  return (
    <div>
    <NavbarDark/>
    <AboutMainComponent>
      
    <AboutContainer>
      <AboutHeader>Hello, I'm Lindsey</AboutHeader>
      <AboutBody>
      <FamilyPic /> 
      <AboutText>
      
        <p>
          First off, who are these people in this picture. Well theres me,
          obviously, my husband Bryan, and our two amazing kids! These 3 are my
          all time best friends, I love to spend most all of the time I can with
          them.
        </p>
        <p>
          When I'm not with my fam that probably means I am out helping clients
          find their dream homes. I really enjoy doing Real Estate and plan on
          doing it forever. I enjoy the relationships I build with clients and
          love the strategy of negotiation.
        </p>
        <p>
          Being outdoors is something I love, hiking, swimming, snowboarding, I
          love it all. Which makes living in Salt Lake a great option for me,
          although the beach is at the top of my list, which we obviously don't
          have here in Utah.
        </p>
        <p>
          As far as coding goes, I have taught myself here and there and let
          life get in the way of fully taking it on. I recently enrolled in
          Berkeley's coding bootcamp and have decided to move on with coding as
          a career. So far, its been a blast. Sure, it's challenging, but it's
          something I really enjoy doing. Graduation is just a few short months
          away, end of December. I am very excited to see where this journey
          takes me.
        </p>
        <p>~ Lindsey</p>
      </AboutText>
      </AboutBody>
    </AboutContainer>
    </AboutMainComponent>
    <FooterDark/>
    </div>
  );
};

export default About;
