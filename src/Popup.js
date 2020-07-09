import React from 'react';
import Popup from "reactjs-popup";

function popup() {
    return (
        <Popup trigger={<button>Learn More</button>} position="right center" >
            <div>Popup content here !!</div>
        </Popup>
    );
}

export default popup;