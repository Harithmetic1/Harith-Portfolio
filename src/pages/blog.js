import React, { useState } from "react";
import ButtonLink from "../components/ButtonLink";
import Layout from "../components/Layout";
import { LoadArticles, LoadYoutubeData } from "../network/ApiClient";
import Ellipse from "../images/Ellipse.svg";

// style
import "../styles/blog.scss";
import BlogCard from "../components/BlogCard";
import YTBlogCard from "../components/YTBlogCard";

const Blog = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [articleData, setArticleData] = useState([]);

  return (
    <>
      <Layout pageTitle={"My Blog"}>
        <LoadYoutubeData setYoutubeData={setYoutubeData} />
        <LoadArticles setArticleData={setArticleData} />
        <div className="my-blog-container">
          <div className="my-blog-header">
            <div className="my-blog-links">
              <h1>My Blog</h1>
              <ButtonLink btnName={"Home"} to="/" />
            </div>
            <div className="ellipse-icon">
              <img src={Ellipse} alt="Ellipse" />
            </div>
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
      </Layout>
    </>
  );
};

export default Blog;
