import React, { useState } from 'react'


function HookCounterThree() {
    const [name , setName] = useState({firstName: '' , lastName: ''})
  return (
    <form action="">
        <input type="text" value={name.firstName} onChange={(e)=>setName({...name , firstName: e.target.value})}/>
        <input type="text" value={name.lastName} onChange={(e)=>setName({...name , lastName: e.target.value})}/>
        <h2>Your First name Is : {name.firstName}</h2>
        <h2>Your Last name Is : {name.lastName}</h2>
    </form>
  )
}
export default HookCounterThree
