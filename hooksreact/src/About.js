import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from './context/notes/NoteContext'


function About() {
    const a = useContext(NoteContext)
    useEffect(()=>{
      a.update();
    } , [])
  return (
    <div>
      This is inside About {a.state.name} and he is in {a.state.class}
    </div>
  )
}

export default About
