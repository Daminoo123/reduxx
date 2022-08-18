import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Actiontype/listtask"

export const addtask =(newtask)=>{
    return{
        type:ADD_TASK,
        payload :newtask
    }
}
export const deletetask =(id)=>{
    return{
        type:DELETE_TASK,
        payload :id
    }
}
export const donetask =(id)=>{
    return{
        type:DONE_TASK, 
        payload: id
    }
}
export const edittask =(id,newtask)=>{
    return{
        type:EDIT_TASK,
        payload:{id,newtask}
    }
}