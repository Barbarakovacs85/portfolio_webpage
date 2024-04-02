import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png';
import webshoplogo from '../../assets/magnetlogo.png';
import {Link} from 'react-scroll';


const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
                <div className="desktopMenu">
                    <Link className="desktopMenuListItem">Home</Link>
                    <Link className="desktopMenuListItem">About</Link>
                    <Link className="desktopMenuListItem">Service</Link>
                    <Link className="desktopMenuListItem">Skill</Link>
                    <Link className="desktopMenuListItem">Contact</Link>
                </div>
                    <button className="desktopMenuBtn">
                        <img src={webshoplogo} alt="" className="desktopMenuImg" />Webshop
                    </button>
        </nav>
    );
}

export default Navbar