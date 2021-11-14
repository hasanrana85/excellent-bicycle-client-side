import React from 'react';
import './OrderTable.css';

const update = {status:"approved"};

const OrderTable = (props) => {
    const {_id, name, email, phone} = props.order;


    // Delete a orders
    const handleDeleteOrder = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount>0){
                alert('deleted successfully');
                
            }
        })
        }
    };
    
    return (
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>
                        <button className="btn btn-success">{update.status}</button>
                    </td>
                    <td>
                        <button onClick={() =>handleDeleteOrder(_id)} className="btn btn-danger border-3">Delete</button>
                    </td>
                </tr>
    );
};

export default OrderTable;