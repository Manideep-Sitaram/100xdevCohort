import React, { useState } from 'react'

function Form({cards,setCards}) {
    const [name,setName] = useState();
    const [description,setDescription] = useState();
    const [intrests,setIntrests] = useState();

    const addToCards = (event) =>{
        event.preventDefault()
        const intrestList = intrests.split(" ");
        console.log({name,description,intrestList});
        setCards([...cards,{name,description,intrests: intrestList}])
    }
  return (
    <form onSubmit={addToCards}>
        <input type="text" name='name' placeholder='Enter your Name' onInput={(e) => setName(e.target.value)}/>
        <input type="text" name='description' placeholder='Give me your description'onInput={(e) => setDescription(e.target.value)} />
        <input type="text" name='intrests' placeholder='Enter your Intrests' onInput={(e) => setIntrests(e.target.value)}/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form