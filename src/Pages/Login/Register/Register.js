import React, { useState } from 'react';
import { Spinner, Toast } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginimg from '../../../images/login-logo.png';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();
    
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="login_form">
            
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="middle mt-5">
                        <h1 className="login_header">Register</h1>
                        {
                            !isLoading && <form onSubmit={handleLoginSubmit}>
                            <div className="my-4">
                                <input type="text" onBlur={handleOnBlur} name="name" id="name" placeholder="enter your name" className="form-control" />
                            </div>
                            <div className="my-4">
                                <input type="email" onBlur={handleOnBlur} name="email" id="email" placeholder="enter your mail" className="form-control" />
                            </div>
                            <div>
                                <input type="password" onBlur={handleOnBlur} name="password" id="password" placeholder="Type your password" className="form-control" />
                            </div>
                            <div>
                                <input type="password" onBlur={handleOnBlur} name="password2" id="password" placeholder="Retype your password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary form-control mt-3 text-uppercase fw-bold">Register</button>
                            <NavLink to="/login" style={{ textDecoration:'none'}}>
                                Already Registered? Please Login
                            </NavLink>

                            <div >
                                <img className="google" src={loginimg} alt="" />

                                <button className="btn btn-info mt-5 text-uppercase fw-bold">Google Sign In</button>

                                <br />
                            </div>
                        </form>}
                        {
                            isLoading && <Spinner animation="border" />
                        }
                        {
                            user?.email && <Toast>
                                        <Toast.Header>
                                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                            <strong className="me-auto">Bootstrap</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Successfully Registered</Toast.Body>
                                        </Toast>
                        }
                        {
                            authError && <Toast>
                                        <Toast.Header>
                                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                            <strong className="me-auto">Bootstrap</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>{authError}</Toast.Body>
                                        </Toast>
                        }

                           
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Register;