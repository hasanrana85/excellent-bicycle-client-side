import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('http://localhost:5000/products', data)
      .then(res => {
          if(res.data.insertedId){
              alert('inserted successfully');
              reset();
          }
      })
  }

    return (
        <div className="add-product">
            <h1>Please Add a service</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("image")} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;