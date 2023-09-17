import React, { Component }  from 'react'
import myphoto from './myphoto.jpg'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={      
    }
  }
  render() {
    return (
     <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
  <div className="container-fluid">
    <img src={myphoto} style={{height:40, width:60}}  alt="ok" />
    <Link className="navbar-brand" to="/">Delay News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
         
          <li className="nav-item"></li><Link className="nav-link" to="/Business">Business</Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Entertainment">Entertainment</Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Health">Health</Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Science">Science</Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Sports">Sports </Link>
          <li className="nav-item"></li><Link className="nav-link" to="/Technology">Technology</Link>
      
      </ul>
    </div>
     <div className= {`form-check form-switch text-${this.props.mode===`light`?`dark`:`light`}`}>
       <input className="form-check-input" onClick={this.props.togglee} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
       <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">{ this.props.mode===`light`? "Dark Mode": "Light Mode" }</label>
</div>
  </div>
</nav>
    )
  }
}




