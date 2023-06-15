import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondcounter: 10
}
const reducer = (state , action)=>{
    switch(action.type){
        case 'increment':
            return {
                ...state , firstCounter : state.firstCounter + action.value
            };
        case 'decrement':
            return {
                ...state , firstCounter : state.firstCounter - action.value
            };
        case 'increment2':
            return {
                ...state , secondcounter : state.secondcounter + action.value
            };
        case 'decrement2':
            return {
                ...state , secondcounter : state.secondcounter - action.value
            };
        case 'reset1':
            return initialState

        case 'reset2':
            return initialState
            
        default: 
            return state

    }
}

function CounterTwouseReducer() {

    const [count , dispatch] = useReducer(reducer , initialState)

  return (
    <div>
        <div>FirstCounter - {count.firstCounter}</div>
        <br />
      <button onClick={()=> dispatch({type: 'increment' , value: 1})}>Incr - 1</button>
      <button onClick={()=> dispatch({type: 'increment' , value: 5})}>Incr - 5</button>
      <button onClick={()=> dispatch({type: 'decrement' , value: 1})}>Decr - 1</button>
      <button onClick={()=> dispatch({type: 'decrement' , value: 5})}>Decr - 5</button>
      <button onClick={()=> dispatch({type: 'reset1'})}>Reset1</button>
      <br /><br />
      <div>SecondCounter - {count.secondcounter}</div>
    <br />
      <button onClick={()=> dispatch({type: 'increment2' , value: 1})}>Incr - 1</button>
      <button onClick={()=> dispatch({type: 'increment2' , value: 5})}>Incr - 5</button>
      <button onClick={()=> dispatch({type: 'decrement2' , value: 1})}>Decr - 1</button>
      <button onClick={()=> dispatch({type: 'decrement2' , value: 5})}>Decr - 5</button>
      <button onClick={()=> dispatch({type: 'reset2'})}>Reset2</button>
    </div>
  )
}

export default CounterTwouseReducer
