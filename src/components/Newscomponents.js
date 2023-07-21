
import Newsitems from './Newsitems'
import React, { Component } from 'react'

export default class Newscomponents extends Component {
   constructor(){
      super();
      this.state={
         articles : [],
         loading:false
      }
   }

   async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=14a67f0174cb4eabbafee55917155efc";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
}





  render() {
   
    return (
      <div className='container my-3'>
      <h2> Bihari new bole to bawal</h2>

      <div className="row">
         {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
           <Newsitems tittle={element.title?element.title:" "} description={element.description?element.description:""} ImageUrl={element.urlToImage?element.urlToImage:"https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000"} newsUrl= {element.url} />
        </div>

         })}
        
   
    </div>
    
    </div>
    )
  }
}



