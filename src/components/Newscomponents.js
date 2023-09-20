
import Load from './Load';
import Newsitems from './Newsitems'
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";






const Newscomponents = (props) => {
   const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState(false)
   const [page, setPage] = useState(1)
   const [totalResults, setTotalResults] = useState(0)
   
 


  
  
   
//    const myStyle ={
//     color: props.mode ===`light`?`black`:`white`,
//     backgroundColor: props.mode ===`light`?`white`:`rgb(0 0 0)`,
//   }
 const updateNews =async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=14a67f0174cb4eabbafee55917155efc&page=1&${props.pageSize}`;
      setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
  }
  useEffect(() => {
     
      updateNews();
      // eslint-disable-next-line
   }, [])

  


//  const handlePrevClick = async()=>{
//   setPage(page-1)
//    updateNews();
// }



// const handleNextClick = async()=>{
//    setPage(page+1)
//     updateNews();
// }

 const fetchMoreData = async () => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=14a67f0174cb4eabbafee55917155efc&page=1&${props.pageSize}`;
   setLoading(true)
    let data =  await fetch(url);
    let parsedData = await  data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
  };





 






   
    return (
      <div className='container my-3'>
      <h2 className='text-center' style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(0 0 0)' }}> one day !! ok just few ....</h2>
     
     
      {/* {this.state.loading && <Load/>} */}
       <InfiniteScroll
           dataLength={articles.length}
           next={fetchMoreData}
           hasMore={articles.length !== totalResults}
           loader={<Load/>}
       >
      <div className="row">
         {articles?.map((element)=>{
           return <div className="col-md-4" key={element.url}>
           <Newsitems  tittle={element.title?element.title:" "} description={element.description?element.description:""} mode={props.mode} 
                       ImageUrl={element.urlToImage?element.urlToImage:"https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000"}
                        newsUrl= {element.url} author={element.author} date={element.publishedAt} />
        </div>
         })}
         
         
        </div>
        </InfiniteScroll>

             {/* <div className="container d-flex justify-content-between " style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(0 0 0)' }}>
                  <button disabled={this.state.page<=1} type="button" onClick= {this.handlePrevClick} className={`btn btn-${props.mode==='light' ? 'dark' : 'primary'}`}> &larr; previous</button>
                  <button type="button" disabled={(this.state.page+1) > Math.ceil(this.state.totalResults/20)} onClick={this.handleNextClick} className={`btn btn-${props.mode==='light' ? 'dark' : 'primary'}`}>next &rarr;</button>
            </div> */}
    </div> 
    )
  
}
 Newscomponents.defaultProps={
      country:'in',
     category:'sports', 
   }
   Newscomponents.propTypes={
      country: PropTypes.string,
      category: PropTypes.string,
   }

export default Newscomponents

