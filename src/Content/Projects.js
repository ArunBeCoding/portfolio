import React, { Component } from 'react';
import "../css/Projects.css";

class ProjectsInfo extends React.Component {
    render() {
        return(
            <div className="ProjectsContent">
                <table className="center">
                    <tr>
                        <td>CPF Hackathon</td>
                        <td>NUS Makerthon</td>
                        <td>NUS Invest</td>
                    </tr>
                    <tr>
                        <td>Software Engineering</td>
                    </tr>
                </table>
            </div>
        );
    }
}

class HackathonsInfo extends React.Component {
    render() {
        return(
            <div className="HackthonsContent">
                <p>This is Hackathons</p>
            </div>
        );
    }
}

class SkillsInfo extends React.Component {
    render() {
        return(
            <div className="SkillsContent">
                <p>This is Skills</p>
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