import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="container">
                <h1 className=" fw-bold product_shadow text-uppercase">Contact Us</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="m-3">
                            <form action="">
                                <div>
                                    <input type="text" name="name" id="" placeholder="Enter your name" className="form-control rounded-3" />
                                </div>
                                <br />
                                <div>
                                    <input type="email" name="email" id="" placeholder="Enter your email" className="form-control" />
                                </div>
                                <br />
                                <div>
                                    <input type="tele" name="name" id="" placeholder="Enter your phone" className="form-control" />
                                </div>
                                <br />
                                <div>
                                   <textarea name="message" id="" cols="30" rows="10" className="form-control">message</textarea>
                                </div>
                                <br />
                                <button className="btn btn-primary px-3 text-uppercase fw-bold btn-block" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                        <div>
                            <div>
                                <h1>Address</h1>
                                <p>73, Abdullahpur, uttara, Dhaka-1230</p>
                            </div>
                            <br />
                            <div>
                                <h5>phone number</h5>
                            <p>01940190030</p>
                            </div>
                            <br />
                            <div>
                                <h5>Email </h5>
                                <p>ranaabuhasan@gmail.com</p>
                            </div>
                            <br />
                            <h5>Facebook Link</h5>
                            <p>www.facebook.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;