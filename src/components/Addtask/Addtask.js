
import React from 'react'
import { useState } from 'react'
import {addtask} from '../../js/Action/Listtask';
import { Form , Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Addtask = () => {      
    const[text,setText]=useState("")
    const dispatch=useDispatch()
    const handleadd=(e)=>{
      e.prevenDefault()
      if (text!=="")
      {dispatch(addtask({id:Math.random(),text,isdone:false}))}
      else
      {alert('empty text')}
    }
    
  return (
    <div>
      <Form onSubmit={handleadd}>
      <Form.Control placeholder='enter text' onChange={(e)=>setText(e.target.value)} value={text}/>
      <Button variant='primary'type='submite'onClick={handleadd}>
        add
        </Button>
        </Form>
    </div>
  )
  }
export default Addtask