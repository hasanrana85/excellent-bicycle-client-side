import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    
    return (
        <div>
            <div className="container my-5">
                <h1 className=" fw-bold product_shadow text-uppercase">Our Products</h1>
                <div className="row">
                    
                        {
                            products.slice(0, 6).map(product => <Product
                            key = {product.id}
                            product = {product}
                            ></Product>)
                        }
                </div>
            </div>
            
        </div>
    );
};

export default Products;