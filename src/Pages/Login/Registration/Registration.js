import React, { useState } from 'react';
import './Registration.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import loginimg from '../../../images/login-logo.png';
import initializeAuthentication from '../Firebase/firebase.init';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


initializeAuthentication();


const Registration = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const [isLoading, setIsLoading] = useState(true);


    const toggleLogin = e =>{
        setIsLogin(e.target.checked);
    }
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length<6){
            setError('Password Must be at least 6 characters long.');
            return;
        }
        
        isLogin? processLogin(email, password)  : createNewUser(email, password);
    }

    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
             history.push(redirect_uri);
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
             history.push(redirect_uri);
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    const setUserName = () =>{
        updateProfile( auth.currentUser, {displayName: name})
        .then(result => { })
    }
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then( result =>{
            console.log(result);
        })
    }

    const handleResetPassword = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{ })
    }


    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
        .finally(() => setIsLoading(false));
    }
    


    return (
        <div className="register_form">
            
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="middle2 mt-5">
                        
                        <form onSubmit={handleRegistration}>
                            <h1 className="register_header">{isLogin ? 'Please Login' : 'Please Register'}</h1>
                            {!isLogin && <div>
                                <input onBlur={handleNameChange} type="text" name="name" id="name" placeholder="name" className="form-control"/>
                            </div>}
                            <div className="my-4">
                                <input onBlur={handleEmailChange} type="email" name="email" id="email" placeholder="enter your mail" className="form-control" required/>
                            </div>
                            <div>
                                <input onBlur={handlePasswordChange} type="password" name="password" id="password" placeholder="password" className="form-control" required/>
                            </div>
                            <input onChange={toggleLogin} type="checkbox" name="" id="gridCheck1" />
                            <label htmlFor="gridCheck1">Already Registered?</label>
                            <div className="text-danger">{error}</div>

                            <button type="submit" className="btn btn-primary form-control mt-3 text-uppercase fw-bold">{isLogin ? 'Login' : 'Register'}</button>
                            <button onClick={handleResetPassword} type="button" className="btn btn-secondary mt-3">Reset Password</button>

                            {/* <input className="mt-3 btn btn-primary" type="submit" value="Register" /> */}
                        </form>
                            <div>
                                <img className="google2" src={loginimg} alt="" />
                                <button onClick={handleGoogleLogin} className="btn btn-info mt-5 text-uppercase fw-bold">Google Sign In</button>
                                <br />
                            </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Registration;