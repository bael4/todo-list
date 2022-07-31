
import { useEffect, useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';


const getLocalStorage = ()=>{
  let list = localStorage.getItem('todos')
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem('todos'))
  }else{
    return[]
  }
}


function App() {

const [todos,setTodos] = useState(getLocalStorage(),[])
const [edit,setEdit] = useState(false)
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])

const addTodo = (text)=>{
let id = 1
if(todos.length > 0){
  id = todos[0].id + 1
}

let todo = {id: id, text:text, completed:false}
setTodos([todo, ...todos])

}

const removeTodo = (id)=>{
setTodos( [...todos].filter((todo=>todo.id !== id  )))
}

const completeTodo = (id)=>{
const updates = todos.map((todo)=>{
  if(todo.id === id){
   todo.completed = !todo.completed
  } 
  return todo
})
setTodos(updates)
}

const editTodo = (id)=>{
     
}
  
  


  return ( 
    <div className='todo-app'>
    <h1>Todo List</h1>
       <ToDoForm  addTodo={addTodo}/>
      {
        todos.map(todo =>{
        return (
          <ToDoItem  
          removeTodo={removeTodo}
          completeTodo={completeTodo} 
          key={todo.id} 
          todo={todo}/>
        )
      })
      }

       
    </div>
  );
}

export default App;
