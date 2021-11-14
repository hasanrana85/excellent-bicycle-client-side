import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Comment.css';

const Comment = () => {
    const {user} = useAuth();

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('http://localhost:5000/comment', data)
      .then(res => {
          if(res.data.insertedId){
              alert('inserted successfully');
              reset();
          }
      })
  }
    
    return (
        <div className="add-comment">
            <h1>Please Comments Something</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" value={user.displayName} />
                <textarea {...register("comment")} placeholder="Comment Something" />
                <input type="email" {...register("email")} placeholder="Email" value={user.email} />
                <input {...register("image")} placeholder="image" />
                <input type="number" {...register("rating")} placeholder="Rating" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Comment;