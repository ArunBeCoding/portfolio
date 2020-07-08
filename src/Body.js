import React, {Component} from 'react';
import './css/Body.css';
import profile from "./media/Profile_Pic.jpg"

class About extends React.Component {
  render() {
    return (
      <div className="Card">
        <h2><i>About Me</i></h2>
        <img className="Profile" src={profile} alt="Profile Photo"></img>
        <p>Hi I am Arun Kumarr and I love to code.</p>
      </div>
    );
  }
}

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