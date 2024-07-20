import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [todos,setTodos] = useState([])
  useEffect(function (){
    
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res => {
      console.log(res.data.todos)
      setTodos(res.data.todos)
  })

  },[])

  return (
    <>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo ({title,description}){
  return (
    <>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </>
  )
}

export default App
