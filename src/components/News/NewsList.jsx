import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewItem";
import nextId from "react-id-generator";

const URI =
  "https://api.thenewsapi.com/v1" +
  "/news/top?api_token=zZ9yRPDK4tiBAkdRnLsPVaszpafDprZ6pJVOnbYL&locale=id&language=id";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [err, setError] = useState("");

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const handleFetch = async () => {
      let result;
      try {
        result = await axios.get(URI, { cancelToken: source.token });
        setNews(result.data.data);
      } catch (error) {
        setError(error);
      }
    };
    handleFetch();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div
      className="container-fluid d-flex justify-content-center position-absolute p-5"
      style={{ top: "150px" }}
    >
      <div className="row">
        {news.map((item) => (
          <NewsItem
            key={nextId()}
            title={item.title}
            content={item.snippet}
            url={item.url}
            image={item.image_url}
          />
        ))}
      </div>
      {news.length === 0 && <h5>{err}</h5>}
    </div>
  );
}
