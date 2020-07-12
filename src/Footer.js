import React, { Component } from 'react';
import "./css/Footer.css";

const LINKEDIN_LINK = "https://www.linkedin.com/in/arun-kumarr-8650941a0/";
const GITHUB_LINK = "https://github.com/ArunBeCoding";
const EMAIL_LINK = "mailto: e0309390@u.nus.edu";

class SocialLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="LinkButton">
                <button className={this.props.name==="LinkedIn" ? "button1" : this.props.name==="GitHub" ? "button2" : "button3"} 
                onClick={() => window.open(this.props.link, "_blank")}>
                    {this.props.name}
                </button>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return(
            <div className="Footer">
                <div className="Card">
                    <h2>Congratulations!</h2>
                    <p>You made it all the way! Enjoy this cute gif of a penguin!</p>
                    <img className="gif" src="https://media.giphy.com/media/VkMV9TldsPd28/source.gif" alt="Penguin going to work"></img>
                    <p>You can also contact from here:</p>
                    <div className="SocialLinks">
                        <ul>
                            <li><SocialLink name="LinkedIn" link={LINKEDIN_LINK}/></li>
                            <li><SocialLink name="GitHub" link={GITHUB_LINK} /></li>
                            <li><SocialLink name="email" link={EMAIL_LINK} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;