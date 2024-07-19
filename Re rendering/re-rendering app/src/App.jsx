import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import HeaderButton from './components/HeaderButton';

function App() {
  // const [title, setTitle] = useState("My First Title");

  const onClickHandler = function (){
    setTitle(" My Fourth Title "+ Math.random())
  }

  return (
    <>
    {/* <button onClick={onClickHandler}>Click here to change the heading</button>
    <Header title ={title} /> */}
    <HeaderButton />
    <Header title={"My Second Title"}/>
    <Header title={"My Third Title"}/>
    </>
  )
}

export default App
