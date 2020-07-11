import React, { Component } from 'react';
import '../css/Internship.css';
import Catena from "../media/Catena.jpg";
import Cloud from "../media/Cloud.jpg";
import TLS from "../media/TLS_logo.png";
import Invest from "../media/Invest_logo.jpg";
import Popup from "reactjs-popup";

const CATENA_TEXT = "This was my first awesome internship!";
const CK_TEXT = "This is my second awesome internship!";
const TLS_TEXT = "This was my first CCA!";
const INVEST_TEXT = "This is my second CCA!"; 

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