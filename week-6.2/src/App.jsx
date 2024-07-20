import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [buttonId,setButtonId] = useState(1)
return (
  <>
  <button onClick={() => setButtonId(1)}>1</button>
  <button onClick={() => setButtonId(2)}>2</button>
  <button onClick={() => setButtonId(3)}>3</button>
  <button onClick={() => setButtonId(4)}>4</button>
  <br />
  <h3>Grocery Shopping</h3>
    <Todo id={buttonId} />
  </>

)
}

function Todo ({id}){
  const [todo,setTodo] = useState({});
  useEffect(function(){
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(res =>{console.log(res.data.todo); setTodo(res.data.todo)})
  },[id])

  return (
    <>
    <h3>{todo.title}</h3>
    <h5>{todo.description}</h5>
    </>
  )
}

export default App
