import { useState, useRef, useCallback } from "react";
import useNewsApiSearch from "../../hooks/useNewsApiSearch";

export default function Feed() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { news, hasMore, loading, error } = useNewsApiSearch(query, pageNumber);

  const observer = useRef();
  const lastNewElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPagNumber) => prevPagNumber + 1);
        }
      });
      if (node) observer.current.observe();
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {news.map((article, index) => {
        if (news.length === index + 1) {
          <div ref={lastNewElementRef} key={article}>
            {article}
          </div>;
        } else {
          return <div key={article}>{article}</div>;
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </>
  );
}
