import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [count,setCount] = useState(0);
  const [textinput,setTextInput] = useState(0)
  const [sum, setSum] = useState(0)

  function sumOfInput(){
    let ans = 0;
    for ( i=0;i<=textinput;i++){
      ans+=i;
    }
    setSum(ans)
  }
 
  return (
    <>
    <input type="number" value={count} onInput={sumOfInput} />
    <p>Sum is {sum}</p>
    <button onClick={() => setCount(count++)}>Counter {count}</button>
    </>
  )
}


export default App
