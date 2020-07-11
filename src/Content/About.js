import React, {Component} from 'react';
import '../css/About.css';
import profile from "../media/Profile_Pic.jpg";
import Popup from "reactjs-popup";

class EducationPopup extends React.Component {
    render() {
        return (
            <div className="Modules">
                <Popup 
                    trigger={open => (
                        <button className="button">Learn more</button>
                    )}
                    modal
                    closeOnDocumentClick
                >
                {close => (
                    <div className="Popup">
                        <div> <h2>Relevant Modules Taken</h2> </div>
                        <div className="content">
                          <h3>Programming and Discrete Structures</h3>
                          <p>Programming Methodology I | Programming Methodology II | Discrete Structures</p>
                          <hr/>
                          <h3>Data Structures</h3>
                          <p>Data Structures and Algorithms</p>
                          <hr/>
                          <h3>Software Engineering</h3>
                          <p>Introduction to Software Engineering</p>
                          <hr/>
                          <h3>Operating Systems</h3>
                          <p>Computer Organization | Introduction to Operating Systems</p>
                          <hr/>
                          <h3>Computer Security</h3>
                          <p>Introduction to Information Security</p>
                          <hr/>
                          <h3>Networks</h3>
                          <p>Introduction to Computer Networks</p>
                        </div>
                        <div className="actions">
                            <button className="button" onClick={() => {close();}}>
                                I'm done reading!
                            </button>
                        </div>
                    </div>
                )}
                </Popup>
            </div>
        );
    }
}

class About extends React.Component {
  state = {
    isAbout: true
  }
  AboutHandler = () => {
    this.setState({
        isAbout: true
    })
  }

  EducationHandler = () => {
    this.setState({
        isAbout: false
    })
  }

  aboutHandler() {
    if(this.state.isAbout) {
      return (
        <div>
            <img className="Profile" src={profile} alt="Profile Photo"></img>
            <p>Hi I am Arun Kumarr and I love to code.</p>
          </div>
      );
    } else {
      return (
        <div className="Education">
          <h3>National University of Singapore, Singapore</h3>
          <p>Bachelors in Computer Science</p>
          <EducationPopup/>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="Card">
        <div className="Option">
          <ul>
            <li><button className={this.state.isAbout ? "ActiveButton" : "SilentButton"} onClick={this.AboutHandler} autoFocus>About Me</button></li>
            <li><button className={this.state.isAbout ? "SilentButton" : "ActiveButton"} onClick={this.EducationHandler} >Education</button></li>
          </ul>
        </div>
        { this.aboutHandler() }
      </div>
    );
  }
}

export default About;