import React, { Component }  from 'react'
import myphoto from './myphoto.jpg'

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
    <a className="navbar-brand" href="/">Delay News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>  
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




