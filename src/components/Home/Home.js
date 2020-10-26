import React from "react";
import Welcome from './homeComponents/Welcome/Welcome'
import Squares from './homeComponents/Sqaures/Squares'
const Home = () => {
  return (
    <>
     <Welcome/>
     <Squares />
    </>

      // <div class="squareSection row">
      //   <div class="square col-md-4 ">
      //     <div class="squareBody">
      //       <a href="about.html" class="card-text">
      //         About
      //       </a>
      //     </div>
      //   </div>
      //   <div class="square col-md-4">
      //     <div class="squareBody">
      //       <a href="portfolio.html" class="card-text">
      //         Portfolio
      //       </a>
      //     </div>
      //   </div>
      //   <div class="square col-md-4">
      //     <div class="squareBody">
      //       <a href="contact.html" class="card-text">
      //         Contact
      //       </a>
      //     </div>
      //   </div>
      // </div>

    //   <div class="learning row">
    //     <div class="currently col-md-5">
    //       <div>
    //         <p>Currently Learning ...</p>
    //       </div>
    //     </div>

    //     <div class="learningItems col-md-7">
    //       <div class="row list">
    //         <div class="section1 col-6 ">
    //           <ul>
    //             <li>HTML/CSS</li>
    //             <li>Bootstrap</li>
    //             <li>JS</li>
    //             <li>JQuery</li>
    //           </ul>
    //         </div>

    //         <div class="section2 col-6">
    //           <ul>
    //             <li>React</li>
    //             <li>Node</li>
    //             <li>Express</li>
    //             <li>MySQL</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};


export default Home;