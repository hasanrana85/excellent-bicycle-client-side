import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const { name, comment, rating, image} = review;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="review_container">
                    <div>
                        <img className="w-100 rounded-circle" src={image} alt="" />
                    </div>
                    <div className="p-3 text-start">
                        <h3 className="text-uppercase text-white">{name}</h3>
                        <p className="text-capitalize text-white">{comment}</p>
                        <h5 className="text-warning">rating {rating}</h5>
                    </div>
                </div>
            </div>
    );
};

export default Review;