import React from "react";
import "./Footer.css";
import Logo from "../../images/Logo.png";
import FacebookLogo from "../../images/facebook.png";
import LinkedinLogo from "../../images/linkedin.png";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__sectionOne">
                        <h3>BE THE FIRST TO KNOW</h3>
                        <small>Get updated and never miss our promo!</small>
                    </div>
                    <div className="footer__sectionTwo">
                        <div className="footer__inputGroup">
                            <input placeholder="Your email here" />
                            <button className="btn primary">Subscribe</button>
                        </div>
                        <div className="footer__imageGroup">
                            <img className="footer__logoImage" src={Logo} />
                            <div className="footer__imageIconGroup">
                                <img src={FacebookLogo} />
                                <img src={LinkedinLogo} />
                            </div>
                        </div>
                    </div>
                    <div
                        className="footer__sectionOne"
                        style={{ marginBottom: "15px", marginTop: "15px" }}
                    >
                        <h3>STAY CONNECTED</h3>
                        <small>admin@insuranceguru.com.sg</small>
                    </div>
                </div>
                <div className="footer__disclaimer">
                    <p>
                        Disclaimer: This is a website created purely for
                        referral business. We are not a general insurance broker
                        or a financial adviser. No financial or insurance advice
                        is given here. We do NOT bear any responsibility for any
                        financial decision(s) consumers or website users make,
                        should they rely on the information they have obtained,
                        directly or indirectly, from this website. Please also
                        see our Terms and Conditions on the use of this website.
                        Copyright © 2020 InsuranceGuru.com.sg. All rights
                        reserved. This website is owned by ALP Rocks (Singapore)
                        Pte Ltd.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
