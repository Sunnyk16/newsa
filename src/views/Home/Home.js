import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsArticle from "../../components/NewsArticle";

function Home() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState([]);

  const loadnews = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d4642ac09806460d8c14c26109fd9a23`
    );
    setNews(response.data.articles);
  };

  useEffect(() => {
    loadnews();
  }, []);

  useEffect(() => {
    loadnews();
  }, [query]);
  

  return (
    <div>
      <h1 className="text-center font-bold ">Home</h1>
      <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
      <div>
        {news.map((newsarticle, index) => {
          const { author, title, description, content, urlToImage } = newsarticle;
          return ( <NewsArticle author={author} title={title} description={description} content={content} urlToImage={urlToImage}/>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
