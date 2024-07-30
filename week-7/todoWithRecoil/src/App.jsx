import {RecoilRoot,useSetRecoilState,useRecoilValue} from 'recoil'
import { todoAtom } from '../store/atoms/todoAtom'
import { useState,useRef } from 'react';
import { filteredTodosSelector } from '../store/selectors/filteredTodosSelector';
import { filterAtom } from '../store/atoms/filterAtom';
function App() {

  return (
    <>
    <RecoilRoot>
      <TodoComponent />
      <FilterTodo />
      <DisplayComponent />
    </RecoilRoot>
    </>
  )
}

function TodoComponent(){
  const setTodo = useSetRecoilState(todoAtom);
  const titleRef = useRef();
  const descriptionRef = useRef()

  function addTodo(){
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    setTodo((prev) => [...prev,{title,description}])
    titleRef.current.value = "";
    descriptionRef.current.value = ""
  }
  return (
    <>
    <input type="text" name="" id="" ref={titleRef}/>
    <input type="text" name="" id=""  ref={descriptionRef}/>
    <button onClick={addTodo}>Add</button>
    </>
  )
}

function FilterTodo(){
  const setFilter = useSetRecoilState(filterAtom)
  return (
    <input type="text" name="" id=""  onChange={(e) => setFilter(e.target.value) }/>
  )
}

function DisplayComponent(){
  const todos = useRecoilValue(filteredTodosSelector)
  // const todos = []
  // console.log(todos)
  return (
    <>
    {todos && todos.map((todo,index) => (
      <div key={index}>
        <h5>{todo.title}</h5>
        <p>{todo.description}</p>
      </div>
    ))}
    </>
  )
}

export default App
