import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{count,setCount}}>
        <Count />
      </CountContext.Provider>
    </>
  )
}

function Count(){
 return (
  <>
    <CountRenderer />
    <IncrementCount />
  </>
 )
}

function CountRenderer(){
  const {count} = useContext(CountContext);
 return (
  <p>Count is {count}</p>
 )
}

function IncrementCount(){
  const {setCount} = useContext(CountContext)
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  )
}

export default App
