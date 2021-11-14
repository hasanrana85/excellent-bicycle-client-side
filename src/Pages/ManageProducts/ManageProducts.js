import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ProductTable from '../ProductTable/ProductTable';
import './ManageProducts.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);



    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return (
        <div className="container">
                <h1 className="text-primary mb-5">Products Summary</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ProductTable
                            key = {product._id}
                            product = {product}
                            ></ProductTable>)
                        }
                        
                    </tbody>
                </Table>
            </div>
    );
};

export default ManageProducts;