
import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let { tittle,description,ImageUrl,newsUrl}=this.props;
    return (
     <div>
    <div className="card" style={{width: "18rem;"}}>
        <img src={ImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-primary">read more</a>
        </div>
    </div>
</div>
    )
  }
}

