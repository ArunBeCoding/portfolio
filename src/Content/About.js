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
                    <div>
                        <div className="header"> <h2>Relevant Modules Taken</h2> </div>
                        <div className="content">
                        <ul>
                            <li>Programming Methodology I</li>
                            <li>Programming Methodology II</li>
                            <li>Algorithms and Data Structures</li>
                            <li>Computer Organization</li>
                            <li>Introduction to Software Engineering</li>
                            <li>Introduction to Operating Systems</li>
                            <li>Introduction to Computer Networks</li>
                            <li>Intorduction to Information Security</li>
                        </ul>
                        </div>
                        <div className="actions">
                            <button className="button"
                                onClick={() => {
                                    close();
                                }}
                            >
                                <p>I'm done reading!</p>
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
    isAbout: true,
    isEducation: false
  }
  AboutHandler = () => {
    this.setState({
        isAbout: true, 
        isEducation: false
    })
  }

  EducationHandler = () => {
    this.setState({
        isAbout: false,
        isEducation: true
    })
  }

  aboutHandler() {
    if(this.state.isAbout) {
      return (
        <div className="AboutInfo">
            <img className="Profile" src={profile} alt="Profile Photo"></img>
            <p className="AboutPara">Hi I am Arun Kumarr and I love to code.</p>
          </div>
      );
    } else {
      return (
        <div className="Education">
          <EducationPopup/>
          <p className="AboutInfo">My crib is NUS</p>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="Card">
        <div className="Option">
          <button onClick={this.AboutHandler} >About Me</button>
          <button onClick={this.EducationHandler} >Education</button>
        </div>
        { this.aboutHandler() }
      </div>
    );
  }
}

export default About;