import { useState, useContext } from "react";
import SearchContext from "../../context/SearchContext";
import useNewsApiSearch from "../../hooks/useNewsApiSearch";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "../article/Article";
import { Grid } from "@mui/material";

export default function Feed() {
  const ctx = useContext(SearchContext);
  const [searchValue] = ctx;
  const { query, language, sortBy, searchIn } = searchValue;
  const [pageNumber, setPageNumber] = useState(1);
  const {
    news = [],
    hasMore,
    loading,
    error,
  } = useNewsApiSearch(query, language, sortBy, searchIn, pageNumber);

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
          return (
            <Grid key={index} item xs={12}>
              <Article articleData={articleData} />
            </Grid>
          );
        })}
      </InfiniteScroll>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </>
  );
}
