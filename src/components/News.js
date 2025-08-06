import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };
  static PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: false,
    };
  }
  async newsUpdated() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.newsUpdated();
  }

  HandleNextClick = () => {
  this.setState(
    (prevState) => ({ page: prevState.page + 1 }),
    () => this.newsUpdated() 
  );
};

HandlePreviousClick = () => {
  this.setState(
    (prevState) => ({ page: prevState.page - 1 }),
    () => this.newsUpdated()
  );
};

  render() {
    return (
      <div className="my-4">
        <h1 className="text-center">NewsOrbit - Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="container my-4">
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : " "}
                      description={element.description? element.description.slice(0, 80): " "}
                      imageUrl={element.urlToImage}
                      NewsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between py-3">
            <button
              disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePreviousClick}
            >&laquo; Previous</button>
            <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults / this.props.pageSize)}
              type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &raquo;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
