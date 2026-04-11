import React, { createContext, useState } from "react"


// create context obj
export const counterContextObj = createContext();

// define context provider
function CounterContextProvider({children}) {
    const [counter, setCounter] = useState(0);
    // increment 
    const incrementCounter = () =>{
        setCounter(counter + 1)
    }
    // decrement
    const decrementCounter = ()=>{
        setCounter(counter - 1)
    }
  return (
    <counterContextObj.Provider value={{counter,incrementCounter,decrementCounter}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default CounterContextProvider;