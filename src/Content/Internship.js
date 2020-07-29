import React, { Component } from 'react';
import '../css/Internship.css';
import Catena from "../media/Catena.jpg";
import Cloud from "../media/Cloud.jpg";
import TLS from "../media/TLS_logo.png";
import Invest from "../media/Invest_logo.jpg";
import Popup from "reactjs-popup";

const CATENA_TEXT = "Optimized end to end testing deployment by working on GOCD and writing linux shell scripts to produce a one-click deployment process, reducing it from the multiple-step process previously used. I also wrote test cases and validation scripts to ensure software's output met the conditions expected by client's trade repositories.";
const CK_TEXT = "Designed infrastructures on Azure cloud platform and performed cost analysis for clients who were migrating their services to cloud. Other than learning fundamentals of cloud computing such as security, compute, and networking, I also had to learn containerization and serverless computing.";
const TLS_TEXT = "As a project director for the community service directorate, I planned and implemented a reintegration program with residents of the Ashram halfway house which inspired them to re-evaluate their future and helped easing back into society. Moreover, we also collaborated with other local universities to conduct heritage activities for students from three universities.";
const INVEST_TEXT = "I was a quantitative finance engineer for a year in NUS Invest. The link to Github repository that we worked on is given in the projects section below."; 

class JobPopup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Popup trigger={open => (<button className="btn">Learn more</button>)} modal closeOnDocumentClick>
                {close => (
                    <div className="Popup">
                        <div className="content">
                            <h2>{this.props.name}</h2> 
                            <p>{this.props.text}</p>
                        </div>
                        <div className="actions">
                            <button className="button" onClick={() => {close();}}>
                                Sounds awesome, Arun!
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
        );
    }
}

class Job extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="JobSquare">
                <div className="Container">
                    <img className="JobPic" src={this.props.pic}></img>
                    <JobPopup name={this.props.name} text={this.props.text} />
                </div>
                <h3>{ this.props.name }</h3>
                <p>{ this.props.time }</p>
            </div>
        );
    }
}

class InternshipInfo extends React.Component {
    render() {
        return (
            <div className="InternList">
                <ul>
                    <li><Job name="Catena Technologies" time="Dec 2019 - Jan 2020" text={CATENA_TEXT} pic={Catena}/></li>
                    <li><Job name="Cloud Kinetics" time="May 2020 - Current" text={CK_TEXT} pic={Cloud}/></li>
                </ul>
            </div>
        );
    }
}

class CCAInfo extends React.Component {
    render() {
        return (
            <div className="InternList">
                <ul>
                    <li><Job name="NUS TLS" time="Aug 2018 - Aug 2019" text={TLS_TEXT} pic={ TLS }/></li>
                    <li><Job name="NUS Invest" time="Aug 2019 - Aug 2020" text={INVEST_TEXT} pic={ Invest }/></li>
                </ul>
            </div>
        );
    }
}

class Internship extends React.Component {
    state = {
        isInternship: true,
        isCCA: false
    }

    InternshipHandler = () => {
        this.setState({
            isInternship: true,
            isCCA: false
        })
    }

    CCAHandler = () => {
        this.setState({
            isInternship: false,
            isCCA: true
        })
    }

    infoHandler() {
        if(this.state.isInternship) {
            return(
                <div className="aboutIntern">
                    <InternshipInfo/>
                </div>
            );
        } else if (this.state.isCCA) {
            return (
                <div className="aboutCCA">
                    <CCAInfo/>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="external">
                <div className="Card">
                    <div className="Options">
                        <ul>
                            <li><button className={this.state.isInternship? "ActiveButton" : "SilentButton"} onClick={this.InternshipHandler}>Internships</button></li>
                            <li><button className={this.state.isCCA? "ActiveButton" : "SilentButton"} onClick={this.CCAHandler}>CCAs</button></li>
                        </ul>
                    </div>
                    { this.infoHandler() }
                </div>
            </div>
        );
    }
}

export default Internship;