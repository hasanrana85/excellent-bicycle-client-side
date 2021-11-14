import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrderTable from '../OrderTable/OrderTable';
import './MyOrder.css';

const MyOrder = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    console.log(orders, user.email);
    useEffect( () => {
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])
    return (
                <div className="container mt-5">
            <h1 className="text-primary">Order Summary</h1>
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

export default MyOrder;