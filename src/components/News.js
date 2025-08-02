import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="my-3">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <NewsItem/>
                </div>
                <div className="col-md-4">
                    <NewsItem/>
                </div>
                <div className="col-md-4">
                    <NewsItem/>
                </div>
            </div>
        </div>
        
      </div>
      </div>
    )
  }
}

export default News
