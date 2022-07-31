import React from 'react'
import {AiOutlineCloseCircle,AiFillCheckCircle} from 'react-icons/ai'
const ToDoItem = ({todo,removeTodo,completeTodo}) => {
  return (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
        {todo.text}
        <div className='iconsContainer'>
        <AiOutlineCloseCircle 
        className='icon'
        onClick={()=>removeTodo(todo.id)}
        />

        <AiFillCheckCircle
            className='icon'
            onClick={()=> completeTodo(todo.id)}
        />
     
        </div>
     
    </div>
  )
}

export default ToDoItem