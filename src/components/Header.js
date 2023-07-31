import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'



export default function Header() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
      setShow(true);
    };

    return (
        <header>
            <nav className="nav">
                <img src='./images/MadCopperLogo.png' alt='Mad Copper logo' className="nav-logo" />
                <h1 className= "nav-title">Mad Copper</h1>
                <ul className="nav-items">
                    <li className="nav-links">Home</li>
                    <li className="nav-links">About</li>
                </ul>
                <ul className="nav-items">
                    <li className="nav-social">
                        <img src='./images/twitter.png' alt='Twitter logo'/>
                    </li>
                    <li className="nav-social">
                        <img src='./images/linkedin.png' alt='LinkedIn logo'/>
                    </li>
                    <li className="nav-social">
                        <img src='./images/facebook.png' alt='Facebook logo'/>
                    </li>
                </ul>
                <ul className="nav-items">
                    <li className="nav-register">
                        <Button variant="outline-dark">Register for a Free Plan</Button>{' '}
                    </li>                        
                    <li className="nav-links"> Login
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

//<a href="#" data-toggle="modal" data-target="#signInModal">Login</a>