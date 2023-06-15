import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom"
import './App.css'
import React from "react"
import { useReducer } from "react"
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
import ComponentF from "./component/ComponentF"
import CounterOneuseReducer from "./component/CounterOneuseReducer"
import CounterTwouseReducer from "./component/CounterTwouseReducer"
import ComponentA from "./component/GlobalStateManagement/ComponentA"
import ComponentB from "./component/GlobalStateManagement/ComponentB"
import ComponentC from "./component/GlobalStateManagement/ComponentC" 
import { useContext } from "react"


export const CountContext = React.createContext()
export const ChannelContext = React.createContext()
export const UserContext = React.createContext()


const initialState = 0
const reducer = (state , action)=>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default: 
            return state;
    }
}


function App(){
  const [count , dispatch] = useReducer(reducer , initialState)

  return (
    <CountContext.Provider value={{countState: count , countDispatch: dispatch}}>
    <div className='App'>
        {/* <CounterOneuseReducer/> */}
        {/* <CounterTwouseReducer/> */}
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
      Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
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
    {/* <DataFetching/> */}
    
      {/* <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'CodeRevolution'}>
          <ComponentF />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

    </div>
  </CountContext.Provider>

  )
}
export default App


