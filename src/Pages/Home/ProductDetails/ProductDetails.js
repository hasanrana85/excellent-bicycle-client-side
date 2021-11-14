import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router';
import BuynowModal from '../../BuynowModal/BuynowModal';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const ProductDetails = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const {name, description, price, image} = product;

    //modal
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    useEffect( ()=> {
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);
    
    return (
        <>
        <Header></Header>
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div>
                            <img className="w-100" src={image} alt="" />
                            <h4>{description}</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="text-start ps-5 ms-5">
                            <h1 className="text-uppercase fw-bold">{name}</h1>
                            <h3 className="text-warning fw-bold fs-2">${price}</h3>
                            <p className="text-success fw-bold fs-3">Color: Green</p>
                            <div>
                                <h5 className="text-success fw-bold fs-3">Frame size:</h5>
                                <button className="bg-warning px-4 py-2 border-0 rounded-3">S</button>
                                <button className="mx-3 px-4 py-2 border-0 rounded-3">M</button>
                                <button className="px-4 py-2 border-0 rounded-3">L</button>
                            </div>
                            <br />
                            <div>
                                <h5 className="text-success fw-bold fs-3">Frame size:</h5>
                                <button className="bg-warning px-4 py-2 border-0 rounded-3">24</button>
                                <button className="mx-3 px-4 py-2 border-0 rounded-3">25</button>
                                <button className="px-4 py-2 border-0 rounded-3">28</button>
                            </div>
                            <br />
                            <button onClick={handleModalShow} className="buy-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <BuynowModal
            product = {product}
            showModal = {showModal}
            handleModalClose = {handleModalClose}
            ></BuynowModal>
        </div>
        <Footer></Footer>
    </>
    );
};

export default ProductDetails;