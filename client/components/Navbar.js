import React from 'react';

const Navbar = () => {
    return(
        // 3 buttons
        <ul className="nav nav-pills" style={{marginBottom: '20px'}}>
            <li className="nav-item"><a className="nav-link">Home</a></li>
            <li className="nav-item"><a className="nav-link">Product</a></li>
            <li className="nav-item"><a className="nav-link">Managers</a></li>
        </ul>
        // with count of managers as well probabaly a conditional that will show a count if the state presents any 
        // need to toggle which button gets shown 
    )
}

export default Navbar;