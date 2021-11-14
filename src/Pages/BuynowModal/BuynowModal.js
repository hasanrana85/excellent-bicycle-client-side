import './BuynowModal.css';
import Button from '@restart/ui/esm/Button';
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const BuynowModal = ({showModal, handleModalClose, product }) => {
        const {name} = product;
        //form
        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
          axios.post('http://localhost:5000/orders', data)
          .then(res => {
          if(res.data.insertedId){
              alert('inserted successfully');
              reset();
          }
      })
          console.log(data)
          handleModalClose();
        };
        //useAuth
        const {user} = useAuth();

    return (
        <Modal
        show={showModal}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" value={user.displayName} />
            <input {...register("email")} placeholder="your email" value={user.email} />
            <input type="number" {...register("phone")} placeholder="your phone" />
            <input className="btn btn-primary text-uppercase fw-bold" type="submit" />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default BuynowModal;