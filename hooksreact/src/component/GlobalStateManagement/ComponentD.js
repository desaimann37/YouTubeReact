import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component D
      <button onClick={()=> countContext.countDispatch('increment')}>Incr</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>Decr</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}

export default ComponentD