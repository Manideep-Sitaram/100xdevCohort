import { countAtom, evenSelector } from "../store/atoms/count"
import {useRecoilValue,useSetRecoilState,RecoilRoot} from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
          <Count />
          <Buttons />
          <Display />
      </RecoilRoot>
    </>
  )
}
function Count(){
  const count = useRecoilValue(countAtom);
  return(
    <div>The count is {count}</div>
  )
}

function Buttons(){
  const setCount =  useSetRecoilState(countAtom);
  return (
    <>
    <button onClick={() => setCount(prev => prev +1)}>Increment</button>
    <button onClick={() => setCount(prev => prev -1)}>Decrement</button>
    </>
  )
}

function Display(){
  const isEven = useRecoilValue(evenSelector);
  return (
    <>
    {
      (isEven == 0) && (
        <div>This is even</div>
      )
    }
    </>

  )
}

export default App
