import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import footer1 from '../../../images/footer/footer1.jpg';
import footer2 from '../../../images/footer/footer2.jpg';
import footer3 from '../../../images/footer/footer3.jpg';
import footer4 from '../../../images/footer/footer4.jpg';
import footer5 from '../../../images/footer/footer5.jpg';

const Footer = () => {
    return (
        <div className="foot_back mt-5">
            <div className="container">
                <img className="logoFooter" src={logo} alt="" />
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-start text-white">
                            <h2>Excellent Bicycle</h2>
                            <hr />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem, repellat animi magnam quo vel!</p>
                            <br />
                            <h3>Follow Us</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-start text-white">
                            <h2>Support</h2>
                            <hr />
                            <p>Contact Us</p>
                            <p>About Us</p>
                            <p>Services</p>
                            <p>Our Blogs</p>
                            <p>Package</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-start">
                            <h2>Contact Us</h2>
                            <hr />
                            <div className="text-white">
                                <p>+01852-1265122 <br />+01852-1265122</p>
                                
                            </div>
                            <div className="text-white">
                                <p>info@example.com <br /> support@example.com</p>
                            </div>
                            <div className="text-white">
                                <p>2752 Willison Street <br /> Eagan, United State</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-white">
                            <h2>We Accepts</h2>
                            <hr />
                            <div>
                                <img className="m-2 w-25" src={footer2} alt="" />
                                <img className="m-2 w-25" src={footer1} alt="" />
                                <img className="m-2 w-25" src={footer3} alt="" />
                                <img className="m-2 w-25" src={footer4} alt="" />
                                <img className="m-2 w-25" src={footer5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-warning"/>
            <p className="text-white">Copyright 2021 TourX | Design By Hasan Travels</p>
        </div>
    );
};

export default Footer;