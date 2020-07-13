import React from 'react';
import './css/Header.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

function Header() {
    return (
        <div className="Header">
          <div className = "HeaderText">
            <div className = "Shade">
              <h2>Hello I'm</h2>
              <h1 className="Name"> Arun Kumarr!</h1>
              <h3>Welcome to my website!</h3>
            </div>
          </div>
        </div>
      );
}

export default Header;