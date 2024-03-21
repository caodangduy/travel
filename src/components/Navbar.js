import React, { useState } from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className="NavbarItem">
            <h1 className="logo">Travel</h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>{item.title}
                        </Link>
                        {/* <a className='Nav-links' href='/'>
                            <i className={item.icon}></i>{item.title}
                        </a> */}
                    </li>
                ))}
                <button>Sign Up</button>
            </ul>
        </div>
    );
}

export default Navbar;
