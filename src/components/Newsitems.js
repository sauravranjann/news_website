
import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let { tittle,descripton,ImageUrl}=this.props;
    return (
     <div>
    <div className="card" style={{width: "18rem;"}}>
        <img src={ImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{descripton}</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
    )
  }
}

