import { useState } from "react";
import useNewsApi from "../../hooks/useNewsApi";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "../article/Article";

export default function FeedSearch() {
  const country = "fr";
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