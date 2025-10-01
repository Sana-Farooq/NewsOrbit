import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ category, pageSize, token, setProgress }) => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true); // Spinner only for initial load

  // -------------------
  // Fetch news (combined for initial and infinite scroll)
  // -------------------
  const fetchNews = async (pageNumber = 1) => {
    if (pageNumber === 1) setLoading(true); // Show spinner on initial load

    setProgress(10);
    try {
      const url = `https://gnews.io/api/v4/top-headlines?category=${category}&country=us&max=${pageSize}&page=${pageNumber}&token=${token}`;
      const res = await fetch(url);
      setProgress(30);
      const data = await res.json();
      setProgress(50);

      const fetchedArticles = data.articles || [];

      if (pageNumber === 1) {
        setArticles(fetchedArticles); // Initial load
      } else {
        setArticles((prev) => prev.concat(fetchedArticles)); // Infinite scroll
      }

      setHasMore(fetchedArticles.length > 0);
      setPage(pageNumber);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setHasMore(false);
      setProgress(100);
    } finally {
      if (pageNumber === 1) setLoading(false); // Hide spinner after initial load
    }
  };

  // -------------------
  // Load more articles for InfiniteScroll
  // -------------------
  const fetchMoreData = () => {
    fetchNews(page + 1);
  };

  // -------------------
  // Fetch news on mount or when category changes
  // -------------------
  useEffect(() => {
    fetchNews(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <>
      <h1
        className="text-center"
        style={{ marginTop: "90px", marginBottom: "40px" }}
      >
        NewsOrbitNow - Top {category} Headlines
      </h1>

      {/* Initial spinner */}
      {loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((article, index) => (
                <div className="col-md-4" key={`${article.url}-${index}`}>
                  <NewsItem
                    title={article.title ? article.title.slice(0, 40) : " "}
                    description={
                      article.description
                        ? article.description.slice(0, 80)
                        : " "
                    }
                    image={article.image}
                    NewsUrl={article.url}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

// -------------------
// Default props
// -------------------
News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

// -------------------
// PropTypes
// -------------------
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  token: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
