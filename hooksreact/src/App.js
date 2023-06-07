import { useState } from 'react' 
import React from 'react'
import './App.css'

const App = () => {
  // console.log(useState('Mann')[0])
  // var val = 'Mann Desai'
  const[myName , setName] = useState('Mann Desai');
  
  const changeName = () => {
    let val = myName;
    if(val === 'Mann Desai'){
      setName('_manus_37')
    }else{
      setName('Mann Desai')
    }
  }
  return (
    <div>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>Click Me</button>
    </div>
  )
}

export default App
