import React from 'react';
import './css/Header.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

function Header() {
    return (
        <div className="Header">
          <div className = "HeaderText">
            <h1>Hello I'm</h1>
            <h1 className="Name">Arun Kumarr!</h1>
            <h3>Welcome to my website!</h3>
          </div>
        </div>
      );
}

export default Header;