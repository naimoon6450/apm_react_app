import React from 'react';

const Navbar = (props) => {
    const navbarUpdate = props.navbarUpdate;
    return(
        // 3 buttons
        <ul className="nav nav-pills" style={{marginBottom: '20px'}}>
            <li className="nav-item"><a onClick={() => {navbarUpdate('Home')}} className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a onClick={() => {navbarUpdate('Products')}} className="nav-link" href="#">Products</a></li>
            <li className="nav-item"><a onClick={() => {navbarUpdate('Managers')}} className="nav-link" href="#">Managers</a></li>
        </ul>
        // with count of managers as well probabaly a conditional that will show a count if the state presents any 
        // need to toggle which button gets shown 
    )
}

export default Navbar;