import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentF() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component F
      <button onClick={()=> countContext.countDispatch('increment')}>Incr</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>Decr</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}

export default ComponentF
