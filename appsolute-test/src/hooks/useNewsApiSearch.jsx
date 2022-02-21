import { useEffect, useState } from "react";
import axios from "axios";

export default function useNewsApiSearch(query,language,sortBy,searchIn, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  //domains, language, title, discription, content. (thing to select for the search)

  useEffect(() => {
    setNews([]);
  }, [query,language,sortBy,searchIn]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://newsapi.org/v2/everything",
      params: {
        q: query,
        language: language,
        sortBy: sortBy,
        searchIn: searchIn,
        page: pageNumber,
        apiKey: process.env.React_App_News_Api,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNews((prevNews) => {
          return [...new Set([...prevNews, ...res.data.articles])];
        });
        setHasMore(res.data.articles.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query,language,sortBy,searchIn, pageNumber]);

  return { loading, error, news, hasMore };
}
