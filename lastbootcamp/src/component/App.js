import React,{ Component } from "react";
import Home from "./Home";
import Topics from "./Topics"
import About from "./About";
import { BrowserRouter,Router, Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>

        <hr />
        
            <Route exact path='/' element = {<Home />}/>
            <Route path='/about' element = {<About />}/>
            <Route path='/topics' element = {<Topics />}/>
        
      </div>
      </Router>
      
  );
}

export default App;
