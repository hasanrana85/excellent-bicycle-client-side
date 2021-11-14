import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/comment')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);
    
    return (
        <div>
            <div className="container mb-5">
                <h1 className=" fw-bold product_shadow text-uppercase">Our Client Reviews</h1>
                <div className="row">
                    {
                        reviews.map(review => <Review
                        key = {review.id}
                        review = {review}
                        ></Review>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Reviews;