import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
      let {title, description, imageUrl, NewsUrl}= this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl?imageUrl:"https://techcrunch.com/wp-content/uploads/2024/04/GettyImages-1708316139.jpg?resize=1200,800"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={NewsUrl}  className="btn btn-dark">Explore</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
