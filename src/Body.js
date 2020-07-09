import React, {Component} from 'react';
import './css/Body.css';
import profile from "./media/Profile_Pic.jpg";
import Popup from "reactjs-popup";
import About from "./Content/About";


class Body extends React.Component {
    render() {
        return (
            <div className="Body">
              <About />
            </div>
        );
    }
}

export default Body;