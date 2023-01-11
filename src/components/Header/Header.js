import React from 'react';
import { 
    HeaderSection,
    Name,
    Title,
    Contact
} from "./headerStyledComponents"

const Header= () => {
    return(
        <HeaderSection>
            <Name>
                <h1>LINDSEY</h1>
                <h1>SMITH</h1>
            </Name>
            <Title>
                <h3>web developer</h3>
            </Title>
            <Contact>
                <a href="#">contact</a>
            </Contact>
        </HeaderSection>
    );
};
export default Header;