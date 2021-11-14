import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';
import './ExploreProducts.css';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <>
        <Header></Header>
            <div>
                <div className="container my-5">
                    <h1 className=" fw-bold product_shadow text-uppercase">Our Products</h1>
                    <div className="row">
                        
                            {
                                products.map(product => <Product
                                key = {product.id}
                                product = {product}
                                ></Product>)
                            }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ExploreProducts;