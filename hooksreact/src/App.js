import React from 'react'
import './App.css'
import HookCounterTwo from './component/HookCounterTwo'
import ClassCounter from './component/ClassCounter'
import HookCounterThree from './component/HookCounterThree'
import HookCounterFour from './component/HookCounterFour'
import ClassCounterOne from './component/ClassCounterOne'
import HookCounterOne from './component/HookCounterOne'
import ClassMouse from './component/ClassMouse'
import HookMouse from './component/HookMouse'


function App(){
  return (
    <div className='App'>
      {/* <ClassCounter/> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      <HookMouse/>
    </div>
  )
}
export default App


