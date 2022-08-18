import React from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edittask } from '../../js/Action/Listtask';

const Edit = ({task}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  const[newtask,setNewtask]= useState(task.text)
  const handleedit =()=>{
    dispatch(edittask(task.id,newtask))

  }
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control placeholder='enter text' onChange={(e)=>setNewtask(e.target.value)}value={newtask}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleedit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit