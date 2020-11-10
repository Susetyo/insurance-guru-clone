import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../images/Logo.png";
function Header() {
    const [showShadow, setShowShadow] = useState(false);

    const trackScrolling = (e) => {
        const wrappedElement = document.getElementById("header");
        if (wrappedElement.getBoundingClientRect().top == 0) {
            setShowShadow(false);
        } else {
            setShowShadow(true);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", trackScrolling);
    });

    return (
        <nav
            className={showShadow ? "header boxShadowHeader" : "header"}
            id="header"
        >
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
