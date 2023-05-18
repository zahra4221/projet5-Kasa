import React, { useState } from "react";
import leftArrowImage from "../assets/left_arrow.png";
import rightArrowImage from "../assets/right_arrow.png";
import "../sass/carrousel.scss";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider">
      <img
        src={leftArrowImage}
        alt="Left Arrow"
        className="slider-arrow left"
        onClick={previousSlide}
      />
      <img src={images[currentIndex]} alt="Slider" className="slider-image" />
      <img
        src={rightArrowImage}
        alt="Right Arrow"
        className="slider-arrow right"
        onClick={nextSlide}
      />
    </div>
  );
};

export default ImageSlider;
