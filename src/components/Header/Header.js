import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.png";
function Header() {
    return (
        <nav className="header">
            <img src={Logo} />

            <ul>
                <li>HOME</li>
                <li>CAR INSURANCE</li>
                <li>LIFE INSURANCE</li>
                <li> OUR GURUS</li>
                <li>CLAIMS</li>
                <li>ARTICLES</li>
            </ul>
        </nav>
    );
}

export default Header;
