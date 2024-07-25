import { useMemo } from "react";
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [count,setCount] = useState(0);
  const [textinput,setTextInput] = useState(0)

  let ans = useMemo(function(){
    let ans = 0;
    console.log("Memo called")
    for (let i =0; i<=textinput;i++){
      ans+=i
    } 
    return ans;
  },[textinput])

  return (
    <>
    <input type="number" value={textinput} onChange={(e) => setTextInput(e.target.value)}/>
    <p>Sum is {ans}</p>
    <button onClick={() => setCount(count+1)}>Counter {count}</button>
    </>
  )
}


export default App
