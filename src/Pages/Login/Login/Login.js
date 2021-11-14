import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import './Login.css';
import loginimg from '../../../images/login-logo.png';
import useAuth from '../../../hooks/useAuth';
import { Spinner, Toast } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div className="login_form">
            
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="middle mt-5">
                        <h1 className="login_header">Login</h1>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="my-4">
                                <input type="email" onChange={handleOnChange} name="email" id="email" placeholder="enter your mail" className="form-control" />
                            </div>
                            <div>
                                <input type="password" onChange={handleOnChange} name="password" id="password" placeholder="password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary form-control mt-3 text-uppercase fw-bold">Sign In</button>
                            <NavLink to="/register" style={{ textDecoration:'none'}}>
                                New User? Please Register
                            </NavLink>

                            <div >
                                <img className="google" src={loginimg} alt="" />

                                <button onClick={handleGoogleSignIn} className="btn btn-info mt-5 text-uppercase fw-bold">Google Sign In</button>

                                <br />
                            </div>
                        </form>
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
                                        <Toast.Body>Successfully Logged In</Toast.Body>
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

export default Login;