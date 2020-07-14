import React from 'react';
import './css/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
// import Body from './Body.js';
import About from "./Content/About";
import Internship from "./Content/Internship";
import Projects from "./Content/Projects";


function App() {
  return (
    <div className="Background">
      <div id="ArunKumarr">
        <Header/>
      </div>
      <nav>
        <ul>
          <li><a href="#ArunKumarr"  className="MyName">Arun Kumarr</a></li>
          {/* <li><a href="#Work">Work</a></li> */}
          <li><a href="#AboutMe">About</a></li>
          <li><a href="#Internships">Internships</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
      {/* <div id="Work">
        <Body />
      </div> */}
      <div className="Body">
        <div id="AboutMe">
          <About />
        </div>
        <div id="Internships">
          <Internship />
        </div> 
        <div id="Projects">
        <Projects />
        </div>    
      </div>
      <div id="Contact">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
