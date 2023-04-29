import React, { useEffect, useRef } from "react";

import "../styles/components.scss";

function MouseFollow() {
  const mouseCursor = useRef(null);

  const moveMouse = () => {
    console.log(mouseCursor);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleMouse);
  };
  const handleMouse = (event) => {
    const { pageX, pageY } = event;
    if (mouseCursor.current) {
      mouseCursor.current.style.top = pageY + "px";
      mouseCursor.current.style.left = pageX + "px";
    }
  };

  const handleHover = () => {
    const linkTags = document.links;
    console.log(linkTags);

    
    if (linkTags.length > 0) {
      linkTags.forEach((link) => {
        console.log("The linked list => ", link);
        link.addEventListener("mouseover", () => {
          mouseCursor.current.classList.add("mouse-hover");
          console.log("Hovered");
        });
        link.addEventListener("mouseleave", () => {
          mouseCursor.current.classList.remove("mouse-hover");
          console.log("Not hovered");
        });
      });
    }
  };


  useEffect(() => {
    moveMouse();
    // handleHover();
    return () => {};
  }, [mouseCursor]);

  return (
    <div ref={mouseCursor} className="mouse-cursor">
      <div className="cursor-point"></div>
    </div>
  );
}

export default MouseFollow;
