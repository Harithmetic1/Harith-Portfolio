import React, { useEffect, useContext } from "react";
import { StateContext, SetStateContext } from "../context/BlogContext";

function Image({ social_image, title }) {
  const { setIsLoaded } = useContext(SetStateContext);

  useEffect(() => {
    setIsLoaded(false);
    const imgLoad = new window.Image();
    imgLoad.src = social_image;
    imgLoad.onload = () => {
      setIsLoaded(false);
      console.log(`Image: ${social_image} loaded`);
    };
  }, [social_image]);

  return <img src={social_image} alt={title} />;
}

export default Image;
