import React, {Component} from 'react';
import './css/Body.css';
import About from "./Content/About";
import Internship from "./Content/Internship";
import Projects from "./Content/Projects";


class Body extends React.Component {
    render() {
        return (
            <div className="Body">
              <About />
              <Internship />
              <Projects />
            </div>
        );
    }
}

export default Body;