import React, { Component } from "react";
import newsImage from './newsImage.webp';

export class NewsItem extends Component {
  
  render() {
      let {title, description, imageUrl, NewsUrl, author, date, source}= this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl? imageUrl: newsImage} className="card-img-top"  alt="News" 
          onError={(e) => { e.target.src = newsImage; }}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <p className="card-text"><small className="text-muted">source: {source?source:"unknown"}</small></p>
            <a href={NewsUrl}  className="btn btn-dark">Explore</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
