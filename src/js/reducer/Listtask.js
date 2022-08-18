import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Actiontype/listtask"

const initialesate ={
    ListTask :[
        {id:Math.random(),text:'task1',isdone:false},
        {id:Math.random(),text:'task2',isdone:false}
    ]
}
const ListReducer =(state=initialesate,{type,payload}) =>{
    switch(type){
        case ADD_TASK:
            return{...state,ListTask:[...state.ListTask,payload]}
        case DELETE_TASK:
            return{...state,ListTask:state.ListTask.filter(el=>el.id !==payload)}
        case EDIT_TASK:
            return {...state,ListTask:state.ListTask.map(el=>el.id===payload.id?{...el,text:payload.newtask}: el ) }
        case DONE_TASK:
            return{...state,ListTask:state.ListTask.map(el=>el.id===payload?{...el,isdone:!el.isdone}:el)}
            default :
        return state
    }
}
export default ListReducer
