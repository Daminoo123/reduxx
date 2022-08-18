import React from 'react'
import './Task.css'
import { Button } from "react-bootstrap"
import { useDispatch } from 'react-redux/es/exports'
import { deletetask,donetask } from '../../js/Action/Listtask'
import Edit from '../edit/Edit'
const Task = ({task}) => {
  const dispatch=useDispatch()
  return (
    <div className='tasks'> <p className='textt'><p className={task.isdone?'done':null} >{task.text}</p></p>
    <Button onClick={()=>dispatch(deletetask(task.id))}>delete</Button>
    <Edit task={task}/>
    <Button onClick={()=>dispatch(donetask(task.id))}>{task.isdone?"undone":"done"}</Button>
    </div>
  )
}

export default Task