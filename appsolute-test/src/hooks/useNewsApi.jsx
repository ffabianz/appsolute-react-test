import { useEffect, useState } from "react";
import axios from "axios";


export default function useNewsApiSearch(country, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  //domains, language, title, discription, content. (thing to select for the search)

  useEffect(() => {
    setNews([]);
  }, [country]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines",
      params: {
        country: country,
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
  }, [country, pageNumber]);

  return { loading, error, news, hasMore };
}
