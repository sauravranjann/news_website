
import React from 'react'


const Newsitems = (props) => {
 
 
    let { tittle,description,ImageUrl,newsUrl, mode, author , date}=props;
    return (
     <div>
    <div className="card" style={{ color: mode === 'light' ? 'black' : 'white', backgroundColor: mode === 'light' ? 'white' : 'rgb(0 0 0)' }} >
    
        <img src={ImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
          <h5 className="card-text">{author}<p><small>{new Date(date).toGMTString()}</small></p> </h5>     
          <a href={newsUrl} rel="noreferrer" target='_blank' className={`btn btn-${mode==='light' ? 'dark' : 'primary'}`}>Read more</a>
        </div>
    </div>
</div>
    )
  
}
export default Newsitems

