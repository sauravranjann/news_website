
import React, { Component } from 'react'


export default class Newsitems extends Component {
  render() {
 
    let { tittle,description,ImageUrl,newsUrl, mode, author , date}=this.props;
    return (
     <div>
    <div className="card" style={{ color: mode === 'light' ? 'black' : 'white', backgroundColor: mode === 'light' ? 'white' : 'rgb(0 0 0)' }} >
    
        <img src={ImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
          <p className="card-text">{author}<a><small>{new Date(date).toGMTString()}</small></a> </p>     
          <a href={newsUrl} rel="noreferrer" target='_blank' className={`btn btn-${this.props.mode==='light' ? 'dark' : 'primary'}`}>read more</a>
        </div>
    </div>
</div>
    )
  }
}

