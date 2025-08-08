// // import React, { Component } from "react";
// // import NewsItem from "./NewsItem";
// // import Spinner from "./Spinner";
// // import PropTypes from "prop-types";
// // import InfiniteScroll from "react-infinite-scroll-component";

// // export class News extends Component {
// //   static defaultProps = {
// //     country: "us",
// //     pageSize: 8,
// //     category: "general",
// //   };
// //   static PropsTypes = {
// //     country: PropTypes.string,
// //     pageSize: PropTypes.number,
// //   };
// //   constructor() {
// //     super();
// //     this.state = {
// //       page: 1,
// //       articles: [],
// //       loading: false,
// //       totalResults:0
// //     };
// //   }
// //   async newsUpdated() {
// //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${this.state.page}&pageSize=${this.props.pageSize}`;
// //     this.setState({ loading: true });
// //     let data = await fetch(url);
// //     let parsedata = await data.json();
// //     this.setState({
// //       articles: parsedata.articles,
// //       totalResults: parsedata.totalResults,
// //       loading: false,
// //   })}
// //   async componentDidMount() {
// //     this.newsUpdated();
// //   }

// //   // fetchMoreData = async() => {
// //   //   this.setState({page: this.state.page+1})
// //   //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${this.state.page}&pageSize=${this.props.pageSize}`;
// //   //   let data = await fetch(url);
// //   //   let parsedata = await data.json();
// //   //   this.setState({
// //   //     articles: this.state.articles.concat(parsedata.articles),
// //   //     totalResults: parsedata.totalResults,
// //   //   });
// //   // };
// // fetchMoreData = async () => {
// //   const nextPage = this.state.page + 1;

// //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${nextPage}&pageSize=${this.props.pageSize}`;

// //   let data = await fetch(url);
// //   let parsedData = await data.json();

// //   this.setState((prevState) => ({
// //     articles: prevState.articles.concat(parsedData.articles),
// //     totalResults: parsedData.totalResults,
// //     page: nextPage,
// //   }));
// // };

// //   render() {
// //     return (
// //       <>
// //         <h1 className="text-center">NewsOrbit - Top {this.props.category} Headlines </h1>
// //          {this.state.loading && <Spinner />}
// //           <InfiniteScroll
// //           dataLength={this.state.articles.length}
// //           next={this.fetchMoreData}
// //           hasMore={this.state.articles.length !== this.state.totalResults}
// //           loader={<Spinner/>}
// //         >
// //           <div className="container">
// //           <div className="row">
// //             {this.state.articles.map((element) => {
// //                 return (
// //                   <div className="col-md-4" key={element.url}>
// //                     <NewsItem  title={element.title ? element.title.slice(0, 40) : " "}
// //                       description={element.description? element.description.slice(0, 80): " "}
// //                       imageUrl={element.urlToImage}
// //                       NewsUrl={element.url}
// //                       author={element.author}
// //                       date={element.publishedAt}
// //                       source={element.source.name}
// //                     />
// //                   </div>
// //                 );
// //               })}
// //           </div>
// //           </div>
// //           </InfiniteScroll>
// //           </>
// //     );
// //   }
// // }

// // export default News;
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//   };

//   constructor() {
//     super();
//     this.state = {
//       page: 1,
//       articles: [],
//       loading: false,
//       totalResults: 0,
//     };
//   }

//   async newsUpdated() {
//     this.setState({ loading: true });
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=1&pageSize=${this.props.pageSize}`;
    
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       page: 1,
//       loading: false,
//     });
//   }

//   async componentDidMount() {
//     this.newsUpdated();
//   }

//   fetchMoreData = async () => {
//     const nextPage = this.state.page + 1;
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${nextPage}&pageSize=${this.props.pageSize}`;

//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState((prevState) => ({
//       articles: prevState.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       page: nextPage,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center">NewsOrbit - Top {this.props.category} Headlines</h1>

//         {this.state.loading && <Spinner />}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length < this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((element) => (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title.slice(0, 40) : " "}
//                     description={element.description ? element.description.slice(0, 80) : " "}
//                     imageUrl={element.urlToImage}
//                     NewsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </InfiniteScroll>

//         {/* Optional: show message at end */}
//         {!this.state.loading &&
//           this.state.articles.length >= this.state.totalResults && (
//             <p className="text-center my-3">You've reached the end!</p>
//           )}
//       </>
//     );
//   }
// }

// export default News;

// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   constructor() {
//     super();
//     this.state = {
//       page: 1,
//       articles: [],
//       loading: false,
//       totalResults: 0,
//       hasMore: true,
//     };
//   }

//   async componentDidMount() {
//     this.newsUpdated();
//   }

//   newsUpdated = async () => {
//     this.setState({ loading: true });

//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=1&pageSize=${this.props.pageSize}`;

//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       page: 1,
//       loading: false,
//       hasMore: parsedData.articles.length > 0,
//     });
//   };

//   fetchMoreData = async () => {
//     const nextPage = this.state.page + 1;

//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${nextPage}&pageSize=${this.props.pageSize}`;

//     let data = await fetch(url);
//     let parsedData = await data.json();

//     const newArticles = parsedData.articles || [];

//     this.setState((prevState) => ({
//       articles: prevState.articles.concat(newArticles),
//       totalResults: parsedData.totalResults,
//       page: nextPage,
//       hasMore: newArticles.length > 0,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center my-4">
//           NewsOrbit - Top {this.props.category} Headlines
//         </h1>

//         {this.state.loading && <Spinner />}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.hasMore}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((element) => (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title.slice(0, 40) : " "}
//                     description={
//                       element.description
//                         ? element.description.slice(0, 80)
//                         : " "
//                     }
//                     imageUrl={element.urlToImage}
//                     NewsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </InfiniteScroll>

//         {!this.state.loading &&
//           !this.state.hasMore &&
//           this.state.articles.length > 0 && (
//             <p className="text-center my-3">You've reached the end!</p>
//           )}
//       </>
//     );
//   }
// }

// export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: false,
      totalResults: 0,
      hasMore: true,
    };
  }

  async componentDidMount() {
    this.newsUpdated();
  }

  newsUpdated = async () => {
    this.props.setProgress(10);
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: 1,
      loading: false,
      hasMore: parsedData.articles.length > 0,
    });
    this.props.setProgress(100);
  };

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=024672c0c7ec4079b88cb23f8e8d9c73&page=${nextPage}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    const newArticles = parsedData.articles || [];

    this.setState((prevState) => ({
      articles: prevState.articles.concat(newArticles),
      totalResults: parsedData.totalResults,
      page: nextPage,
      hasMore: newArticles.length > 0,
    }));
  };

  render() {
    return (
      <>
        <h1 className="text-center my-4">NewsOrbit - Top {this.props.category} Headlines</h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Spinner />}
          >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) :" "}
                    description={element.description?element.description.slice(0, 80):" "}
                    imageUrl={element.urlToImage}
                    NewsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
