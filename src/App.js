import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Newscomponents from './components/Newscomponents';
import { useState } from 'react';



export default function App() {
   const [mode, setmode] = useState("light")
  const togglee = () =>{
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor= "rgb(0 0 0)"
     
    }
    else{
      setmode("light")
      document.body.style.backgroundColor= "white"
      
    }
  }

  return (
    <div>
   <Navbar mode={mode}  togglee= {togglee} />
   <Newscomponents mode={mode} togglee={togglee}/>
   
   </div>
   
   
  )
}

