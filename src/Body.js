import React, {Component} from 'react';
import './css/Body.css';
import About from "./Content/About";
import Internship from "./Content/Internship";


class Body extends React.Component {
    render() {
        return (
            <div className="Body">
              <About />
              <Internship />
            </div>
        );
    }
}

export default Body;