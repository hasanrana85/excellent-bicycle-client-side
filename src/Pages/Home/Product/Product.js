import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, name, description, image, price} = product;
    return (
        
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="p-4 bicycle m-4">
                    <div className="bicycle_image">
                        <img className="w-75 rounded-3 cycle_image" src={image} alt="" />
                    </div>
                    <hr className="text-danger" />
                    <div className="mt-3 bicycle_content">
                        <h3 className="fw-bold text-uppercase">{name}</h3>
                        <h5 className="text-warning fw-bold">{price}</h5>
                        <p>{description}</p>
                        <Link to={`/productDetails/${_id}`}>
                        <button className="btn btn-success fw-bold text-uppercase px-3">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        
    );
};

export default Product;