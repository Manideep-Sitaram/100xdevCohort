import React, { useState } from 'react'

function HeaderButton() {
    const [title,setTitle] = useState("This is my First Title");

    function onclickHandler (){
        setTitle("This is my Ttile "+ Math.random())
    }
  return (
    <>
        <button onClick={onclickHandler}>Click here to send the Title</button>
        <p>{title}</p>
    </>
  )
}

export default HeaderButton