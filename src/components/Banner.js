import React from "react";
import bannerImage from "../assets/home_banner.png";
import "../sass/banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-text">
        Chez vous,
        <br /> partout et ailleurs
      </div>
    </div>
  );
};

export default Banner;
