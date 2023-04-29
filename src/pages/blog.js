import React, { useState, useEffect, useContext } from "react";
import ButtonLink from "../components/ButtonLink";
import Layout from "../components/Layout";
import { LoadArticles, LoadYoutubeData } from "../network/ApiClient";
import Ellipse from "../images/Ellipse.svg";
import { motion, AnimatePresence } from "framer-motion";

// style
import "../styles/blog.scss";
import BlogCard from "../components/BlogCard";
import YTBlogCard from "../components/YTBlogCard";
import { StateContext } from "../context/BlogContext";

const Blog = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [isLoadedYouTube, setIsLoadingYouTube] = useState(false);
  const [isLoadedArticles, setIsLoadingArticles] = useState(false);
  const [contextData, setContextData] = useState();

  const { isLoaded } = useContext(StateContext);

  useEffect(() => {
    if (isLoaded) {
      setContextData(isLoaded);
    }
  }, [isLoaded]);

  return (
    <>
      <Layout pageTitle={"My Blog"}>
        <AnimatePresence>
          <LoadYoutubeData
            setYoutubeData={setYoutubeData}
            setIsLoadingYouTube={setIsLoadingYouTube}
          />
          <LoadArticles
            setArticleData={setArticleData}
            setIsLoadingArticles={setIsLoadingArticles}
          />
          <div className="my-blog-container">
            <div className="my-blog-header">
              <div className="my-blog-links">
                <h1>My Blog</h1>
                <ButtonLink btnName={"Home"} to="/" />
              </div>
              {isLoadedArticles || isLoadedYouTube || contextData ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="ellipse-icon"
                >
                  <img src={Ellipse} alt="Ellipse" />
                </motion.div>
              ) : (
                <div className="ellipse-icon">
                  <img src={Ellipse} alt="Ellipse" />
                </div>
              )}
            </div>
            <div className="my-blog">
              <div className="my-blog-caption">
                <p>
                  I curate tutorials and write beautiful articles to help you in
                  your tech journey
                </p>
              </div>
              <div className="article-section">
                <h2>Articles</h2>
                <div className="grid-section">
                  {articleData.map((article) => {
                    return <BlogCard {...article} key={article.id} />;
                  })}
                </div>
              </div>
              <div className="youtube-section">
                <h2>Youtube</h2>
                <div className="grid-section">
                  {youtubeData.map((video) => {
                    return <YTBlogCard {...video} key={video.id} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default Blog;
