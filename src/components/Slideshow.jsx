import React from "react";
import { Zoom } from "react-slideshow-image";

const Slideshow = ({ images }) => {
    console.log("images: ", images);
  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  };
  return (
    <div style={{color: "white"}}>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img src={each.image} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
