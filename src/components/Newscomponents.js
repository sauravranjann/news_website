
import Load from './Load';
import Newsitems from './Newsitems'
import React, { Component } from 'react'





export default class Newscomponents extends Component {
   constructor(props){
      super(props);
      this.state={
         articles : [],
         loading:false,
         page:1
      }
   }
   myStyle ={
    color: this.props.mode ===`light`?`black`:`white`,
    backgroundColor: this.props.mode ===`light`?`white`:`rgb(0 0 0)`,
  }

   async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=14a67f0174cb4eabbafee55917155efc&page=1&${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({loading:false});
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })  
}

handlePrevClick = async()=>{
   let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=14a67f0174cb4eabbafee55917155efc&page=${this.state.page-1}&${this.props.pageSize}`;
    this.setState({loading:true}); 
   let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({loading:false});
   this.setState({
      page:this.state.page-1,
      articles: parsedData.articles
   })
}



handleNextClick = async()=>{
   if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){   
   let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=14a67f0174cb4eabbafee55917155efc&page=${this.state.page+1}&${this.props.pageSize}`;
   this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
     this.setState({loading:false});
   this.setState({
      page:this.state.page+1,
      articles: parsedData.articles
   })
}
}




 





  render() {
   
    return (
      <div className='container my-3'>
      <h2 className='text-center' style={{ color: this.props.mode === 'light' ? 'black' : 'white', backgroundColor: this.props.mode === 'light' ? 'white' : 'rgb(0 0 0)' }}> one day !! ok just few ....</h2>
     
     
      {this.state.loading && <Load/>}
       

      <div className="row">
         {!this.state.loading && this.state.articles?.map((element)=>{
           return <div className="col-md-4" key={element.url}>
           <Newsitems  tittle={element.title?element.title:" "} description={element.description?element.description:""} mode={this.props.mode} 
                       ImageUrl={element.urlToImage?element.urlToImage:"https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000"}
                        newsUrl= {element.url} />
        </div>
         })}
        </div>
            <div className="container d-flex justify-content-between " style={{ color: this.props.mode === 'light' ? 'black' : 'white', backgroundColor: this.props.mode === 'light' ? 'white' : 'rgb(0 0 0)' }}>
                  <button disabled={this.state.page<=1} type="button" onClick= {this.handlePrevClick} className={`btn btn-${this.props.mode==='light' ? 'dark' : 'primary'}`}> &larr; previous</button>
                  <button type="button" disabled={(this.state.page+1) > Math.ceil(this.state.totalResults/20)} onClick={this.handleNextClick} className={`btn btn-${this.props.mode==='light' ? 'dark' : 'primary'}`}>next &rarr;</button>
            </div>
    </div>
    )
  }
}



