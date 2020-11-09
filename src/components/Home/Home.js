import React from "react";
import "./Home.css";
import "../../styles/Button.css";
import Customization from "../../images/customization-whychooseus.png";
import CheaperPlans from "../../images/cheaperPlans.svg";
import FastTransaction from "../../images/fastTransaction.svg";
import MoreChoice from "../../images/moreChoice.svg";
import StressFree from "../../images/stressFree.svg";
import OutStandingGuruTeam from "../../images/outStandingGuruTeam.svg";

import Carousel from "react-elastic-carousel";

function Home() {
    return (
        <div className="home">
            <div className="sectionOne">
                <div className="sectionOne_wrap container">
                    <div className="sectionOne__title">
                        <h1>The Best</h1>
                        <h1>Insurance Quotations</h1>
                        <h1>In Singapore</h1>
                    </div>
                    <div className="sectionOne__btnWrap">
                        <div className="sectionOne__btnWrap__btnGroup">
                            <button className="btn primary">
                                Car Insurance
                            </button>
                            <span>
                                Customize, compare and buy instantly with
                                discounts!
                            </span>
                        </div>
                        <div className="sectionOne__btnWrap__btnGroup">
                            <button className="btn primary">
                                Life insurance
                            </button>
                            <span>
                                Quote comparisons with professional assistance!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sectionTwo">
                <div className="container">
                    <div className="secondTitle">
                        <div className="title">INTRODUCTION</div>
                        <div>
                            <hr />
                        </div>
                    </div>
                    <div className="containerDesc">
                        <div className="title">
                            <h1>Who</h1>
                            <h1>Are We</h1>
                        </div>
                        <div className="desc">
                            <p>
                                InsuranceGuru is established for customer
                                empowerment and to bring you the best
                                value-for-money insurance plans! We believe you
                                should only buy what you need and understand in
                                an insurance plan after due comparisons and
                                assessments, with quality advice only when
                                needed. Let us help you obtain the best Car
                                Insurer or Life Insurance in Singapore now!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sectionThree">
                <div className="container">
                    <h1 className="sectionThree__title">Why Choose Us ?</h1>
                    <Carousel pagination={false}>
                        <div className="sectionThree__warp">
                            <div className="sectionThree__box">
                                <div className="sectionThree__box__title">
                                    <img src={Customization} />
                                    <h2>Customization</h2>
                                </div>
                                <div className="sectionThree__box__desc">
                                    Customize and choose the features you need
                                    in your insurance plan (and not buy
                                    expensive complex bundled plans)
                                </div>
                            </div>
                        </div>
                        <div className="sectionThree__warp">
                            <div className="sectionThree__box">
                                <div className="sectionThree__box__title">
                                    <img src={CheaperPlans} />
                                    <h2>Cheaper Plans</h2>
                                </div>
                                <div className="sectionThree__box__desc">
                                    Save more money with new client and referral
                                    discounts up to 10% off your premium!
                                </div>
                            </div>
                        </div>
                        <div className="sectionThree__warp">
                            <div className="sectionThree__box">
                                <div className="sectionThree__box__title">
                                    <img src={FastTransaction} />
                                    <h2>Fast Transaction</h2>
                                </div>
                                <div className="sectionThree__box__desc">
                                    (For car insurance) Complete your purchase
                                    real-time online under 7 minutes with least
                                    data input needed. No paperwork needed.
                                </div>
                            </div>
                        </div>
                        <div className="sectionThree__warp">
                            <div className="sectionThree__box">
                                <div className="sectionThree__box__title">
                                    <img src={MoreChoice} />
                                    <h2>More Choices</h2>
                                </div>
                                <div className="sectionThree__box__desc">
                                    We bring all relevant jargon-free
                                    information to the table to help you
                                    understand and assess the different plans
                                </div>
                            </div>
                        </div>
                        <div className="sectionThree__warp">
                            <div className="sectionThree__box">
                                <div className="sectionThree__box__title">
                                    <img src={StressFree} />
                                    <h2>Stress Free</h2>
                                </div>
                                <div className="sectionThree__box__desc">
                                    We bring all relevant jargon-free
                                    information to the table to help you
                                    understand and assess the different plans
                                </div>
                            </div>
                        </div>
                        <div className="sectionThree__warp">
                            <div className="sectionThree__box">
                                <div className="sectionThree__box__title">
                                    <img src={OutStandingGuruTeam} />
                                    <h2>Out Standing Guru Team</h2>
                                </div>
                                <div className="sectionThree__box__desc">
                                    (For life insurance) Obtain first class
                                    advice and quotes comparison from highly
                                    qualified financial services veterans we
                                    recommend
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="sectionTwo">
                <div className="container">
                    <div className="secondTitle">
                        <div className="title">FYI</div>
                        <div>
                            <hr />
                        </div>
                    </div>
                    <div className="containerDesc">
                        <div className="title">
                            <h1>Do You</h1>
                            <h1>Know ?</h1>
                        </div>
                        <div
                            className="desc"
                            style={{ justifyContent: "flex-start" }}
                        >
                            <p>
                                There are more than 12 major life insurance
                                companies in Singapore (and we are just talking
                                about the bigger players). Assuming each company
                                has 10 product offerings, you have to sift
                                through 120 product quotations just to find out
                                one that is best for you! Imagine the time spent
                                doing that! Let us help you today!
                            </p>
                            <button className="btn primary">
                                Get A Free Quote!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sectionTwo" style={{ backgroundColor: "#940637" }}>
                <div className="container">
                    <div className="secondTitle">
                        <div className="title" style={{ color: "white" }}>
                            FREEBIES
                        </div>
                        <div>
                            <hr style={{ borderTop: "2px solid white" }} />
                        </div>
                    </div>
                    <div className="containerDesc">
                        <div className="title" style={{ color: "white" }}>
                            <h1>Free</h1>
                            <h1>e-Book</h1>
                            <h1>Today!</h1>
                        </div>
                        <div
                            className="desc"
                            style={{
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                color: "white",
                                border: "2px solid white",
                                position: "relative",
                                height: "140px",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "22px",
                                    marginBottom: "15px",
                                }}
                            >
                                "5 Things you must compare for the best life
                                insurance quote!"
                            </p>
                            <button
                                className="btn primary"
                                style={{
                                    backgroundColor: "white",
                                    color: "#940637",
                                }}
                            >
                                Download Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
