import Test from "./Test"
import { useCounterStore } from "../Store/CounterStore"
import { counterContextObj } from "./ContextProvider"
import { useContext } from "react"



function Home () {

  const newCounter = useCounterStore((state)=>state.newCounter);
  const incrementCounter = useCounterStore((state)=>state.incrementCounter);
  const {counter,counter1,changeCounter,changeCounter1} = useContext(counterContextObj);


  console.log("Home")

  return (
    <div className="text-2xl space-y-4">
      <div>
        <h1>Count : {newCounter}</h1>
        <button onClick={incrementCounter} className="bg-blue-300 px-5 py-2 mt-2">incrementCounter</button>
      </div>
      <div>
        <p>Context counter: {counter}</p>
        <button onClick={changeCounter} className="bg-green-300 px-5 py-2 mt-2">changeCounter</button>
      </div>
      <div>
        <p>Context counter1: {counter1}</p>
        <button onClick={changeCounter1} className="bg-yellow-300 px-5 py-2 mt-2">changeCounter1</button>
      </div>
      <Test />
    </div>
  )
}

export default Home