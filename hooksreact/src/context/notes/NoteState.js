import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const s1 = {
        name : "Mann",
        class : "12A",
    }
    const [state , setState] = useState(s1)
    const update = (prevProp)=>{
        setTimeout(()=>{
            setState({
                name : "Mann Desai",
                class : "DDU CE"
            })
        } , 2000)
    }

    return (
        <NoteContext.Provider value={{state : state , update : update}}>
            {props.children}
        </NoteContext.Provider>    
    )
}

export default NoteState