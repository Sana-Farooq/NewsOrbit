import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export class News extends Component {
    constructor(){
        super();
        this.state ={ 
            page: 1,
           articles: [],
           loading: false
        }
    }

    async componentDidMount(){
      let  url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedata=await data.json();
      this.setState({articles: parsedata.articles ,
         totalResults: parsedata.totalResults,
        loading: false});
    }

    HandlePreviousClick= async() =>{
      let  url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedata= await data.json();
      this.setState({
        page: this.state.page-1,
        articles: parsedata.articles,
        loading: false
      })
        }

    HandleNextClick= async() =>{
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      }else{
      let  url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedata=await data.json();
      this.setState({
        page: this.state.page+1,
        articles: parsedata.articles,
        loading: false
      })
      }
    }
  render() {

    return (
        <div className="my-4">
        <h1 className="text-center">NewsOrbit - Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="container my-4">
           <div className="row">
                {!this.state.loading && this.state.articles.map((element)=> {
                  return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0, 40):" "} description={element.description?element.description.slice(0, 80):" "} imageUrl={element.urlToImage} NewsUrl={element.url}/>
                </div>
                })}
            </div>
            <div className="container d-flex justify-content-between py-3">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.HandlePreviousClick}>&laquo; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &raquo;</button>
            </div>
        </div>
      </div>
    )
  }
}

export default News
