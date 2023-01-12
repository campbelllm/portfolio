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
                <p>web developer</p>
            </Title>
            <Contact>
                <a href="/contact">contact</a>
            </Contact>
        </HeaderSection>
    );
};
export default Header;