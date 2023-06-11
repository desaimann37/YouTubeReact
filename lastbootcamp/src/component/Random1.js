import React, { useState } from 'react'

function Random1() {
    const [count , setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count+1)}>Click : {count}</button>
    </div>
  )
}

export default Random1
