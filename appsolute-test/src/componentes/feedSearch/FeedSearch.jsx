import { useState } from "react";
import useNewsApi from "../../hooks/useNewsApi";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "../article/Article";
import { ClassNames } from "@emotion/react";

export default function FeedSearch() {
  const [country, setCountry] = useState("us");
  const [pageNumber, setPageNumber] = useState(1);
  const {
    news = [],
    hasMore,
    loading,
    error,
  } = useNewsApi(country, pageNumber);

  const fetchMoreData = () => {
    setPageNumber(pageNumber + 1);
  };

  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };

 
  return (
    <>
      <InfiniteScroll
        dataLength={news.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {news.map((articleData, index) => {
    return <Article key={index} articleData={articleData} />;
  })}
      </InfiniteScroll>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </>
  );
}


//TODO: change feed and feedsearch ClassNames. add filters, format articles, add router for search page with filter.