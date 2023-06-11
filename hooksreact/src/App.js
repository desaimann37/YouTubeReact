import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom"
import './App.css'
import React from "react"
import HookCounterTwo from './component/HookCounterTwo'
import ClassCounter from './component/ClassCounter'
import HookCounterThree from './component/HookCounterThree'
import HookCounterFour from './component/HookCounterFour'
import ClassCounterOne from './component/ClassCounterOne'
import HookCounterOne from './component/HookCounterOne'
import ClassMouse from './component/ClassMouse'
import HookMouse from './component/HookMouse'
import MouseContainer from './component/MouseContainer'
import About from './About'
import Home from './Home'
import NoteState from './context/notes/NoteState'
import Navbar from './Navbar'
import DataFetching from "./component/DataFetching"

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
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
   
    {/*
    <>
      <NoteState>
        <Router>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
        </Router>
      </NoteState>
    </>
  */}
    <DataFetching/>
  </div>
  )
}
export default App


