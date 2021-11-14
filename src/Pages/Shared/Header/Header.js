import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const {user, logout} = useAuth();
    return (
        <>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={logo} alt="" />
                        <span className="logo_head">Excellent Bicycle</span>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home#home" className="text-white text-uppercase fw-bold">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services#services" className="text-white text-uppercase fw-bold">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about#about" className="text-white text-uppercase fw-bold">About Us</Nav.Link>
                            {/* {
                                user.email && <Nav.Link as={Link} to="/manage#manage" className="text-white text-capitalize">Manage all</Nav.Link>
                            } */}
                            {
                                user.email && <Nav.Link as={Link} to='/dashboard' className="text-white text-capitalize">Dashboard</Nav.Link>
                            }
                            
                                { user.email ?
                                <button onClick={logout}>Log Out</button>
                                :
                                <Nav.Link as={Link} to="/login#login" className="text-white text-uppercase">Login</Nav.Link>
                            }
                            {/* <Nav.Link as={Link} to="/registration#registration" className="text-white">Registration</Nav.Link> */}
                            <Navbar.Text>
                                <h5><span className="text-info">Signed as:</span> <span className="text-dark text-uppercase">
                                    {user.displayName}
                                    </span></h5>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    );
};

export default Header;