
import Newsitems from './Newsitems'
import React, { Component } from 'react'

export default class Newscomponents extends Component {
  render() {
    return (
      <div className='container my-3'>
      <h2> Bihari new bole to bawal</h2>
      <div className="row m-4">
        <div className="col-md-4">
           <Newsitems tittle="hello" description="brother" ImageUrl="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/62c0f14c6c6a4aaab2341695625ee092.jpg"/>
        </div>
    <div className="col-md-4">
           <Newsitems/>
        </div>
   <div className="col-md-4">
           <Newsitems/>
        </div>
        <div className="col-md-4">
           <Newsitems/>
        </div>
        <div className="col-md-4">
           <Newsitems/>
        </div>
        <div className="col-md-4">
           <Newsitems/>
        </div>
    </div>
    
    </div>
    )
  }
}



