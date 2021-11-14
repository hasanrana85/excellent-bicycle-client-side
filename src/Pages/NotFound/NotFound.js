import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className="fs-1 fw-bold text-warning">Sorry your page not found !!</h1>
            <img className="w-100" src={notFound} alt="" />
            <Link to="/home">
            <button className="btn btn-primary p-2 text-warning fw-bold fs-3 my-3">Back to Home Page</button>
            </Link>
        </div>
    );
};

export default NotFound;