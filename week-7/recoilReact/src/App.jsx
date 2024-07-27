import { useState } from 'react'
import { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from '../store/atoms/count';

function App() {

  return (
    <>
    <RecoilRoot>
      <Count />
    </RecoilRoot>

    </>
  )
}

function Count(){
 return (
  <>
    <CountRenderer />
    <Buttons />
  </>
 )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
 return (
  <p>Count is {count}</p>
 )
}

function Buttons(){
  const [count,setCount] = useRecoilState(countAtom);
  return (
    <>
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    <button onClick={() => setCount((prev) => prev -1)}>Decrement</button>
    </>
  )
}

export default App
