import React from 'react';
import './ProductTable.css';

const ProductTable = (props) => {
    const {_id, name, description, price, image} = props.product;



    // Delete a product
    const handleDeleteProduct = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
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
                    <td>{description}</td>
                    <td>${price}</td>
                    <td><img className="w-50" src={image} alt="" /></td>
                    
                    <td>
                        <button onClick={() =>handleDeleteProduct(_id)} className="btn btn-danger border-3">Delete</button>
                        <br />
                        <button className="btn btn-success border-3 m-3">Update</button>
                    </td>
                
                </tr>
    );
};

export default ProductTable;