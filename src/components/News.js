import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state ={ 
           articles: [],
           loading: false
        }
    }

    async componentDidMount(){
      let  url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=024672c0c7ec4079b88cb23f8e8d9c73";
      let data = await fetch(url);
      let parsedata=await data.json();
      this.setState({articles: parsedata.articles});
    }
  render() {

    return (
        <div className="my-3">
        <div className="container">
            <div className="row">
                {this.state.articles.map((element)=> {
                          return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 40):" "} description={element.description?element.description.slice(0, 80):" "} imageUrl={element.urlToImage} NewsUrl={element.url}/>
                </div>
                })}
                
            </div>
        </div>
      </div>
    )
  }
}

export default News
