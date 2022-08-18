import React, { useState } from 'react'
import Task from '../task/Task'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
const Listtask = () => {
    const List =useSelector(state=>state.ListReducer.ListTask)
    const [status,setStatus]=useState('all')
  return (
    <div>
      <Button onClick={()=>setStatus('all')}>all</Button>
      <Button onClick={()=>setStatus('done')}>done</Button>
      <Button onClick={()=>setStatus('undone')}>undone</Button>
        {
        status==='done'?List.filter(el=> el.isdone===true).map(el=><Task task={el} key={el.id}/>):
        status==='undone'?List.filter(el=> el.isdone===false).map(el=><Task task={el} key={el.id}/>):
        
        List.map(el => <Task task={el} key={el.id}/>)}
        
        
    </div>
  )
}

export default Listtask