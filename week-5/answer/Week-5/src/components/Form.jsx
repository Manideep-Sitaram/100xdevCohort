import React, { useState } from 'react'

function Form({cards,setCards}) {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [intrests,setIntrests] = useState("");

    const addToCards = (event) =>{
        event.preventDefault()
        const intrestList = intrests.split(" ");
        console.log({name,description,intrestList});
        fetch("http://localhost:3000/insertCard",{
          method: "POST",
          body: JSON.stringify({name,description,intrestList}),
          headers: {
            "Content-Type": "application/json"
          },
        })
        .then(res => res.text()).then(res => console.log(res))
        setCards([...cards,{name,description,intrestList}])
        setName("");
        setDescription("");
        setIntrests("")
    }
  return (
    <form onSubmit={addToCards}>
        <input type="text" name='name' placeholder='Enter your Name' value={name} onInput={(e) => setName(e.target.value)}/>
        <input type="text" name='description' placeholder='Give me your description' value={description} onInput={(e) => setDescription(e.target.value)} />
        <input type="text" name='intrests' placeholder='Enter your Intrests' value={intrests} onInput={(e) => setIntrests(e.target.value)}/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form