import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Newscomponents from './components/Newscomponents';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



export default function App()
 {


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
    <Router><Navbar mode={mode}  togglee= {togglee} /><Routes>
          <Route exact  path="/"element={<Newscomponents key = "general" mode={mode} togglee={togglee} country={'in'} category= {'general'}/>}></Route>
          <Route exact path="/Entertainment"element={<Newscomponents key = "entertainment" mode={mode} togglee={togglee} country={'in'} category= {'entertainment'}/>}></Route>
          <Route exact  path="/Business"element={<Newscomponents key = "business" mode={mode} togglee={togglee} country={'in'} category= {'business'}/>}></Route>
          <Route exact path="/Health"element={<Newscomponents key = "health" mode={mode} togglee={togglee} country={'in'} category= {'health'}/>}></Route>
          <Route exact path="/Science"element={<Newscomponents key = "science" mode={mode} togglee={togglee} country={'in'} category= {'science'}/>}></Route>
          <Route exact path="/Sports"element={<Newscomponents key = "sports" mode={mode} togglee={togglee} country={'in'} category= {'sports'}/>}></Route>
          <Route exact path="/Technology"element={<Newscomponents key = "technology" mode={mode} togglee={togglee} country={'in'} category= {'technology'}/>}></Route>
        </Routes>
    </Router>
   
   </div>
   
   
  )
}
