/* global gapi */
import React, { useEffect } from "react";
import axios from "axios";

export const LoadYoutubeData = ({ setYoutubeData }) => {
  const loadData = async () => {
    try {
      const youtubeData = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=UU5JXLrybL-n43uS42w02lqw&key=${process.env.GATSBY_YOUTUBE_API_KEY}`
      );
      setYoutubeData(youtubeData.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return <></>;
};

export const LoadArticles = ({ setArticleData }) => {
  const loadData = async () => {
    try {
      const articleData = await axios.get(
        "https://dev.to/api/articles?username=harithmetic1&state=all"
      );
      setArticleData(articleData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return <></>;
};
