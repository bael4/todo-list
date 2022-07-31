import React, { useState } from 'react'

const ToDoForm = ({addTodo}) => {

const [input,setInput] = useState('')

const handleSubmit = (e)=>{
e.preventDefault()
addTodo(input)
setInput('')
}

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
   
       <input
        value={input}
        onChange={e=>setInput(e.target.value)}
        className='todo-input'
        placeholder='Add a todo'/>
       <button type='submit' className='todo-button'>Add todo</button>
    </form>
  )
}

export default ToDoForm