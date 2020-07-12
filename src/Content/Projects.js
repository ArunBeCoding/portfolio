import React, { Component } from 'react';
import "../css/Projects.css";
import Popup from "reactjs-popup";
import CPF from "../media/CPFHackathon.png";
import Makerthon from "../media/Makerthon.jpg";
import Invest from "../media/Invest.jpg";
import SoftEng from "../media/SoftEng.jpg";

const CPF_TEXT = "This is CPF text";
const MAKERTHON_TEXT = "This is Makerthon text";
const INVEST_TEXT = "This is Invest Text";
const SE_TEXT = "This is SE text";

const CPF_LINK = "https://github.com/ArunBeCoding/cpf-Monkeybrain-UI";
const MAKERTHON_LINK = "https://github.com/namiwa/makerthon2020";
const INVEST_LINK = "https://github.com/NUS-invest-QF-NLP/main";
const SE_LINK = "https://github.com/AY1920S1-CS2103T-T12-1/main";

class ProjPopup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <Popup trigger={open => (<button className="ProjBtn">Learn about {this.props.name}</button>)} modal closeOnDocumentClick>
                {close => (
                    <div className="Popup">
                        <h2>{this.props.name}</h2> 
                        <div className="content">
                            <p>{ this.props.text }</p>
                        </div>
                        <div className="actions">
                            <div className="SpecButton">
                                <button onClick={() => window.open(this.props.link, "_blank")}>
                                    View on Github! 
                                </button>
                            </div>
                            <div className="SpecButton">
                                <button onClick={() => {close();}}>
                                    You're awesome Arun!
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        );
    }
}

class Proj extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="ProjSquare">
                <div className="Container">
                    <img className="ProjPic" src={this.props.pic}></img>
                    <ProjPopup name={this.props.name} text={this.props.text} link={this.props.link}/>
                </div>
            </div>
        );
    }
}

class ProjectsInfo extends React.Component {
    render() {
        return(
            <div className="ProjectsContent">
                <table className="center">
                    <tr>
                        <td><Proj name="CPF Hackathon" pic={ CPF } text={CPF_TEXT} link={CPF_LINK}/></td>
                        <td><Proj name="NUS Makerthon" pic={ Makerthon } text={MAKERTHON_TEXT} link={MAKERTHON_LINK}/></td>
                    </tr>
                    <tr>
                        <td><Proj name="NUS Invest" pic={ Invest } text={INVEST_TEXT} link={INVEST_LINK}/></td>
                        <td><Proj name="+Work and Duke" pic={ SoftEng } text={SE_TEXT} link={SE_LINK}/></td>
                    </tr>
                </table>
            </div>
        );
    }
}

class HackathonsInfo extends React.Component {
    render() {
        return(
            <div className="HackathonsContent">
                <div className="HackExpln">
                    <p>I like to participate in Hackthons!</p>
                </div>
                <div className="HackList">
                    <ul>
                        <li>Shoppee Code League 2020</li>
                        <li>DSTA Brainhack CDDC 2020</li>
                        <li>CPF Hackathon</li>
                        <li>NUS Makerthon 2020</li>
                        <li>National Blockchain Challenge 2019</li>
                    </ul>
                </div>
            </div>
        );
    }
}

function SkillsLanguage() {
    return (
        <div className="SkillsCard SkillsLanguage">
            <ul>
                <lh>Languages</lh>
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>JavaScript</li>
                <li>HTML and CSS</li>
            </ul>
        </div>
    );
}

function SkillsFrameworks() {
    return (
        <div className="SkillsCard SkillsFrameworks">
            <ul>
                <lh>Framework</lh>
                <hr />
                <li className="subHeader">Full Stack</li>
                <li>reactjs, firebase, Flask, Spring Boot</li>
                <hr />

                <li className="subHeader">Data Analytics Libraries</li>
                <li>SciPy, TensorFlow</li>
                <hr />

                <li className="subHeader">Databases</li>
                <li>MongoDB, FireStore</li>
                <hr />

                <li className="subHeader">DevOps</li>
                <li>GitLab, Docker</li>
            </ul>
        </div>
    );
}

function SkillsCertifications() {
    return(
        <div className="SkillsCard SkillsCertifications">
            <ul>
                <lh>Certifications</lh>
                <li>AZ-900: Microsoft Azure Fundementals</li>
            </ul>
        </div>
    );
}

class SkillsInfo extends React.Component {
    render() {
        return(
            <div className="SkillsContent">
                {SkillsLanguage()}
                {SkillsFrameworks()}
                {SkillsCertifications()}
            </div>
        );
    }
}

class Projects extends React.Component {
    state = {
        isProjects: true,
        isHackathons: false,
        isSkills: false
    }

    ProjectsHandler = () => {
        this.setState({
            isProjects: true,
            isHackathons: false,
            isSkills: false
        })
    }

    HackathonsHandler = () => {
        this.setState({
            isProjects: false,
            isHackathons: true,
            isSkills: false
        })
    }

    SkillsHandler = () => {
        this.setState({
            isProjects: false,
            isHackathons: false,
            isSkills: true
        })
    }

    infoHandler() {
        if(this.state.isProjects) {
            return(
                <ProjectsInfo/>
            );
        } else if (this.state.isHackathons) {
            return (
                <HackathonsInfo/>
            );
        } else if (this.state.isSkills) {
            return (
                <SkillsInfo/>
            );
        }
    }

    render() {
        return(
            <div className="Projects">
                <div className="Card">
                    <div className="Options">
                        <ul>
                            <li><button className={this.state.isProjects? "ActiveButton" : "SilentButton"} onClick={this.ProjectsHandler}>Projects</button></li>
                            <li><button className={this.state.isHackathons? "ActiveButton" : "SilentButton"} onClick={this.HackathonsHandler}>Hackathons</button></li>
                            <li><button className={this.state.isSkills? "ActiveButton" : "SilentButton"} onClick={this.SkillsHandler}>Skills</button></li>
                        </ul>
                    </div>
                    { this.infoHandler() }
                </div>
            </div>
        );
    }
}

export default Projects;