import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import OrderTable from '../OrderTable/OrderTable';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);



    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
    
    return (
        <div className="container">
                <h1 className="text-primary mb-5">Order Summary</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderTable
                            key = {order.email}
                            order = {order}
                            ></OrderTable>)
                        }
                        
                    </tbody>
                </Table>
            </div>
    );
};

export default ManageOrders;