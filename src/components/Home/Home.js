import React from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Projects from '../Projects/Projects'
import { HomeSection } from "./homeStyledComponents";

const Home = () => {
  return (
    <>
    <HomeSection>
    <Header/>
    <Projects/>
    <Footer/>
    </HomeSection>
    
    </>
  );
};


export default Home;