import React from 'react'
import myphoto from './myphoto.jpg'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
 
  
    return (
     <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <img src={myphoto} style={{height:40, width:60}}  alt="ok" />
    <Link className="navbar-brand" to="/">Delay News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active navbar" style=  {{color : props.mode ===`light`?`black`:`white`}} aria-current="page" to="/">Home</Link>
        </li>
       
         
          <li className="nav-item"></li><Link className="nav-link" to="/Business">Business</Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Entertainment">Entertainment</Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Health">Health</Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Science">Science</Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Sports">Sports </Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Technology">Technology</Link>
      
      </ul>
    </div>
     <div className= {`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}>
       <input className="form-check-input" onClick={props.togglee} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
       <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">{props.mode===`light`? "Dark Mode": "Light Mode" }</label>
</div>
  </div>
</nav>
    )
  
}
export default Navbar




