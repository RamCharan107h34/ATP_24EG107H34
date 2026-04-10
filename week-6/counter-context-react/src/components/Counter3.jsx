import { useContext } from 'react';
import { counterContextObj } from './CounterContextProvider';


function Counter3() {
    const {counter,incrementCounter,decrementCounter} = useContext(counterContextObj);
  return (
    <div className='mx-20 my-8 text-3xl text-center bg-gray-500 '>
      <h1>count: {counter}</h1>
      <div className='flex justify-around mt-2'>
        <button onClick={decrementCounter} className='bg-red-500 px-8'>-</button>
        <button onClick={incrementCounter} className='bg-green-500 px-8'>+</button>
      </div>
    </div>
  )
}

export default Counter3